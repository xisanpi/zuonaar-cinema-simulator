# 坐哪儿

按城市浏览 IMAX、杜比影院与精选巨幕，并从真实座位排列或容量估算的座位视角体验银幕大小、视线角度和放映氛围。

- 在线体验：https://xisanpi.github.io/zuonaar-cinema-simulator/
- 产品范围：[PRD.md](./PRD.md)
- 第三方内容与数据说明：[THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)
- 数据来源与作者署名：[docs/数据来源与署名.md](./docs/数据来源与署名.md)

> 本项目是独立的非官方观影体验模拟器，与 IMAX Corporation、Dolby Laboratories 或相关影院品牌不存在隶属、赞助或认可关系。IMAX、Dolby 等名称及标识归各自权利人所有。

## 功能

- 按城市、制式和银幕面积筛选影院
- 优先进入同一影院的 IMAX 影厅
- 使用真实选座网格或容量估算生成座位排列
- 从指定座位的人眼视角渲染 3D 影厅、银幕和座椅
- 切换灯光与短片播放状态
- 适配桌面端与移动端

座间距、排距、高差、厅深和建筑结构仍可能是几何估算，并非影院官方测绘数据。

## 本地开发

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 验证

```bash
npm run lint
npm test
```

`npm test` 会执行生产构建和服务端页面渲染测试。

## 项目结构

- `app/`：影院发现页、数据模型、影厅路由和 Three.js 场景
- `public/`：本地演示媒体与分享图
- `scripts/`：影院清单和座位排列的数据生成脚本
- `tests/`：构建后的页面渲染测试
- `worker/`：Cloudflare Worker 入口

## 数据更新

应用清单由 `scripts/build_app_cinema_inventory.py` 生成。已抓取的座位网格由 `scripts/build_app_seat_layouts.mjs` 生成到 `app/seat-layouts.json`。

银幕规格、容量与放映系统优先采用 ArvinTing 的[《全球 IMAX 及特效影厅分布》](https://docs.qq.com/sheet/DQ3FEUUZJdklNSWJP)。本次结构化覆盖以 2026-08-01 版本为准，可运行下面的命令重新应用已核对记录：

```bash
node scripts/apply-arvinting-overrides.mjs
```

选座网格仅表示逐排座号、槽位和过道，不包含实时可售、已售或锁座状态。提交新数据前请记录来源、抓取时间和再分发依据。

## 部署

公开站点使用 Next.js 静态导出，并由 GitHub Actions 自动发布到 GitHub Pages：

```bash
npm run build:pages
```

静态文件生成到 `out/`。推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会自动完成构建与发布。

Cloudflare Worker 兼容构建仍可用于本地验证和备用托管：

```bash
npm run build
```

站点托管配置位于 `.openai/hosting.json`。它不包含访问令牌，但绑定当前 Sites 项目；复刻部署时应使用自己的托管项目配置。

## 许可

源代码使用 [MIT License](./LICENSE)。影院数据、座位排列、商标、第三方影片与其他外部内容不自动包含在 MIT 授权中，详见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

欢迎阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 后参与贡献。
