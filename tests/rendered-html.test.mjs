import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the cinema discovery page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>坐哪儿 \| 影院视野模拟器<\/title>/i);
  assert.match(html, /先选择城市/);
  assert.match(html, /银幕从大到小/);
  assert.match(html, /距离从近到远/);
  assert.match(html, /杜比影院/);
  assert.match(html, /进入影厅/);
  assert.match(html, /中国电影博物馆/);
  assert.match(html, /我的位置/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /Your site is taking shape/);
});

test("server-renders a selected auditorium simulator", async () => {
  const response = await render("/cinema/hall-0019");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /影院视野模拟器/);
  assert.match(html, /中国电影博物馆/);
  assert.match(html, /自由视角/);
  assert.match(html, /幕面光学模型/);
  assert.match(html, /IMAX Laser Countdown（在线）/);
  assert.match(html, /从这里看/);
  assert.match(html, /返回/);
  assert.doesNotMatch(html, />全厅</);
});

test("unknown auditoriums return not found", async () => {
  const response = await render("/cinema/not-a-real-hall");
  assert.equal(response.status, 404);
});
