// <define:STUDIO_PROJECT>
var define_STUDIO_PROJECT_default = { name: "AI\u5267\u5DE5\u4F5C\u53F0", icon: "\u{1F3AC}", description: "PRINTFILM \u539F\u5E94\u7528\uFF1A\u5267\u672C\u3001\u5206\u96C6\u3001\u5206\u955C\u3001\u8D44\u4EA7\u5E93\u4E0E\u89C6\u9891\u5DE5\u4F5C\u6D41" };

// packages/sdk/entry.ts
import { fileURLToPath } from "node:url";
var name = "dsh-studio-film";
var inject = ["studioProjects"];
function apply(ctx) {
  ctx.effect(() => ctx.studioProjects.register({ id: "film", ...define_STUDIO_PROJECT_default, root: fileURLToPath(new URL("../static/", import.meta.url)) }), "\u5DE5\u4F5C\u5BA4\uFF1Afilm");
}
export {
  apply,
  inject,
  name
};
