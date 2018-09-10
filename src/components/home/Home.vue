<template>
	<div class="home-page">
		<!-- header -->
		<home-header>
			
		</home-header>
		<!-- header -->
		

		<!-- slide -->
		<home-slide>

		</home-slide>
		<!-- slide -->
	</div>
</template>

<script>
	import HomeHeader from 'components/home/pages/HomeHeader.vue'
	import HomeSlide from 'components/home/pages/HomeSlide.vue'

	export default{
		name:'Home',
		components:{
			'home-header' : HomeHeader,
			'home-slide' : HomeSlide,
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
