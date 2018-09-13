<template>
	<div class="tm-weekend">
		<div class="weekend-title">
			<span>周末去哪</span>
		</div>
		<ul class="weekend-list">
			<li class="weekend-item" v-for="item of weekendList" :key="item.id">
				<a href="javascript:;" class="weekend-link">
					<div class="weekend-imgcon">
						<img :src="item.imgUrl" class="weekend-img">
					</div>
					<div class="weekend-info">
						<p class="weekend-info-title">{{item.title}}</p>
						<p class="weekend-info-desc">{{item.introl}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'HomeWeekend',
		props: {
			weekendList: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';

	.tm-weekend{
		background-color: $bgWhite;
	}

	.tm-weekend .weekend-title{
		padding-left: .2rem;
		background-color: $bgGery;
	}

	.tm-weekend .weekend-title .iconfont{
		color: #ff5e56;
		font-size: .38rem;
		
	}

	.tm-weekend .weekend-title span{
		font-size: .26rem;
		margin-left: .08rem;
		line-height: .8rem;
	}

	.tm-weekend .weekend-item{
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
		margin-bottom: .1rem;
	}

	.tm-weekend .weekend-item .weekend-link{
		display: block;
		height: 100%;
		width: 100%;
	}

	.tm-weekend .weekend-item .weekend-imgcon{
		overflow: hidden;
		width: 100%;
		padding-bottom: 37.4375%;
		height: 0;
	}

	.tm-weekend .weekend-item .weekend-imgcon .weekend-img{
		width: 100%;
	}

	.tm-weekend .weekend-item .weekend-info{
		overflow: hidden;
		padding: .14rem .22rem .22rem .22rem;
	}
	.weekend-info .weekend-info-title{
		ellipsis();
	    padding-right: 1.4rem;
	    color: $fontColor;
	    font-size: .28rem;
	    line-height: .48rem;
	}
	
	.weekend-info .weekend-info-desc{
		ellipsis();
	    padding-right: 1.4rem;
	    color: $lightTxtColor;
	    font-size: .24rem;
	    line-height: .42rem;
	}
	
</style>