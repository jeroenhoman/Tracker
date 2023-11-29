const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "js/index.js",
    path: path.resolve(__dirname, "public"),
  },
  watch: true,
  resolve: {
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
};
