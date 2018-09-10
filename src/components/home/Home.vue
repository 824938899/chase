<template>
	<div class="home-page">
		<!-- header -->
		<home-header>
			
		</home-header>
		<!-- header -->
		

		<!-- slide -->
		<home-swiper>

		</home-swiper>
		<!-- slide -->
	</div>
</template>

<script>
	import HomeHeader from 'components/home/pages/Header.vue'
	import HomeSwiper from 'components/home/pages/Swiper.vue'

	export default{
		name:'Home',
		components:{
			'home-header' : HomeHeader,
			'home-swiper' : HomeSwiper,
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
