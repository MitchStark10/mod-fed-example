const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  exposes: {
    "./modules": "./src/Modules",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    "react-router": {
      singleton: true,
      requiredVersion: deps["react-router"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: deps["react-router-dom"],
    },
  },
};
