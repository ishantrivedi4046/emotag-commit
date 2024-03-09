import { CommitTypeOption } from "./types";

export const DEFAULT_COMMIT_TYPE = ":technologist:";

export const COMMIT_TYPE_OPTIONS: CommitTypeOption[] = [
  { label: "🎉 : Begin a project.", value: ":tada:" },
  { label: "✨ : Introduce new features", value: ":sparkles:" },
  { label: "🐛 : Fix a bug.", value: ":bug:" },
  { label: "🚀 : Deploy stuff.", value: ":rocket:" },
  { label: "🚑 : Critical hotfix.", value: ":ambulance:" },
  { label: "🚧 : Work in progress.", value: ":construction:" },
  { label: "➕ : Add dependencies.", value: ":heavy_plus_sign:" },
  {
    label: "💡 : Add or update comments in source code.",
    value: ":bulb:",
  },
  {
    label: "🚚 : Move or rename resources (e.g.: files, paths, routes).",
    value: ":truck:",
  },
  { label: "♻️ : Refactor code.", value: ":recycle:" },
  { label: "🔥 : Remove code or files.", value: ":fire:" },
  { label: "🏭 : Infrastructure related changes.", value: ":factory:" },
  { label: "📁 : Perform database related changes.", value: ":file_folder:" },
  { label: "🌱 : Add or update seed files.", value: ":seedling:" },
  { label: "🔧 : Add or update configuration files.", value: ":wrench:" },
  {
    label: "📦 : Add or update compiled files or packages.",
    value: ":package:",
  },
];
