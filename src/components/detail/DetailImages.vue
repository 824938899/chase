<template>
	<div class="tm-page">
		<div class="tm-header">
			<router-link to="/detail/001" class="tm-header-left">
				<span class="iconfont">&#xe600;</span>
			</router-link>
			<h1 class="tm-header-title">景区图片</h1>
			<span class="tm-header-right">
				
			</span>
		</div>
		<div class="detail-images">
			<ul class="detail-images-list">
				<li class="list-item" v-for="(item, index) in imagesList" :key="index">
					<a href="javascript:;" class="img-box" @click="showGallery">
						<img :src="item">
					</a>
				</li>
			</ul>
		</div>
		<public-gallery :imagesList="imagesList" @closeGallery="Galleryclose" v-show="isGalleryShow"></public-gallery>
	</div>
</template>

<script>
	import PublicGallery from 'components/public/Gallery'
	export default {
		name: 'DetailImages',
		data: function () {
			return {
				imagesList: ['//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg', '//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg'],
				isGalleryShow: false
			}
		},
		components: {
			'public-gallery': PublicGallery
		},
		methods: {
			showGallery: function (){
				this.isGalleryShow = true;
			},
			Galleryclose: function (galleryShow) { //子组件emit  galleryShowFun
				this.isGalleryShow = galleryShow;
			}
		}

	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';
	.tm-page {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: $bgGery;
	}	
	.tm-header{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: .88rem;
		background-color: #fff;
		z-index: 99;
		border-bottom: 1px solid #e0e0e0;
	}
	
	.tm-header .tm-header-left {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    text-align: center;
	    color: #333;
	}
	
	.tm-header .tm-header-left .iconfont{
		font-size: .48rem;
	}

	.tm-header .tm-header-title{
		overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #333;
	}
	.tm-header .tm-header-right {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #fff;
	}
	.detail-images{
		position: relative;
		padding: 1.08rem .2rem .4rem .2rem;
	}
	
	.detail-images .detail-images-list{
		clerfix();
		margin-left: -.1rem;
		margin-top: -.1rem;
	}
	
	.detail-images .list-item{
		float: left;
		width: 50%;
		padding-left: .1rem;
		padding-top: .1rem;
		box-sizing: border-box;
	}
	
	.detail-images .list-item .img-box{
		display: block;
		width: 100%;
	}
	.detail-images .list-item .img-box img{
		width: 100%;
	}

</style>