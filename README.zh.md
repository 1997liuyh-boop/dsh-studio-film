# dsh-studio-film

[English](README.md)

## 仓库信息

- 仓库名称：`dsh-studio-film`
- 仓库描述：PRINTFILM 工作室适配，提供剧本、分集、分镜、资产管理和视频制作任务。
- 仓库地址：`https://github.com/1997liuyh-boop/dsh-studio-film`
- 上游项目：`https://github.com/yi1108/printfilm`，固定版本见 `UPSTREAM.json`。

## 功能与特性

- 管理项目、故事、场景、角色和制作备注。
- 按分集组织镜头、画面说明、对白、时长和制作状态。
- 管理角色、场景、道具、图片、音频和视频资产。
- 把原应用的生成、预览、导出和任务状态接入 DSH。
- 使用绑定的 DSH 会话，保持消息、模型状态、工具结果和停止操作一致。
- 服务或数据库失败时显示真实错误并提供重试，不用示例数据伪装已连接。

## 安装

请先安装控制组合包，再完整退出 Desktop，通过官方插件管理器安装本工作室精确 tag：

```powershell
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-library#v0.1.3"
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-film#v0.2.4"
& "<Desktop安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop list
```

验证安装包包含 `main: lib/index.js`、`exports./client: lib/client.js`、`dsh.bundle.patch: ./cordis.patch.yml` 和已构建的 `static` 入口。另行安装并配置 PRINTFILM 服务、数据库和视频生成服务，随后重启 Desktop。

### 服务配置

插件不包含 PRINTFILM 服务。请先在新的绝对目录准备固定版本的上游源码，再按上游项目文档安装依赖并启动服务：

```powershell
node scripts/prepare-upstream.mjs film "C:\work\printfilm"
```

在 DSH 宿主配置 `printfilmUrl`，或设置 `DSH_STUDIO_PRINTFILM_URL` 为服务来源地址。默认地址为 `http://127.0.0.1:33102`；打开工作室前必须启动上游服务、数据库和视频生成服务。

## 要求与限制

适配包不会下载个人项目、导入账号或启动外部服务。服务和数据库不可用时只能查看状态并重试。第三方应用和素材遵循各自许可，详见 `THIRD_PARTY_NOTICES.md`。

## 许可与来源

本项目使用 MIT 许可。上游源码、固定版本和适配补丁记录在 `UPSTREAM.json` 与 `patches/`。
