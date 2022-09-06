import { App } from 'vue'
import AntDesignVuePlugin from './ant-design-vue-plugin'
import GlobalPlugin from './global-plugin'
import SurelyVuePlugin from './surely-vue-plugin'
import ErrorPlugin from './error-plugin'

export function setupGlobal(app: App) {
	app.use(AntDesignVuePlugin)
	app.use(GlobalPlugin)
	app.use(SurelyVuePlugin)
	app.use(ErrorPlugin)
}
