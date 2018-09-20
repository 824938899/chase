<template>
	<div class="tm-swiper-wrapper">
		<swiper :options="swiperOption" v-if="swiperShow">
	    	<!-- slides -->
		    <swiper-slide v-for="item of swiperImages" :key="item.id">
		    	<a href="javascript:;"><img class="swiper-img" :src="item.imgUrl"></a>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	</div>
</template>


<script>
	export default{
		name: 'HomeSlide',
		props: {
			swiperImages: Array
		},
		data: function(){
			return {
				swiperOption: {
					autoplay: true,
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		computed: {
			swiperShow: function () {
				return this.swiperImages.length
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