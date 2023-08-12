import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import sass from "rollup-plugin-sass";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/index.es.js",
      format: "es",
    },
  ],
  external: ["react", "react-dom"], // Add any other external dependencies here
  plugins: [
    typescript(),
    babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
    resolve(),
    commonjs(),
    external(),
    sass(),
    terser(),
  ],
};
