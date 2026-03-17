# 个人简历网站

基于 [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) 构建的中文个人简历网站。

## 特性

- 现代简洁的单页设计
- 深色/浅色模式切换
- 响应式布局，适配手机和桌面
- 打印友好，可直接 `Ctrl+P` 导出 PDF
- 数据与视图分离，修改简历只需编辑 `src/data/resume.ts`
- 零 JavaScript 运行时（除主题切换），加载极快
- GitHub Pages 自动部署

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 修改简历内容

编辑 `src/data/resume.ts` 文件即可修改所有简历内容，包括个人信息、工作经历、项目、技能和教育背景。

## 部署

### GitHub Pages

1. 修改 `astro.config.mjs` 中的 `site` 和 `base` 为你的 GitHub 用户名和仓库名
2. 推送到 GitHub，GitHub Actions 会自动构建部署
3. 在仓库 Settings > Pages 中选择 "GitHub Actions" 作为 Source

### Vercel

直接导入 GitHub 仓库到 [Vercel](https://vercel.com) 即可，无需额外配置（记得移除 `astro.config.mjs` 中的 `base` 配置）。
