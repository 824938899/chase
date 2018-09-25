<template>
	<div class="detail-list">
		<ul class="list">
			<li class="list-item" v-for="(item, index) in list" :key="index">
				<div class="list-item-title border-bottom">
					<span class="item-title-icon"></span>{{item.title}}
				</div>
				<div class="item-title-children" v-if="item.children">
					<detail-list :list="item.children"></detail-list>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'DetailList',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	.list-item-title{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		font-size: .32rem;
		padding: 0 .2rem;
		text-indent: .4rem;
	}
	.item-title-icon{
		display: inline-block;
	    position: absolute;
	    width: .36rem;
	    height: .36rem;
	    top: .26rem;
	    left: .2rem;
	    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
	    margin-right: .1rem;
	    background-size: .4rem 3rem;
	}
	.item-title-children{
		padding: 0 .3rem;
	}
	.item-title-children .list-item-title{
		font-size: .24rem;
	}
	
</style>