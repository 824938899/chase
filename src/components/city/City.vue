<template>
	<div class="city-page">
		<city-header></city-header>
	</div>
</template>

<script>
	
	import CityHeader from 'components/city/page/Header'

	export default {
		name: 'City',
		components:{
			'city-header': CityHeader
		}
	}
</script>

<style lang="stylus" scoped>
	.city-page {
		background-color: #f5f5f5;
	}
</style>