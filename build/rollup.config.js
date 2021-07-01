import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'

const file = type => `dist/${name}.${type}.js`
const overrides = {
  // declaration 设置为true 将 ts 声明文件打包导出，提供类型支持
  compilerOptions: { declaration: true },
  // exclude 包含需要打包的文件  ** 任意长度
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
}
export { name, file }
export default {
  input: 'src/index.ts',
  // output: {
  //   name, // 名称
  //   file: file('esm'), // 输出的路径
  //   format: 'es'  //
  // },
  plugins: [
    nodeResolve(),  // 处理三方模块
    // 处理 typescript 文件 ，可通过 tsconfigOverride 覆盖部分 tsconfig 配置
    // tsconfig.js 是开发环境下 ts 的相关配置文件 https://www.typescriptlang.org/zh/tsconfig
    typescript({ tsconfigOverride: overrides }),
    vue(), // 处理vue文件
    css({ output: 'bundle.css' }) // 处理 css 文件
  ],
  external: ['vue', 'lodash-es']  // external 字段配置打包过程中的外部引用，在打包过程中将其省略掉，不打包
  // 还支持函数写法  https://rollupjs.org/guide/en/#external
  // external: (id) => {  // id 代表模块名称
  //   return /^vue/.test(id) // ture 省略   false 不省略
  // }
}