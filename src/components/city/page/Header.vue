<template>
	<div class="tm-header">
		<router-link to="/" class="tm-header-left iconfont">
			&#xe600;
		</router-link>
		<h1 class="tm-header-title">城市选择</h1>
	</div>
</template>

<script>
	export default {
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>

	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';
	.tm-header{
		position: relative;
		height: .88rem;
		background-color: $bgColor;
	}
	
	.tm-header .tm-header-left{
		position: absolute;
		left: 0;
		top: 0;
		display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	
	.tm-header-title{
		ellipsis();
		margin: 0 1rem;
		line-height: .88rem;
		text-align: center;
		font-size: .32rem;
		color: $bgWhite;
	}

</style>