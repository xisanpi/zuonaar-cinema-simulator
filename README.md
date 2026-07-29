# 坐哪儿

一个面向普通观众的 3D 影院视野模拟器。用户可以选择影院、影厅和具体座位，从真实比例的人眼视角体验屏幕大小、视线角度与放映氛围。

当前版本使用样例 IMAX GT 厅数据验证核心体验，不代表任何影院的官方测绘结果。

完整产品范围见 [PRD.md](./PRD.md)。

## Prerequisites

- Node.js `>=22.13.0`

## 快速开始

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

打开 `http://localhost:3000`。

也可以在 Codex 环境信息中点击「启动项目服务」。

## 项目结构

- `app/`：页面、3D 场景与交互
- `public/`：本地短视频与分享图
- `PRD.md`：产品范围、数据模型与验收标准
- `.codex/environments/`：Codex 一键启动配置
- `scripts/`：本地启动脚本

## 验证命令

- `npm run dev`：本地开发
- `npm run build`：生产构建
- `npm run lint`：静态检查
- `npm test`：构建和渲染测试

## 影院数据扩展

新增影厅时至少需要：银幕宽高、银幕底边高度、厅深、每排座位数量、排距、排间高差、过道位置和不可售座位。数据来源应在页面中明确标注。
