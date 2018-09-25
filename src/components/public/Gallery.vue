<template>
	<div class="tm-gallery-container" @click="galleryClick">
		<swiper :options="swiperOption">
	    	<!-- slides -->
		    <swiper-slide v-for="(item, index) in imagesList" :key="index">
		    	<img :src="item" class="swiper-img">
		    </swiper-slide>
		    <!-- Optional controls -->
		    
	  	</swiper>
	  	<div class="swiper-pagination"  slot="pagination"></div>
	  	<div class="sdsd">
	  		
	  	</div>
	</div>
</template>

<script>
	export default {
		name: 'PublicGallery',
		props: {
			imagesList: Array
		},
		data: function () {
			return {
				isGalleryShow: true,
				swiperOption: {
					pagination: {
						 el: '.swiper-pagination',
						 type: 'fraction'
					},
					observer: true,
					observeParents: true
				}
			}
		},
		methods: {
			galleryClick: function () {
				this.isGalleryShow = false;
				this.$emit('closeGallery', this.isGalleryShow);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tm-gallery-container{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000;
		z-index: 100;
	}
	.tm-gallery-container >>> .swiper-container{
		position: relative;
		left: 0;
		right: 0;
		top: 50%;
		transform: translate(0, -50%);
	}
	
	.tm-gallery-container >>> .swiper-container .swiper-slide img{
		width: 100%;
	}
	
	.tm-gallery-container >>> .swiper-pagination{
		color: #fff;
		height: .8rem;
	    font-size: .24rem;
	    line-height: .8rem;
	    text-align: center;
	}	
</style>