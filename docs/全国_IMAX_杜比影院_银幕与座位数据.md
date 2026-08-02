# 全国 IMAX 与杜比影院银幕、座位数据盘点

> 更新日期：2026-07-29（影院页面最近维护时间以各行所示为准）  
> 主口径：中国大陆；香港、澳门、台湾单列。`—` 表示公开资料未给出，不代表数值为 0。

## 结论速览

- 本次抓取公开影院详情页 **817** 条：IMAX **778** 条、Dolby Cinema（杜比影院）**39** 条。
- 中国大陆已解析详情页 **798** 条：IMAX **762** 条、杜比影院 **36** 条。
- 中国大陆银幕宽高已公开 **689** 条（86.3%）；座位数已公开 **797** 条（99.9%）；两项同时具备 **688** 条（86.2%）。
- 港澳台另列 **19** 条；本轮未发现以停业/结业为页面最新状态的条目。
- **重要：本表“座位”字段仍是座位总数，不能据此反推行列。** 首批 300 厅的逐排排列已另行采集到[座位排列附录](./全国_IMAX_杜比影院_座位排列.md)：大陆杜比影院 36 厅、IMAX 238 厅、精选 CINITY / 中国巨幕 / LED 26 厅；附录保留原始排号、座号、网格槽位与来源场次。

## 口径与局限

1. **IMAX 数量基准**：IMAX China《2025 年年报》披露，截至 2025-12-31，大中华区共有 810 个在营 IMAX 影院系统，其中中国大陆商业影院 781 个、香港 5 个、台湾 10 个、澳门 1 个，另有机构型 IMAX 13 个。该数字是系统总量基准，但年报不逐店公开银幕尺寸和座位数。
2. **影院级数据底座**：本表使用“影厅指南”公开 sitemap 及逐厅页面。该站注明数据来自网络收集、影迷贡献、@ArvinTingcn 的全球/上海 IMAX 与特效影厅表、LF Examiner 等。每一行影院名称均链接回详情页。
3. **完整性**：影院级公开详情页数量与 IMAX 官方系统总量不完全一致，因此本文件是“可逐厅核验的公开数据盘点”，不是 IMAX 或杜比出具的官方资产台账。未收录项、改名、迁址、临时停业和近期新开店仍可能存在。
4. **杜比口径**：仅统计 **Dolby Cinema / 杜比影院**，不把普通“杜比全景声厅（Dolby Atmos）”或仅配备杜比音频的影厅计入。
5. **银幕面积与口径冲突**：面积由主数据源的宽×高计算并四舍五入到 0.01㎡；弧形幕、球幕的实际表面积可能与矩形投影面积不同。部分影院的“宣传名义尺寸”和“实测/有效画面尺寸”并不一致，例如贵阳越界影城在主数据源中为 26.806×15.989m，而 2026 年人民网报道为 32.16×18.17m。本表为保持横向一致，逐厅表和排名统一保留主数据源字段，不擅自混用另一口径。
6. **运营状态**：默认标记为“在册”，仅对页面明确出现“结业、停业、关闭、撤幕、退役”等词的条目自动提示复核；订票前仍应查看影院官方排片。
7. **系统缩写**：GT Laser 为 IMAX 双机激光；CoLA 为商业激光；XT 为单机激光；Digital Xenon 为数字氙灯。不同影院页面沿用的命名可能略有差异。

## 座位排列数据源审计

> 结论：截至 2026-07-29，公开的 IMAX / 杜比影院目录可以支撑影院清单、银幕尺寸和座位总数盘点，但不能支撑全国逐厅座位排列盘点。本文不使用总座位数估算行列。

| 数据源 | 可取得信息 | 是否提供逐座排列 | 核验结果 |
|---|---|---:|---|
| [IMAX 中国官网](https://www.imax.cn/) | IMAX 影院设计理念、影院几何学、观影位置说明 | 否 | 仅说明 IMAX 影院按标准规划、设计和定位，没有逐厅排数、座号或座位图 |
| [IMAX 全球影院单厅页](https://www.imax.com/theatre/chongqing-qibo-yage-imax) | 影院名称、地址、排片、`Stadium Seating` 等设施标签 | 否 | `Stadium Seating` 只是阶梯式座席标签，不是具体座位排列 |
| [全球 IMAX 及特效影厅分布表](https://docs.qq.com/sheet/DQ3FEUUZJdklNSWJP?tab=BB08J2) | 影城、系统、银幕尺寸、座位总数、备注 | 否 | 表头只有“座位数（个）”，没有排数、每排座号或坐标 |
| 影院级主数据源“影厅指南” | 影院、制式、银幕尺寸、座位总数、位置、维护时间 | 否 | 单厅页只公开座位总数 |
| 猫眼等国内选座页 | 影院匹配、当前场次、影厅名称、逐座网格 | 登录后可见 | 本轮在用户登录后只读采集 300 厅：大陆杜比影院 36/36 厅、IMAX 238 厅、精选巨幕 26 厅；未点击或锁定座位 |
| [电影院票务管理系统数据接口规范](https://www.chinafilm.gov.cn/xxgk/kjybz/202508/P020250126539559785620.pdf) | `x/y` 坐标、`rowId/columnId`、普通/无障碍/震动/双人座类型、状态 | 是 | 这是座位排列的正确数据结构，但数据由影院票务系统向授权机构上报，并非公开查询接口 |

### 排列数据字段

本轮排列附录按以下字段记录：

- 影厅名称、排列版本、生效/抓取时间、来源；
- 排数、每排座号范围、每排有效座位数；
- 每排连续座位块与过道/缺口位置；
- 普通座、无障碍位、震动座、双人座等座位类型（页面明确提供时）；
- 逐座网格槽位，以及 `x/y` 坐标（来源明确提供时）；
- 排列合计与本表座位总数的差异及复核状态。

附录使用紧凑表示法：`R01 座1–18@槽9–26 [18座]`。同一排出现多个座位段时以 `；` 分隔；段间只表示网格缺口，不擅自认定为物理过道。

## 主数据源记录值 Top 10（中国大陆）

> 仅在公开了对应字段的条目中排序；IMAX 榜单同时包含商业影院与科技馆等机构型影院。该榜单用于快速查找大尺寸/大容量条目，不等同于按统一官方测量口径认定的全国排名。

### IMAX：按银幕面积

| 排名 | 地区 | 影院 / 影厅 | 银幕（宽×高，m） | 面积（㎡） | 座位 |
|---:|---|---|---:|---:|---:|
| 1 | 山东·济南 | [山东省科技馆（新馆）](https://cinema.gaoliang.me/cinema/%E5%B1%B1%E4%B8%9C%E7%9C%81%E7%A7%91%E6%8A%80%E9%A6%86%EF%BC%88%E6%96%B0%E9%A6%86%EF%BC%89_IMAX) | 29 × 21 | 609 | 575 |
| 2 | 北京·北京 | [北京中国电影博物馆](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E5%8D%9A%E7%89%A9%E9%A6%86_IMAX) | 30.17 × 19.507 | 588.53 | 340 |
| 3 | 黑龙江·哈尔滨 | [哈尔滨万达影城（哈东万达IMAX GT双激光店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%93%88%E4%B8%9C%E4%B8%87%E8%BE%BEIMAX%20GT%E5%8F%8C%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | 27.975 × 21.03 | 588.31 | 539 |
| 4 | 辽宁·沈阳 | [沈阳万达影城（辽宁省科技馆—万达影城IMAX GT双激光）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%BE%BD%E5%AE%81%E7%9C%81%E7%A7%91%E6%8A%80%E9%A6%86%E2%80%94%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8EIMAX%20GT%E5%8F%8C%E6%BF%80%E5%85%89%EF%BC%89_IMAX) | 28.261 × 20.792 | 587.6 | 596 |
| 5 | 广东·东莞 | [东莞万达影城（华南MALL—IMAXGT激光店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E5%8D%97MALL%E2%80%94IMAXGT%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | 27.768 × 20.295 | 563.55 | 503 |
| 6 | 贵州·贵阳 | [贵阳越界影城（未来方舟店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E8%B6%8A%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9C%AA%E6%9D%A5%E6%96%B9%E8%88%9F%E5%BA%97%EF%BC%89_IMAX) | 26.806 × 15.989 | 428.6 | 714 |
| 7 | 浙江·金华 | [义乌万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%89%E4%B9%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | 26.56 × 14.41 | 382.73 | 377 |
| 8 | 北京·北京 | [北京环球城市大道电影院](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E7%8E%AF%E7%90%83%E5%9F%8E%E5%B8%82%E5%A4%A7%E9%81%93%E7%94%B5%E5%BD%B1%E9%99%A2_IMAX) | 25.8 × 14.76 | 380.81 | 473 |
| 9 | 福建·厦门 | [厦门寰映影城（海上世界IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E4%B8%8A%E4%B8%96%E7%95%8CIMAX%E5%BA%97%EF%BC%89_IMAX) | 26.51 × 14.2 | 376.44 | 383 |
| 10 | 山西·太原 | [太原万达影城（龙湖万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E5%8E%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | 26.51 × 14.06 | 372.73 | 384 |

### IMAX：按座位数

| 排名 | 地区 | 影院 / 影厅 | 银幕（宽×高，m） | 面积（㎡） | 座位 |
|---:|---|---|---:|---:|---:|
| 1 | 贵州·贵阳 | [贵阳越界影城（未来方舟店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E8%B6%8A%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9C%AA%E6%9D%A5%E6%96%B9%E8%88%9F%E5%BA%97%EF%BC%89_IMAX) | 26.806 × 15.989 | 428.6 | 714 |
| 2 | 辽宁·沈阳 | [沈阳万达影城（辽宁省科技馆—万达影城IMAX GT双激光）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%BE%BD%E5%AE%81%E7%9C%81%E7%A7%91%E6%8A%80%E9%A6%86%E2%80%94%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8EIMAX%20GT%E5%8F%8C%E6%BF%80%E5%85%89%EF%BC%89_IMAX) | 28.261 × 20.792 | 587.6 | 596 |
| 3 | 广东·深圳 | [深圳CINESKY新天影院IMAX（壹方天地A区）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CINESKY%E6%96%B0%E5%A4%A9%E5%BD%B1%E9%99%A2IMAX%EF%BC%88%E5%A3%B9%E6%96%B9%E5%A4%A9%E5%9C%B0A%E5%8C%BA%EF%BC%89_IMAX) | 22.478 × 11.677 | 262.48 | 583 |
| 4 | 山东·济南 | [山东省科技馆（新馆）](https://cinema.gaoliang.me/cinema/%E5%B1%B1%E4%B8%9C%E7%9C%81%E7%A7%91%E6%8A%80%E9%A6%86%EF%BC%88%E6%96%B0%E9%A6%86%EF%BC%89_IMAX) | 29 × 21 | 609 | 575 |
| 5 | 吉林·长春 | [长春万达影城（欧亚大卖场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AC%A7%E4%BA%9A%E5%A4%A7%E5%8D%96%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | 21.47 × 13.031 | 279.78 | 556 |
| 6 | 广东·惠州 | [惠州佳兆业国际影城](https://cinema.gaoliang.me/cinema/%E6%83%A0%E5%B7%9E%E4%BD%B3%E5%85%86%E4%B8%9A%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E_IMAX) | 21.259 × 11.433 | 243.05 | 555 |
| 7 | 江苏·常州 | [常州SFC上影影城（环球港IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9ESFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E7%90%83%E6%B8%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | 24.392 × 12.817 | 312.63 | 547 |
| 8 | 黑龙江·哈尔滨 | [哈尔滨万达影城（哈东万达IMAX GT双激光店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%93%88%E4%B8%9C%E4%B8%87%E8%BE%BEIMAX%20GT%E5%8F%8C%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | 27.975 × 21.03 | 588.31 | 539 |
| 9 | 吉林·长春 | [长春星轶IMAX影城（绿园吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%BF%E5%9B%AD%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | 25.98 × 13.85 | 359.82 | 530 |
| 10 | 重庆·重庆 | [重庆保利万和影城（石桥广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%BF%9D%E5%88%A9%E4%B8%87%E5%92%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9F%B3%E6%A1%A5%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | 23.85 × 12.44 | 296.69 | 528 |

### 杜比影院：按银幕面积

| 排名 | 地区 | 影院 / 影厅 | 银幕（宽×高，m） | 面积（㎡） | 座位 |
|---:|---|---|---:|---:|---:|
| 1 | 山东·济南 | [济南万达影城（世茂广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%96%E8%8C%82%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 24 × 12.972 | 311.33 | 514 |
| 2 | 北京·北京 | [北京万达影城（丰台万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B0%E5%8F%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 21.91 × 11.81 | 258.76 | 337 |
| 3 | 北京·北京 | [北京耀莱成龙影城（五棵松店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E8%80%80%E8%8E%B1%E6%88%90%E9%BE%99%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E6%A3%B5%E6%9D%BE%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 21.32 × 10.8 | 230.26 | 578 |
| 4 | 福建·厦门 | [厦门万象影城（万象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 20.41 × 11 | 224.51 | 242 |
| 5 | 陕西·西安 | [西安万达影城（高新万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 20.24 × 10.94 | 221.43 | 272 |
| 6 | 北京·北京 | [北京万象影城（丽泽天街杜比影院店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%BD%E6%B3%BD%E5%A4%A9%E8%A1%97%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 19.54 × 10.9 | 212.99 | 360 |
| 7 | 浙江·杭州 | [杭州万达影城（余杭万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BD%99%E6%9D%AD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 19.447 × 10.512 | 204.43 | 391 |
| 8 | 湖北·武汉 | [武汉万象影城（万象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 18.98 × 10.258 | 194.7 | 371 |
| 9 | 上海·上海 | [上海影城SHO](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%BD%B1%E5%9F%8ESHO_Dolby%20Cinema) | 21.3 × 8.9 | 189.57 | 1008 |
| 10 | 广东·深圳 | [深圳万象影城（深圳湾万象城旗舰店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B7%B1%E5%9C%B3%E6%B9%BE%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 18.01 × 9.71 | 174.88 | 272 |

### 杜比影院：按座位数

| 排名 | 地区 | 影院 / 影厅 | 银幕（宽×高，m） | 面积（㎡） | 座位 |
|---:|---|---|---:|---:|---:|
| 1 | 上海·上海 | [上海影城SHO](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%BD%B1%E5%9F%8ESHO_Dolby%20Cinema) | 21.3 × 8.9 | 189.57 | 1008 |
| 2 | 北京·北京 | [北京耀莱成龙影城（五棵松店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E8%80%80%E8%8E%B1%E6%88%90%E9%BE%99%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E6%A3%B5%E6%9D%BE%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 21.32 × 10.8 | 230.26 | 578 |
| 3 | 山东·济南 | [济南万达影城（世茂广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%96%E8%8C%82%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 24 × 12.972 | 311.33 | 514 |
| 4 | 广东·东莞 | [东莞万达影城（南城蜂汇店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E5%9F%8E%E8%9C%82%E6%B1%87%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 17.152 × 9 | 154.37 | 440 |
| 5 | 浙江·杭州 | [杭州万达影城（余杭万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BD%99%E6%9D%AD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 19.447 × 10.512 | 204.43 | 391 |
| 6 | 湖北·武汉 | [武汉万象影城（万象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 18.98 × 10.258 | 194.7 | 371 |
| 7 | 北京·北京 | [北京万象影城（丽泽天街杜比影院店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%BD%E6%B3%BD%E5%A4%A9%E8%A1%97%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 19.54 × 10.9 | 212.99 | 360 |
| 8 | 上海·上海 | [上海万达影城（五角场万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E8%A7%92%E5%9C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 18.6 × 8.8 | 163.68 | 349 |
| 9 | 重庆·重庆 | [重庆百丽宫影城（DolbyCinema光环店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88DolbyCinema%E5%85%89%E7%8E%AF%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 17.105 × 9.246 | 158.15 | 346 |
| 10 | 北京·北京 | [北京万达影城（丰台万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B0%E5%8F%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | 21.91 × 11.81 | 258.76 | 337 |

## 中国大陆分省汇总

| 省级地区 | IMAX | 杜比影院 | 合计 | 银幕尺寸已知 | 座位数已知 |
|---|---:|---:|---:|---:|---:|
| [北京](#北京) | 30 | 7 | 37 | 37 | 37 |
| [上海](#上海) | 43 | 10 | 53 | 53 | 53 |
| [天津](#天津) | 9 | 0 | 9 | 9 | 9 |
| [重庆](#重庆) | 19 | 1 | 20 | 17 | 20 |
| [河北](#河北) | 13 | 0 | 13 | 7 | 13 |
| [山西](#山西) | 11 | 0 | 11 | 7 | 11 |
| [内蒙古](#内蒙古) | 10 | 1 | 11 | 6 | 11 |
| [辽宁](#辽宁) | 26 | 0 | 26 | 21 | 26 |
| [吉林](#吉林) | 15 | 0 | 15 | 10 | 15 |
| [黑龙江](#黑龙江) | 18 | 0 | 18 | 12 | 18 |
| [江苏](#江苏) | 91 | 1 | 92 | 82 | 92 |
| [浙江](#浙江) | 59 | 2 | 61 | 48 | 61 |
| [安徽](#安徽) | 30 | 1 | 31 | 26 | 31 |
| [福建](#福建) | 30 | 3 | 33 | 32 | 33 |
| [江西](#江西) | 17 | 0 | 17 | 14 | 17 |
| [山东](#山东) | 36 | 2 | 38 | 26 | 38 |
| [河南](#河南) | 19 | 0 | 19 | 19 | 19 |
| [湖北](#湖北) | 31 | 1 | 32 | 29 | 31 |
| [湖南](#湖南) | 25 | 0 | 25 | 20 | 25 |
| [广东](#广东) | 101 | 4 | 105 | 102 | 105 |
| [广西](#广西) | 17 | 1 | 18 | 16 | 18 |
| [海南](#海南) | 8 | 0 | 8 | 8 | 8 |
| [四川](#四川) | 49 | 1 | 50 | 44 | 50 |
| [贵州](#贵州) | 9 | 0 | 9 | 8 | 9 |
| [云南](#云南) | 11 | 0 | 11 | 11 | 11 |
| [西藏](#西藏) | 2 | 0 | 2 | 2 | 2 |
| [陕西](#陕西) | 16 | 1 | 17 | 15 | 17 |
| [甘肃](#甘肃) | 7 | 0 | 7 | 5 | 7 |
| [青海](#青海) | 2 | 0 | 2 | 0 | 2 |
| [宁夏](#宁夏) | 4 | 0 | 4 | 1 | 4 |
| [新疆](#新疆) | 4 | 0 | 4 | 2 | 4 |

## 中国大陆逐厅数据

### 北京

共 37 条（IMAX 30；杜比影院 7）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 北京 | [北京CGV影城（清河店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%ACCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B8%85%E6%B2%B3%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 16.48 × 8.31 | 136.95 | 1.98:1 | 221 | 2026-07-28 |
| 北京 | [北京SFC上影影城（大兴龙湖店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%ACSFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E5%85%B4%E9%BE%99%E6%B9%96%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.75 × 12.21 | 265.57 | 1.78:1 | 392 | 2026-07-28 |
| 北京 | [北京万达影城（CBD万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88CBD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 16.86 × 8.39 | 141.46 | 2.01:1 | 328 | 2026-07-28 |
| 北京 | [北京万达影城（东坝万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E5%9D%9D%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.22 × 12.05 | 279.8 | 1.93:1 | 319 | 2026-07-28 |
| 北京 | [北京万达影城（丰台西铁营万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B0%E5%8F%B0%E8%A5%BF%E9%93%81%E8%90%A5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.39 × 11.25 | 240.64 | 1.90:1 | 323 | 2026-07-28 |
| 北京 | [北京万达影城（天通苑龙德广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E9%80%9A%E8%8B%91%E9%BE%99%E5%BE%B7%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.186 × 8.145 | 131.83 | 1.99:1 | 267 | 2026-07-28 |
| 北京 | [北京万达影城（怀柔万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%80%80%E6%9F%94%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.47 × 11.2 | 240.46 | 1.92:1 | 339 | 2026-07-28 |
| 北京 | [北京万达影城（房山首创奥莱店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%88%BF%E5%B1%B1%E9%A6%96%E5%88%9B%E5%A5%A5%E8%8E%B1%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.85 × 11.76 | 268.72 | 1.94:1 | 326 | 2026-07-28 |
| 北京 | [北京万达影城（槐房万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A7%90%E6%88%BF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.43 × 10.83 | 221.26 | 1.89:1 | 395 | 2026-07-28 |
| 北京 | [北京万达影城（石景山万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9F%B3%E6%99%AF%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.22 × 12.68 | 294.43 | 1.83:1 | 394 | 2026-07-28 |
| 北京 | [北京万达影城（通州万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%80%9A%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.939 × 11.024 | 230.83 | 1.90:1 | 424 | 2026-07-28 |
| 北京 | [北京中国电影博物馆](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E5%8D%9A%E7%89%A9%E9%A6%86_IMAX) | IMAX GT Laser | 30.17 × 19.507 | 588.53 | 1.55:1 | 340 | 2026-07-28 |
| 北京 | [北京博纳国际影城（亦庄IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%A6%E5%BA%84IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.54 × 13.25 | 325.15 | 1.85:1 | 368 | 2026-07-28 |
| 北京 | [北京博纳国际影城（大郊亭店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E9%83%8A%E4%BA%AD%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.92 × 10.9 | 228.03 | 1.92:1 | 321 | 2026-07-28 |
| 北京 | [北京博纳国际影城（密云IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AF%86%E4%BA%91IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.164 × 10.523 | 201.66 | 1.82:1 | 294 | 2026-07-28 |
| 北京 | [北京博纳国际影城（悠唐IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%82%A0%E5%94%90IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.86 × 8.22 | 130.37 | 1.93:1 | 232 | 2026-07-28 |
| 北京 | [北京博纳国际影城（朝阳北苑店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9C%9D%E9%98%B3%E5%8C%97%E8%8B%91%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.12 × 10.55 | 212.27 | 1.91:1 | 266 | 2026-07-28 |
| 北京 | [北京博纳国际影城（门头沟IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%97%A8%E5%A4%B4%E6%B2%9FIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.219 × 12.405 | 238.41 | 1.55:1 | 283 | 2026-07-28 |
| 北京 | [北京卢米埃影城（长楹天街IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%95%BF%E6%A5%B9%E5%A4%A9%E8%A1%97IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.943 × 12.926 | 309.49 | 1.85:1 | 410 | 2026-07-28 |
| 北京 | [北京完美世界影城（中关村IMAX+CINITY店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%AE%8C%E7%BE%8E%E4%B8%96%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%85%B3%E6%9D%91IMAX%2BCINITY%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.418 × 13.277 | 310.92 | 1.76:1 | 396 | 2026-07-28 |
| 北京 | [北京寰映影城（昌平合生汇店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%98%8C%E5%B9%B3%E5%90%88%E7%94%9F%E6%B1%87%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 15 × 8.15 | 122.25 | 1.84:1 | 255 | 2026-07-28 |
| 北京 | [北京恒业国际影城（六里桥店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E6%81%92%E4%B8%9A%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%AD%E9%87%8C%E6%A1%A5%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.37 × 8.6 | 140.78 | 1.90:1 | 262 | 2026-07-28 |
| 北京 | [北京沃美影城（熙悦天街IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E6%B2%83%E7%BE%8E%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%86%99%E6%82%A6%E5%A4%A9%E8%A1%97IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.06 × 11.35 | 239.03 | 1.86:1 | 380 | 2026-07-28 |
| 北京 | [北京环球城市大道电影院](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E7%8E%AF%E7%90%83%E5%9F%8E%E5%B8%82%E5%A4%A7%E9%81%93%E7%94%B5%E5%BD%B1%E9%99%A2_IMAX) | IMAX CoLA | 25.8 × 14.76 | 380.81 | 1.75:1 | 473 | 2026-07-28 |
| 北京 | [北京英皇电影城（三里屯太古里店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%89%E9%87%8C%E5%B1%AF%E5%A4%AA%E5%8F%A4%E9%87%8C%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 14.938 × 7.56 | 112.93 | 1.98:1 | 304 | 2026-07-28 |
| 北京 | [北京英皇电影城（英皇中心店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8B%B1%E7%9A%87%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.19 × 11.76 | 260.95 | 1.89:1 | 324 | 2026-07-28 |
| 北京 | [北京速铂影城（路劲IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E9%80%9F%E9%93%82%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%B7%AF%E5%8A%B2IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.6 × 11.25 | 243 | 1.92:1 | 274 | 2026-07-28 |
| 北京 | [北京金泉港国际影城](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E9%87%91%E6%B3%89%E6%B8%AF%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 23.66 × 12.55 | 296.93 | 1.89:1 | 428 | 2026-07-28 |
| 北京 | [北京金逸影城（朝阳大悦城店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9C%9D%E9%98%B3%E5%A4%A7%E6%82%A6%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.45 × 9.52 | 175.64 | 1.94:1 | 298 | 2026-07-28 |
| 北京 | [北京金逸影城（荟聚IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8D%9F%E8%81%9AIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.3 × 12.22 | 296.95 | 1.99:1 | 435 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 北京 | [北京万象影城（丽泽天街杜比影院店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%BD%E6%B3%BD%E5%A4%A9%E8%A1%97%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 19.54 × 10.9 | 212.99 | 1.79:1 | 360 | 2026-07-28 |
| 北京 | [北京万达影城（丰台万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B0%E5%8F%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 21.91 × 11.81 | 258.76 | 1.86:1 | 337 | 2026-07-28 |
| 北京 | [北京万达影城（通州万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%80%9A%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 11.941 × 6.219 | 74.26 | 1.92:1 | 199 | 2026-07-28 |
| 北京 | [北京寰映影城（合生汇店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%90%88%E7%94%9F%E6%B1%87%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 14.61 × 7.87 | 114.98 | 1.86:1 | 236 | 2026-07-28 |
| 北京 | [北京百丽宫影城（Dolby Cinema国贸店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88Dolby%20Cinema%E5%9B%BD%E8%B4%B8%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 11.686 × 5.362 | 62.66 | 2.18:1 | 204 | 2026-07-28 |
| 北京 | [北京耀莱成龙影城（五棵松店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E8%80%80%E8%8E%B1%E6%88%90%E9%BE%99%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E6%A3%B5%E6%9D%BE%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 21.32 × 10.8 | 230.26 | 1.97:1 | 578 | 2026-07-28 |
| 北京 | [北京耀莱成龙影城（房山天街店）](https://cinema.gaoliang.me/cinema/%E5%8C%97%E4%BA%AC%E8%80%80%E8%8E%B1%E6%88%90%E9%BE%99%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%88%BF%E5%B1%B1%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 12.857 × 7.227 | 92.92 | 1.78:1 | 247 | 2026-07-28 |

### 上海

共 53 条（IMAX 43；杜比影院 10）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 上海 | [上海CGV影城（七宝店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%83%E5%AE%9D%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.32 × 10.29 | 198.8 | 1.88:1 | 214 | 2026-07-28 |
| 上海 | [上海CGV影城（天空万科广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E7%A9%BA%E4%B8%87%E7%A7%91%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.77 × 9.8 | 183.95 | 1.92:1 | 285 | 2026-07-28 |
| 上海 | [上海CGV影城（白玉兰广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%99%BD%E7%8E%89%E5%85%B0%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.78 × 12.56 | 298.68 | 1.89:1 | 222 | 2026-07-28 |
| 上海 | [上海MOViE MOViE影城（前滩太古里店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7MOViE%20MOViE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%89%8D%E6%BB%A9%E5%A4%AA%E5%8F%A4%E9%87%8C%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.41 × 12.59 | 307.32 | 1.94:1 | 301 | 2026-07-28 |
| 上海 | [上海SFC上影影城（天山缤谷IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7SFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E5%B1%B1%E7%BC%A4%E8%B0%B7IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.46 × 9.81 | 181.09 | 1.88:1 | 192 | 2026-07-28 |
| 上海 | [上海SFC上影影城（港汇永华IMAX激光店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7SFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B8%AF%E6%B1%87%E6%B0%B8%E5%8D%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 15.24 × 7.85 | 119.63 | 1.94:1 | 298 | 2026-07-28 |
| 上海 | [上海SFC上影影城（绿地缤纷城IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7SFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%BF%E5%9C%B0%E7%BC%A4%E7%BA%B7%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.722 × 10.783 | 201.88 | 1.74:1 | 224 | 2026-07-28 |
| 上海 | [上海SFC上影影城（金桥太茂IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7SFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E6%A1%A5%E5%A4%AA%E8%8C%82IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.68 × 12.479 | 270.54 | 1.74:1 | 330 | 2026-07-28 |
| 上海 | [上海SFC上影百联影城（八佰伴IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7SFC%E4%B8%8A%E5%BD%B1%E7%99%BE%E8%81%94%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%AB%E4%BD%B0%E4%BC%B4IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 14.27 × 7.29 | 104.03 | 1.96:1 | 305 | 2026-07-28 |
| 上海 | [上海SFC上影百联影城（川沙IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7SFC%E4%B8%8A%E5%BD%B1%E7%99%BE%E8%81%94%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B7%9D%E6%B2%99IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.55 × 11.38 | 222.48 | 1.72:1 | 180 | 2026-07-28 |
| 上海 | [上海UME影城（虹桥天地店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7UME%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%99%B9%E6%A1%A5%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.8 × 11.8 | 257.24 | 1.85:1 | 207 | 2026-07-28 |
| 上海 | [上海万达影城（临港万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B4%E6%B8%AF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16.49 × 8.52 | 140.49 | 1.94:1 | 220 | 2026-07-28 |
| 上海 | [上海万达影城（五角场万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E8%A7%92%E5%9C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.96 × 11.5 | 264.04 | 2.00:1 | 347 | 2026-07-28 |
| 上海 | [上海万达影城（周浦万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%91%A8%E6%B5%A6%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.75 × 10.8 | 224.1 | 1.92:1 | 257 | 2026-07-28 |
| 上海 | [上海万达影城（宝乐汇店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E4%B9%90%E6%B1%87%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.7 × 10.06 | 188.12 | 1.86:1 | 198 | 2026-07-28 |
| 上海 | [上海万达影城（宝山万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.05 × 10.48 | 210.12 | 1.91:1 | 229 | 2026-07-28 |
| 上海 | [上海万达影城（崇明万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B4%87%E6%98%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.13 × 11.79 | 260.91 | 1.88:1 | 356 | 2026-07-28 |
| 上海 | [上海万达影城（松江万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9D%BE%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.17 × 12.1 | 268.26 | 1.83:1 | 395 | 2026-07-28 |
| 上海 | [上海万达影城（江桥万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E6%A1%A5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.21 × 11.957 | 277.52 | 1.94:1 | 378 | 2026-07-28 |
| 上海 | [上海万达影城（浦江万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%A6%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.76 × 10.78 | 223.79 | 1.93:1 | 271 | 2026-07-28 |
| 上海 | [上海万达影城（金山万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.16 × 12.1 | 280.24 | 1.91:1 | 375 | 2026-07-28 |
| 上海 | [上海万达影城（青浦万达茂店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E6%B5%A6%E4%B8%87%E8%BE%BE%E8%8C%82%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.633 × 12.605 | 297.89 | 1.87:1 | 333 | 2026-08-02 |
| 上海 | [上海万达影城（颛桥龙盛广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A2%9B%E6%A1%A5%E9%BE%99%E7%9B%9B%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.8 × 10.9 | 215.82 | 1.82:1 | 372 | 2026-07-28 |
| 上海 | [上海万达影城（马桥万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A9%AC%E6%A1%A5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.89 × 11.24 | 234.8 | 1.86:1 | 268 | 2026-07-28 |
| 上海 | [上海博悦汇影城（外滩IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%8D%9A%E6%82%A6%E6%B1%87%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%96%E6%BB%A9IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 14.8 × 8.4 | 124.32 | 1.76:1 | 224 | 2026-07-28 |
| 上海 | [上海博悦汇影城（环宇城IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%8D%9A%E6%82%A6%E6%B1%87%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E5%AE%87%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16.549 × 8.843 | 146.34 | 1.87:1 | 236 | 2026-07-28 |
| 上海 | [上海寰映影城（前湾MEGA店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%89%8D%E6%B9%BEMEGA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.111 × 10.057 | 182.14 | 1.80:1 | 208 | 2026-07-28 |
| 上海 | [上海寰映影城（大宁久光店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E5%AE%81%E4%B9%85%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.03 × 9.34 | 168.4 | 1.93:1 | 186 | 2026-07-28 |
| 上海 | [上海寰映影城（大融城店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E8%9E%8D%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 25.88 × 13.46 | 348.34 | 1.92:1 | 329 | 2026-07-28 |
| 上海 | [上海寰映影城（新嘉中心店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E5%98%89%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16 × 7 | 112 | 2.29:1 | 172 | 2026-07-28 |
| 上海 | [上海寰映影城（瑞虹天地太阳宫店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%91%9E%E8%99%B9%E5%A4%A9%E5%9C%B0%E5%A4%AA%E9%98%B3%E5%AE%AB%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.86 × 10.19 | 202.37 | 1.95:1 | 214 | 2026-07-28 |
| 上海 | [上海寰映影城（荟聚店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8D%9F%E8%81%9A%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.12 × 10.55 | 212.27 | 1.91:1 | 279 | 2026-07-28 |
| 上海 | [上海寰映影城（陆悦天地店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%99%86%E6%82%A6%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16.923 × 8.889 | 150.43 | 1.90:1 | 177 | 2026-07-28 |
| 上海 | [上海幸福蓝海国际影城（招商花园城IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%8B%9B%E5%95%86%E8%8A%B1%E5%9B%AD%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.68 × 11.4 | 247.15 | 1.90:1 | 274 | 2026-07-28 |
| 上海 | [上海幸福蓝海国际影城（龙湖宝山天街IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E5%AE%9D%E5%B1%B1%E5%A4%A9%E8%A1%97IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.44 × 13.23 | 336.57 | 1.92:1 | 288 | 2026-07-28 |
| 上海 | [上海星轶IMAX影城（九亭U天地旗舰店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%9D%E4%BA%ADU%E5%A4%A9%E5%9C%B0%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.57 × 11.39 | 222.9 | 1.72:1 | 263 | 2026-07-28 |
| 上海 | [上海横店电影城（奉贤店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%89%E8%B4%A4%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.1 × 10.8 | 206.28 | 1.77:1 | 273 | 2026-07-28 |
| 上海 | [上海正大乐影城（正大广场IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E6%AD%A3%E5%A4%A7%E4%B9%90%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AD%A3%E5%A4%A7%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.38 × 13.6 | 331.57 | 1.79:1 | 426 | 2026-07-28 |
| 上海 | [上海沃美影城（宝山经纬汇激光IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E6%B2%83%E7%BE%8E%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E5%B1%B1%E7%BB%8F%E7%BA%AC%E6%B1%87%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.835 × 10.453 | 207.34 | 1.90:1 | 277 | 2026-07-28 |
| 上海 | [上海百丽宫影城（LCM置汇旭辉广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88LCM%E7%BD%AE%E6%B1%87%E6%97%AD%E8%BE%89%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.58 × 10.98 | 225.97 | 1.87:1 | 308 | 2026-07-28 |
| 上海 | [上海百丽宫影城（博荟广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%9A%E8%8D%9F%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.49 × 10.11 | 197.04 | 1.93:1 | 202 | 2026-07-28 |
| 上海 | [上海百丽宫影城（环贸iapm店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E8%B4%B8iapm%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 16.1 × 9.52 | 153.27 | 1.69:1 | 217 | 2026-07-28 |
| 上海 | [上海金逸影城（龙之梦IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E4%B9%8B%E6%A2%A6IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 17.82 × 8.44 | 150.4 | 2.11:1 | 246 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 上海 | [上海CGV影城（南翔印象城店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E7%BF%94%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 15.857 × 9.629 | 152.69 | 1.65:1 | 269 | 2026-07-28 |
| 上海 | [上海CGV影城（复地活力店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%8D%E5%9C%B0%E6%B4%BB%E5%8A%9B%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 16.649 × 8.558 | 142.48 | 1.95:1 | 241 | 2026-07-28 |
| 上海 | [上海CGV影城（晶耀前滩店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%99%B6%E8%80%80%E5%89%8D%E6%BB%A9%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 10.65 × 6.1 | 64.97 | 1.75:1 | 228 | 2026-07-28 |
| 上海 | [上海CGV影城（松江印象城店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9D%BE%E6%B1%9F%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 13.05 × 7.054 | 92.05 | 1.85:1 | 265 | 2026-07-28 |
| 上海 | [上海万达影城（中信泰富万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E4%BF%A1%E6%B3%B0%E5%AF%8C%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 16.1 × 7.5 | 120.75 | 2.15:1 | 237 | 2026-07-28 |
| 上海 | [上海万达影城（五角场万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E8%A7%92%E5%9C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 18.6 × 8.8 | 163.68 | 2.11:1 | 349 | 2026-07-28 |
| 上海 | [上海万达影城（闵行颛桥万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%97%B5%E8%A1%8C%E9%A2%9B%E6%A1%A5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 18.8 × 9.2 | 172.96 | 2.04:1 | 293 | 2026-07-28 |
| 上海 | [上海寰映影城（大融城店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E8%9E%8D%E5%9F%8E%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 15.78 × 6.71 | 105.88 | 2.35:1 | 251 | 2026-07-28 |
| 上海 | [上海影城SHO](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E5%BD%B1%E5%9F%8ESHO_Dolby%20Cinema) | Dolby Vision | 21.3 × 8.9 | 189.57 | 2.39:1 | 1008 | 2026-07-28 |
| 上海 | [上海百丽宫影城（北外滩来福士店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E6%B5%B7%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E5%A4%96%E6%BB%A9%E6%9D%A5%E7%A6%8F%E5%A3%AB%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 11.298 × 6.124 | 69.19 | 1.84:1 | 184 | 2026-07-28 |

### 天津

共 9 条（IMAX 9；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 天津 | [天津CGV星星影城（滨海店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5CGV%E6%98%9F%E6%98%9F%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BB%A8%E6%B5%B7%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.45 × 8.68 | 142.79 | 1.90:1 | 332 | 2026-07-28 |
| 天津 | [天津SFC上影影城（天河城店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5SFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E6%B2%B3%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.89 × 10.48 | 197.97 | 1.80:1 | 286 | 2026-07-28 |
| 天津 | [天津万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.52 × 12.82 | 314.35 | 1.91:1 | 365 | 2026-07-28 |
| 天津 | [天津万达影城（SM城市广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88SM%E5%9F%8E%E5%B8%82%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.835 × 13.45 | 334.03 | 1.85:1 | 526 | 2026-07-28 |
| 天津 | [天津万达影城（河东万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B2%B3%E4%B8%9C%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.42 × 11.85 | 265.68 | 1.89:1 | 398 | 2026-07-28 |
| 天津 | [天津万达影城（西青社会山广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E9%9D%92%E7%A4%BE%E4%BC%9A%E5%B1%B1%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.98 × 9.8 | 186 | 1.94:1 | 229 | 2026-07-28 |
| 天津 | [天津中影华臣影城（滨海IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E4%B8%AD%E5%BD%B1%E5%8D%8E%E8%87%A3%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BB%A8%E6%B5%B7IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.89 × 13.83 | 330.4 | 1.73:1 | 345 | 2026-07-28 |
| 天津 | [天津金逸影城（大悦城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%82%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.88 × 12.1 | 288.95 | 1.97:1 | 504 | 2026-07-28 |
| 天津 | [天津金逸影城（大港IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B4%A5%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%B8%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.7 × 10.5 | 206.85 | 1.88:1 | 370 | 2026-07-28 |

### 重庆

共 20 条（IMAX 19；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 重庆 | [重庆CGV影城（U城店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86CGV%E5%BD%B1%E5%9F%8E%EF%BC%88U%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.681 × 12.12 | 274.89 | 1.87:1 | 334 | 2026-07-28 |
| 重庆 | [重庆CGV影城（来福士店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9D%A5%E7%A6%8F%E5%A3%AB%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.992 × 9.995 | 189.83 | 1.90:1 | 283 | 2026-07-28 |
| 重庆 | [重庆CGV影城（源著店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BA%90%E8%91%97%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.29 × 11.85 | 264.14 | 1.88:1 | 275 | 2026-07-28 |
| 重庆 | [重庆万达影城（北碚万达广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E7%A2%9A%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.76 × 10.8 | 224.21 | 1.92:1 | 355 | 2026-07-28 |
| 重庆 | [重庆万达影城（华茂国际中心店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E8%8C%82%E5%9B%BD%E9%99%85%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.75 × 11.83 | 269.13 | 1.92:1 | 340 | 2026-07-28 |
| 重庆 | [重庆万达影城（大坪店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E5%9D%AA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.176 × 9.756 | 177.33 | 1.86:1 | 288 | 2026-07-28 |
| 重庆 | [重庆万达影城（大渡口店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%B8%A1%E5%8F%A3%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.316 × 9.461 | 173.29 | 1.94:1 | 243 | 2026-07-28 |
| 重庆 | [重庆万达影城（大融城店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E8%9E%8D%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 14.767 × 7.275 | 107.43 | 2.03:1 | 217 | 2026-07-28 |
| 重庆 | [重庆万达影城（巴南区万达广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B7%B4%E5%8D%97%E5%8C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.57 × 12.5 | 294.62 | 1.89:1 | 374 | 2026-07-28 |
| 重庆 | [重庆万达影城（永川万达广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B0%B8%E5%B7%9D%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.19 × 11.26 | 238.6 | 1.88:1 | 396 | 2026-07-28 |
| 重庆 | [重庆万达影城（涪陵万达广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B6%AA%E9%99%B5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 315 | 2026-07-28 |
| 重庆 | [重庆万达影城（綦江万达广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%B6%A6%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 396 | 2026-07-28 |
| 重庆 | [重庆万达影城（金科大竹林店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E7%A7%91%E5%A4%A7%E7%AB%B9%E6%9E%97%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.543 × 10.722 | 209.54 | 1.82:1 | 297 | 2026-07-28 |
| 重庆 | [重庆中视国际影城IMAX（红旗河沟店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%B8%AD%E8%A7%86%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E7%BA%A2%E6%97%97%E6%B2%B3%E6%B2%9F%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 326 | 2026-07-28 |
| 重庆 | [重庆亚格影城IMAX（汽博店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%BA%9A%E6%A0%BC%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E6%B1%BD%E5%8D%9A%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.77 × 11.47 | 249.7 | 1.90:1 | 410 | 2026-07-28 |
| 重庆 | [重庆保利万和影城（石桥广场店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E4%BF%9D%E5%88%A9%E4%B8%87%E5%92%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9F%B3%E6%A1%A5%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.85 × 12.44 | 296.69 | 1.92:1 | 528 | 2026-07-28 |
| 重庆 | [重庆八一影城（解放碑店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E5%85%AB%E4%B8%80%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A7%A3%E6%94%BE%E7%A2%91%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.76 × 12.88 | 306.03 | 1.84:1 | 356 | 2026-07-28 |
| 重庆 | [重庆金逸影城（兰亭IMAX店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%B0%E4%BA%ADIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.18 × 11.7 | 259.51 | 1.90:1 | 342 | 2026-07-28 |
| 重庆 | [重庆金逸影城（大悦城IMAX店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%82%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.13 × 11.78 | 272.47 | 1.96:1 | 408 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 重庆 | [重庆百丽宫影城（DolbyCinema光环店）](https://cinema.gaoliang.me/cinema/%E9%87%8D%E5%BA%86%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88DolbyCinema%E5%85%89%E7%8E%AF%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 17.105 × 9.246 | 158.15 | 1.85:1 | 346 | 2026-07-28 |

### 河北

共 13 条（IMAX 13；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 保定 | [保定万达影城（万博广场店）](https://cinema.gaoliang.me/cinema/%E4%BF%9D%E5%AE%9A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E5%8D%9A%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 15.85 × 8.35 | 132.35 | 1.90:1 | 212 | 2026-07-28 |
| 唐山 | [唐山万达影城（路南万达广场店）](https://cinema.gaoliang.me/cinema/%E5%94%90%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%B7%AF%E5%8D%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.42 × 11.85 | 265.68 | 1.89:1 | 336 | 2026-07-28 |
| 廊坊 | [廊坊万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BB%8A%E5%9D%8A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | — | — | 暂无数据 | 383 | 2026-07-28 |
| 廊坊 | [廊坊华谊兄弟影城（燕郊天洋城店）](https://cinema.gaoliang.me/cinema/%E5%BB%8A%E5%9D%8A%E5%8D%8E%E8%B0%8A%E5%85%84%E5%BC%9F%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%87%95%E9%83%8A%E5%A4%A9%E6%B4%8B%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.2 × 9.1 | 147.42 | 1.78:1 | 256 | 2026-07-28 |
| 张家口 | [张家口横店电影城（新五一广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%BC%A0%E5%AE%B6%E5%8F%A3%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E4%BA%94%E4%B8%80%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | — | — | 暂无数据 | 265 | 2026-07-28 |
| 承德 | [承德美承影院（中良凤凰城激光IMAX店）](https://cinema.gaoliang.me/cinema/%E6%89%BF%E5%BE%B7%E7%BE%8E%E6%89%BF%E5%BD%B1%E9%99%A2%EF%BC%88%E4%B8%AD%E8%89%AF%E5%87%A4%E5%87%B0%E5%9F%8E%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.52 × 9.9 | 193.25 | 1.97:1 | 328 | 2026-07-28 |
| 石家庄 | [石家庄万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 25.07 × 13.19 | 330.67 | 1.90:1 | 358 | 2026-07-28 |
| 石家庄 | [石家庄万达影城（裕华万达广场店）](https://cinema.gaoliang.me/cinema/%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A3%95%E5%8D%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.22 × 12.05 | 279.8 | 1.93:1 | 385 | 2026-07-28 |
| 秦皇岛 | [秦皇岛万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%A7%A6%E7%9A%87%E5%B2%9B%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.33 × 10.52 | 213.87 | 1.93:1 | 358 | 2026-07-28 |
| 秦皇岛 | [秦皇岛博纳国际影城（茂业店）](https://cinema.gaoliang.me/cinema/%E7%A7%A6%E7%9A%87%E5%B2%9B%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8C%82%E4%B8%9A%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 251 | 2026-07-28 |
| 邢台 | [邢台万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%82%A2%E5%8F%B0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 306 | 2026-07-28 |
| 邯郸 | [邯郸CGV影城（环球中心店）](https://cinema.gaoliang.me/cinema/%E9%82%AF%E9%83%B8CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E7%90%83%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 239 | 2026-07-28 |
| 邯郸 | [邯郸万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%82%AF%E9%83%B8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 392 | 2026-07-28 |

### 山西

共 11 条（IMAX 11；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 大同 | [大同万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E5%90%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 383 | 2026-07-28 |
| 大同 | [大同万达影城（中央公园店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E5%90%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%A4%AE%E5%85%AC%E5%9B%AD%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 371 | 2026-07-28 |
| 太原 | [太原CGV影城（印象城店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E5%8E%9FCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.96 × 10.92 | 228.88 | 1.92:1 | 230 | 2026-07-28 |
| 太原 | [太原万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E5%8E%9F%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.85 × 11.86 | 271 | 1.93:1 | 358 | 2026-07-28 |
| 太原 | [太原万达影城（多彩城店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E5%8E%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%9A%E5%BD%A9%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.92 × 9.265 | 166.03 | 1.93:1 | 189 | 2026-07-28 |
| 太原 | [太原万达影城（龙湖万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E5%8E%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 26.51 × 14.06 | 372.73 | 1.89:1 | 384 | 2026-07-28 |
| 太原 | [太原博纳国际影城（茂业IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E5%8E%9F%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8C%82%E4%B8%9AIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.78 × 11.75 | 255.92 | 1.85:1 | 343 | 2026-07-28 |
| 晋中 | [晋中万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%99%8B%E4%B8%AD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.06 × 10.58 | 212.23 | 1.90:1 | 381 | 2026-07-28 |
| 晋中 | [晋中华谊兄弟影院（奥莱店）](https://cinema.gaoliang.me/cinema/%E6%99%8B%E4%B8%AD%E5%8D%8E%E8%B0%8A%E5%85%84%E5%BC%9F%E5%BD%B1%E9%99%A2%EF%BC%88%E5%A5%A5%E8%8E%B1%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.3 × 13.3 | 309.89 | 1.75:1 | 462 | 2026-07-28 |
| 运城 | [运城万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%BF%90%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 364 | 2026-07-28 |
| 长治 | [长治万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%BB%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 329 | 2026-07-28 |

### 内蒙古

共 11 条（IMAX 10；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 乌海 | [乌海万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%8C%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 375 | 2026-07-28 |
| 包头 | [包头万达影城（九原万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%85%E5%A4%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%9D%E5%8E%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 370 | 2026-07-28 |
| 包头 | [包头万达影城（维多利摩尔城店）](https://cinema.gaoliang.me/cinema/%E5%8C%85%E5%A4%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%B4%E5%A4%9A%E5%88%A9%E6%91%A9%E5%B0%94%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 323 | 2026-07-28 |
| 包头 | [包头万达影城（青山万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8C%85%E5%A4%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.07 × 11.455 | 264.27 | 2.01:1 | 314 | 2026-07-28 |
| 呼和浩特 | [呼和浩特万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.24 × 10.871 | 230.9 | 1.95:1 | 383 | 2026-07-28 |
| 呼和浩特 | [呼和浩特万达影城（凯德诺和木勒店）](https://cinema.gaoliang.me/cinema/%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%87%AF%E5%BE%B7%E8%AF%BA%E5%92%8C%E6%9C%A8%E5%8B%92%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.12 × 11.45 | 241.82 | 1.84:1 | 384 | 2026-07-28 |
| 呼和浩特 | [呼和浩特万达影城（喜悦广场店）](https://cinema.gaoliang.me/cinema/%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%96%9C%E6%82%A6%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.07 × 11.06 | 233.03 | 1.91:1 | 236 | 2026-07-28 |
| 呼和浩特 | [呼和浩特万达影城（回民区万达广场店）](https://cinema.gaoliang.me/cinema/%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9B%9E%E6%B0%91%E5%8C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.52 × 12.91 | 316.55 | 1.90:1 | 302 | 2026-07-28 |
| 赤峰 | [赤峰万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B5%A4%E5%B3%B0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 414 | 2026-07-28 |
| 通辽 | [通辽万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%80%9A%E8%BE%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 386 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 呼和浩特 | [呼和浩特寰映影城（振华广场店）](https://cinema.gaoliang.me/cinema/%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%8C%AF%E5%8D%8E%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 16.249 × 8.456 | 137.4 | 1.92:1 | 219 | 2026-07-28 |

### 辽宁

共 26 条（IMAX 26；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 丹东 | [丹东万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%B9%E4%B8%9C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.69 × 11.75 | 243.11 | 1.76:1 | 367 | 2026-07-28 |
| 大连 | [大连CGV影城（东港店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E6%B8%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.76 × 12.73 | 277 | 1.71:1 | 406 | 2026-07-28 |
| 大连 | [大连万达影城（华府店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E5%BA%9C%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.86 × 10.761 | 224.47 | 1.94:1 | 321 | 2026-07-28 |
| 大连 | [大连万达影城（庄河万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BA%84%E6%B2%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.5 × 8.86 | 137.33 | 1.75:1 | 274 | 2026-07-28 |
| 大连 | [大连万达影城（普兰店万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%99%AE%E5%85%B0%E5%BA%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.25 × 8.94 | 136.33 | 1.71:1 | 290 | 2026-07-28 |
| 大连 | [大连万达影城（甘井子万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%94%98%E4%BA%95%E5%AD%90%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.14 × 11 | 232.54 | 1.92:1 | 338 | 2026-07-28 |
| 大连 | [大连万达影城（经开万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%8F%E5%BC%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.01 × 11.51 | 253.34 | 1.91:1 | 344 | 2026-07-28 |
| 大连 | [大连万达影城（金州瑞栢中心店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E5%B7%9E%E7%91%9E%E6%A0%A2%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.63 × 10.98 | 215.54 | 1.79:1 | 315 | 2026-07-28 |
| 大连 | [大连万达影城（高新万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.39 × 11.87 | 265.77 | 1.89:1 | 400 | 2026-07-28 |
| 大连 | [大连博纳国际影城（中央大道IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E8%BF%9E%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%A4%AE%E5%A4%A7%E9%81%93IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.83 × 14.07 | 349.36 | 1.76:1 | 467 | 2026-07-28 |
| 抚顺 | [抚顺万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%8A%9A%E9%A1%BA%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.21 × 11.8 | 273.88 | 1.97:1 | 394 | 2026-07-28 |
| 朝阳 | [朝阳万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9C%9D%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.14 × 10.67 | 214.89 | 1.89:1 | 423 | 2026-07-28 |
| 本溪 | [本溪万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9C%AC%E6%BA%AA%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.03 × 11.52 | 253.79 | 1.91:1 | 352 | 2026-07-28 |
| 沈阳 | [沈阳万达影城（北一路万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E4%B8%80%E8%B7%AF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.22 × 11.7 | 271.67 | 1.98:1 | 443 | 2026-07-28 |
| 沈阳 | [沈阳万达影城（奥体万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%A5%E4%BD%93%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.19 × 11.61 | 257.63 | 1.91:1 | 405 | 2026-07-28 |
| 沈阳 | [沈阳万达影城（沈北万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B2%88%E5%8C%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.07 × 9.845 | 187.74 | 1.94:1 | 286 | 2026-07-28 |
| 沈阳 | [沈阳万达影城（辽宁省科技馆—万达影城IMAX GT双激光）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%BE%BD%E5%AE%81%E7%9C%81%E7%A7%91%E6%8A%80%E9%A6%86%E2%80%94%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8EIMAX%20GT%E5%8F%8C%E6%BF%80%E5%85%89%EF%BC%89_IMAX) | IMAX GT Laser | 28.261 × 20.792 | 587.6 | 1.36:1 | 596 | 2026-07-28 |
| 沈阳 | [沈阳万达影城（铁西万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B2%88%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%93%81%E8%A5%BF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.24 × 11.57 | 257.32 | 1.92:1 | 401 | 2026-07-28 |
| 盘锦 | [盘锦CGV影城（兴隆台店）](https://cinema.gaoliang.me/cinema/%E7%9B%98%E9%94%A6CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%B4%E9%9A%86%E5%8F%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 300 | 2026-07-28 |
| 盘锦 | [盘锦万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%9B%98%E9%94%A6%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.975 × 13.503 | 337.24 | 1.85:1 | 361 | 2026-07-28 |
| 营口 | [营口万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%90%A5%E5%8F%A3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 381 | 2026-07-28 |
| 营口 | [营口万达影城（鲅鱼圈万达广场店）](https://cinema.gaoliang.me/cinema/%E8%90%A5%E5%8F%A3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%B2%85%E9%B1%BC%E5%9C%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 388 | 2026-07-28 |
| 辽阳 | [辽阳万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%BE%BD%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.75 × 10.8 | 224.1 | 1.92:1 | 385 | 2026-07-28 |
| 锦州 | [锦州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%94%A6%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 397 | 2026-07-28 |
| 阜新 | [阜新万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%98%9C%E6%96%B0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 401 | 2026-07-28 |
| 鞍山 | [鞍山万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%9E%8D%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.71 × 12.7 | 301.12 | 1.87:1 | 330 | 2026-07-28 |

### 吉林

共 15 条（IMAX 15；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 吉林 | [吉林万达影城（昌邑万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%89%E6%9E%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%98%8C%E9%82%91%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.72 × 11.34 | 246.3 | 1.92:1 | 350 | 2026-07-28 |
| 四平 | [四平万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%9B%9B%E5%B9%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 374 | 2026-07-28 |
| 四平 | [四平万达影城（颐高产业园店）](https://cinema.gaoliang.me/cinema/%E5%9B%9B%E5%B9%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A2%90%E9%AB%98%E4%BA%A7%E4%B8%9A%E5%9B%AD%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 307 | 2026-07-28 |
| 延边 | [延吉万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BB%B6%E5%90%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.478 × 11.388 | 244.59 | 1.89:1 | 377 | 2026-07-28 |
| 长春 | [长春万达影城（宽城万达广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%BD%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.536 × 10.682 | 219.37 | 1.92:1 | 413 | 2026-07-28 |
| 长春 | [长春万达影城（栖乐荟广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A0%96%E4%B9%90%E8%8D%9F%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.03 × 12.4 | 297.97 | 1.94:1 | 370 | 2026-07-28 |
| 长春 | [长春万达影城（欧亚万豪广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AC%A7%E4%BA%9A%E4%B8%87%E8%B1%AA%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 335 | 2026-07-28 |
| 长春 | [长春万达影城（欧亚大卖场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AC%A7%E4%BA%9A%E5%A4%A7%E5%8D%96%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.47 × 13.031 | 279.78 | 1.65:1 | 556 | 2026-07-28 |
| 长春 | [长春万达影城（繁荣路力旺中心店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%B9%81%E8%8D%A3%E8%B7%AF%E5%8A%9B%E6%97%BA%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 325 | 2026-07-28 |
| 长春 | [长春万达影城（红旗街万达广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BA%A2%E6%97%97%E8%A1%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.848 × 11.763 | 245.24 | 1.77:1 | 345 | 2026-07-28 |
| 长春 | [长春万达影城（车城万达广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%BD%A6%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.536 × 10.682 | 219.37 | 1.92:1 | 370 | 2026-07-28 |
| 长春 | [长春万达影城（重庆路万达广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%8D%E5%BA%86%E8%B7%AF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.71 × 12.28 | 278.88 | 1.85:1 | 374 | 2026-07-28 |
| 长春 | [长春万达影城（钜城华億广场店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%92%9C%E5%9F%8E%E5%8D%8E%E5%84%84%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 329 | 2026-07-28 |
| 长春 | [长春寰映影城（摩天活力城店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%91%A9%E5%A4%A9%E6%B4%BB%E5%8A%9B%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.1 × 11.75 | 271.43 | 1.97:1 | 415 | 2026-07-28 |
| 长春 | [长春星轶IMAX影城（绿园吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%98%A5%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%BF%E5%9B%AD%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.98 × 13.85 | 359.82 | 1.88:1 | 530 | 2026-07-28 |

### 黑龙江

共 18 条（IMAX 18；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 佳木斯 | [佳木斯万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%BD%B3%E6%9C%A8%E6%96%AF%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.4 × 11.39 | 243.75 | 1.88:1 | 374 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万象影城（万象汇IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E6%B1%87IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.526 × 12.126 | 273.15 | 1.86:1 | 485 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（万达文化旅游城店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E6%96%87%E5%8C%96%E6%97%85%E6%B8%B8%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20 × 11 | 220 | 1.82:1 | 368 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（中央大街印象城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%A4%AE%E5%A4%A7%E8%A1%97%E5%8D%B0%E8%B1%A1%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.842 × 8.656 | 145.78 | 1.95:1 | 425 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（五常金街时代广场店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E5%B8%B8%E9%87%91%E8%A1%97%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 361 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（哈东万达IMAX GT双激光店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%93%88%E4%B8%9C%E4%B8%87%E8%BE%BEIMAX%20GT%E5%8F%8C%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX GT Laser | 27.975 × 21.03 | 588.31 | 1.33:1 | 539 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（哈西万达广场店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%93%88%E8%A5%BF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.54 × 11.49 | 236 | 1.79:1 | 404 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（松雷广场店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9D%BE%E9%9B%B7%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.52 × 9.67 | 179.09 | 1.92:1 | 191 | 2026-07-28 |
| 哈尔滨 | [哈尔滨万达影城（香坊万达广场店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A6%99%E5%9D%8A%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.7 × 10.7 | 221.49 | 1.93:1 | 338 | 2026-07-28 |
| 哈尔滨 | [哈尔滨博纳国际影城（银泰IMAX店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%93%B6%E6%B3%B0IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.74 × 11.79 | 268.1 | 1.93:1 | 388 | 2026-07-28 |
| 哈尔滨 | [哈尔滨金逸影城（憬荟IMAX店）](https://cinema.gaoliang.me/cinema/%E5%93%88%E5%B0%94%E6%BB%A8%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%86%AC%E8%8D%9FIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.5 × 11.6 | 249.4 | 1.85:1 | 391 | 2026-07-28 |
| 哈尔滨 | [黑龙江省科学技术馆](https://cinema.gaoliang.me/cinema/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%9C%81%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E9%A6%86_IMAX) | IMAX SR Dome | — | — | 圆形 1:1 | 300 | 2026-07-28 |
| 大庆 | [大庆万达影城（萨尔图万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%90%A8%E5%B0%94%E5%9B%BE%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 288 | 2026-07-28 |
| 大庆 | [大庆万达影城（让胡路万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%AE%A9%E8%83%A1%E8%B7%AF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 428 | 2026-07-28 |
| 牡丹江 | [牡丹江万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%89%A1%E4%B8%B9%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.699 × 11.307 | 234.04 | 1.83:1 | 326 | 2026-07-28 |
| 绥化 | [绥化万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%BB%A5%E5%8C%96%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.05 × 10.7 | 214.53 | 1.87:1 | 364 | 2026-07-28 |
| 鸡西 | [鸡西万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%B8%A1%E8%A5%BF%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 431 | 2026-07-28 |
| 齐齐哈尔 | [齐齐哈尔万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%BD%90%E9%BD%90%E5%93%88%E5%B0%94%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 353 | 2026-07-28 |

### 江苏

共 92 条（IMAX 91；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 南京 | [AMG海上明珠影城（南京雨花客厅IMAX店）](https://cinema.gaoliang.me/cinema/AMG%E6%B5%B7%E4%B8%8A%E6%98%8E%E7%8F%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E4%BA%AC%E9%9B%A8%E8%8A%B1%E5%AE%A2%E5%8E%85IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.71 × 12.25 | 290.45 | 1.94:1 | 427 | 2026-07-28 |
| 南京 | [南京CGV影城（华采天地店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%ACCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E9%87%87%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.3 × 11.05 | 235.37 | 1.93:1 | 236 | 2026-07-28 |
| 南京 | [南京万达影城（仙林万达茂店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BB%99%E6%9E%97%E4%B8%87%E8%BE%BE%E8%8C%82%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.85 × 11.76 | 268.72 | 1.94:1 | 345 | 2026-07-28 |
| 南京 | [南京万达影城（六合欢乐港店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%AD%E5%90%88%E6%AC%A2%E4%B9%90%E6%B8%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.85 × 10.65 | 200.75 | 1.77:1 | 243 | 2026-07-28 |
| 南京 | [南京万达影城（建邺万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BB%BA%E9%82%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.358 × 11.435 | 244.23 | 1.87:1 | 367 | 2026-07-28 |
| 南京 | [南京万达影城（江宁万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E5%AE%81%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.587 × 11.085 | 228.21 | 1.86:1 | 372 | 2026-07-28 |
| 南京 | [南京万达影城（浦口白马店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%A6%E5%8F%A3%E7%99%BD%E9%A9%AC%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.53 × 9.36 | 164.08 | 1.87:1 | 214 | 2026-07-28 |
| 南京 | [南京博纳国际影城（江北IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E5%8C%97IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.97 × 10.3 | 195.39 | 1.84:1 | 241 | 2026-07-28 |
| 南京 | [南京卢米埃影城（弘阳IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BC%98%E9%98%B3IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.75 × 11.8 | 268.45 | 1.93:1 | 311 | 2026-07-28 |
| 南京 | [南京卢米埃影城（龙蟠汇IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E8%9F%A0%E6%B1%87IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.39 × 11.15 | 238.5 | 1.92:1 | 338 | 2026-07-28 |
| 南京 | [南京幸福蓝海国际影城（IMAX激光环宇城店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E6%BF%80%E5%85%89%E7%8E%AF%E5%AE%87%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.92 × 11.45 | 250.98 | 1.91:1 | 383 | 2026-07-28 |
| 南京 | [南京幸福蓝海国际影城（常发IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B8%B8%E5%8F%91IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.9 × 11.75 | 257.32 | 1.86:1 | 370 | 2026-07-28 |
| 南京 | [南京幸福蓝海国际影城（江北虹悦城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E5%8C%97%E8%99%B9%E6%82%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.84 × 11.2 | 233.41 | 1.86:1 | 322 | 2026-07-28 |
| 南京 | [南京幸福蓝海国际影城（溧水IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BA%A7%E6%B0%B4IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.49 × 10.77 | 220.68 | 1.90:1 | 330 | 2026-07-28 |
| 南京 | [南京幸福蓝海国际影城（燕子矶招商花园城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%87%95%E5%AD%90%E7%9F%B6%E6%8B%9B%E5%95%86%E8%8A%B1%E5%9B%AD%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.84 × 11.41 | 249.19 | 1.91:1 | 350 | 2026-07-28 |
| 南京 | [南京幸福蓝海国际影城（金陵天地IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E9%99%B5%E5%A4%A9%E5%9C%B0IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.39 × 10.59 | 215.93 | 1.93:1 | 278 | 2026-07-28 |
| 南京 | [南京星轶IMAX影城（雨花吾悦广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9B%A8%E8%8A%B1%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.99 × 10 | 199.9 | 2.00:1 | 394 | 2026-07-28 |
| 南京 | [南京金逸影城（光美江宁弘阳IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E6%B1%9F%E5%AE%81%E5%BC%98%E9%98%B3IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.6 × 12.47 | 306.76 | 1.97:1 | 471 | 2026-07-28 |
| 南京 | [南京金逸影城（溧水时代广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%AC%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BA%A7%E6%B0%B4%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.08 × 11.64 | 257.01 | 1.90:1 | 351 | 2026-07-28 |
| 南通 | [南通CGV影城（万象城店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%80%9ACGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.28 × 11.28 | 240.04 | 1.89:1 | 284 | 2026-07-28 |
| 南通 | [南通万达影城（崇川万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%80%9A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B4%87%E5%B7%9D%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 390 | 2026-07-28 |
| 南通 | [南通万达影城（通州万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%80%9A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%80%9A%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.8 × 11 | 217.8 | 1.80:1 | 370 | 2026-07-28 |
| 南通 | [南通幸福蓝海国际影城（圆融IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%80%9A%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9C%86%E8%9E%8DIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 436 | 2026-07-28 |
| 南通 | [南通星轶IMAX影城（如皋吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%80%9A%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A6%82%E7%9A%8B%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.5 × 11.3 | 242.95 | 1.90:1 | 318 | 2026-07-28 |
| 南通 | [南通金逸影城（大有境IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%80%9A%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%9C%89%E5%A2%83IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.41 × 12.87 | 301.29 | 1.82:1 | 317 | 2026-07-28 |
| 南通 | [海门幸福蓝海IMAX影城（龙信广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E9%97%A8%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E4%BF%A1%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 429 | 2026-07-28 |
| 宿迁 | [宿迁幸福蓝海国际影城（中央IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%BF%E8%BF%81%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%A4%AEIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.46 × 12.78 | 312.6 | 1.91:1 | 343 | 2026-07-28 |
| 宿迁 | [沭阳万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B2%AD%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 328 | 2026-07-28 |
| 宿迁 | [沭阳幸福蓝海国际影城（中央IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B2%AD%E9%98%B3%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%A4%AEIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.98 × 11.49 | 252.55 | 1.91:1 | 295 | 2026-07-28 |
| 常州 | [常州CGV影城（龙城天街店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E5%9F%8E%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.22 × 10.49 | 212.11 | 1.93:1 | 208 | 2026-07-28 |
| 常州 | [常州SFC上影影城（环球港IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9ESFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E7%90%83%E6%B8%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.392 × 12.817 | 312.63 | 1.90:1 | 547 | 2026-07-28 |
| 常州 | [常州万达影城（新北万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E5%8C%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.2 × 10.997 | 233.14 | 1.93:1 | 337 | 2026-07-28 |
| 常州 | [常州万达影城（武进万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AD%A6%E8%BF%9B%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.741 × 11.244 | 233.21 | 1.84:1 | 411 | 2026-07-28 |
| 常州 | [常州幸福蓝海国际影城（九洲IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%9D%E6%B4%B2IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.5 × 11.21 | 241.02 | 1.92:1 | 331 | 2026-07-28 |
| 常州 | [常州幸福蓝海国际影城（溧阳上河城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BA%A7%E9%98%B3%E4%B8%8A%E6%B2%B3%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.32 × 11.26 | 240.06 | 1.89:1 | 386 | 2026-07-28 |
| 常州 | [金坛星轶IMAX影城（金坛吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E9%87%91%E5%9D%9B%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E5%9D%9B%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.14 × 13.43 | 337.63 | 1.87:1 | 442 | 2026-07-28 |
| 徐州 | [徐州万达影城（云龙万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BE%90%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%91%E9%BE%99%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.98 × 11.47 | 252.11 | 1.92:1 | 350 | 2026-07-28 |
| 徐州 | [徐州万达影城（铜山万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BE%90%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%93%9C%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.85 × 11.65 | 254.55 | 1.88:1 | 372 | 2026-07-28 |
| 扬州 | [扬州幸福蓝海国际影城（IMAX店）](https://cinema.gaoliang.me/cinema/%E6%89%AC%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.17 × 12.55 | 303.33 | 1.93:1 | 399 | 2026-07-28 |
| 扬州 | [扬州幸福蓝海国际影城（江都佳源IMAX店）](https://cinema.gaoliang.me/cinema/%E6%89%AC%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E9%83%BD%E4%BD%B3%E6%BA%90IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.1 × 13.03 | 327.05 | 1.93:1 | 485 | 2026-07-28 |
| 扬州 | [扬州星轶IMAX影城（邗江吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E6%89%AC%E5%B7%9E%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%82%97%E6%B1%9F%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 26.09 × 13.88 | 362.13 | 1.88:1 | 362 | 2026-07-28 |
| 扬州 | [扬州横店电影城（广陵SM城市广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%89%AC%E5%B7%9E%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B9%BF%E9%99%B5SM%E5%9F%8E%E5%B8%82%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.37 × 11.6 | 247.89 | 1.84:1 | 376 | 2026-07-28 |
| 无锡 | [宜兴万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%9C%E5%85%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.32 × 11.3 | 240.92 | 1.89:1 | 421 | 2026-07-28 |
| 无锡 | [无锡CGV影城（八佰伴店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%AB%E4%BD%B0%E4%BC%B4%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.34 × 10.73 | 218.25 | 1.90:1 | 192 | 2026-07-28 |
| 无锡 | [无锡万达影城（惠山万达广场店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%83%A0%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.63 × 12.825 | 315.88 | 1.92:1 | 409 | 2026-07-28 |
| 无锡 | [无锡万达影城（新吴万达广场店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E5%90%B4%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.687 × 9.677 | 180.83 | 1.93:1 | 354 | 2026-07-28 |
| 无锡 | [无锡万达影城（滨湖万达广场店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BB%A8%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.21 × 11.968 | 277.78 | 1.94:1 | 403 | 2026-07-28 |
| 无锡 | [无锡万达影城（融创茂店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%9E%8D%E5%88%9B%E8%8C%82%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.18 × 11.03 | 233.62 | 1.92:1 | 353 | 2026-07-28 |
| 无锡 | [无锡大世界影城（中山路IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E5%A4%A7%E4%B8%96%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%B1%B1%E8%B7%AFIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.82 × 10.83 | 225.48 | 1.92:1 | 378 | 2026-07-28 |
| 无锡 | [无锡大世界影城（圆融IMAX店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E5%A4%A7%E4%B8%96%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9C%86%E8%9E%8DIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.42 × 10.35 | 201 | 1.88:1 | 199 | 2026-07-28 |
| 无锡 | [无锡大世界影城（江南大悦城店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E5%A4%A7%E4%B8%96%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E5%8D%97%E5%A4%A7%E6%82%A6%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.715 × 11.187 | 242.93 | 1.94:1 | 368 | 2026-07-28 |
| 无锡 | [无锡金逸影城（光美荟聚IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E8%8D%9F%E8%81%9AIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.22 × 12.68 | 294.43 | 1.83:1 | 355 | 2026-07-28 |
| 无锡 | [无锡金逸影城（方圆荟店）](https://cinema.gaoliang.me/cinema/%E6%97%A0%E9%94%A1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B9%E5%9C%86%E8%8D%9F%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.84 × 12.03 | 262.74 | 1.82:1 | 402 | 2026-07-28 |
| 无锡 | [江阴万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B1%9F%E9%98%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 363 | 2026-07-28 |
| 无锡 | [江阴幸福蓝海国际影城（南门IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B1%9F%E9%98%B4%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E9%97%A8IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.16 × 11.97 | 265.26 | 1.85:1 | 325 | 2026-07-28 |
| 无锡 | [江阴金逸影城（美嘉城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B1%9F%E9%98%B4%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BE%8E%E5%98%89%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.75 × 13.86 | 356.89 | 1.86:1 | 349 | 2026-07-28 |
| 泰州 | [泰州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B3%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.38 × 11.123 | 237.81 | 1.92:1 | 319 | 2026-07-28 |
| 泰州 | [泰州幸福蓝海国际影城（茂业IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%B3%B0%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8C%82%E4%B8%9AIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.85 × 11.86 | 271 | 1.93:1 | 358 | 2026-07-28 |
| 泰州 | [泰州星轶影城（泰兴吾悦广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B3%B0%E5%B7%9E%E6%98%9F%E8%BD%B6%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B3%B0%E5%85%B4%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 366 | 2026-07-28 |
| 泰州 | [泰州金逸影城（姜堰IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B3%B0%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A7%9C%E5%A0%B0IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 264 | 2026-07-28 |
| 泰州 | [靖江CGV影城（印象城店）](https://cinema.gaoliang.me/cinema/%E9%9D%96%E6%B1%9FCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.06 × 10.16 | 203.81 | 1.97:1 | 275 | 2026-07-28 |
| 淮安 | [淮安万达影城（水渡口万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%B7%AE%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B0%B4%E6%B8%A1%E5%8F%A3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.91 × 10.062 | 200.33 | 1.98:1 | 265 | 2026-07-28 |
| 淮安 | [淮安万达影城（玖珑汇广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%AE%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%96%E7%8F%91%E6%B1%87%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 311 | 2026-07-28 |
| 淮安 | [淮安幸福蓝海影城（激光IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B7%AE%E5%AE%89%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.22 × 10.32 | 208.67 | 1.96:1 | 222 | 2026-07-28 |
| 盐城 | [东台幸福蓝海国际影城（中南IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E5%8F%B0%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%8D%97IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.23 × 12.13 | 269.65 | 1.83:1 | 345 | 2026-07-28 |
| 盐城 | [盐城CGV影城（中南城店）](https://cinema.gaoliang.me/cinema/%E7%9B%90%E5%9F%8ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%8D%97%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 357 | 2026-07-28 |
| 盐城 | [盐城万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%9B%90%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 372 | 2026-07-28 |
| 盐城 | [盐城幸福蓝海国际影城（悦达889IMAX店）](https://cinema.gaoliang.me/cinema/%E7%9B%90%E5%9F%8E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%82%A6%E8%BE%BE889IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.59 × 13.6 | 334.42 | 1.81:1 | 380 | 2026-07-28 |
| 苏州 | [太仓万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E4%BB%93%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.713 × 11.093 | 229.77 | 1.87:1 | 363 | 2026-07-28 |
| 苏州 | [太仓幸福蓝海国际影城（华发广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%AA%E4%BB%93%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E5%8F%91%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.64 × 11.67 | 252.54 | 1.85:1 | 323 | 2026-07-28 |
| 苏州 | [常熟万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E7%86%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.71 × 11.34 | 246.19 | 1.91:1 | 361 | 2026-07-28 |
| 苏州 | [张家港万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BC%A0%E5%AE%B6%E6%B8%AF%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.85 × 11.76 | 268.72 | 1.94:1 | 403 | 2026-07-28 |
| 苏州 | [张家港幸福蓝海国际影城（IMAX店）](https://cinema.gaoliang.me/cinema/%E5%BC%A0%E5%AE%B6%E6%B8%AF%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.7 × 14.85 | 366.79 | 1.66:1 | 402 | 2026-07-28 |
| 苏州 | [昆山万象影城（万象汇IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E5%B1%B1%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E6%B1%87IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.84 × 12.3 | 293.23 | 1.94:1 | 443 | 2026-07-28 |
| 苏州 | [昆山万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.327 × 10.473 | 202.41 | 1.85:1 | 363 | 2026-07-28 |
| 苏州 | [苏州CGV影城（大悦城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%82%A6%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.02 × 9.24 | 166.5 | 1.95:1 | 213 | 2026-07-28 |
| 苏州 | [苏州CGV影城（苏州中心IMAX店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8B%8F%E5%B7%9E%E4%B8%AD%E5%BF%83IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.38 × 12.24 | 286.17 | 1.91:1 | 294 | 2026-07-28 |
| 苏州 | [苏州万达影城（吴中万达广场店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%90%B4%E4%B8%AD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.52 × 11.79 | 265.51 | 1.91:1 | 376 | 2026-07-28 |
| 苏州 | [苏州万达影城（奥体中心店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%A5%E4%BD%93%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.6 × 9.21 | 152.89 | 1.80:1 | 310 | 2026-07-28 |
| 苏州 | [苏州万达影城（平江万达广场店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B9%B3%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.58 × 10.389 | 203.42 | 1.88:1 | 342 | 2026-07-28 |
| 苏州 | [苏州万达影城（新湖广场店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E6%B9%96%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.075 × 9.447 | 161.31 | 1.81:1 | 271 | 2026-07-28 |
| 苏州 | [苏州幸福蓝海国际影城（文体中心IMAX店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%87%E4%BD%93%E4%B8%AD%E5%BF%83IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.78 × 12.15 | 276.78 | 1.87:1 | 313 | 2026-07-28 |
| 苏州 | [苏州幸福蓝海国际影城（石路IMAX店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9F%B3%E8%B7%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 26.09 × 13.86 | 361.61 | 1.88:1 | 402 | 2026-07-28 |
| 苏州 | [苏州幸福蓝海国际影城（绿宝IMAX店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%BF%E5%AE%9DIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.06 × 12.82 | 308.45 | 1.88:1 | 347 | 2026-07-28 |
| 苏州 | [苏州星光嘉映影城（IMAX龙湖苏州相城天街店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E6%98%9F%E5%85%89%E5%98%89%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E9%BE%99%E6%B9%96%E8%8B%8F%E5%B7%9E%E7%9B%B8%E5%9F%8E%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.53 × 10.95 | 224.8 | 1.87:1 | 300 | 2026-07-28 |
| 苏州 | [苏州苏州湾IMAX影城](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E8%8B%8F%E5%B7%9E%E6%B9%BEIMAX%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 21.55 × 11.41 | 245.89 | 1.89:1 | 272 | 2026-07-28 |
| 苏州 | [苏州苏艺影城（艺术中心IMAX激光店）](https://cinema.gaoliang.me/cinema/%E8%8B%8F%E5%B7%9E%E8%8B%8F%E8%89%BA%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%89%BA%E6%9C%AF%E4%B8%AD%E5%BF%83IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.353 × 11.836 | 252.73 | 1.80:1 | 384 | 2026-07-28 |
| 连云港 | [连云港万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%BF%9E%E4%BA%91%E6%B8%AF%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.07 × 10.63 | 213.34 | 1.89:1 | 388 | 2026-07-28 |
| 镇江 | [丹阳幸福蓝海国际影城（八佰伴店）](https://cinema.gaoliang.me/cinema/%E4%B8%B9%E9%98%B3%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%AB%E4%BD%B0%E4%BC%B4%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.8 × 13.89 | 358.36 | 1.86:1 | 434 | 2026-07-28 |
| 镇江 | [镇江万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%95%87%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.84 × 8.88 | 149.54 | 1.90:1 | 244 | 2026-07-28 |
| 镇江 | [镇江星轶IMAX影城（丁卯吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E9%95%87%E6%B1%9F%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%81%E5%8D%AF%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.02 × 10.32 | 206.61 | 1.94:1 | 324 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 南京 | [南京CGV影城（金象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E4%BA%ACCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 14.378 × 8.634 | 124.14 | 1.67:1 | 227 | 2026-07-28 |

### 浙江

共 61 条（IMAX 59；杜比影院 2）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 丽水 | [丽水万地国际影城](https://cinema.gaoliang.me/cinema/%E4%B8%BD%E6%B0%B4%E4%B8%87%E5%9C%B0%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 400 | 2026-07-28 |
| 台州 | [台州万达影城（中盛广场店）](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E7%9B%9B%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 374 | 2026-07-28 |
| 台州 | [台州万达影城（台州万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8F%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 357 | 2026-07-28 |
| 台州 | [台州金逸影城（万嘉广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E5%98%89%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 408 | 2026-07-28 |
| 嘉兴 | [嘉兴万达影城（南湖万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%98%89%E5%85%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.41 × 11.144 | 227.45 | 1.83:1 | 373 | 2026-07-28 |
| 嘉兴 | [桐乡星轶IMAX影城（桐乡吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E6%A1%90%E4%B9%A1%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A1%90%E4%B9%A1%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.165 × 12.901 | 311.75 | 1.87:1 | 394 | 2026-07-28 |
| 嘉兴 | [海宁披云传奇电影中心IMAX（爱琴海店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%AE%81%E6%8A%AB%E4%BA%91%E4%BC%A0%E5%A5%87%E7%94%B5%E5%BD%B1%E4%B8%AD%E5%BF%83IMAX%EF%BC%88%E7%88%B1%E7%90%B4%E6%B5%B7%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.475 × 10.668 | 207.76 | 1.83:1 | 285 | 2026-07-28 |
| 宁波 | [余姚CGV影城（城东店）](https://cinema.gaoliang.me/cinema/%E4%BD%99%E5%A7%9ACGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9F%8E%E4%B8%9C%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 375 | 2026-07-28 |
| 宁波 | [余姚万达影城（万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E4%BD%99%E5%A7%9A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.97 × 10.85 | 227.52 | 1.93:1 | 302 | 2026-07-28 |
| 宁波 | [宁波CGV影城（鄞州店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%84%9E%E5%B7%9E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.39 × 11.092 | 237.26 | 1.93:1 | 358 | 2026-07-28 |
| 宁波 | [宁波万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 25.88 × 13.92 | 360.25 | 1.86:1 | 448 | 2026-07-28 |
| 宁波 | [宁波万达影城（奉化万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%89%E5%8C%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.66 × 10.73 | 221.68 | 1.93:1 | 388 | 2026-07-28 |
| 宁波 | [宁波万达影城（江北万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E5%8C%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.21 × 12.053 | 279.75 | 1.93:1 | 376 | 2026-07-28 |
| 宁波 | [宁波万达影城（鄞州万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%84%9E%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.96 × 11.5 | 264.04 | 2.00:1 | 305 | 2026-07-28 |
| 宁波 | [宁波博纳国际影城（北仑IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E4%BB%91IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 324 | 2026-07-28 |
| 宁波 | [宁波幸福蓝海国际影城（环宇城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E5%AE%87%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.03 × 12.66 | 291.56 | 1.82:1 | 381 | 2026-07-28 |
| 宁波 | [宁波影都（亚细亚IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E5%BD%B1%E9%83%BD%EF%BC%88%E4%BA%9A%E7%BB%86%E4%BA%9AIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.89 × 12.84 | 306.75 | 1.86:1 | 352 | 2026-07-28 |
| 宁波 | [宁波星轶IMAX影城（镇海吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E6%B3%A2%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%95%87%E6%B5%B7%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.916 × 12.647 | 302.47 | 1.89:1 | 388 | 2026-07-28 |
| 宁波 | [慈溪中影星美国际影城（保利店）](https://cinema.gaoliang.me/cinema/%E6%85%88%E6%BA%AA%E4%B8%AD%E5%BD%B1%E6%98%9F%E7%BE%8E%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BF%9D%E5%88%A9%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 454 | 2026-07-28 |
| 杭州 | [杭州CGV影城（乐堤港IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%90%E5%A0%A4%E6%B8%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.156 × 12.714 | 307.12 | 1.90:1 | 393 | 2026-07-28 |
| 杭州 | [杭州CGV影城（滨江天街IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BB%A8%E6%B1%9F%E5%A4%A9%E8%A1%97IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.196 × 12.473 | 289.32 | 1.86:1 | 400 | 2026-07-28 |
| 杭州 | [杭州SFC上影影城（下沙IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9ESFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%8B%E6%B2%99IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.958 × 12.037 | 264.31 | 1.82:1 | 376 | 2026-07-28 |
| 杭州 | [杭州SFC上影影城（余之城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9ESFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BD%99%E4%B9%8B%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.803 × 10.204 | 191.87 | 1.84:1 | 256 | 2026-07-28 |
| 杭州 | [杭州万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.611 × 11.343 | 245.13 | 1.91:1 | 460 | 2026-07-28 |
| 杭州 | [杭州万达影城（崇贤上亿IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B4%87%E8%B4%A4%E4%B8%8A%E4%BA%BFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.096 × 10.889 | 218.83 | 1.85:1 | 317 | 2026-07-28 |
| 杭州 | [杭州万达影城（拱墅万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%8B%B1%E5%A2%85%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.681 × 11.401 | 235.78 | 1.81:1 | 348 | 2026-07-28 |
| 杭州 | [杭州万达影城（水晶城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B0%B4%E6%99%B6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.843 × 10.414 | 206.65 | 1.91:1 | 311 | 2026-07-28 |
| 杭州 | [杭州博纳国际影城（丁桥龙湖IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%81%E6%A1%A5%E9%BE%99%E6%B9%96IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.32 × 9.19 | 159.17 | 1.88:1 | 267 | 2026-07-28 |
| 杭州 | [杭州博纳国际影城（临平IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B4%E5%B9%B3IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.623 × 10.535 | 206.73 | 1.86:1 | 288 | 2026-07-28 |
| 杭州 | [杭州博纳国际影城（西溪IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E6%BA%AAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.935 × 11.685 | 256.31 | 1.88:1 | 363 | 2026-07-28 |
| 杭州 | [杭州幸福蓝海国际影城（花园城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8A%B1%E5%9B%AD%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.73 × 10.79 | 212.89 | 1.83:1 | 245 | 2026-07-28 |
| 杭州 | [杭州悦江新远影城IMAX](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E6%82%A6%E6%B1%9F%E6%96%B0%E8%BF%9C%E5%BD%B1%E5%9F%8EIMAX_IMAX) | IMAX Digital Xenon | 22.01 × 12.6 | 277.33 | 1.75:1 | 511 | 2026-07-28 |
| 杭州 | [杭州星光嘉映影城IMAX（新天地店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E6%98%9F%E5%85%89%E5%98%89%E6%98%A0%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.473 × 13.298 | 325.44 | 1.84:1 | 439 | 2026-07-28 |
| 杭州 | [杭州横店电影城（IMAX_CINITY萧山银泰店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX_CINITY%E8%90%A7%E5%B1%B1%E9%93%B6%E6%B3%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.882 × 12.918 | 308.51 | 1.85:1 | 318 | 2026-07-28 |
| 杭州 | [杭州横店电影城（IMAX之江西投银泰店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E4%B9%8B%E6%B1%9F%E8%A5%BF%E6%8A%95%E9%93%B6%E6%B3%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.12 × 10.55 | 212.27 | 1.91:1 | 281 | 2026-07-28 |
| 杭州 | [杭州浙影时代影城·西湖文化广场店](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E6%B5%99%E5%BD%B1%E6%97%B6%E4%BB%A3%E5%BD%B1%E5%9F%8E%C2%B7%E8%A5%BF%E6%B9%96%E6%96%87%E5%8C%96%E5%B9%BF%E5%9C%BA%E5%BA%97_IMAX) | IMAX CoLA | 19.5 × 10.7 | 208.65 | 1.82:1 | 350 | 2026-07-28 |
| 杭州 | [杭州浙影时代影城·西溪欢乐城IMAX店](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E6%B5%99%E5%BD%B1%E6%97%B6%E4%BB%A3%E5%BD%B1%E5%9F%8E%C2%B7%E8%A5%BF%E6%BA%AA%E6%AC%A2%E4%B9%90%E5%9F%8EIMAX%E5%BA%97_IMAX) | IMAX Digital Xenon | 20.57 × 11.435 | 235.22 | 1.80:1 | 396 | 2026-07-28 |
| 杭州 | [杭州金逸影城（华夏之心美瑭IMAX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E5%A4%8F%E4%B9%8B%E5%BF%83%E7%BE%8E%E7%91%ADIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.441 × 10.267 | 199.6 | 1.89:1 | 286 | 2026-07-28 |
| 温州 | [乐清虹桥神画 IMAX 影城](https://cinema.gaoliang.me/cinema/%E4%B9%90%E6%B8%85%E8%99%B9%E6%A1%A5%E7%A5%9E%E7%94%BB%20IMAX%20%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 383 | 2026-07-28 |
| 温州 | [温州万达影城（平阳万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B8%A9%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B9%B3%E9%98%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 430 | 2026-07-28 |
| 温州 | [温州万达影城（龙湾万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B8%A9%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%BE%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.3 × 11.702 | 260.95 | 1.91:1 | 392 | 2026-07-28 |
| 温州 | [温州博悦汇影城（印象城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B8%A9%E5%B7%9E%E5%8D%9A%E6%82%A6%E6%B1%87%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.82 × 8.95 | 159.49 | 1.99:1 | 249 | 2026-07-28 |
| 温州 | [温州博纳国际影城（5050广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B8%A9%E5%B7%9E%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%885050%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.25 × 11.08 | 235.45 | 1.92:1 | 304 | 2026-07-28 |
| 温州 | [温州卢米埃影城（万象城店）](https://cinema.gaoliang.me/cinema/%E6%B8%A9%E5%B7%9E%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 361 | 2026-07-28 |
| 湖州 | [湖州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B9%96%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.59 × 11.26 | 243.1 | 1.92:1 | 361 | 2026-07-28 |
| 绍兴 | [嵊州金逸IMAX影城（和悦时代广场店）](https://cinema.gaoliang.me/cinema/%E5%B5%8A%E5%B7%9E%E9%87%91%E9%80%B8IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%92%8C%E6%82%A6%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 287 | 2026-07-28 |
| 绍兴 | [绍兴万达影城（上虞万达广场店）](https://cinema.gaoliang.me/cinema/%E7%BB%8D%E5%85%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%8A%E8%99%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 361 | 2026-07-28 |
| 绍兴 | [绍兴万达影城（柯桥万达广场店）](https://cinema.gaoliang.me/cinema/%E7%BB%8D%E5%85%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9F%AF%E6%A1%A5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.91 × 10.231 | 203.7 | 1.95:1 | 316 | 2026-07-28 |
| 绍兴 | [绍兴卢米埃影城（银泰城店）](https://cinema.gaoliang.me/cinema/%E7%BB%8D%E5%85%B4%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%93%B6%E6%B3%B0%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 393 | 2026-07-28 |
| 绍兴 | [绍兴星轶IMAX影城（嵊州吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E7%BB%8D%E5%85%B4%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B5%8A%E5%B7%9E%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.41 × 14.08 | 357.77 | 1.80:1 | 372 | 2026-07-28 |
| 绍兴 | [诸暨万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%AF%B8%E6%9A%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.14 × 11.6 | 256.82 | 1.91:1 | 352 | 2026-07-28 |
| 舟山 | [舟山保利国际影城（绿城长峙IMAX店）](https://cinema.gaoliang.me/cinema/%E8%88%9F%E5%B1%B1%E4%BF%9D%E5%88%A9%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%BF%E5%9F%8E%E9%95%BF%E5%B3%99IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.82 × 11.38 | 248.31 | 1.92:1 | 274 | 2026-07-28 |
| 衢州 | [衢州万达影城（经开万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A1%A2%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%8F%E5%BC%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.32 × 11.1 | 236.65 | 1.92:1 | 369 | 2026-07-28 |
| 衢州 | [衢州星轶IMAX影城（衢州吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E8%A1%A2%E5%B7%9E%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A1%A2%E5%B7%9E%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.46 × 12.8 | 313.09 | 1.91:1 | 373 | 2026-07-28 |
| 金华 | [上影国际影城（义乌新光汇IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E5%BD%B1%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%89%E4%B9%8C%E6%96%B0%E5%85%89%E6%B1%87IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.634 × 11.874 | 256.88 | 1.82:1 | 399 | 2026-07-28 |
| 金华 | [义乌万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%89%E4%B9%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 26.56 × 14.41 | 382.73 | 1.84:1 | 377 | 2026-07-28 |
| 金华 | [保利万和美博影城（义乌之心IMAX店）](https://cinema.gaoliang.me/cinema/%E4%BF%9D%E5%88%A9%E4%B8%87%E5%92%8C%E7%BE%8E%E5%8D%9A%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%89%E4%B9%8C%E4%B9%8B%E5%BF%83IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.989 × 13.113 | 314.57 | 1.83:1 | 322 | 2026-07-28 |
| 金华 | [金华万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%87%91%E5%8D%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.86 × 11.64 | 254.45 | 1.88:1 | 417 | 2026-07-28 |
| 金华 | [金华横店电影城（世贸广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%87%91%E5%8D%8E%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%96%E8%B4%B8%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 14.93 × 7.3 | 108.99 | 2.05:1 | 262 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 杭州 | [杭州CGV影城（奥体印象城杜比4DX店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%A5%E4%BD%93%E5%8D%B0%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%944DX%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 14.45 × 8.086 | 116.84 | 1.79:1 | 248 | 2026-07-28 |
| 杭州 | [杭州万达影城（余杭万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9D%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BD%99%E6%9D%AD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 19.447 × 10.512 | 204.43 | 1.85:1 | 391 | 2026-07-28 |

### 安徽

共 31 条（IMAX 30；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 亳州 | [亳州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%BA%B3%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 399 | 2026-07-28 |
| 六安 | [六安万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%85%AD%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.26 × 10.73 | 217.39 | 1.89:1 | 412 | 2026-07-28 |
| 合肥 | [合肥万达影城（万科广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E7%A7%91%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.141 × 10.072 | 202.86 | 2.00:1 | 317 | 2026-07-28 |
| 合肥 | [合肥万达影城（包河万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%85%E6%B2%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.379 × 11.602 | 248.04 | 1.84:1 | 374 | 2026-07-28 |
| 合肥 | [合肥万达影城（北城万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.851 × 10.072 | 189.87 | 1.87:1 | 355 | 2026-07-28 |
| 合肥 | [合肥万达影城（天鹅湖万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E9%B9%85%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.402 × 11.12 | 237.99 | 1.92:1 | 378 | 2026-07-28 |
| 合肥 | [合肥万达影城（宝利丰广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E5%88%A9%E4%B8%B0%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.39 × 12.16 | 284.42 | 1.92:1 | 343 | 2026-07-28 |
| 合肥 | [合肥万达影城（巢湖万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B7%A2%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.17 × 11.64 | 258.06 | 1.90:1 | 369 | 2026-07-28 |
| 合肥 | [合肥万达影城（文化旅游城店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%87%E5%8C%96%E6%97%85%E6%B8%B8%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.36 × 11.71 | 261.84 | 1.91:1 | 355 | 2026-07-28 |
| 合肥 | [合肥万达影城（瑶海万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%91%B6%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.66 × 12.6 | 298.12 | 1.88:1 | 319 | 2026-07-28 |
| 合肥 | [合肥博纳国际影城（弘阳店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BC%98%E9%98%B3%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.99 × 11.19 | 234.88 | 1.88:1 | 377 | 2026-07-28 |
| 合肥 | [合肥博纳国际影城（龙湖天街店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.876 × 9.834 | 175.79 | 1.82:1 | 247 | 2026-07-28 |
| 合肥 | [合肥星光嘉映影城（激光IMAX龙湖合肥高新天街店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E6%98%9F%E5%85%89%E5%98%89%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BF%80%E5%85%89IMAX%E9%BE%99%E6%B9%96%E5%90%88%E8%82%A5%E9%AB%98%E6%96%B0%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.8 × 10.1 | 199.98 | 1.96:1 | 243 | 2026-07-28 |
| 合肥 | [合肥英皇电影城（万象城店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.85 × 11.57 | 252.8 | 1.89:1 | 408 | 2026-07-28 |
| 安庆 | [安庆星轶IMAX影城（安庆吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E5%AE%89%E5%BA%86%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%89%E5%BA%86%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.96 × 11.17 | 234.12 | 1.88:1 | 342 | 2026-07-28 |
| 宣城 | [宣城万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%A3%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 332 | 2026-07-28 |
| 宿州 | [宿州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 401 | 2026-07-28 |
| 淮北 | [淮北万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%AE%E5%8C%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.96 × 10.85 | 227.42 | 1.93:1 | 370 | 2026-07-28 |
| 淮南 | [淮南万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%AE%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.784 × 10.641 | 210.52 | 1.86:1 | 365 | 2026-07-28 |
| 淮南 | [淮南星轶IMAX影城（淮南吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E6%B7%AE%E5%8D%97%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B7%AE%E5%8D%97%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.49 × 13.48 | 343.61 | 1.89:1 | 389 | 2026-07-28 |
| 滁州 | [滁州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%BB%81%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.5 × 11.22 | 241.23 | 1.92:1 | 325 | 2026-07-28 |
| 芜湖 | [芜湖万达影城（镜湖万达广场店）](https://cinema.gaoliang.me/cinema/%E8%8A%9C%E6%B9%96%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%95%9C%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.2 × 11.7 | 271.44 | 1.98:1 | 355 | 2026-07-28 |
| 芜湖 | [芜湖幸福蓝海国际影城](https://cinema.gaoliang.me/cinema/%E8%8A%9C%E6%B9%96%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 25.58 × 13.78 | 352.49 | 1.86:1 | 411 | 2026-07-28 |
| 蚌埠 | [蚌埠万达影城（蚌山万达广场店）](https://cinema.gaoliang.me/cinema/%E8%9A%8C%E5%9F%A0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%9A%8C%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.703 × 11.14 | 230.63 | 1.86:1 | 402 | 2026-07-28 |
| 铜陵 | [铜陵万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%93%9C%E9%99%B5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 387 | 2026-07-28 |
| 阜阳 | [阜阳万达影城（颍州万达广场店）](https://cinema.gaoliang.me/cinema/%E9%98%9C%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A2%8D%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.389 × 11.136 | 227.05 | 1.83:1 | 427 | 2026-07-28 |
| 阜阳 | [阜阳万达影城（颍泉万达广场店）](https://cinema.gaoliang.me/cinema/%E9%98%9C%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A2%8D%E6%B3%89%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.19 × 10.579 | 203.01 | 1.81:1 | 411 | 2026-07-28 |
| 阜阳 | [阜阳东方巨幕影城](https://cinema.gaoliang.me/cinema/%E9%98%9C%E9%98%B3%E4%B8%9C%E6%96%B9%E5%B7%A8%E5%B9%95%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 20.684 × 11.056 | 228.68 | 1.87:1 | 409 | 2026-07-28 |
| 马鞍山 | [马鞍山万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%A9%AC%E9%9E%8D%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 409 | 2026-07-28 |
| 黄山 | [黄山金逸影城（光美黎阳IMAX店）](https://cinema.gaoliang.me/cinema/%E9%BB%84%E5%B1%B1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E9%BB%8E%E9%98%B3IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.98 × 11 | 230.78 | 1.91:1 | 333 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 合肥 | [合肥万达影城（包河万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%88%E8%82%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%85%E6%B2%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 12.396 × 7.054 | 87.44 | 1.76:1 | 196 | 2026-07-28 |

### 福建

共 33 条（IMAX 30；杜比影院 3）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 三明 | [三明万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%89%E6%98%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.95 × 12.15 | 278.84 | 1.89:1 | 376 | 2026-07-28 |
| 南平 | [南平万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%B9%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.14 × 11.6 | 256.82 | 1.91:1 | 348 | 2026-07-28 |
| 厦门 | [厦门万达影城（SM广场店）三期店](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88SM%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89%E4%B8%89%E6%9C%9F%E5%BA%97_IMAX) | IMAX Digital Xenon | 22.04 × 11.791 | 259.87 | 1.87:1 | 350 | 2026-07-28 |
| 厦门 | [厦门万达影城（世茂海峡广场店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%96%E8%8C%82%E6%B5%B7%E5%B3%A1%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.457 × 10.78 | 231.31 | 1.99:1 | 348 | 2026-07-28 |
| 厦门 | [厦门万达影城（湖里万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B9%96%E9%87%8C%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.54 × 10.058 | 196.53 | 1.94:1 | 291 | 2026-07-28 |
| 厦门 | [厦门万达影城（集美万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9B%86%E7%BE%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.383 × 11.102 | 237.39 | 1.93:1 | 412 | 2026-07-28 |
| 厦门 | [厦门卢米埃影城（宝龙IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E9%BE%99IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.62 × 11.77 | 266.24 | 1.92:1 | 374 | 2026-07-28 |
| 厦门 | [厦门寰映影城（棕榈城店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A3%95%E6%A6%88%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.39 × 10.39 | 211.85 | 1.96:1 | 230 | 2026-07-28 |
| 厦门 | [厦门寰映影城（海上世界IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E4%B8%8A%E4%B8%96%E7%95%8CIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 26.51 × 14.2 | 376.44 | 1.87:1 | 383 | 2026-07-28 |
| 厦门 | [厦门寰映影城（集美银泰店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9B%86%E7%BE%8E%E9%93%B6%E6%B3%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.894 × 11.721 | 256.62 | 1.87:1 | 365 | 2026-07-28 |
| 厦门 | [厦门幸福蓝海国际影城（世茂广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%96%E8%8C%82%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.63 × 10.03 | 186.86 | 1.86:1 | 251 | 2026-07-28 |
| 厦门 | [厦门横店电影城（海沧SM广场店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E6%B2%A7SM%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18 × 10 | 180 | 1.80:1 | 270 | 2026-07-28 |
| 宁德 | [宁德万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E5%BE%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.96 × 11.7 | 268.63 | 1.96:1 | 305 | 2026-07-28 |
| 泉州 | [安溪金逸影城（宝龙店）](https://cinema.gaoliang.me/cinema/%E5%AE%89%E6%BA%AA%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E9%BE%99%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.2 × 10.11 | 194.11 | 1.90:1 | 346 | 2026-07-28 |
| 泉州 | [晋江万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%99%8B%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.96 × 11.74 | 269.55 | 1.96:1 | 357 | 2026-07-28 |
| 泉州 | [晋江星轶IMAX影城（吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E6%99%8B%E6%B1%9F%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.83 × 10.2 | 202.27 | 1.94:1 | 209 | 2026-07-28 |
| 泉州 | [泉州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B3%89%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.22 × 11.7 | 271.67 | 1.98:1 | 416 | 2026-07-28 |
| 泉州 | [泉州万达影城（石狮世茂广场店）](https://cinema.gaoliang.me/cinema/%E6%B3%89%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9F%B3%E7%8B%AE%E4%B8%96%E8%8C%82%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.16 × 13.5 | 339.66 | 1.86:1 | 344 | 2026-07-28 |
| 漳州 | [漳州万达影城（台商区万达广场店）](https://cinema.gaoliang.me/cinema/%E6%BC%B3%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8F%B0%E5%95%86%E5%8C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.48 × 11.8 | 265.26 | 1.91:1 | 381 | 2026-07-28 |
| 漳州 | [漳州万达影城（碧湖店）](https://cinema.gaoliang.me/cinema/%E6%BC%B3%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A2%A7%E6%B9%96%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.71 × 11.332 | 246.02 | 1.92:1 | 347 | 2026-07-28 |
| 漳州 | [漳州金逸影城（红星店）](https://cinema.gaoliang.me/cinema/%E6%BC%B3%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BA%A2%E6%98%9F%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.81 × 9.7 | 182.46 | 1.94:1 | 249 | 2026-07-28 |
| 福州 | [福州CGV影城（东二环店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E4%BA%8C%E7%8E%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.36 × 10.94 | 222.74 | 1.86:1 | 290 | 2026-07-28 |
| 福州 | [福州万达影城（仓山万达广场店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BB%93%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.09 × 9.854 | 188.11 | 1.94:1 | 261 | 2026-07-28 |
| 福州 | [福州万达影城（祥禾天地店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A5%A5%E7%A6%BE%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.86 × 10.36 | 205.75 | 1.92:1 | 353 | 2026-07-28 |
| 福州 | [福州万达影城（金融街万达广场店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E8%9E%8D%E8%A1%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.6 × 10.674 | 219.88 | 1.93:1 | 314 | 2026-07-28 |
| 福州 | [福州幸福蓝海国际影城（名城IMAX店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9E%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%90%8D%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.17 × 9.54 | 173.34 | 1.90:1 | 304 | 2026-07-28 |
| 福州 | [福州金逸影城IMAX（万宝商圈店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E4%B8%87%E5%AE%9D%E5%95%86%E5%9C%88%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.014 × 8.864 | 168.54 | 2.15:1 | 445 | 2026-07-28 |
| 福州 | [福清万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E6%B8%85%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.21 × 11.62 | 258.08 | 1.91:1 | 410 | 2026-07-28 |
| 莆田 | [莆田万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%8E%86%E7%94%B0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.71 × 11.332 | 246.02 | 1.92:1 | 348 | 2026-07-28 |
| 龙岩 | [龙岩万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%BE%99%E5%B2%A9%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 401 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 厦门 | [厦门万象影城（万象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 20.41 × 11 | 224.51 | 1.86:1 | 242 | 2026-07-28 |
| 厦门 | [厦门万达影城（SM广场店）二期店](https://cinema.gaoliang.me/cinema/%E5%8E%A6%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88SM%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89%E4%BA%8C%E6%9C%9F%E5%BA%97_Dolby%20Cinema) | Dolby Vision | 11.84 × 6.19 | 73.29 | 1.91:1 | 210 | 2026-07-28 |
| 福州 | [福州万达影城（金融街万达广场店）](https://cinema.gaoliang.me/cinema/%E7%A6%8F%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E8%9E%8D%E8%A1%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 13.81 × 7.44 | 102.75 | 1.86:1 | 232 | 2026-07-28 |

### 江西

共 17 条（IMAX 17；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 上饶 | [上饶万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%8A%E9%A5%B6%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.86 × 12.7 | 303.02 | 1.88:1 | 351 | 2026-07-28 |
| 九江 | [九江万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%9D%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.63 × 11.72 | 265.22 | 1.93:1 | 396 | 2026-07-28 |
| 九江 | [九江横店电影城（IMAX快乐城店）](https://cinema.gaoliang.me/cinema/%E4%B9%9D%E6%B1%9F%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E5%BF%AB%E4%B9%90%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.12 × 10.55 | 212.27 | 1.91:1 | 268 | 2026-07-28 |
| 南昌 | [南昌万象影城（万象汇IMAX激光店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E6%B1%87IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 17.98 × 9.44 | 169.73 | 1.90:1 | 245 | 2026-07-28 |
| 南昌 | [南昌万达影城（万达文化旅游城店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E6%96%87%E5%8C%96%E6%97%85%E6%B8%B8%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.881 × 12.826 | 306.3 | 1.86:1 | 355 | 2026-07-28 |
| 南昌 | [南昌万达影城（八一万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%AB%E4%B8%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.314 × 8.201 | 125.59 | 1.87:1 | 268 | 2026-07-28 |
| 南昌 | [南昌万达影城（红谷滩万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BA%A2%E8%B0%B7%E6%BB%A9%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.59 × 11.62 | 250.88 | 1.86:1 | 312 | 2026-07-28 |
| 南昌 | [南昌万达影城（西湖万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.3 × 10.546 | 203.54 | 1.83:1 | 395 | 2026-07-28 |
| 南昌 | [南昌万达影城（青山湖万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E5%B1%B1%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.66 × 10.803 | 223.19 | 1.91:1 | 374 | 2026-07-28 |
| 南昌 | [南昌星轶IMAX影城（青山湖吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E6%98%8C%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E5%B1%B1%E6%B9%96%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.987 × 9.389 | 159.49 | 1.81:1 | 312 | 2026-07-28 |
| 吉安 | [吉安金逸影城（金鑫瑞德IMAX店）](https://cinema.gaoliang.me/cinema/%E5%90%89%E5%AE%89%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E9%91%AB%E7%91%9E%E5%BE%B7IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 396 | 2026-07-28 |
| 宜春 | [宜春万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%9C%E6%98%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.45 × 11.41 | 244.74 | 1.88:1 | 398 | 2026-07-28 |
| 抚州 | [抚州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%8A%9A%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 406 | 2026-07-28 |
| 景德镇 | [景德镇横店电影城（IMAX九集小镇店）](https://cinema.gaoliang.me/cinema/%E6%99%AF%E5%BE%B7%E9%95%87%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E4%B9%9D%E9%9B%86%E5%B0%8F%E9%95%87%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | — | — | 暂无数据 | 403 | 2026-07-28 |
| 赣州 | [赣州CGV影城（万象城店）](https://cinema.gaoliang.me/cinema/%E8%B5%A3%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.094 × 12.869 | 310.07 | 1.87:1 | 479 | 2026-07-28 |
| 赣州 | [赣州万达影城（经开万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B5%A3%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%8F%E5%BC%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.359 × 8.083 | 124.15 | 1.90:1 | 255 | 2026-07-28 |
| 赣州 | [赣州英皇电影城（杉杉奥特莱斯店）](https://cinema.gaoliang.me/cinema/%E8%B5%A3%E5%B7%9E%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9D%89%E6%9D%89%E5%A5%A5%E7%89%B9%E8%8E%B1%E6%96%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.506 × 10.982 | 225.2 | 1.87:1 | 344 | 2026-07-28 |

### 山东

共 38 条（IMAX 36；杜比影院 2）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 东营 | [东营万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%90%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 389 | 2026-07-28 |
| 东营 | [东营万达影城（东城万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%90%A5%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 332 | 2026-07-28 |
| 临沂 | [临沂CGV影城（泰盛店）](https://cinema.gaoliang.me/cinema/%E4%B8%B4%E6%B2%82CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B3%B0%E7%9B%9B%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.58 × 11.26 | 231.73 | 1.83:1 | 245 | 2026-07-28 |
| 临沂 | [临沂万达影城（滨河万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%B4%E6%B2%82%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BB%A8%E6%B2%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.29 × 8.74 | 142.37 | 1.86:1 | 219 | 2026-07-28 |
| 威海 | [威海万达影城（环翠万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A8%81%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E7%BF%A0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.3 × 10.31 | 198.98 | 1.87:1 | 304 | 2026-07-28 |
| 威海 | [威海幸福蓝海国际影城（华发新天地IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A8%81%E6%B5%B7%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E5%8F%91%E6%96%B0%E5%A4%A9%E5%9C%B0IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.43 × 13.5 | 329.81 | 1.81:1 | 380 | 2026-07-28 |
| 德州 | [德州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BE%B7%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 367 | 2026-07-28 |
| 日照 | [日照万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%97%A5%E7%85%A7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 372 | 2026-07-28 |
| 枣庄 | [枣庄万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9E%A3%E5%BA%84%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.96 × 10.54 | 199.84 | 1.80:1 | 390 | 2026-07-28 |
| 泰安 | [泰安万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B3%B0%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 414 | 2026-07-28 |
| 泰安 | [泰安万达影城（盘古天地店）](https://cinema.gaoliang.me/cinema/%E6%B3%B0%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9B%98%E5%8F%A4%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.49 × 12.15 | 273.25 | 1.85:1 | 368 | 2026-07-28 |
| 济南 | [山东省科技馆（新馆）](https://cinema.gaoliang.me/cinema/%E5%B1%B1%E4%B8%9C%E7%9C%81%E7%A7%91%E6%8A%80%E9%A6%86%EF%BC%88%E6%96%B0%E9%A6%86%EF%BC%89_IMAX) | IMAX GT Laser | 29 × 21 | 609 | 1.38:1 | 575 | 2026-07-28 |
| 济南 | [济南CGV影城（印象城店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.54 × 10.48 | 215.26 | 1.96:1 | 225 | 2026-07-28 |
| 济南 | [济南UME影城（龙湖西城天街激光IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97UME%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E8%A5%BF%E5%9F%8E%E5%A4%A9%E8%A1%97%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.9 × 10.75 | 213.92 | 1.85:1 | 322 | 2026-07-28 |
| 济南 | [济南万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.85 × 11.73 | 268.03 | 1.95:1 | 396 | 2026-07-28 |
| 济南 | [济南万达影城（高新万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.02 × 11.85 | 272.79 | 1.94:1 | 360 | 2026-07-28 |
| 济南 | [济南万达影城（魏家庄万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AD%8F%E5%AE%B6%E5%BA%84%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.24 × 11.02 | 223.04 | 1.84:1 | 362 | 2026-07-28 |
| 济南 | [济南幸福蓝海国际影城（全运村中央广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%A8%E8%BF%90%E6%9D%91%E4%B8%AD%E5%A4%AE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.57 × 12.9 | 316.95 | 1.90:1 | 371 | 2026-07-28 |
| 济宁 | [济宁万达影城（太白路万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%AA%E7%99%BD%E8%B7%AF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 350 | 2026-07-28 |
| 淄博 | [淄博万达影城（富力万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%84%E5%8D%9A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AF%8C%E5%8A%9B%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.36 × 10.15 | 196.5 | 1.91:1 | 342 | 2026-07-28 |
| 淄博 | [淄博齐纳国际影城（银座店）](https://cinema.gaoliang.me/cinema/%E6%B7%84%E5%8D%9A%E9%BD%90%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%93%B6%E5%BA%A7%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.04 × 11.55 | 254.56 | 1.91:1 | 317 | 2026-07-28 |
| 滨州 | [滨州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%BB%A8%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 431 | 2026-07-28 |
| 潍坊 | [潍坊万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%BD%8D%E5%9D%8A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.51 × 11.79 | 265.39 | 1.91:1 | 394 | 2026-07-28 |
| 潍坊 | [潍坊万达影城（寿光万达广场店）](https://cinema.gaoliang.me/cinema/%E6%BD%8D%E5%9D%8A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AF%BF%E5%85%89%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.34 × 10.49 | 213.37 | 1.94:1 | 342 | 2026-07-28 |
| 潍坊 | [潍坊和平影城](https://cinema.gaoliang.me/cinema/%E6%BD%8D%E5%9D%8A%E5%92%8C%E5%B9%B3%E5%BD%B1%E5%9F%8E_IMAX) | IMAX XT | — | — | 暂无数据 | 366 | 2026-07-28 |
| 烟台 | [烟台万达影城（芝罘万达广场店）](https://cinema.gaoliang.me/cinema/%E7%83%9F%E5%8F%B0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8A%9D%E7%BD%98%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 409 | 2026-07-28 |
| 烟台 | [烟台幸福蓝海国际影城（IMAX店）](https://cinema.gaoliang.me/cinema/%E7%83%9F%E5%8F%B0%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.21 × 11.42 | 242.22 | 1.86:1 | 426 | 2026-07-28 |
| 菏泽 | [菏泽万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%8F%8F%E6%B3%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.9 × 10.85 | 226.76 | 1.93:1 | 368 | 2026-07-28 |
| 青岛 | [青岛CGV影城（万象城店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9BCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.21 × 12.03 | 267.19 | 1.85:1 | 442 | 2026-07-28 |
| 青岛 | [青岛CGV影城（新都心店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9BCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E9%83%BD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 229 | 2026-07-28 |
| 青岛 | [青岛SFC上影影城（金狮广场店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9BSFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E7%8B%AE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 291 | 2026-07-28 |
| 青岛 | [青岛万达影城（CBD万达广场店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9B%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88CBD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.2 × 10.997 | 233.14 | 1.93:1 | 374 | 2026-07-28 |
| 青岛 | [青岛万达影城（东方影都店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9B%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E6%96%B9%E5%BD%B1%E9%83%BD%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 374 | 2026-07-28 |
| 青岛 | [青岛万达影城（李沧万达广场店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9B%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9D%8E%E6%B2%A7%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.75 × 11.691 | 265.97 | 1.95:1 | 348 | 2026-07-28 |
| 青岛 | [青岛万达影城（青特万达广场店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9B%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E7%89%B9%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.11 × 12.57 | 303.06 | 1.92:1 | 339 | 2026-07-28 |
| 青岛 | [青岛星轶IMAX影城（黄岛吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E9%9D%92%E5%B2%9B%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BB%84%E5%B2%9B%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.14 × 12.05 | 266.79 | 1.84:1 | 321 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 济南 | [济南CGV影城（龙湖店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 13.305 × 7.501 | 99.8 | 1.77:1 | 220 | 2026-07-28 |
| 济南 | [济南万达影城（世茂广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%8E%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%96%E8%8C%82%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 24 × 12.972 | 311.33 | 1.85:1 | 514 | 2026-07-28 |

### 河南

共 19 条（IMAX 19；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 三门峡 | [三门峡万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%89%E9%97%A8%E5%B3%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.928 × 10.578 | 210.8 | 1.88:1 | 402 | 2026-07-28 |
| 南阳 | [南阳万达影城（中泰广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E6%B3%B0%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.9 × 11.75 | 257.32 | 1.86:1 | 321 | 2026-07-28 |
| 商丘 | [商丘万达影城（睢阳万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%95%86%E4%B8%98%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9D%A2%E9%98%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.776 × 10.49 | 207.45 | 1.89:1 | 387 | 2026-07-28 |
| 安阳 | [安阳万达影城（文峰万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%89%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%87%E5%B3%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.583 × 10.648 | 219.17 | 1.93:1 | 400 | 2026-07-28 |
| 平顶山 | [平顶山万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%B3%E9%A1%B6%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.03 × 10.93 | 229.86 | 1.92:1 | 375 | 2026-07-28 |
| 开封 | [开封万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%BC%80%E5%B0%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.13 × 10.44 | 210.16 | 1.93:1 | 363 | 2026-07-28 |
| 新乡 | [新乡万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%96%B0%E4%B9%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.47 × 11.2 | 240.46 | 1.92:1 | 359 | 2026-07-28 |
| 洛阳 | [洛阳万达影城（万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%B4%9B%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16.42 × 8.3 | 136.29 | 1.98:1 | 295 | 2026-07-28 |
| 焦作 | [焦作万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E7%84%A6%E4%BD%9C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.57 × 10.65 | 219.07 | 1.93:1 | 386 | 2026-07-28 |
| 许昌 | [许昌万达影城（万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E8%AE%B8%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.757 × 10.194 | 191.21 | 1.84:1 | 357 | 2026-07-28 |
| 郑州 | [郑州CGV影城（信万广场店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BF%A1%E4%B8%87%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.6 × 10.64 | 219.18 | 1.94:1 | 222 | 2026-07-28 |
| 郑州 | [郑州CGV影城（大卫城店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E5%8D%AB%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.032 × 11.937 | 263 | 1.85:1 | 396 | 2026-07-28 |
| 郑州 | [郑州CGV影城（正弘城店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AD%A3%E5%BC%98%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.92 × 13.1 | 326.45 | 1.90:1 | 322 | 2026-07-28 |
| 郑州 | [郑州万象影城（郑东万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9E%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%83%91%E4%B8%9C%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.64 × 10.2 | 200.33 | 1.93:1 | 369 | 2026-07-28 |
| 郑州 | [郑州万达影城（中原万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%8E%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.85 × 11.761 | 268.74 | 1.94:1 | 353 | 2026-07-28 |
| 郑州 | [郑州万达影城（二七万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%8C%E4%B8%83%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.448 × 11.525 | 247.19 | 1.86:1 | 423 | 2026-07-28 |
| 郑州 | [郑州万达影城（惠济万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%83%A0%E6%B5%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.1 × 12.22 | 282.28 | 1.89:1 | 396 | 2026-07-28 |
| 郑州 | [郑州金逸影城（高新大学城IMAX店）](https://cinema.gaoliang.me/cinema/%E9%83%91%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E5%A4%A7%E5%AD%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.603 × 9.337 | 164.36 | 1.89:1 | 263 | 2026-07-28 |
| 鹤壁 | [鹤壁万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%B9%A4%E5%A3%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.233 × 10.548 | 202.87 | 1.82:1 | 350 | 2026-07-28 |

### 湖北

共 32 条（IMAX 31；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 仙桃 | [仙桃金逸影城（环球中心IMAX店）](https://cinema.gaoliang.me/cinema/%E4%BB%99%E6%A1%83%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E7%90%83%E4%B8%AD%E5%BF%83IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.92 × 11.55 | 253.18 | 1.90:1 | 312 | 2026-07-28 |
| 十堰 | [十堰万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%81%E5%A0%B0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.61 × 11.94 | 269.96 | 1.89:1 | 352 | 2026-07-28 |
| 孝感 | [孝感金逸影城（汉川IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AD%9D%E6%84%9F%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%89%E5%B7%9DIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.99 × 10.64 | 212.69 | 1.88:1 | 239 | 2026-07-28 |
| 宜昌 | [宜昌CGV影城（国贸大厦店）](https://cinema.gaoliang.me/cinema/%E5%AE%9C%E6%98%8CCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9B%BD%E8%B4%B8%E5%A4%A7%E5%8E%A6%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.857 × 10.446 | 207.43 | 1.90:1 | 264 | 2026-07-28 |
| 宜昌 | [宜昌万达影城（伍家岗万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%9C%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BC%8D%E5%AE%B6%E5%B2%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.693 × 11.164 | 231.02 | 1.85:1 | 318 | 2026-07-28 |
| 宜昌 | [宜昌万达影城（夷陵万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%9C%E6%98%8C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%B7%E9%99%B5%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.11 × 9.202 | 157.45 | 1.86:1 | 307 | 2026-07-28 |
| 武汉 | [武汉CGV影城（凯德店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%87%AF%E5%BE%B7%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.7 × 11.685 | 241.88 | 1.77:1 | 269 | 2026-07-28 |
| 武汉 | [武汉CGV影城（奥山店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%A5%E5%B1%B1%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.91 × 13.04 | 298.75 | 1.76:1 | 418 | 2026-07-28 |
| 武汉 | [武汉CGV影城（洪山店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B4%AA%E5%B1%B1%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.77 × 11.77 | 268 | 1.93:1 | 362 | 2026-07-28 |
| 武汉 | [武汉CGV影城（金桥店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E6%A1%A5%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.44 × 11.656 | 261.56 | 1.93:1 | 367 | 2026-07-28 |
| 武汉 | [武汉CGV影城（金银潭店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E9%93%B6%E6%BD%AD%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.81 × 9.03 | 160.82 | 1.97:1 | 346 | 2026-07-28 |
| 武汉 | [武汉万达影城（汉街万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%89%E8%A1%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.22 × 12.05 | 279.8 | 1.93:1 | 265 | 2026-07-28 |
| 武汉 | [武汉万达影城（经开万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%8F%E5%BC%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.12 × 10.55 | 212.27 | 1.91:1 | 259 | 2026-07-28 |
| 武汉 | [武汉万达影城（菱角湖万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8F%B1%E8%A7%92%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.5 × 10.77 | 210.01 | 1.81:1 | 316 | 2026-07-28 |
| 武汉 | [武汉万达影城（金银湖万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E9%93%B6%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.42 × 10.33 | 200.61 | 1.88:1 | 359 | 2026-07-28 |
| 武汉 | [武汉万达影城（阳逻万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%98%B3%E9%80%BB%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.27 × 11.46 | 243.75 | 1.86:1 | 344 | 2026-07-28 |
| 武汉 | [武汉博纳院线影城（光谷星悦广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E5%8D%9A%E7%BA%B3%E9%99%A2%E7%BA%BF%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E8%B0%B7%E6%98%9F%E6%82%A6%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.639 × 12.492 | 295.3 | 1.89:1 | 459 | 2026-07-28 |
| 武汉 | [武汉武商摩尔国际电影城](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E6%AD%A6%E5%95%86%E6%91%A9%E5%B0%94%E5%9B%BD%E9%99%85%E7%94%B5%E5%BD%B1%E5%9F%8E_IMAX) | IMAX CoLA | 21.34 × 11.1 | 236.87 | 1.92:1 | 294 | 2026-07-28 |
| 武汉 | [武汉武商梦时代摩尔影城](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E6%AD%A6%E5%95%86%E6%A2%A6%E6%97%B6%E4%BB%A3%E6%91%A9%E5%B0%94%E5%BD%B1%E5%9F%8E_IMAX) | IMAX CoLA | 20.16 × 10.63 | 214.3 | 1.90:1 | 370 | 2026-07-28 |
| 武汉 | [武汉百美汇影城（激光IMAX恒隆广场店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E7%99%BE%E7%BE%8E%E6%B1%87%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%BF%80%E5%85%89IMAX%E6%81%92%E9%9A%86%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.6 × 11.34 | 244.94 | 1.90:1 | 276 | 2026-07-28 |
| 武汉 | [武汉金逸影城（人信汇店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%BA%E4%BF%A1%E6%B1%87%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.31 × 12.1 | 257.85 | 1.76:1 | 358 | 2026-07-28 |
| 武汉 | [武汉金逸影城（光美荟聚IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E8%8D%9F%E8%81%9AIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.52 × 10.39 | 202.81 | 1.88:1 | 278 | 2026-07-28 |
| 武汉 | [武汉金逸影城（大悦城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%82%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.73 × 10.7 | 211.11 | 1.84:1 | 255 | 2026-07-28 |
| 武汉 | [武汉金逸影城（蔡甸IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%94%A1%E7%94%B8IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.06 × 10.4 | 208.62 | 1.93:1 | 275 | 2026-07-28 |
| 武汉 | [武汉金逸影城（销品茂IMAX店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%94%80%E5%93%81%E8%8C%82IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.42 × 9.25 | 161.14 | 1.88:1 | 304 | 2026-07-28 |
| 荆州 | [荆州万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E8%8D%86%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.557 × 10.989 | 225.9 | 1.87:1 | 411 | 2026-07-28 |
| 荆门 | [荆门万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E8%8D%86%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 397 | 2026-07-28 |
| 襄阳 | [襄阳万达影城（万达广场IMAX激光店）](https://cinema.gaoliang.me/cinema/%E8%A5%84%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.877 × 10.009 | 188.94 | 1.89:1 | 333 | 2026-07-28 |
| 黄冈 | [武穴银兴国际影城（IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E7%A9%B4%E9%93%B6%E5%85%B4%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.14 × 11.05 | 233.6 | 1.91:1 | — | 2026-07-28 |
| 黄冈 | [黄冈万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%BB%84%E5%86%88%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 372 | 2026-07-28 |
| 黄石 | [黄石万达影城（黄石港万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%BB%84%E7%9F%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BB%84%E7%9F%B3%E6%B8%AF%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 387 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 武汉 | [武汉万象影城（万象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E6%B1%89%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 18.98 × 10.258 | 194.7 | 1.85:1 | 371 | 2026-07-28 |

### 湖南

共 25 条（IMAX 25；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 岳阳 | [岳阳CGV影城（步步高店）](https://cinema.gaoliang.me/cinema/%E5%B2%B3%E9%98%B3CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AD%A5%E6%AD%A5%E9%AB%98%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 280 | 2026-07-28 |
| 常德 | [常德万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B8%B8%E5%BE%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 357 | 2026-07-28 |
| 株洲 | [株洲横店电影城（IMAX世贸店）](https://cinema.gaoliang.me/cinema/%E6%A0%AA%E6%B4%B2%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E4%B8%96%E8%B4%B8%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16.563 × 8.863 | 146.8 | 1.87:1 | 239 | 2026-07-28 |
| 湘潭 | [湘潭万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B9%98%E6%BD%AD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.068 × 11.475 | 241.76 | 1.84:1 | 327 | 2026-07-28 |
| 湘潭 | [湘潭横店电影城（IMAX步步高店）](https://cinema.gaoliang.me/cinema/%E6%B9%98%E6%BD%AD%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E6%AD%A5%E6%AD%A5%E9%AB%98%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.802 × 10.664 | 211.17 | 1.86:1 | 280 | 2026-07-28 |
| 湘潭 | [湘潭金逸影城（步步高IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B9%98%E6%BD%AD%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AD%A5%E6%AD%A5%E9%AB%98IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.151 × 10.369 | 198.58 | 1.85:1 | 251 | 2026-07-28 |
| 益阳 | [益阳万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E7%9B%8A%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 429 | 2026-07-28 |
| 衡阳 | [衡阳万达影城（万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E8%A1%A1%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.22 × 10.43 | 210.89 | 1.94:1 | 368 | 2026-07-28 |
| 衡阳 | [衡阳金逸影城（中心城店）](https://cinema.gaoliang.me/cinema/%E8%A1%A1%E9%98%B3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%BF%83%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 486 | 2026-07-28 |
| 邵阳 | [邵阳万达影城（大汉悦IMAX店）](https://cinema.gaoliang.me/cinema/%E9%82%B5%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%B1%89%E6%82%A6IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 231 | 2026-07-28 |
| 郴州 | [郴州万达影城（生源广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%83%B4%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%94%9F%E6%BA%90%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.75 × 11.7 | 266.18 | 1.94:1 | 384 | 2026-07-28 |
| 长沙 | [宁乡金逸影城（翡翠湖IMAX店）](https://cinema.gaoliang.me/cinema/%E5%AE%81%E4%B9%A1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BF%A1%E7%BF%A0%E6%B9%96IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.226 × 10.185 | 195.82 | 1.89:1 | 333 | 2026-07-28 |
| 长沙 | [长沙CGV影城（德思勤店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BE%B7%E6%80%9D%E5%8B%A4%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.818 × 10.661 | 211.28 | 1.86:1 | 268 | 2026-07-28 |
| 长沙 | [长沙CGV影城（梅溪湖店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A2%85%E6%BA%AA%E6%B9%96%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.855 × 11.672 | 255.09 | 1.87:1 | 402 | 2026-07-28 |
| 长沙 | [长沙VHC维港影城（运达汇激光IMAX店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99VHC%E7%BB%B4%E6%B8%AF%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%BF%90%E8%BE%BE%E6%B1%87%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.358 × 13.091 | 318.87 | 1.86:1 | 452 | 2026-07-28 |
| 长沙 | [长沙万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.45 × 9.52 | 175.64 | 1.94:1 | 280 | 2026-07-28 |
| 长沙 | [长沙万达影城（中茂城IMAX店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E8%8C%82%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.82 × 11.4 | 248.75 | 1.91:1 | 324 | 2026-07-28 |
| 长沙 | [长沙万达影城（开福万达广场IMAX店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BC%80%E7%A6%8F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.16 × 13.46 | 311.73 | 1.72:1 | 438 | 2026-07-28 |
| 长沙 | [长沙万达影城（梅溪湖步步高IMAX店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A2%85%E6%BA%AA%E6%B9%96%E6%AD%A5%E6%AD%A5%E9%AB%98IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.755 × 11.938 | 259.71 | 1.82:1 | 426 | 2026-07-28 |
| 长沙 | [长沙万达影城（解放路IMAX激光店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A7%A3%E6%94%BE%E8%B7%AFIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.42 × 11.51 | 258.05 | 1.95:1 | 382 | 2026-07-28 |
| 长沙 | [长沙博纳国际影城（龙湖IMAX店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.573 × 9.495 | 166.86 | 1.85:1 | 235 | 2026-07-28 |
| 长沙 | [长沙寰映影城（荟聚IMAX激光店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8D%9F%E8%81%9AIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 23.847 × 13.328 | 317.83 | 1.79:1 | 311 | 2026-07-28 |
| 长沙 | [长沙星光嘉映IMAX影城（月亮岛天街店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E6%98%9F%E5%85%89%E5%98%89%E6%98%A0IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9C%88%E4%BA%AE%E5%B2%9B%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.013 × 9.58 | 172.56 | 1.88:1 | 293 | 2026-07-28 |
| 长沙 | [长沙横店电影城（IMAX悠游小镇店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E6%82%A0%E6%B8%B8%E5%B0%8F%E9%95%87%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.728 × 10.379 | 194.38 | 1.80:1 | 249 | 2026-07-28 |
| 长沙 | [长沙横店纷腾影城（IMAX观沙岭花园城店）](https://cinema.gaoliang.me/cinema/%E9%95%BF%E6%B2%99%E6%A8%AA%E5%BA%97%E7%BA%B7%E8%85%BE%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E8%A7%82%E6%B2%99%E5%B2%AD%E8%8A%B1%E5%9B%AD%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.43 × 9.25 | 161.23 | 1.88:1 | 278 | 2026-07-28 |

### 广东

共 105 条（IMAX 101；杜比影院 4）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 东莞 | [东莞CGV影城（国贸城店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9B%BD%E8%B4%B8%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.49 × 12.28 | 263.9 | 1.75:1 | 366 | 2026-07-28 |
| 东莞 | [东莞万润影城（寮步IMAX乐荟城）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E6%B6%A6%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AF%AE%E6%AD%A5IMAX%E4%B9%90%E8%8D%9F%E5%9F%8E%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.5 × 11.4 | 233.7 | 1.80:1 | 318 | 2026-07-28 |
| 东莞 | [东莞万达影城（东城万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.3 × 10.9 | 210.37 | 1.77:1 | 322 | 2026-07-28 |
| 东莞 | [东莞万达影城（华南MALL—IMAXGT激光店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%8E%E5%8D%97MALL%E2%80%94IMAXGT%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX GT Laser | 27.768 × 20.295 | 563.55 | 1.37:1 | 503 | 2026-07-28 |
| 东莞 | [东莞万达影城（厚街万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8E%9A%E8%A1%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.3 × 12.7 | 283.21 | 1.76:1 | 341 | 2026-07-28 |
| 东莞 | [东莞万达影城（虎门万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%99%8E%E9%97%A8%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.7 × 11.6 | 240.12 | 1.78:1 | 354 | 2026-07-28 |
| 东莞 | [东莞万达影城（长安万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%95%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.85 × 12.47 | 309.88 | 1.99:1 | 407 | 2026-07-28 |
| 东莞 | [东莞寰象影城（旗云广场IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E5%AF%B0%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%97%97%E4%BA%91%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.476 × 10.196 | 198.58 | 1.91:1 | 439 | 2026-07-28 |
| 东莞 | [东莞市科学技术博物馆](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E5%B8%82%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E5%8D%9A%E7%89%A9%E9%A6%86_IMAX) | IMAX GT Dome | — | — | 圆形 1:1 | 300 | 2026-07-28 |
| 中山 | [中山金逸影城（樱花里IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%AD%E5%B1%B1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A8%B1%E8%8A%B1%E9%87%8CIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.295 × 12.418 | 289.28 | 1.88:1 | 385 | 2026-07-28 |
| 中山 | [中山金逸影城（远洋城IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B8%AD%E5%B1%B1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%BF%9C%E6%B4%8B%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.846 × 12.478 | 297.55 | 1.91:1 | 480 | 2026-07-28 |
| 佛山 | [佛山CGV影城（顺德海骏达店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A1%BA%E5%BE%B7%E6%B5%B7%E9%AA%8F%E8%BE%BE%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.125 × 11.061 | 233.66 | 1.91:1 | 316 | 2026-07-28 |
| 佛山 | [佛山万达影城（三水万达广场店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%89%E6%B0%B4%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.22 × 11.27 | 239.15 | 1.88:1 | 352 | 2026-07-28 |
| 佛山 | [佛山万达影城（北滘悦然广场店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E6%BB%98%E6%82%A6%E7%84%B6%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.501 × 10.435 | 213.93 | 1.96:1 | 259 | 2026-07-28 |
| 佛山 | [佛山万达影城（南海万达广场店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.988 × 11.133 | 233.66 | 1.89:1 | 409 | 2026-07-28 |
| 佛山 | [佛山万达影城（越秀悦汇广场店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%B6%8A%E7%A7%80%E6%82%A6%E6%B1%87%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.49 × 9.98 | 184.53 | 1.85:1 | 229 | 2026-07-28 |
| 佛山 | [佛山金逸影城（顺德彩虹IMAX店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A1%BA%E5%BE%B7%E5%BD%A9%E8%99%B9IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.044 × 12.519 | 301.01 | 1.92:1 | 428 | 2026-07-28 |
| 佛山 | [佛山金逸影城（鹏瑞利IMAX店）](https://cinema.gaoliang.me/cinema/%E4%BD%9B%E5%B1%B1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%B9%8F%E7%91%9E%E5%88%A9IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.406 × 10.498 | 203.72 | 1.85:1 | 332 | 2026-07-28 |
| 广州 | [广州CGV影城（悦汇城店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%82%A6%E6%B1%87%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.599 × 8.186 | 127.69 | 1.91:1 | 150 | 2026-07-28 |
| 广州 | [广州CGV影城（永旺店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B0%B8%E6%97%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.92 × 9.8 | 185.42 | 1.93:1 | 234 | 2026-07-28 |
| 广州 | [广州万达影城（万胜围店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%83%9C%E5%9B%B4%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.77 × 12.5 | 297.12 | 1.90:1 | 427 | 2026-07-28 |
| 广州 | [广州万达影城（南岗万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E5%B2%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.84 × 10.58 | 209.91 | 1.88:1 | 391 | 2026-07-28 |
| 广州 | [广州万达影城（南沙万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E6%B2%99%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.076 × 11.092 | 233.77 | 1.90:1 | 387 | 2026-07-28 |
| 广州 | [广州万达影城（增城万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A2%9E%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.593 × 10.347 | 202.73 | 1.89:1 | 314 | 2026-07-28 |
| 广州 | [广州万达影城（天河智慧城广百广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E6%B2%B3%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B9%BF%E7%99%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.007 × 11.385 | 239.16 | 1.85:1 | 251 | 2026-07-28 |
| 广州 | [广州万达影城（新塘万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E5%A1%98%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.59 × 11.34 | 233.49 | 1.82:1 | 365 | 2026-07-28 |
| 广州 | [广州万达影城（番禺万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%95%AA%E7%A6%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.807 × 11.13 | 242.71 | 1.96:1 | 360 | 2026-07-28 |
| 广州 | [广州万达影城（白云万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%99%BD%E4%BA%91%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.498 × 11.576 | 248.86 | 1.86:1 | 388 | 2026-07-28 |
| 广州 | [广州万达影城（花都融創茂店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8A%B1%E9%83%BD%E8%9E%8D%E5%89%B5%E8%8C%82%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.44 × 10.56 | 215.85 | 1.94:1 | 312 | 2026-07-28 |
| 广州 | [广州万达影城（萝岗万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%90%9D%E5%B2%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.05 × 11.564 | 254.99 | 1.91:1 | 379 | 2026-07-28 |
| 广州 | [广州中影南方影城（IMAX科韵路店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E4%B8%AD%E5%BD%B1%E5%8D%97%E6%96%B9%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E7%A7%91%E9%9F%B5%E8%B7%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.398 × 10.375 | 211.63 | 1.97:1 | 422 | 2026-07-28 |
| 广州 | [广州博纳UA IMAX花城汇电影城](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E5%8D%9A%E7%BA%B3UA%20IMAX%E8%8A%B1%E5%9F%8E%E6%B1%87%E7%94%B5%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 21.84 × 11.495 | 251.05 | 1.90:1 | 290 | 2026-07-28 |
| 广州 | [广州卢米埃影城（合生店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%90%88%E7%94%9F%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.575 × 10.503 | 205.6 | 1.86:1 | 248 | 2026-07-28 |
| 广州 | [广州寰映影城（天河环贸店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E6%B2%B3%E7%8E%AF%E8%B4%B8%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.62 × 9.7 | 180.61 | 1.92:1 | 210 | 2026-07-28 |
| 广州 | [广州寰映影城（金茂广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E8%8C%82%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.62 × 9.1 | 160.34 | 1.94:1 | 220 | 2026-07-28 |
| 广州 | [广州横店电影城（荔湾健康港店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8D%94%E6%B9%BE%E5%81%A5%E5%BA%B7%E6%B8%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.07 × 10.955 | 230.82 | 1.92:1 | 351 | 2026-07-28 |
| 广州 | [广州百丽宫影城（IMAX猎德igc店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E7%8C%8E%E5%BE%B7igc%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.233 × 10.59 | 214.27 | 1.91:1 | 394 | 2026-07-28 |
| 广州 | [广州美亚影城（云门店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E7%BE%8E%E4%BA%9A%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%91%E9%97%A8%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.627 × 11.727 | 253.62 | 1.84:1 | 349 | 2026-07-28 |
| 广州 | [广州金逸·永汉影城（荔胜广百广场IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%C2%B7%E6%B0%B8%E6%B1%89%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8D%94%E8%83%9C%E5%B9%BF%E7%99%BE%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.41 × 10.037 | 184.78 | 1.83:1 | 240 | 2026-07-28 |
| 广州 | [广州金逸影城（三溪美林天地IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%89%E6%BA%AA%E7%BE%8E%E6%9E%97%E5%A4%A9%E5%9C%B0IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.244 × 11.187 | 237.66 | 1.90:1 | 395 | 2026-07-28 |
| 广州 | [广州金逸影城（从化远达汇聚IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BB%8E%E5%8C%96%E8%BF%9C%E8%BE%BE%E6%B1%87%E8%81%9AIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.07 × 10.955 | 230.82 | 1.92:1 | 395 | 2026-07-28 |
| 广州 | [广州金逸影城（光美三溪IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E4%B8%89%E6%BA%AAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.65 × 9.74 | 191.39 | 2.02:1 | 271 | 2026-07-28 |
| 广州 | [广州金逸影城（光美大石IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E5%A4%A7%E7%9F%B3IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.114 × 11.082 | 233.99 | 1.91:1 | 394 | 2026-07-28 |
| 广州 | [广州金逸影城（光美沙湾IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E6%B2%99%E6%B9%BEIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.72 × 12 | 272.64 | 1.89:1 | 428 | 2026-07-28 |
| 广州 | [广州金逸影城（太阳城IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%AA%E9%98%B3%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 14.273 × 7.417 | 105.86 | 1.92:1 | 303 | 2026-07-28 |
| 广州 | [广州金逸影城（海珠城激光IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E7%8F%A0%E5%9F%8E%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.54 × 10.44 | 214.44 | 1.97:1 | 327 | 2026-07-28 |
| 广州 | [广州金逸影城（白云万象汇IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%99%BD%E4%BA%91%E4%B8%87%E8%B1%A1%E6%B1%87IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.74 × 10.944 | 226.98 | 1.90:1 | 417 | 2026-07-28 |
| 广州 | [广州飞扬影城（IMAX激光乐峰店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%A3%9E%E6%89%AC%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E6%BF%80%E5%85%89%E4%B9%90%E5%B3%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 15.5 × 8.5 | 131.75 | 1.82:1 | 372 | 2026-07-28 |
| 广州 | [广州飞扬影城（北京路IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%A3%9E%E6%89%AC%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8C%97%E4%BA%AC%E8%B7%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.755 × 9.87 | 185.11 | 1.90:1 | 376 | 2026-07-28 |
| 广州 | [广州飞扬影城（正佳IMAX店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%B7%9E%E9%A3%9E%E6%89%AC%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%AD%A3%E4%BD%B3IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.31 × 10.69 | 217.11 | 1.90:1 | 411 | 2026-07-28 |
| 惠州 | [惠州万达影城（大亚湾万达广场店）](https://cinema.gaoliang.me/cinema/%E6%83%A0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E4%BA%9A%E6%B9%BE%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21 × 10.9 | 228.9 | 1.93:1 | 391 | 2026-07-28 |
| 惠州 | [惠州万达影城（港惠激光IMAX店）](https://cinema.gaoliang.me/cinema/%E6%83%A0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B8%AF%E6%83%A0%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.22 × 12.05 | 279.8 | 1.93:1 | 409 | 2026-07-28 |
| 惠州 | [惠州万达影城（金山湖店）](https://cinema.gaoliang.me/cinema/%E6%83%A0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E5%B1%B1%E6%B9%96%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.28 × 11.09 | 236 | 1.92:1 | 198 | 2026-07-28 |
| 惠州 | [惠州佳兆业国际影城](https://cinema.gaoliang.me/cinema/%E6%83%A0%E5%B7%9E%E4%BD%B3%E5%85%86%E4%B8%9A%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 21.259 × 11.433 | 243.05 | 1.86:1 | 555 | 2026-07-28 |
| 揭阳 | [揭阳万达影城（榕城万达广场店）](https://cinema.gaoliang.me/cinema/%E6%8F%AD%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%A6%95%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.84 × 10.63 | 210.9 | 1.87:1 | 282 | 2026-07-28 |
| 梅州 | [梅州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%A2%85%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 325 | 2026-07-28 |
| 汕头 | [汕头CGV影城（群光广场店）](https://cinema.gaoliang.me/cinema/%E6%B1%95%E5%A4%B4CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BE%A4%E5%85%89%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.21 × 11.17 | 236.92 | 1.90:1 | 243 | 2026-07-28 |
| 汕头 | [汕头万达影院（金平万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B1%95%E5%A4%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E9%99%A2%EF%BC%88%E9%87%91%E5%B9%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.18 × 10.99 | 232.77 | 1.93:1 | 396 | 2026-07-28 |
| 江门 | [江门万达影城（新会IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B1%9F%E9%97%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E4%BC%9AIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.9 × 11.15 | 221.88 | 1.78:1 | 350 | 2026-07-28 |
| 深圳 | [深圳CGV影城（卓悦中心店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%93%E6%82%A6%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.85 × 11.76 | 268.72 | 1.94:1 | 368 | 2026-07-28 |
| 深圳 | [深圳CGV影城（壹方城店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A3%B9%E6%96%B9%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.486 × 10.909 | 223.48 | 1.88:1 | 324 | 2026-07-28 |
| 深圳 | [深圳CGV影城（红山6979店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BA%A2%E5%B1%B16979%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.24 × 11.572 | 257.36 | 1.92:1 | 308 | 2026-07-28 |
| 深圳 | [深圳CINESKY新天影院IMAX 壹方天地C区（壹方城）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CINESKY%E6%96%B0%E5%A4%A9%E5%BD%B1%E9%99%A2IMAX%20%E5%A3%B9%E6%96%B9%E5%A4%A9%E5%9C%B0C%E5%8C%BA%EF%BC%88%E5%A3%B9%E6%96%B9%E5%9F%8E%EF%BC%89_IMAX) | IMAX CoLA | 21.787 × 11.907 | 259.42 | 1.83:1 | 424 | 2026-07-28 |
| 深圳 | [深圳CINESKY新天影院IMAX（壹方天地A区）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CINESKY%E6%96%B0%E5%A4%A9%E5%BD%B1%E9%99%A2IMAX%EF%BC%88%E5%A3%B9%E6%96%B9%E5%A4%A9%E5%9C%B0A%E5%8C%BA%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.478 × 11.677 | 262.48 | 1.92:1 | 583 | 2026-07-28 |
| 深圳 | [深圳CINESKY新天影院（万科广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3CINESKY%E6%96%B0%E5%A4%A9%E5%BD%B1%E9%99%A2%EF%BC%88%E4%B8%87%E7%A7%91%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.939 × 10.351 | 196.04 | 1.83:1 | 315 | 2026-07-28 |
| 深圳 | [深圳万象影城（布吉万象汇IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B8%83%E5%90%89%E4%B8%87%E8%B1%A1%E6%B1%87IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.858 × 10.604 | 210.57 | 1.87:1 | 325 | 2026-07-28 |
| 深圳 | [深圳万象影城（龙岗天安数码城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E5%B2%97%E5%A4%A9%E5%AE%89%E6%95%B0%E7%A0%81%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.438 × 11.084 | 226.53 | 1.84:1 | 314 | 2026-07-28 |
| 深圳 | [深圳万达影城（光明万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E6%98%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.92 × 9.27 | 166.12 | 1.93:1 | 269 | 2026-07-28 |
| 深圳 | [深圳万达影城（宝安勤诚达店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E5%AE%89%E5%8B%A4%E8%AF%9A%E8%BE%BE%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.44 × 10.62 | 217.07 | 1.92:1 | 286 | 2026-07-28 |
| 深圳 | [深圳万达影城（海雅广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E9%9B%85%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.55 × 9.09 | 159.53 | 1.93:1 | 302 | 2026-07-28 |
| 深圳 | [深圳万达影城（盐田壹海城店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%9B%90%E7%94%B0%E5%A3%B9%E6%B5%B7%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.12 × 10.42 | 209.65 | 1.93:1 | 269 | 2026-07-28 |
| 深圳 | [深圳万达影城（龙岗万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E5%B2%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.64 × 10.1 | 188.26 | 1.85:1 | 276 | 2026-07-28 |
| 深圳 | [深圳中影晴瑞影城IMAX](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%AD%E5%BD%B1%E6%99%B4%E7%91%9E%E5%BD%B1%E5%9F%8EIMAX_IMAX) | IMAX Digital Xenon | 20.142 × 11.086 | 223.29 | 1.82:1 | 380 | 2026-07-28 |
| 深圳 | [深圳卢米埃影城（汇港店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%87%E6%B8%AF%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.78 × 11.86 | 270.17 | 1.92:1 | 331 | 2026-07-28 |
| 深圳 | [深圳寰映影城（坂田万科广场店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9D%82%E7%94%B0%E4%B8%87%E7%A7%91%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 15.621 × 7.707 | 120.39 | 2.03:1 | 269 | 2026-07-28 |
| 深圳 | [深圳寰映影城（宝安大悦城店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E5%AE%89%E5%A4%A7%E6%82%A6%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.48 × 9.75 | 180.18 | 1.90:1 | 242 | 2026-07-28 |
| 深圳 | [深圳寰映影城（怀德万象汇店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%80%80%E5%BE%B7%E4%B8%87%E8%B1%A1%E6%B1%87%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.1 × 9.94 | 189.85 | 1.92:1 | 232 | 2026-07-28 |
| 深圳 | [深圳寰映影城（深圳湾睿印店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B7%B1%E5%9C%B3%E6%B9%BE%E7%9D%BF%E5%8D%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.26 × 11.62 | 258.66 | 1.92:1 | 396 | 2026-07-28 |
| 深圳 | [深圳寰映影城（福田中洲湾店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A6%8F%E7%94%B0%E4%B8%AD%E6%B4%B2%E6%B9%BE%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.29 × 9.39 | 171.74 | 1.95:1 | 224 | 2026-07-28 |
| 深圳 | [深圳寰映影城（福田中航城君尚店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A6%8F%E7%94%B0%E4%B8%AD%E8%88%AA%E5%9F%8E%E5%90%9B%E5%B0%9A%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.73 × 10.52 | 207.56 | 1.88:1 | 288 | 2026-07-28 |
| 深圳 | [深圳星河寰宇IMAX影城（星河WORLD店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E6%98%9F%E6%B2%B3%E5%AF%B0%E5%AE%87IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%98%9F%E6%B2%B3WORLD%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.31 × 9.65 | 176.69 | 1.90:1 | 293 | 2026-07-28 |
| 深圳 | [深圳百川影城IMAX（新沙天虹店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E7%99%BE%E5%B7%9D%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E6%96%B0%E6%B2%99%E5%A4%A9%E8%99%B9%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.363 × 9.243 | 160.49 | 1.88:1 | 292 | 2026-07-28 |
| 深圳 | [深圳百老汇电影中心（IMAX万象天地店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E7%99%BE%E8%80%81%E6%B1%87%E7%94%B5%E5%BD%B1%E4%B8%AD%E5%BF%83%EF%BC%88IMAX%E4%B8%87%E8%B1%A1%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.465 × 12.305 | 288.74 | 1.91:1 | 398 | 2026-07-28 |
| 深圳 | [深圳英皇电影城（平安金融中心店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B9%B3%E5%AE%89%E9%87%91%E8%9E%8D%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 20.8 × 11 | 228.8 | 1.89:1 | 277 | 2026-07-28 |
| 深圳 | [深圳金逸影城（光明大仟里IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E6%98%8E%E5%A4%A7%E4%BB%9F%E9%87%8CIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.31 × 10.25 | 197.93 | 1.88:1 | 334 | 2026-07-28 |
| 深圳 | [深圳金逸影城（卓悦汇IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%93%E6%82%A6%E6%B1%87IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.44 × 12.89 | 315.03 | 1.90:1 | 500 | 2026-07-28 |
| 深圳 | [深圳金逸影城（宝安大仟里IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%9D%E5%AE%89%E5%A4%A7%E4%BB%9F%E9%87%8CIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.74 × 11.8 | 268.33 | 1.93:1 | 341 | 2026-07-28 |
| 清远 | [清远DY影城（顺盈时代广场IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B8%85%E8%BF%9CDY%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%A1%BA%E7%9B%88%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BAIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.987 × 11.486 | 252.54 | 1.91:1 | 444 | 2026-07-28 |
| 清远 | [清远万达影城（清城万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B8%85%E8%BF%9C%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B8%85%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.12 × 10.522 | 201.18 | 1.82:1 | 419 | 2026-07-28 |
| 湛江 | [湛江万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B9%9B%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.313 × 12.212 | 296.91 | 1.99:1 | 332 | 2026-07-28 |
| 湛江 | [湛江中影星美影城IMAX](https://cinema.gaoliang.me/cinema/%E6%B9%9B%E6%B1%9F%E4%B8%AD%E5%BD%B1%E6%98%9F%E7%BE%8E%E5%BD%B1%E5%9F%8EIMAX_IMAX) | IMAX Digital Xenon | 21.143 × 11.273 | 238.35 | 1.88:1 | 472 | 2026-07-28 |
| 湛江 | [湛江金逸影城（光美鹰展IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B9%9B%E6%B1%9F%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E9%B9%B0%E5%B1%95IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.028 × 9.193 | 156.54 | 1.85:1 | 317 | 2026-07-28 |
| 珠海 | [珠海CGV影城（环宇城店）](https://cinema.gaoliang.me/cinema/%E7%8F%A0%E6%B5%B7CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%8E%AF%E5%AE%87%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.28 × 9.95 | 191.84 | 1.94:1 | 358 | 2026-07-28 |
| 珠海 | [珠海幸福蓝海国际影城（扬名IMAX店）](https://cinema.gaoliang.me/cinema/%E7%8F%A0%E6%B5%B7%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%89%AC%E5%90%8DIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.983 × 9.056 | 153.8 | 1.88:1 | 255 | 2026-07-28 |
| 珠海 | [珠海幸福蓝海国际影城（金湾IMAX激光店）](https://cinema.gaoliang.me/cinema/%E7%8F%A0%E6%B5%B7%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E6%B9%BEIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.08 × 11.55 | 255.02 | 1.91:1 | 258 | 2026-07-28 |
| 肇庆 | [肇庆万达影城（鼎湖万达广场店）](https://cinema.gaoliang.me/cinema/%E8%82%87%E5%BA%86%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BC%8E%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.05 × 10.28 | 195.83 | 1.85:1 | 251 | 2026-07-28 |
| 肇庆 | [肇庆星轶IMAX影城（敏捷广场旗舰店）](https://cinema.gaoliang.me/cinema/%E8%82%87%E5%BA%86%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%95%8F%E6%8D%B7%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.24 × 11.57 | 257.32 | 1.92:1 | 361 | 2026-07-28 |
| 茂名 | [茂名万达影城（电白万达广场店）](https://cinema.gaoliang.me/cinema/%E8%8C%82%E5%90%8D%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%94%B5%E7%99%BD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.328 × 10.698 | 217.47 | 1.90:1 | 361 | 2026-07-28 |
| 茂名 | [茂名东汇国际影城](https://cinema.gaoliang.me/cinema/%E8%8C%82%E5%90%8D%E4%B8%9C%E6%B1%87%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E_IMAX) | IMAX CoLA | 21.874 × 11.319 | 247.59 | 1.93:1 | 343 | 2026-07-28 |
| 茂名 | [高州潘州影城IMAX](https://cinema.gaoliang.me/cinema/%E9%AB%98%E5%B7%9E%E6%BD%98%E5%B7%9E%E5%BD%B1%E5%9F%8EIMAX_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 336 | 2026-07-28 |
| 韶关 | [韶关DP影城](https://cinema.gaoliang.me/cinema/%E9%9F%B6%E5%85%B3DP%E5%BD%B1%E5%9F%8E_IMAX) | IMAX XT | 23.71 × 12.32 | 292.11 | 1.92:1 | 410 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 东莞 | [东莞万达影城（南城蜂汇店）](https://cinema.gaoliang.me/cinema/%E4%B8%9C%E8%8E%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E5%9F%8E%E8%9C%82%E6%B1%87%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 17.152 × 9 | 154.37 | 1.91:1 | 440 | 2026-07-28 |
| 汕头 | [汕头万象影城（万象城杜比影院店）](https://cinema.gaoliang.me/cinema/%E6%B1%95%E5%A4%B4%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%9D%9C%E6%AF%94%E5%BD%B1%E9%99%A2%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 15.895 × 8.36 | 132.88 | 1.90:1 | 254 | 2026-07-28 |
| 深圳 | [深圳万象影城（万象城店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 13.71 × 7.38 | 101.18 | 1.86:1 | 266 | 2026-07-28 |
| 深圳 | [深圳万象影城（深圳湾万象城旗舰店）](https://cinema.gaoliang.me/cinema/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B7%B1%E5%9C%B3%E6%B9%BE%E4%B8%87%E8%B1%A1%E5%9F%8E%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 18.01 × 9.71 | 174.88 | 1.85:1 | 272 | 2026-07-28 |

### 广西

共 18 条（IMAX 17；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 南宁 | [南宁万达影城（万达茂店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E8%8C%82%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.66 × 11.67 | 252.77 | 1.86:1 | 384 | 2026-07-28 |
| 南宁 | [南宁万达影城（印象城店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 255 | 2026-07-28 |
| 南宁 | [南宁万达影城（嘉佑城店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%98%89%E4%BD%91%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.92 × 10.99 | 229.91 | 1.90:1 | 201 | 2026-07-28 |
| 南宁 | [南宁万达影城（安吉万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%89%E5%90%89%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.13 × 11.1 | 234.54 | 1.90:1 | 341 | 2026-07-28 |
| 南宁 | [南宁万达影城（江南万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B1%9F%E5%8D%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.85 × 11.75 | 268.49 | 1.94:1 | 359 | 2026-07-28 |
| 南宁 | [南宁万达影城（青秀万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E7%A7%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.76 × 11.67 | 265.61 | 1.95:1 | 412 | 2026-07-28 |
| 南宁 | [南宁民族影城（民族大道IMAX店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E6%B0%91%E6%97%8F%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B0%91%E6%97%8F%E5%A4%A7%E9%81%93IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.98 × 13.15 | 328.49 | 1.90:1 | 480 | 2026-07-28 |
| 柳州 | [柳州万达影城（城中万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9F%B3%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9F%8E%E4%B8%AD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.13 × 11.58 | 256.27 | 1.91:1 | 362 | 2026-07-28 |
| 柳州 | [柳州万达影城（柳南万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9F%B3%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9F%B3%E5%8D%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.05 × 10.6 | 212.53 | 1.89:1 | 394 | 2026-07-28 |
| 柳州 | [柳州金逸影城（万象城店）](https://cinema.gaoliang.me/cinema/%E6%9F%B3%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.28 × 13.41 | 339 | 1.89:1 | 393 | 2026-07-28 |
| 桂林 | [桂林万象影城（万象城IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%A1%82%E6%9E%97%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 19.44 × 10.09 | 196.15 | 1.93:1 | 252 | 2026-07-28 |
| 桂林 | [桂林万达影城（七星万达广场店）](https://cinema.gaoliang.me/cinema/%E6%A1%82%E6%9E%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%83%E6%98%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.951 × 11.2 | 234.65 | 1.87:1 | 412 | 2026-07-28 |
| 桂林 | [桂林万达影城（临桂万达广场店）](https://cinema.gaoliang.me/cinema/%E6%A1%82%E6%9E%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B4%E6%A1%82%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.21 × 10.21 | 196.13 | 1.88:1 | 315 | 2026-07-28 |
| 桂林 | [桂林万达影城（叠彩万达广场店）](https://cinema.gaoliang.me/cinema/%E6%A1%82%E6%9E%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8F%A0%E5%BD%A9%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.05 × 10.75 | 204.79 | 1.77:1 | 362 | 2026-07-28 |
| 玉林 | [玉林万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%8E%89%E6%9E%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.76 × 10.85 | 246.95 | 2.10:1 | 365 | 2026-07-28 |
| 玉林 | [玉林中影金城国际影院](https://cinema.gaoliang.me/cinema/%E7%8E%89%E6%9E%97%E4%B8%AD%E5%BD%B1%E9%87%91%E5%9F%8E%E5%9B%BD%E9%99%85%E5%BD%B1%E9%99%A2_IMAX) | IMAX Digital Xenon | 18.12 × 9.46 | 171.42 | 1.92:1 | 253 | 2026-07-28 |
| 贵港 | [贵港万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E6%B8%AF%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 359 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 南宁 | [南宁万达影城（青秀万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9D%92%E7%A7%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 14.019 × 5.96 | 83.55 | 2.35:1 | 258 | 2026-07-28 |

### 海南

共 8 条（IMAX 8；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 三亚 | [三亚万达影城（万达海棠湾店）](https://cinema.gaoliang.me/cinema/%E4%B8%89%E4%BA%9A%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E6%B5%B7%E6%A3%A0%E6%B9%BE%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.91 × 11.79 | 246.53 | 1.77:1 | 295 | 2026-07-28 |
| 海口 | [海口CGV影城（友谊阳光城店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8F%8B%E8%B0%8A%E9%98%B3%E5%85%89%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.431 × 13.175 | 321.88 | 1.85:1 | 402 | 2026-07-28 |
| 海口 | [海口万达影城（海航日月广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E8%88%AA%E6%97%A5%E6%9C%88%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.945 × 11.585 | 254.23 | 1.89:1 | 365 | 2026-07-28 |
| 海口 | [海口万达影城（秀英万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A7%80%E8%8B%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.279 × 10.212 | 196.88 | 1.89:1 | 413 | 2026-07-28 |
| 海口 | [海口中视国际影城IMAX（国秀城店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3%E4%B8%AD%E8%A7%86%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E5%9B%BD%E7%A7%80%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.79 × 12.85 | 318.55 | 1.93:1 | 449 | 2026-07-28 |
| 海口 | [海口博纳国际影城（龙湖天街激光IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96%E5%A4%A9%E8%A1%97%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.45 × 9.52 | 175.64 | 1.94:1 | 259 | 2026-07-28 |
| 海口 | [海口星轶IMAX影城（龙华吾悦广场旗舰店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3%E6%98%9F%E8%BD%B6IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E5%8D%8E%E5%90%BE%E6%82%A6%E5%B9%BF%E5%9C%BA%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.672 × 12.822 | 303.52 | 1.85:1 | 343 | 2026-07-28 |
| 海口 | [海口金逸影城（星海湾IMAX店）](https://cinema.gaoliang.me/cinema/%E6%B5%B7%E5%8F%A3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%98%9F%E6%B5%B7%E6%B9%BEIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.118 × 10.615 | 213.55 | 1.90:1 | 448 | 2026-07-28 |

### 四川

共 50 条（IMAX 49；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 乐山 | [乐山万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%90%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.25 × 11 | 222.75 | 1.84:1 | 360 | 2026-07-28 |
| 乐山 | [乐山金逸影城（IMAX店）](https://cinema.gaoliang.me/cinema/%E4%B9%90%E5%B1%B1%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.28 × 11.08 | 235.78 | 1.92:1 | 315 | 2026-07-28 |
| 内江 | [内江万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%86%85%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.131 × 12.734 | 307.28 | 1.90:1 | 396 | 2026-07-28 |
| 南充 | [南充万达影城（临江万达广场店）](https://cinema.gaoliang.me/cinema/%E5%8D%97%E5%85%85%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%B4%E6%B1%9F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.331 × 11.51 | 245.52 | 1.85:1 | 404 | 2026-07-28 |
| 宜宾 | [宜宾万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%AE%9C%E5%AE%BE%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.76 × 10.77 | 223.59 | 1.93:1 | 388 | 2026-07-28 |
| 广元 | [广元万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%B9%BF%E5%85%83%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 382 | 2026-07-28 |
| 德阳 | [德阳万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%BE%B7%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.63 × 12.43 | 293.72 | 1.90:1 | 372 | 2026-07-28 |
| 德阳 | [德阳金逸影城（五洲广场店）](https://cinema.gaoliang.me/cinema/%E5%BE%B7%E9%98%B3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%94%E6%B4%B2%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.95 × 10.66 | 212.67 | 1.87:1 | 362 | 2026-07-28 |
| 成都 | [成都CGV影城（新都七一广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BDCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E9%83%BD%E4%B8%83%E4%B8%80%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.865 × 11.655 | 254.84 | 1.88:1 | 355 | 2026-07-28 |
| 成都 | [成都CGV影城（金楠店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BDCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E6%A5%A0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.68 × 11.12 | 229.96 | 1.86:1 | 284 | 2026-07-28 |
| 成都 | [成都CGV影城（金牛店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BDCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E7%89%9B%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.25 × 10.9 | 231.62 | 1.95:1 | 326 | 2026-07-28 |
| 成都 | [成都CGV影城（高新店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BDCGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.51 × 12.38 | 291.05 | 1.90:1 | 411 | 2026-07-28 |
| 成都 | [成都SFC上影影城（科华IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BDSFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A7%91%E5%8D%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.068 × 12.536 | 289.18 | 1.84:1 | 442 | 2026-07-28 |
| 成都 | [成都SFC上影影城（龙湖IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BDSFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B9%96IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.185 × 11.025 | 233.56 | 1.92:1 | 320 | 2026-07-28 |
| 成都 | [成都万象影城（万象城IMAX激光店）B馆](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%B1%A1%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E5%9F%8EIMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89B%E9%A6%86_IMAX) | IMAX CoLA | 22.73 × 12.02 | 273.21 | 1.89:1 | 394 | 2026-07-28 |
| 成都 | [成都万达影城（四六八广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9B%9B%E5%85%AD%E5%85%AB%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.196 × 8.662 | 140.29 | 1.87:1 | 182 | 2026-07-28 |
| 成都 | [成都万达影城（崇州万达广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%B4%87%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.06 × 10.494 | 200.02 | 1.82:1 | 396 | 2026-07-28 |
| 成都 | [成都万达影城（简阳旭海广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%AE%80%E9%98%B3%E6%97%AD%E6%B5%B7%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.87 × 10.759 | 213.78 | 1.85:1 | 312 | 2026-07-28 |
| 成都 | [成都万达影城（蜀都万达广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%9C%80%E9%83%BD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.408 × 11.79 | 264.19 | 1.90:1 | 338 | 2026-07-28 |
| 成都 | [成都万达影城（金牛万达广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E7%89%9B%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.18 × 10.98 | 232.56 | 1.93:1 | 429 | 2026-07-28 |
| 成都 | [成都万达影城（锦华万达广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%94%A6%E5%8D%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.664 × 8.083 | 126.61 | 1.94:1 | 280 | 2026-07-28 |
| 成都 | [成都中影紫荆国际影城4K激光IMAX（环球中心旗舰店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%AD%E5%BD%B1%E7%B4%AB%E8%8D%86%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E4K%E6%BF%80%E5%85%89IMAX%EF%BC%88%E7%8E%AF%E7%90%83%E4%B8%AD%E5%BF%83%E6%97%97%E8%88%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.465 × 12.178 | 273.58 | 1.84:1 | 498 | 2026-07-28 |
| 成都 | [成都中影紫荆国际影城4K激光IMAX（龙湖北城天街店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E4%B8%AD%E5%BD%B1%E7%B4%AB%E8%8D%86%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E4K%E6%BF%80%E5%85%89IMAX%EF%BC%88%E9%BE%99%E6%B9%96%E5%8C%97%E5%9F%8E%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 23.22 × 12.05 | 279.8 | 1.93:1 | 352 | 2026-07-28 |
| 成都 | [成都博纳国际影城（大悦城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%82%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.47 × 11.65 | 250.13 | 1.84:1 | 374 | 2026-07-28 |
| 成都 | [成都博纳国际影城（天府大悦城店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E5%BA%9C%E5%A4%A7%E6%82%A6%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.97 × 10.58 | 221.86 | 1.98:1 | 374 | 2026-07-28 |
| 成都 | [成都寰时影城（光环IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%AF%B0%E6%97%B6%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%8E%AFIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.409 × 10.294 | 199.8 | 1.89:1 | 406 | 2026-07-28 |
| 成都 | [成都寰映影城（大魔方广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E9%AD%94%E6%96%B9%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.608 × 9.85 | 183.29 | 1.89:1 | 240 | 2026-07-28 |
| 成都 | [成都寰映影城（龙泉驿世茂广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E6%B3%89%E9%A9%BF%E4%B8%96%E8%8C%82%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 15.166 × 7.797 | 118.25 | 1.95:1 | 222 | 2026-07-28 |
| 成都 | [成都幸福蓝海国际影城（仁和新城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BB%81%E5%92%8C%E6%96%B0%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.39 × 11.1 | 237.43 | 1.93:1 | 404 | 2026-07-28 |
| 成都 | [成都影立方影城（东郊记忆773店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%BD%B1%E7%AB%8B%E6%96%B9%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%9C%E9%83%8A%E8%AE%B0%E5%BF%86773%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.22 × 12.68 | 294.43 | 1.83:1 | 488 | 2026-07-28 |
| 成都 | [成都影立方影城（城南优品道广场店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E5%BD%B1%E7%AB%8B%E6%96%B9%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9F%8E%E5%8D%97%E4%BC%98%E5%93%81%E9%81%93%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 23.575 × 12.178 | 287.1 | 1.94:1 | 436 | 2026-07-28 |
| 成都 | [成都英皇电影城（国金中心店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9B%BD%E9%87%91%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.068 × 11.243 | 236.87 | 1.87:1 | 407 | 2026-07-28 |
| 成都 | [成都英皇电影城（新光天地店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E8%8B%B1%E7%9A%87%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E5%85%89%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.935 × 11.46 | 251.38 | 1.91:1 | 386 | 2026-07-28 |
| 成都 | [成都金逸影城（天府和悦IMAX激光店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E5%BA%9C%E5%92%8C%E6%82%A6IMAX%E6%BF%80%E5%85%89%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.06 × 11 | 231.66 | 1.91:1 | 295 | 2026-07-28 |
| 成都 | [成都金逸影城（爱琴海IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%88%B1%E7%90%B4%E6%B5%B7IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.603 × 9.273 | 163.23 | 1.90:1 | 285 | 2026-07-28 |
| 成都 | [成都金逸影城（鹏瑞利IMAX店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%B9%8F%E7%91%9E%E5%88%A9IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.518 × 11.815 | 266.05 | 1.91:1 | 504 | 2026-07-28 |
| 攀枝花 | [攀枝花万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%94%80%E6%9E%9D%E8%8A%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 334 | 2026-07-28 |
| 泸州 | [泸州CGV影城（万象汇店）](https://cinema.gaoliang.me/cinema/%E6%B3%B8%E5%B7%9ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%B1%A1%E6%B1%87%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 354 | 2026-07-28 |
| 泸州 | [泸州万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B3%B8%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.9 × 10.85 | 226.76 | 1.93:1 | 427 | 2026-07-28 |
| 泸州 | [泸州金逸影城（天远广场店）](https://cinema.gaoliang.me/cinema/%E6%B3%B8%E5%B7%9E%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A9%E8%BF%9C%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.76 × 13.67 | 352.14 | 1.88:1 | 368 | 2026-07-28 |
| 眉山 | [眉山万达影城（雕像国际广场店）](https://cinema.gaoliang.me/cinema/%E7%9C%89%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%9B%95%E5%83%8F%E5%9B%BD%E9%99%85%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.59 × 10.71 | 209.81 | 1.83:1 | 246 | 2026-07-28 |
| 绵阳 | [绵阳万达影城（涪城万达广场店）](https://cinema.gaoliang.me/cinema/%E7%BB%B5%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B6%AA%E5%9F%8E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.74 × 11.6 | 252.18 | 1.87:1 | 311 | 2026-07-28 |
| 绵阳 | [绵阳金逸影城（奥莱IMAX店）](https://cinema.gaoliang.me/cinema/%E7%BB%B5%E9%98%B3%E9%87%91%E9%80%B8%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A5%A5%E8%8E%B1IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 25.22 × 13.33 | 336.18 | 1.89:1 | 396 | 2026-07-28 |
| 自贡 | [自贡万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%87%AA%E8%B4%A1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.451 × 9.741 | 179.73 | 1.89:1 | 371 | 2026-07-28 |
| 自贡 | [自贡星维国际电影城（南湖店）](https://cinema.gaoliang.me/cinema/%E8%87%AA%E8%B4%A1%E6%98%9F%E7%BB%B4%E5%9B%BD%E9%99%85%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E6%B9%96%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.117 × 11.82 | 261.42 | 1.87:1 | 524 | 2026-07-28 |
| 资阳 | [资阳万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B5%84%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 411 | 2026-07-28 |
| 达州 | [达州横店电影城（IMAX罗浮店）](https://cinema.gaoliang.me/cinema/%E8%BE%BE%E5%B7%9E%E6%A8%AA%E5%BA%97%E7%94%B5%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E7%BD%97%E6%B5%AE%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 235 | 2026-07-28 |
| 遂宁 | [遂宁万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%81%82%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 394 | 2026-07-28 |
| 雅安 | [雅安万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%9B%85%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.82 × 11.17 | 232.56 | 1.86:1 | 422 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 成都 | [成都百丽宫影城（DolbyCinema环贸ICD店）](https://cinema.gaoliang.me/cinema/%E6%88%90%E9%83%BD%E7%99%BE%E4%B8%BD%E5%AE%AB%E5%BD%B1%E5%9F%8E%EF%BC%88DolbyCinema%E7%8E%AF%E8%B4%B8ICD%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 16.305 × 8.813 | 143.7 | 1.85:1 | 273 | 2026-07-28 |

### 贵州

共 9 条（IMAX 9；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 六盘水 | [六盘水万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%85%AD%E7%9B%98%E6%B0%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.86 × 10.78 | 224.87 | 1.94:1 | 411 | 2026-07-28 |
| 贵阳 | [贵阳CGV影城（印象城店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.96 × 11.94 | 274.14 | 1.92:1 | 326 | 2026-07-28 |
| 贵阳 | [贵阳万达影城（中大广场店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%A4%A7%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 18.92 × 9.91 | 187.5 | 1.91:1 | 281 | 2026-07-28 |
| 贵阳 | [贵阳万达影城（云岩万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%BA%91%E5%B2%A9%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 434 | 2026-07-28 |
| 贵阳 | [贵阳万达影城（数博万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%95%B0%E5%8D%9A%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.53 × 11.61 | 249.96 | 1.85:1 | 331 | 2026-07-28 |
| 贵阳 | [贵阳万达影城（观山湖万达广场店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A7%82%E5%B1%B1%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.24 × 11.64 | 258.87 | 1.91:1 | 281 | 2026-07-28 |
| 贵阳 | [贵阳博悦汇影城（壹号店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E5%8D%9A%E6%82%A6%E6%B1%87%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A3%B9%E5%8F%B7%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.48 × 11.4 | 244.87 | 1.88:1 | 263 | 2026-07-28 |
| 贵阳 | [贵阳卢米埃影城（花溪店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8A%B1%E6%BA%AA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.09 × 10.02 | 191.28 | 1.91:1 | 231 | 2026-07-28 |
| 贵阳 | [贵阳越界影城（未来方舟店）](https://cinema.gaoliang.me/cinema/%E8%B4%B5%E9%98%B3%E8%B6%8A%E7%95%8C%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9C%AA%E6%9D%A5%E6%96%B9%E8%88%9F%E5%BA%97%EF%BC%89_IMAX) | IMAX GT Laser | 26.806 × 15.989 | 428.6 | 1.68:1 | 714 | 2026-07-28 |

### 云南

共 11 条（IMAX 11；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 大理 | [大理博纳国际影城（时代天街IMAX店）](https://cinema.gaoliang.me/cinema/%E5%A4%A7%E7%90%86%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%97%B6%E4%BB%A3%E5%A4%A9%E8%A1%97IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.13 × 10.45 | 210.36 | 1.93:1 | 321 | 2026-07-28 |
| 昆明 | [昆明CGV影城（呈贡店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8ECGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%91%88%E8%B4%A1%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.313 × 13.044 | 317.14 | 1.86:1 | 368 | 2026-07-28 |
| 昆明 | [昆明SFC上影影城（西城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8ESFC%E4%B8%8A%E5%BD%B1%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.738 × 12.186 | 277.09 | 1.87:1 | 338 | 2026-07-28 |
| 昆明 | [昆明万达影城（南亚风情店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%97%E4%BA%9A%E9%A3%8E%E6%83%85%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 17.33 × 8.95 | 155.1 | 1.94:1 | 291 | 2026-07-28 |
| 昆明 | [昆明万达影城（同德广场店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%90%8C%E5%BE%B7%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.75 × 11.93 | 247.55 | 1.74:1 | 242 | 2026-07-28 |
| 昆明 | [昆明万达影城（新迎新城店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%96%B0%E8%BF%8E%E6%96%B0%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.54 × 10.79 | 221.63 | 1.90:1 | 226 | 2026-07-28 |
| 昆明 | [昆明万达影城（西山万达广场店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.3 × 11.91 | 253.68 | 1.79:1 | 352 | 2026-07-28 |
| 昆明 | [昆明百老汇影城（IMAX顺城店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8E%E7%99%BE%E8%80%81%E6%B1%87%E5%BD%B1%E5%9F%8E%EF%BC%88IMAX%E9%A1%BA%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.22 × 11.05 | 234.48 | 1.92:1 | 291 | 2026-07-28 |
| 昆明 | [昆明维斯影城（海乐城IMAX店）](https://cinema.gaoliang.me/cinema/%E6%98%86%E6%98%8E%E7%BB%B4%E6%96%AF%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E4%B9%90%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.95 × 10.65 | 212.47 | 1.87:1 | 292 | 2026-07-28 |
| 曲靖 | [曲靖万达影城（经开万达广场店）](https://cinema.gaoliang.me/cinema/%E6%9B%B2%E9%9D%96%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%8F%E5%BC%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.86 × 10.81 | 225.5 | 1.93:1 | 408 | 2026-07-28 |
| 西双版纳 | [西双版纳万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%8F%8C%E7%89%88%E7%BA%B3%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.933 × 9.655 | 163.49 | 1.75:1 | 238 | 2026-07-28 |

### 西藏

共 2 条（IMAX 2；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 拉萨 | [拉萨SFC上影IMAX影城（原天海万达影城）](https://cinema.gaoliang.me/cinema/%E6%8B%89%E8%90%A8SFC%E4%B8%8A%E5%BD%B1IMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8E%9F%E5%A4%A9%E6%B5%B7%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.4 × 11.8 | 264.32 | 1.90:1 | 404 | 2026-07-28 |
| 拉萨 | [拉萨万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%8B%89%E8%90%A8%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.331 × 10.93 | 222.22 | 1.86:1 | 392 | 2026-07-28 |

### 陕西

共 17 条（IMAX 16；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 榆林 | [榆林万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%A6%86%E6%9E%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 349 | 2026-07-28 |
| 渭南 | [渭南万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%B8%AD%E5%8D%97%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 394 | 2026-07-28 |
| 西安 | [西安CGV影城（印象城店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%8D%B0%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.06 × 10.84 | 217.45 | 1.85:1 | 288 | 2026-07-28 |
| 西安 | [西安CGV影城（西咸万象城店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89CGV%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E5%92%B8%E4%B8%87%E8%B1%A1%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 19.52 × 10 | 195.2 | 1.95:1 | 288 | 2026-07-28 |
| 西安 | [西安UME影城（MOMOPARK激光IMAX店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89UME%E5%BD%B1%E5%9F%8E%EF%BC%88MOMOPARK%E6%BF%80%E5%85%89IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.293 × 10.746 | 218.07 | 1.89:1 | 320 | 2026-07-28 |
| 西安 | [西安万达影城（大明宫万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%98%8E%E5%AE%AB%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 22.03 × 11.26 | 248.06 | 1.96:1 | 368 | 2026-07-28 |
| 西安 | [西安万达影城（民乐园万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B0%91%E4%B9%90%E5%9B%AD%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 21.18 × 10.927 | 231.43 | 1.94:1 | 336 | 2026-07-28 |
| 西安 | [西安万达影城（碑林万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A2%91%E6%9E%97%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 16.48 × 8.83 | 145.52 | 1.87:1 | 294 | 2026-07-28 |
| 西安 | [西安万达影城（龙城铭园店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%BE%99%E5%9F%8E%E9%93%AD%E5%9B%AD%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 22.96 × 11.93 | 273.91 | 1.92:1 | 302 | 2026-07-28 |
| 西安 | [西安中影紫荆国际影城IMAX（长乐天街店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%AD%E5%BD%B1%E7%B4%AB%E8%8D%86%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8EIMAX%EF%BC%88%E9%95%BF%E4%B9%90%E5%A4%A9%E8%A1%97%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 17.496 × 10.083 | 176.41 | 1.74:1 | 248 | 2026-07-28 |
| 西安 | [西安博纳国际影城（大悦城IMAX店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E5%8D%9A%E7%BA%B3%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%A4%A7%E6%82%A6%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.446 × 10.801 | 220.84 | 1.89:1 | 421 | 2026-07-28 |
| 西安 | [西安卢米埃影城（曲江创意谷IMAX店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E5%8D%A2%E7%B1%B3%E5%9F%83%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%9B%B2%E6%B1%9F%E5%88%9B%E6%84%8F%E8%B0%B7IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 18.519 × 10.241 | 189.65 | 1.81:1 | 268 | 2026-07-28 |
| 西安 | [西安寰映影城（荟聚店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E5%AF%B0%E6%98%A0%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%8D%9F%E8%81%9A%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 22.423 × 12.01 | 269.3 | 1.87:1 | 359 | 2026-07-28 |
| 西安 | [西安幸福蓝海国际影城（乐荟中心IMAX店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E5%B9%B8%E7%A6%8F%E8%93%9D%E6%B5%B7%E5%9B%BD%E9%99%85%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B9%90%E8%8D%9F%E4%B8%AD%E5%BF%83IMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 18.35 × 9.72 | 178.36 | 1.89:1 | 246 | 2026-07-28 |
| 西安 | [西安开顿IMAX影城（光美老城根店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E5%BC%80%E9%A1%BFIMAX%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%89%E7%BE%8E%E8%80%81%E5%9F%8E%E6%A0%B9%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.343 × 13.278 | 323.23 | 1.83:1 | 474 | 2026-07-28 |
| 西安 | [西安沃美影城（浐灞印象城IMAX店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E6%B2%83%E7%BE%8E%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%90%E7%81%9E%E5%8D%B0%E8%B1%A1%E5%9F%8EIMAX%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 24.08 × 12.7 | 305.82 | 1.90:1 | 448 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 西安 | [西安万达影城（高新万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_Dolby%20Cinema) | Dolby Vision | 20.24 × 10.94 | 221.43 | 1.85:1 | 272 | 2026-07-28 |

### 甘肃

共 7 条（IMAX 7；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 兰州 | [兰州万达影城（万达茂店）](https://cinema.gaoliang.me/cinema/%E5%85%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E8%8C%82%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 21.65 × 11.77 | 254.82 | 1.84:1 | 384 | 2026-07-28 |
| 兰州 | [兰州万达影城（城关万达广场店）](https://cinema.gaoliang.me/cinema/%E5%85%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%9F%8E%E5%85%B3%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.6 × 11.39 | 246.02 | 1.90:1 | 410 | 2026-07-28 |
| 兰州 | [兰州万达影城（安宁中海环宇城店）](https://cinema.gaoliang.me/cinema/%E5%85%B0%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%AE%89%E5%AE%81%E4%B8%AD%E6%B5%B7%E7%8E%AF%E5%AE%87%E5%9F%8E%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.517 × 10.459 | 204.13 | 1.87:1 | 332 | 2026-07-28 |
| 兰州 | [兰州空间站影城（兰州中心店）](https://cinema.gaoliang.me/cinema/%E5%85%B0%E5%B7%9E%E7%A9%BA%E9%97%B4%E7%AB%99%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%85%B0%E5%B7%9E%E4%B8%AD%E5%BF%83%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 21.98 × 11.35 | 249.47 | 1.94:1 | 441 | 2026-07-28 |
| 天水 | [天水万达影城（秦州万达广场店）](https://cinema.gaoliang.me/cinema/%E5%A4%A9%E6%B0%B4%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%A7%A6%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 19.39 × 10.46 | 202.82 | 1.85:1 | 288 | 2026-07-28 |
| 武威 | [武威万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E6%AD%A6%E5%A8%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 386 | 2026-07-28 |
| 酒泉 | [酒泉万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E9%85%92%E6%B3%89%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 369 | 2026-07-28 |

### 青海

共 2 条（IMAX 2；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 西宁 | [西宁万达影城（中发源时代广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%AD%E5%8F%91%E6%BA%90%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 342 | 2026-07-28 |
| 西宁 | [西宁万达影城（海湖万达广场店）](https://cinema.gaoliang.me/cinema/%E8%A5%BF%E5%AE%81%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E6%B5%B7%E6%B9%96%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 350 | 2026-07-28 |

### 宁夏

共 4 条（IMAX 4；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 吴忠 | [吴忠万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E5%90%B4%E5%BF%A0%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 373 | 2026-07-28 |
| 石嘴山 | [石嘴山万达影城（万达广场店）](https://cinema.gaoliang.me/cinema/%E7%9F%B3%E5%98%B4%E5%B1%B1%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 340 | 2026-07-28 |
| 银川 | [银川万达影城（西夏万达广场店）](https://cinema.gaoliang.me/cinema/%E9%93%B6%E5%B7%9D%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E8%A5%BF%E5%A4%8F%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 414 | 2026-07-28 |
| 银川 | [银川万达影城（金凤万达广场店）](https://cinema.gaoliang.me/cinema/%E9%93%B6%E5%B7%9D%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%87%91%E5%87%A4%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX XT | 20.7 × 10.695 | 221.39 | 1.94:1 | 306 | 2026-07-28 |

### 新疆

共 4 条（IMAX 4；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 乌鲁木齐 | [乌鲁木齐万达影城（德汇万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E5%BE%B7%E6%B1%87%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 210 | 2026-07-28 |
| 乌鲁木齐 | [乌鲁木齐万达影城（经开万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E7%BB%8F%E5%BC%80%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | — | — | 暂无数据 | 345 | 2026-07-28 |
| 乌鲁木齐 | [乌鲁木齐万达影城（高新区万达广场店）](https://cinema.gaoliang.me/cinema/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%87%E8%BE%BE%E5%BD%B1%E5%9F%8E%EF%BC%88%E9%AB%98%E6%96%B0%E5%8C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97%EF%BC%89_IMAX) | IMAX Digital Xenon | 20.23 × 10.44 | 211.2 | 1.94:1 | 339 | 2026-07-28 |
| 乌鲁木齐 | [乌鲁木齐中影美美影城（MM3店）](https://cinema.gaoliang.me/cinema/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%AD%E5%BD%B1%E7%BE%8E%E7%BE%8E%E5%BD%B1%E5%9F%8E%EF%BC%88MM3%E5%BA%97%EF%BC%89_IMAX) | IMAX CoLA | 24.97 × 13.15 | 328.36 | 1.90:1 | 362 | 2026-07-28 |

## 港澳台逐厅数据

### 香港

共 5 条（IMAX 5；杜比影院 0）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 香港 | [香港B+ cinema MOKO（旺角東）](https://cinema.gaoliang.me/cinema/%E9%A6%99%E6%B8%AFB%2B%20cinema%20MOKO%EF%BC%88%E6%97%BA%E8%A7%92%E6%9D%B1%EF%BC%89_IMAX) | IMAX Digital Xenon | 16.911 × 8.723 | 147.51 | 1.94:1 | 264 | 2026-07-28 |
| 香港 | [香港MCL CINEMAS（K11 Art House）](https://cinema.gaoliang.me/cinema/%E9%A6%99%E6%B8%AFMCL%20CINEMAS%EF%BC%88K11%20Art%20House%EF%BC%89_IMAX) | IMAX CoLA | 20.802 × 11.514 | 239.51 | 1.81:1 | 368 | 2026-07-28 |
| 香港 | [香港MY CINEMA YOHO MALL](https://cinema.gaoliang.me/cinema/%E9%A6%99%E6%B8%AFMY%20CINEMA%20YOHO%20MALL_IMAX) | IMAX Digital Xenon | 19.871 × 10.335 | 205.37 | 1.92:1 | 409 | 2026-07-28 |
| 香港 | [香港影藝戲院（MegaBox）](https://cinema.gaoliang.me/cinema/%E9%A6%99%E6%B8%AF%E5%BD%B1%E8%97%9D%E6%88%B2%E9%99%A2%EF%BC%88MegaBox%EF%BC%89_IMAX) | IMAX CoLA | 17.538 × 9.528 | 167.1 | 1.84:1 | 271 | 2026-07-28 |
| 香港 | [香港英皇戏院（尖沙咀iSQUARE）](https://cinema.gaoliang.me/cinema/%E9%A6%99%E6%B8%AF%E8%8B%B1%E7%9A%87%E6%88%8F%E9%99%A2%EF%BC%88%E5%B0%96%E6%B2%99%E5%92%80iSQUARE%EF%BC%89_IMAX) | IMAX CoLA | 21.184 × 11.266 | 238.66 | 1.88:1 | 458 | 2026-07-28 |

### 澳门

共 2 条（IMAX 1；杜比影院 1）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 澳门 | [澳門英皇戲院（澳門葡京人）](https://cinema.gaoliang.me/cinema/%E6%BE%B3%E9%96%80%E8%8B%B1%E7%9A%87%E6%88%B2%E9%99%A2%EF%BC%88%E6%BE%B3%E9%96%80%E8%91%A1%E4%BA%AC%E4%BA%BA%EF%BC%89_IMAX) | IMAX CoLA | 23.146 × 10.801 | 250 | 2.14:1 | 466 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 澳门 | [澳門影滙戲院](https://cinema.gaoliang.me/cinema/%E6%BE%B3%E9%96%80%E5%BD%B1%E6%BB%99%E6%88%B2%E9%99%A2_Dolby%20Cinema) | Dolby Vision | 19.202 × 10.379 | 199.3 | 1.85:1 | 338 | 2026-07-28 |

### 台湾

共 12 条（IMAX 10；杜比影院 2）。

#### IMAX

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 台中 | [台中大遠百威秀影城](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E4%B8%AD%E5%A4%A7%E9%81%A0%E7%99%BE%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 18.25 × 9.35 | 170.64 | 1.95:1 | 391 | 2026-07-28 |
| 台北 | [台北美麗華大直影城](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E5%8C%97%E7%BE%8E%E9%BA%97%E8%8F%AF%E5%A4%A7%E7%9B%B4%E5%BD%B1%E5%9F%8E_IMAX) | IMAX GT Laser | 28.4 × 20.54 | 583.34 | 1.38:1 | 404 | 2026-07-28 |
| 台南 | [台南南紡威秀影城](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E5%8D%97%E5%8D%97%E7%B4%A1%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 21.8 × 12.2 | 265.96 | 1.79:1 | 390 | 2026-07-28 |
| 嘉義 | [嘉義影食匯_in89豪華影城](https://cinema.gaoliang.me/cinema/%E5%98%89%E7%BE%A9%E5%BD%B1%E9%A3%9F%E5%8C%AF_in89%E8%B1%AA%E8%8F%AF%E5%BD%B1%E5%9F%8E_IMAX) | IMAX CoLA | — | — | 暂无数据 | 221 | 2026-07-28 |
| 新北 | [新北新店裕隆城威秀影城](https://cinema.gaoliang.me/cinema/%E6%96%B0%E5%8C%97%E6%96%B0%E5%BA%97%E8%A3%95%E9%9A%86%E5%9F%8E%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX XT | — | — | 暂无数据 | 352 | 2026-07-28 |
| 新北 | [新北板橋大遠百威秀影城](https://cinema.gaoliang.me/cinema/%E6%96%B0%E5%8C%97%E6%9D%BF%E6%A9%8B%E5%A4%A7%E9%81%A0%E7%99%BE%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX XT | 21.33 × 11.46 | 244.44 | 1.86:1 | 404 | 2026-07-28 |
| 新竹 | [新竹巨城威秀影城](https://cinema.gaoliang.me/cinema/%E6%96%B0%E7%AB%B9%E5%B7%A8%E5%9F%8E%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 17.76 × 9.69 | 172.09 | 1.83:1 | 260 | 2026-07-28 |
| 桃園 | [桃園美麗新台茂影城](https://cinema.gaoliang.me/cinema/%E6%A1%83%E5%9C%92%E7%BE%8E%E9%BA%97%E6%96%B0%E5%8F%B0%E8%8C%82%E5%BD%B1%E5%9F%8E_IMAX) | IMAX Digital Xenon | 17.76 × 9.75 | 173.16 | 1.82:1 | 329 | 2026-07-28 |
| 花蓮 | [花蓮新天堂樂園威秀影城](https://cinema.gaoliang.me/cinema/%E8%8A%B1%E8%93%AE%E6%96%B0%E5%A4%A9%E5%A0%82%E6%A8%82%E5%9C%92%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX CoLA | 21.33 × 12.03 | 256.6 | 1.77:1 | 368 | 2026-07-28 |
| 高雄 | [高雄大遠百威秀影城](https://cinema.gaoliang.me/cinema/%E9%AB%98%E9%9B%84%E5%A4%A7%E9%81%A0%E7%99%BE%E5%A8%81%E7%A7%80%E5%BD%B1%E5%9F%8E_IMAX) | IMAX XT | 15.88 × 8.16 | 129.58 | 1.95:1 | 268 | 2026-07-28 |

#### 杜比影院（Dolby Cinema）

| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |
|---|---|---|---:|---:|---:|---:|---|
| 台北 | [台北美麗華大直影城](https://cinema.gaoliang.me/cinema/%E5%8F%B0%E5%8C%97%E7%BE%8E%E9%BA%97%E8%8F%AF%E5%A4%A7%E7%9B%B4%E5%BD%B1%E5%9F%8E_Dolby%20Cinema) | Dolby Vision | 14 × 7 | 98 | 2.00:1 | 303 | 2026-07-28 |
| 桃園 | [桃園新光影城](https://cinema.gaoliang.me/cinema/%E6%A1%83%E5%9C%92%E6%96%B0%E5%85%89%E5%BD%B1%E5%9F%8E_Dolby%20Cinema) | Dolby Vision | 20 × 10 | 200 | 2.00:1 | 330 | 2026-07-28 |

## 数据源

- [IMAX China 2025 年年报（香港交易所 PDF）](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0309/2026030900292.pdf)：大中华区 IMAX 系统总量、商业/机构与地区拆分口径。
- [IMAX 中国官网](https://www.imax.cn/)：IMAX 体验与影院系统官方说明。
- [杜比影院官方说明](https://www.dolby.com/zh-cn/experience/cinema/)：Dolby Cinema 由杜比视界双 4K 激光放映与杜比全景声等构成。
- [影厅指南](https://cinema.gaoliang.me/)：影院级银幕尺寸、座位数、放映系统、地址、开业及维护信息；本表逐行保留详情页链接。
- [影厅指南 sitemap](https://cinema.gaoliang.me/sitemap.xml)：本次影院详情页枚举入口。
- [贵州广播电视台：贵阳越界影城报道](https://movement.gzstv.com/news/detail/z0ZRP/)：用于核对 714 座及宣传名义尺寸，并说明银幕尺寸存在不同公开口径。
- [上海市文化和旅游局：上海影城焕新归来](https://whlyj.sh.gov.cn/gqfc/20230606/d8c37f8ae8754ffb8c65e9cf6bf2b000.html)：用于抽样复核上海杜比剧场 1008 座。

## 维护建议

- 每季度重新读取 sitemap，对新增、删除、改名页面做差异比较。
- 对“—”字段优先核对影院官方公众号、票务平台座位图、开业新闻稿或现场照片。
- 对标注“运营状态需复核”的条目，在计入城市/省份在营总数前人工确认。
- 若用于选址、投资或设备采购，应向 IMAX、杜比及影院运营方索取正式技术参数和在营证明。
