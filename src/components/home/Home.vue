<template>
	<div class="home-page">
		<home-header :city="city"></home-header>
		<home-swiper :swiperImages="swiperImages"></home-swiper>
		<home-icons :icons="icons"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from 'components/home/pages/Header'
	import HomeSwiper from 'components/home/pages/Swiper'
	import HomeIcons from 'components/home/pages/Icons'
	import HomeRecommend from 'components/home/pages/Recommend'
	import HomeWeekend from 'components/home/pages/Weekend'
	import axios from 'axios'
	export default{
		name:'Home',
		components:{
			'home-header' : HomeHeader,
			'home-swiper' : HomeSwiper,
			'home-icons'  : HomeIcons,
			'home-recommend': HomeRecommend,
			'home-weekend': HomeWeekend
		},
		data: function () {
			return {
				city: '',
				swiperImages: [],
				icons: [],
				recommendList: [],
				weekendList: [] 
			}
		},
		methods:{
			getHomeInfo: function () {
				axios.get('/api/index.json').then(this.getHomeInfoSuccess)
			},
			getHomeInfoSuccess: function (res) {
				console.log(res)
				if(res.data){
					this.city = res.data.city;
					this.swiperImages = res.data.swiperImages;
					this.icons = res.data.icons
					this.recommendList = res.data.recommendList;
					this.weekendList = res.data.weekendList;
				}
			}
		},
		mounted: function() {
			this.getHomeInfo();
		}
	}

</script>

<style lang="stylus" scoped>
	.home-page{
		background-color: #f5f5f5;
	}
</style>
