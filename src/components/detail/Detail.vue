<template>
	<div class="tm-page">
		<detail-header></detail-header>
		<detail-banner></detail-banner>
		<div class="content-box">
			
		</div>
	</div>
</template>

<script>
	import DetailHeader from 'components/detail/page/Header'
	import DetailBanner from 'components/detail/page/Banner'
	export default {
		name: 'Detail',
		components:{
			'detail-header': DetailHeader,
			'detail-banner': DetailBanner
			
		}
	}
</script>

<style lang="stylus" scoped>
	.content-box{
		height: 45rem;
	}
</style>