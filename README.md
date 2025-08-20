# RedStarMC 社区 Wiki

基于 Docusaurus 构建的 RedStarMC（红星我的世界社区）官方 Wiki。面向玩家与管理者，提供服务器介绍、规则、常见问题、贡献指南与历史资料等内容。

- 在线文档：请查看仓库内 `docs/` 目录或本地启动站点预览
- 面向对象：新玩家、老玩家、管理员、贡献者

## 技术栈与要求
- Docusaurus 3（含部分主题/插件）
- Node.js >= 18（推荐 18/20）
- 包管理器：pnpm（已在 `package.json` 固定版本）

## 快速开始
1) 安装依赖
```bash
pnpm install
```

2) 本地启动（开发模式，含热更新）
```bash
pnpm start
```
默认在 `http://localhost:3000` 访问。

3) 生产构建
- Windows（项目脚本已内置环境变量设置）：
```bash
pnpm build
```
- Linux/macOS（如需手动设置环境变量）：
```bash
DOCUSAURUS_IGNORE_SSG_WARNINGS=true pnpm build
```

4) 预览已构建站点
```bash
pnpm serve
```

5) 部署
```bash
pnpm deploy
```
说明：部署依赖 `docusaurus.config.js` 中站点配置与仓库权限。若部署到 GitHub Pages，需确保 Git 远端与权限配置正确（例如设置 `GIT_USER` 等）。

## 常用脚本
查看 `package.json` 的 `scripts`：
- `pnpm start`：本地开发
- `pnpm build`：打包生产版本
- `pnpm serve`：本地预览打包产物
- `pnpm deploy`：部署
- `pnpm clear`：清理缓存
- `pnpm swizzle`：主题定制
- `pnpm write-translations`：导出多语言文案
- `pnpm write-heading-ids`：生成标题 ID
- `pnpm format`：修复 Markdown（限 docs 目录）
- `pnpm format:check`：检查 Markdown 规范（限 docs 目录）

## 目录结构
仅列出关键目录与文件：
```
Wiki/
  docs/                     # 文档内容（Markdown/MDX）
  src/                      # 自定义组件与样式
  static/                   # 静态资源（会拷贝到构建产物根路径）
  i18n/                     # 多语言资源（当前包含 zh-Hans）
  docusaurus.config.js      # 站点配置
  sidebars.js               # 文档侧边栏配置
  package.json              # 依赖与脚本
  README.md                 # 本文件
```

## 内容编写
- 文档位置：`docs/`（支持 Markdown 与 MDX）
- 图片资源：优先放置到 `static/` 或对应文档目录下的 `_images/`
- 站内链接：使用相对路径（如 `../rules/rules.md`）或已配置的路由
- 提示块（Admonition）：
  - 语法示例：
    ```md
    :::info 标题
    正文内容
    :::
    ```
  - 支持类型：`note`、`tip`、`info`、`caution`、`danger` 等
- 代码块高亮：使用三反引号并指定语言（如 ` ```bash`、` ```minecraft`）
- MDX：可在 `.mdx` 内引入 React 组件（仅在确有必要时使用）

编写参考：
- 新手入口：`docs/how-to-join-server.md`
- 规则与须知：`docs/rules/`
- 常见问题：`docs/FAQ/`
- 服务器介绍：`docs/server-introduce/`
- 贡献写作规范：`docs/contribute/wiki-writing-standards.md`

## 贡献
非常欢迎社区成员提交内容修订与新增条目：
- 请先阅读根目录 `CONTRIBUTING.md` 与 `docs/contribute/` 下的文档
- 提交前运行：
```bash
pnpm format:check
```
如有格式问题可执行：
```bash
pnpm format
```

## 常见问题与支持
- 常见问题页面：`docs/FAQ/FAQ.md` 与 `docs/FAQ/about-us.md`
- 进服与登录问题：`docs/how-to-join-server.md`
- 申诉/举报与声明：`docs/rules/申诉、举报与声明.md`

更多联系方式（官网、QQ群等）可在 `docs/intro.md` 的“联系方式”章节查看。

## 许可证
本项目采用仓库根目录的 `LICENSE` 文件所述的许可协议。请在遵守许可的前提下使用与二次分发。

## 致谢
感谢所有为 RedStarMC 社区与 Wiki 做出贡献的成员！
