const { override, overrideDevServer} = require('customize-cra');
const path = require("path");
// const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
// const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");

const devServerConfig = () => (config) =>{
  return {
    ...config,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
  };
}
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = {
  webpack: override(
    config=>{
      if(process.env.RUN_ENV === 'micro'){
        config.entry = resolve("src/index.micro.js");
        config.output={
          filename: path.posix.join('react-child/', 'app2-app2.js'),
          libraryTarget: "system",
          path: path.resolve(process.cwd(), "build"),
          // uniqueName: 'child-app2',
          // devtoolNamespace: `app2`,
          publicPath: "http://localhost:3001/",
          library: "app2-app2_app",
          chunkFilename: path.posix.join('react-child/', "js/[name]/[chunkhash].js"),
        }
        delete config.optimization.splitChunks ;
        delete config.optimization.runtimeChunk ;
      }else{
        config.entry = resolve("src/index.js");
      }
      
      // config.plugins.push(new SystemJSPublicPathPlugin({
      //   systemjsModuleName: `@app2/app2`,
      //   rootDirectoryLevel: 2
      // }))
      // config.plugins.push(new StandaloneSingleSpaPlugin({
      //     appOrParcelName: `@app2/app2`,
      //     disabled: false,

      //   }),)
      return config;
    }
  ),
  devServer: overrideDevServer(devServerConfig())
};