/**
 * @description 单个组件插件
 */
import { App } from 'vue'
import LText from './LText.vue'


LText.install = (app: App) => {
  app.component(LText.name, LText)
}

export default LText