const { spawnSync } = require("node:child_process");

function readTopicFromNpmArgv() {
  const raw = process.env.npm_config_argv;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    const original = Array.isArray(parsed?.original) ? parsed.original : [];
    // Example: ["run","test:topic","two-sum"]
    const idx = original.findIndex((x) => x === "test:topic");
    if (idx !== -1 && typeof original[idx + 1] === "string") return original[idx + 1];
    return null;
  } catch {
    return null;
  }
}

const topic =
  process.argv[2] ||
  readTopicFromNpmArgv() ||
  process.env.TOPIC ||
  process.env.npm_config_topic;

if (!topic) {
  console.error("Missing topic. Usage: npm run test:topic two-sum");
  process.exit(2);
}

const jestArgs = ["topics/" + topic];
const extra = process.argv.slice(3); // allow: npm run test:topic two-sum -- --watch
if (extra.length) jestArgs.push(...extra);

const jestBin = require.resolve("jest/bin/jest");
const res = spawnSync(process.execPath, [jestBin, ...jestArgs], {
  stdio: "inherit",
});
process.exit(res.status ?? 1);

