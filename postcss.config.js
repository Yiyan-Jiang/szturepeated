// postcss.config.js
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    postcssImport({
      // 处理 ant-design-vue 的 CSS
      path: ['node_modules/ant-design-vue/dist']
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    autoprefixer()
  ]
}