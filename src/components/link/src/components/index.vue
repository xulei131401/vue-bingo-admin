<template>
	<div>
		<a :href="url" :target="target" @click="onClick">{{ text }}</a>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ALink'
})
</script>

<script setup lang="ts">
type LinkProps = {
	link: string
	text: string
}

const target = '_self'
const emit = defineEmits(['linkClick'])
defineProps<LinkProps>()
const url = computed(() => {
	return 'javascript:;'
})

const onClick = () => {
	emit('linkClick', '')
}
</script>

<style scoped lang="scss"></style>
