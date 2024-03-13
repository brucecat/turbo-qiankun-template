// 修改config-overrides.js
const { override, addWebpackExternals } = require('customize-cra')

module.exports = override(
  addWebpackExternals ({
    axios: "axios",
  }),
)