<template>
	<div class="home">
		<!-- header -->
		<home-header>
			
		</home-header>
		<!-- header -->

		<home-slide>
			1
		</home-slide>
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