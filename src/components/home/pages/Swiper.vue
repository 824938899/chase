<template>
	<div class="tm-swiper-wrapper">
		<swiper :options="swiperOption">
	    	<!-- slides -->
		    <swiper-slide v-for="item of swiperImages" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>


<script>
	export default{
		name: 'HomeSlide',
		data: function(){
			return {
				swiperOption: {
					autoplay: true,
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					}
				},
				swiperImages: [
					{id: '001', imgUrl: '../../../../static/images/banner1.jpg'},
					{id: '002', imgUrl: '../../../../static/images/banner2.jpg'}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tm-swiper-wrapper{
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 26.67%
		overflow: hidden;
		background-color: #eee;
	}
	
	.tm-swiper-wrapper .swiper-pagination{
		bottom: .05rem;
	}
	
	.tm-swiper-wrapper >>> .swiper-pagination-bullet-active{
		background-color: #fff;
	}
	
	.swiper-img{
		width: 100%;
		height: 100%;
	}
</style>