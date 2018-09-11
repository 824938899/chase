<template>
	<div class="home-page">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
</template>

<script>
	import HomeHeader from 'components/home/pages/Header.vue'
	import HomeSwiper from 'components/home/pages/Swiper.vue'
	import HomeIcons from 'components/home/pages/Icons.vue'
	export default{
		name:'Home',
		components:{
			'home-header' : HomeHeader,
			'home-swiper' : HomeSwiper,
			'home-icons'  : HomeIcons
		}
	}

</script>

<style lang="stylus" scoped>
	.home-page{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #f5f5f5;
	}
</style>
