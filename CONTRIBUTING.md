# 贡献指南

贡献维基的方法和注意事项。

***

首先，我们非常感谢您想对我们的维基进行贡献。

下面列出了贡献的三种方式：
* [提交 PR](#提交pr)，最快捷的方法。
* [提交 Issue](#提交-issue)，折中的方法。
* [联系管理员](#联系管理员)，最方便的方法。


## 提交PR

当你想采取这种方式时，请确保你已经拥有 Github 账户并具备一定的 Git 使用能力。

你需要 Fork 仓库到你的账号名下，然后对你名下的仓库进行修改，修改后从 contribute 中打开拉取请求。

对于贡献方法，请参阅如下内容：
* [GitHub 教程来了！万字图文详解](https://zhuanlan.zhihu.com/p/369486197) 内容较长，可以阅读下面的内容来替代。
* [手把手教你注册Github账号](https://zhuanlan.zhihu.com/p/805391882)
* [Github Fork 使用详解](https://zhuanlan.zhihu.com/p/605697407)

对于写作规范，请阅读：[Wiki写作规范](wiki-writing-standards.md)。

### 开发环境与要求
- Docusaurus 3（含部分主题/插件）
- Node.js >= 18（推荐 18/20）
- 包管理器：pnpm（已在 `package.json` 固定版本）

### 本地运行与构建
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

### 常用脚本
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

### 目录结构
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
  README.md                 # 项目说明
```

### 写作规范与组件
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

### 提交前检查
在提交 PR 前，请确保：
```bash
pnpm format:check
```
如有格式问题可执行：
```bash
pnpm format
```

## 提交 Issue

当年想采取这种方法时，请确保你已经拥有 Github 账户。

1. 打开链接 [Github Issues](https://github.com/RedStarMC/Wiki/issues)。
2. 点击偏右上方的 `New issue`。
3. 选择 `功能/文档请求`。
4. 告诉人们你想要的内容。

## 联系管理员

通过各种方式联系管理员，包括 QQ，邮箱，Discussion等。

---

## 常见问题与支持
- 常见问题页面：`docs/FAQ/FAQ.md` 与 `docs/FAQ/about-us.md`
- 进服与登录问题：`docs/how-to-join-server.md`
- 申诉/举报与声明：`docs/rules/申诉、举报与声明.md`

更多联系方式（官网、QQ群等）可在 `docs/intro.md` 的“联系方式”章节查看。