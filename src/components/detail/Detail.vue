<template>
	<div class="page">
		<detail-banner></detail-banner>
	</div>
</template>

<script>
	import DetailBanner from './page/Banner'
	export default {
		name: 'Detail',
		components:{
			'detail-banner': DetailBanner,
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>