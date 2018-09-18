<template>
	<div class="detail-banner">
		<img class="detail-banner-img" src="//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg">
		<router-link to="/" class="back-btn">
			<span class="iconfont">&#xe600;</span>
		</router-link>
		<div class="detail-imgswipeicon">
			<span class="iconfont">&#xe691;</span><em class="detail-imgswipeicon-num">11</em>
		</div>
		<div class="detail-video">
			<span class="detail-video-text">视频</span>
			<span class="iconfont">&#xe638;</span>
		</div>
		<div class="detail-title">
			成都欢乐谷(AAAA景区)成都欢乐谷(AAAA景区)成都欢乐谷(AAAA景区)成都欢乐谷(AAAA景区)成都欢乐谷(AAAA景区)
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailBanner'
	}

</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	@import '~styles/mixins.styl'
	
	.detail-banner {
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 55%;
		color: #fff;
	}
	.detail-banner .detail-banner-img{
		width: 100%;
	}
	.detail-banner .back-btn{
		position: absolute;
		top: .1rem;
		left: .1rem;
		width: .72rem;
		height: .72rem;
		border-radius: 50%;
		background-color: rgba(0,0,0,.5);
		text-align: center;
	}
	.detail-banner .back-btn .iconfont{
		font-size: .5rem;
		line-height: .72rem;
		color: #fff;
		font-weight: 500;
	}
	
	.detail-banner .detail-video {
		position: absolute;
	    bottom: .36rem;
	    right: .2rem;
	    z-index: 9;
	    width: 1.5rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: right;
	    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	}
	
	.detail-banner .detail-video~.detail-title{
		margin-right: 1.5rem;
	}
	
	.detail-banner .detail-title{
		position: absolute;
		right: .2rem;
		left: .2rem;
		bottom: .36rem;
		font-size: .36rem;
		color: #fff;
		ellipsis();
	}
	.detail-banner .detail-imgswipeicon{
		position: absolute;
		left: .2rem;
		bottom: .86rem;
		width: 1.2rem;
	    height: .4rem;
	    background: rgba(0,0,0,.5);
	    border-radius: .2rem;
	    font-size: .24rem;
	    color: #fff;
	    line-height: .4rem;
	    text-align: center;
	}
	.detail-banner .detail-imgswipeicon .iconfont{
		font-size: .24rem;
	}
	.detail-banner .detail-imgswipeicon .detail-imgswipeicon-num{
		margin-left: .1rem;
	}
</style>