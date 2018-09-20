<template>
	<div class="headers">
		
		<router-link to="/" class="back-btn" v-show="showHeaderBack">
			<span class="iconfont">&#xe600;</span>
		</router-link>

		<header class="tm-header" :style="opacityStyle" v-show="!showHeaderBack">
			<router-link to="/" class="tm-header-left">
				<span class="iconfont">&#xe600;</span>
			</router-link>
			<h1 class="tm-header-title">成都海昌极地海洋公园</h1>
		</header>
	</div>
</template>

<script>
	export default{
		name: 'DetailHeader',
		data: function () {
			return {
				showHeaderBack: true,
				opacityStyle: {
					opacity : 0
				}
			}
		},
		methods: {
			scrollFun: function () {
				var top = document.documentElement.scrollTop;
				if(top > 50){
					var opacity = top / 130
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle.opacity = opacity
					this.showHeaderBack = false
				}else{
					this.showHeaderBack = true
				}
			}
		},
		activated: function () {
			window.addEventListener('scroll', this.scrollFun)
		},
		deactivated: function () {
			window.removeEventListener('scroll', this.scrollFun)
		}

	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';
	
	
	.headers .back-btn{
		position: fixed;
		top: .1rem;
		left: .1rem;
		width: .72rem;
		height: .72rem;
		border-radius: 50%;
		background-color: rgba(0,0,0,.5);
		z-index: 99;
		text-align: center;
	}
	.headers .back-btn .iconfont{
		font-size: .5rem;
		line-height: .72rem;
		color: #fff;
		font-weight: 500;
	}
	
	.tm-header{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: .88rem;
		z-index: 999;
		background: $bgColor;
	}
	.tm-header .tm-header-left{
		position: absolute;
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		font-size: .36rem;
		color: #fff;
		text-align: center;
	}
	
	.tm-header .tm-header-left .iconfont{
		font-size: .36rem;
	}

	.tm-header .tm-header-title{
		ellipsis();
	    margin: 0 1rem;
	    line-height: .88rem;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
</style>
