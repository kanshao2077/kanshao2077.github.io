# 花儿要爆炸啦 · Flowers at Criticality

一场关于盛放、过剩与合成生命的原创虚拟花艺展览。白色展墙、汇文明朝体、八件生成花艺作品、作品档案、可控制时间的程序化花朵实验、五层艺术命题，以及结构生成过程图。

这是静态网站，无需构建、无需 API 密钥。所有页面资源为相对路径，可以部署到 GitHub Pages 子目录。

## 本地预览

在本目录启动静态服务：

```sh
python3 -m http.server 4188 --bind 127.0.0.1
```

访问 `http://127.0.0.1:4188/`。也可以直接打开 `index.html`。

## 展览内容

1. 温柔的高压：绣球、芍药与洋牡丹，聚合。
2. 中心正在撤离：大丽花与球菊，裂变。
3. 礼花没有天空：针垫花、葱属花序与球菊，喷发。
4. 红色超过了容器：红掌、鸡冠花与火焰百合，溢出。
5. 无法命名的盛放：兰花、鸢尾、马蹄莲的虚拟杂交，变异。
6. 离开是一种繁殖：蒲公英、铁线莲果序与芦苇，扩散。
7. 花的负片：花脉、枯荷与裸枝，耗散。
8. 明天还会是今天：合成花体，重演。

作品图为内置 imagegen 工具生成的虚拟艺术概念图。程序化交互不调用生成 API。花材名为造型原型，虚拟花态不代表真实植物学样本或已经完成的实体装置。图像生成提示词与艺术方向见 `docs/art-direction.md`。

## 文件

- `index.html`：完整展览结构与策展文案。
- `styles.css`：暗色艺术页面及移动端布局。
- `works.js`：八件作品档案。
- `app.js`：作品弹窗、键盘浏览、过程图与时间实验。
- `assets/`：八张作品 JPEG 与 SVG 标记。
- `assets/huiwen.css`、`assets/fonts/`：实际自托管的汇文明朝体 WOFF2 分片和来源说明，覆盖本页面所需中文字。
- `docs/`：艺术方向、验证记录与发布状态。
- `tools/`：本地验证及 GitHub 上传包生成工具，不随站点发布。

## 发布

计划沿用现有站点仓库 `kanshao2077/kanshao2077.github.io`，新增独立目录 `public/flowers-at-criticality/`。现有 Astro 构建会将 public 内容复制到 GitHub Pages，资源路径兼容子目录。

实际发布状态见 `docs/deployment-status.md`，只有在线页面和资源验证成功后才能视为上线。

## 参考

- 页面结构参考用户提供的 [Yi Huang / Ashes of Sunrise](https://yihuang.art/projects/ashesofsunrise.html) 截图；未复制其作品、图片与文字。
- [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752)
- [Align your Latents: High-Resolution Video Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2304.08818)

项目中的“临界花态”“无籍植物”“合成永生”是艺术命题，并非对图像生成模型机制的实测结论。
