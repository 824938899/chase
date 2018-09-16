<template>
	<div class="city-page">
		<city-header></city-header>
		<city-list :cities="cities" :hotCities="hotCities"></city-list>
	</div>
</template>

<script>
	import CityHeader from 'components/city/page/Header'
	import CityList from 'components/city/page/List'
	import axios from 'axios'
	export default {
		name: 'City',
		components:{
			'city-header': CityHeader,
			'city-list': CityList
		},
		data: function () {
			return {
				hotCities: [],
				cities: {}
			}
		},
		methods: {
			getCityInfo: function () {
				axios.get('/api/city.json').then(this.getCityInfoSuccess)
			},
			getCityInfoSuccess: function (res) {
				if(res.data.ret){
					var data = res.data.data;
					this.cities = data.cities;
					this.hotCities = data.hotCities;
				}
			}	

		},
		mounted: function () {
			this.getCityInfo();
		}

	}
</script>

<style lang="stylus" scoped>
	.city-page {
		background-color: #f5f5f5;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>