<template>
	<div class="tm-recommend">
		<div class="recommend-title">
			<i class="iconfont">&#xe745;</i><span>猜你喜欢</span>
		</div>
		<ul class="recommend-list">
			<li class="recommend-item" v-for="item of recommendList" :key="item.id">
				<router-link to="/detail" class="recommend-link">
					<div class="recommend-imgcon">
						<img :src="item.imgUrl" class="recommend-img">
					</div>
					<div class="recommend-imgtag" style="background-image:url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)">
						{{item.tag}}
					</div>
					<div class="recommend-info">
						<div class="recommend-info-title">{{item.title}}</div>
						<div class="recommend-info-comment">
							<span class="recommend-starlevel">
								<strong class="iconfont recommend-starlevel-gain">&#xe671;&#xe671;&#xe671;&#xe671;</strong>
								<span class="iconfont recommend-starlevel-total">&#xe671;&#xe671;&#xe671;&#xe671;&#xe671;</span>
							</span>
							<span class="recommend-comment-num">{{item.commentNum}}条评论</span>
						</div>
						<div class="recommend-info-price">
							<span class="recommend-price">
								¥
								<em class="recommend-price-num">{{item.price}}</em>
							</span>
							起
							<span class="recommend-addred">{{item.addres}}</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{//export default
		name: 'HomeRecommend',
		props: {
			recommendList: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';

	.tm-recommend{
		margin-top: .2rem;
		background-color: $bgWhite;
	}

	.tm-recommend .recommend-title{
		padding: .24rem 0 .26rem;
		margin-left: .2rem;
	}

	.tm-recommend .recommend-title .iconfont{
		color: #ff5e56;
		font-size: .38rem;
		
	}

	.tm-recommend .recommend-title span{
		font-size: .32rem;
		margin-left: .08rem;
	}

	.tm-recommend .recommend-list{
		margin-left: .24rem;
	}

	.tm-recommend .recommend-item{
		position: relative;
		overflow: hidden;
		padding: .2rem 0;
		height: 2.4rem;
		box-sizing: border-box;
	}

	.tm-recommend .recommend-item .recommend-link{
		display: block;
		height: 100%;
		width: 100%;
	}

	.tm-recommend .recommend-item .recommend-imgcon{
		float: left;
		overflow: hidden;
		height: 100%;
		width: 2rem;
	}

	.tm-recommend .recommend-item .recommend-imgcon .recommend-img{
		width: 100%;
	}

	.tm-recommend .recommend-item .recommend-info{
		overflow: hidden;
		padding-left: .22rem;
	}
	.recommend-info .recommend-info-title{
		margin-top: .26rem;
	    height: .44rem;
	    color: $fontColor;
	    font-size: .32rem;
	    line-height: .44rem;
	    width: 100%;
	    ellipsis();
	}
	.recommend-info .recommend-info-comment{
		margin-top: .14rem;
    	height: .34rem;
	}
	.recommend-info .recommend-info-comment .recommend-starlevel{
		display: inline-block;
	    position: relative;
	    width: 1.5rem;
	    height: .28rem;
	    line-height: .28rem;
	    font-size: .28rem;
	    letter-spacing: .02rem;
	    -webkit-transform: scale(.83);
	    -moz-transform: scale(.83);
	    -ms-transform: scale(.83);
	    -o-transform: scale(.83);
	    transform: scale(.83);
	    -webkit-transform-origin: 0 0;
	    -moz-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	    -o-transform-origin: 0 0;
	    transform-origin: 0 0;
	}
	.recommend-info .recommend-info-comment .recommend-comment-num{
      	color: $lightTxtColor;
	    font-size: .24rem;
	    line-height: .34rem;
	    vertical-align: text-bottom;
	}
	
	.recommend-starlevel-gain, .recommend-starlevel-total {
	    overflow: hidden;
	    position: absolute;
	    top: .04rem;
	    left: 0;
	    height: .28rem;
	}
	
	.recommend-starlevel-gain {
	    z-index: 2;
	    color: #ffb436;
	}
	.recommend-starlevel-total {
	    z-index: 1;
	    color: #e0e0e0;
	}
	.recommend-info-price {
	    position: relative;
	    margin-top: .22rem;
	    color: $lightTxtColor;
	    font-size: .24rem;
	    line-height: .4rem;
	}
	
	.recommend-info-price .recommend-price{
		color: #ff8300;
	}
	
	.recommend-info-price .recommend-price .recommend-price-num{
		font-size: .4rem;
	}
	.recommend-info-price .recommend-addred {
	    position: absolute;
	    right: .24rem;
	    bottom: 0;
	}
	.recommend-imgtag{
		position: absolute;
	    top: .2rem;
	    left: 0;
	    width: 1.02rem;
	    height: .38rem;
	    background-size: 100%;
	    color: #fff;
	    font-size: .2rem;
	    line-height: .38rem;
	    text-indent: .04rem;
	}
</style>