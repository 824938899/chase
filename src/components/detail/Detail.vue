<template>
	<div class="tm-page">
		<detail-header></detail-header>
		<detail-banner></detail-banner>
		<detail-list :list="list"></detail-list>
	</div>
</template>

<script>
	import DetailHeader from 'components/detail/page/Header'
	import DetailBanner from 'components/detail/page/Banner'
	import DetailList from 'components/detail/page/List'
	export default {
		name: 'Detail',
		components:{
			'detail-header': DetailHeader,
			'detail-banner': DetailBanner,
			'detail-list': DetailList
		},
		data: function () {
			return {
				list: [{
					title: '门票',
					children: [{
						title: '峨眉山成人票'
					}, 
					{
						title: '峨眉山成人票'
					}]
				}, {
					title: '门票'
				}, {
					title: '门票'
				}],
			}
		}
	}
</script>


<style lang="stylus" scoped>
	
</style>
