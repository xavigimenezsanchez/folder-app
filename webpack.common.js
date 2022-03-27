import sass from "sass";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { resolve, join } from "path";
const __dirname = resolve();

export default {
  entry: "./index.tsx",
  watchOptions: {
    ignored: ["**/node_modules", "**/server/"],
  },
  output: {
    filename: "./app-bundle.js",
    path: resolve(`${__dirname}/server/public`, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".Webpack.js", ".web.js", ".ts", ".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.(png|svg)$/i,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "server/public/manifest.json" },
        { from: "server/public/favicon.ico" },
        { from: "server/public/logo.png" },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: join(__dirname, "./server/public/index.html"),
    }),
  ],
};
