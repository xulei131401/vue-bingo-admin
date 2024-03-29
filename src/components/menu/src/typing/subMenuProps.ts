import { PropType } from 'vue'
import { type Menu } from '@/typing/menu'

export const subMenuProps = () => {
	return {
		item: { type: Object as PropType<Menu>, default: {} }
	}
}

export type SubMenuProps = VuePropsType<typeof subMenuProps>
