# 坐哪儿

一个面向普通观众的影院发现与 3D 视野模拟器。用户先按城市、IMAX / 杜比制式、银幕面积和距离选择影院，再从具体座位的人眼视角体验银幕大小、视线角度与放映氛围。

当前版本接入公开可追溯的 IMAX / 杜比影院清单、银幕规格、坐标和登记容量。3D 座位几何为容量近似，不代表任何影院的官方测绘结果。

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

- `app/`：影院发现页、影院数据、影厅路由、3D 场景与交互
- `public/`：本地短视频、分享图与设计系统图标
- `PRD.md`：产品范围、数据模型与验收标准
- `.codex/environments/`：Codex 一键启动配置
- `scripts/`：本地启动脚本

## 验证命令

- `npm run dev`：本地开发
- `npm run build`：生产构建
- `npm run lint`：静态检查
- `npm test`：构建和渲染测试

## 影院数据扩展

应用清单由 `scripts/build_app_cinema_inventory.py` 从研究数据生成，并补充影院坐标。新增影厅时至少需要：影院名称、城市、地址、坐标、制式、放映技术、银幕宽高、比例与登记座位数。若要从容量近似升级为实测模拟，还需要银幕底边高度、厅深、每排座位数量、排距、排间高差、过道位置和不可售座位。
