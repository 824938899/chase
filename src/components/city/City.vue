<template>
	<div class="city-page">
		<city-header></city-header>
		<city-list></city-list>
	</div>
</template>

<script>
	
	import CityHeader from 'components/city/page/Header'
	import CityList from 'components/city/page/List'

	export default {
		name: 'City',
		components:{
			'city-header': CityHeader,
			'city-list': CityList
		}
	}
</script>

<style lang="stylus" scoped>
	.city-page {
		background-color: #f5f5f5;
	}
</style>