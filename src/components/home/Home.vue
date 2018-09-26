<template>
	<div class="home-page">
		<home-header></home-header>
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
	import { mapState } from 'vuex'
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
				lastCity: '', //保存上一次city值
				swiperImages: [],
				icons: [],
				recommendList: [],
				weekendList: [] 
			}
		},
		computed:{
			...mapState({
				curCity: 'city' //this.$store.state.city ==> this.curCity => 点击后的city
			})
		},
		methods:{
			getHomeInfo: function () {
				axios.get('/api/index.json?city=' + this.curCity).then(this.getHomeInfoSuccess)
			},
			getHomeInfoSuccess: function (res) {
				if(res.data){
					var data = res.data;
					this.swiperImages = data.swiperImages
					this.icons = data.icons
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		},
		mounted: function() {
			this.getHomeInfo();
			this.lastCity = this.curCity
		},
		activated: function () {
			if (this.lastCity !== this.curCity) { //如果city发生改变就再次进行ajax请求
				this.lastCity = this.curCity 
				this.getHomeInfo()
			}
		}
	}

</script>

<style lang="stylus" scoped>
	.home-page{
		background-color: #f5f5f5;
	}
</style>
