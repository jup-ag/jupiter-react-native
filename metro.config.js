const path = require("path");
module.exports = {
  resolver: {
    resolverMainFields: ["browser", "main", "module"],
    sourceExts: ["jsx", "js", "ts", "tsx", "cjs", "mjs"],
    extraNodeModules: {
      ...require("node-libs-expo"),
    },
  },
};
