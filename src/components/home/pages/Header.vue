<template>
	<header class="tm-header">
		<a href="" class="tm-header-left iconfont">&#xe600;</a>
		<div class="tm-header-title">
			<div class="kw" @click="clickSearch" v-show="!search"><span class="iconfont icon-search">&#xe651;</span>输入城市/景点/游玩主题</div>
			<input id="headerSearch" class="header-input" type="text" @blur="blurSearch"/>
		</div>
		<div class="tm-header-right">
			<router-link to="/city" class="tm-select-city">
				<span class="city">
					{{this.city}}
					<i class="iconfont icon-down">&#xe653;</i>
				</span>
			</router-link>
		</div>
	</header>
</template>


<script>
	import { mapState } from 'vuex'
	export default{
		name:'HomeHeader',
		data: function () {
			return {
				search:false,
			}
		},
		computed: {
			...mapState({
				city: 'city'
			})
		},
		methods: {
			clickSearch : function(e){
				this.search = true;
				
				var target = e.target || srcElement;
				
				target.nextElementSibling.focus();
			},

			blurSearch: function(){
				this.search = false;
			}

		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	.tm-header{
		height: .88rem;
		display: flex;
		background-color: $bgColor;
	}
	
	.tm-header .tm-header-left{
		display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	
	.tm-header .tm-header-title{
		position: relative;
		flex:1;
		margin: .14rem 0;
	}
	
	.tm-header .tm-header-title .kw{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		color: #999;
		text-align: left;
		padding-left: .16rem
		font-size: .28rem;
		line-height: .6rem;
	}
	.tm-header .tm-header-title .icon-search{
		margin-right: .1rem
	}
	
	.tm-header .tm-header-title .header-input{
		width: 100%;
		height: 100%;
		border-radius: .06rem;
		padding: 0 .2rem;
		box-sizing: border-box;
	}

	.tm-header .tm-header-right{
		height: 100%;
	}
	
	.tm-header .tm-header-right .tm-select-city{
		display: inline-block;
	    margin-right: .04rem;
	    color: #fff;
	    line-height: .88rem;
	}
	
	.tm-header .tm-header-right .city{
		padding: 0 .22rem;
		line-height: 1;
	}
	
	.tm-header .tm-header-right .icon-down{
		font-size: .24rem;
    	margin-left: .04rem;
	}
	

</style>