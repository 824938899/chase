<template>
	<div class="home-page">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from 'components/home/pages/Header'
	import HomeSwiper from 'components/home/pages/Swiper'
	import HomeIcons from 'components/home/pages/Icons'
	import HomeRecommend from 'components/home/pages/Recommend'
	import HomeWeekend from 'components/home/pages/Weekend'
	export default{
		name:'Home',
		components:{
			'home-header' : HomeHeader,
			'home-swiper' : HomeSwiper,
			'home-icons'  : HomeIcons,
			'home-recommend': HomeRecommend,
			'home-weekend': HomeWeekend
		}
	}

</script>

<style lang="stylus" scoped>
	.home-page{
		background-color: #f5f5f5;
	}
</style>
