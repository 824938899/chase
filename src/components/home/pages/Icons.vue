<template>
	<div class="tm-icons-wrapper">
		<swiper>
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon-box" 
				v-for="item of page" 
				:key="item.id">
					<div class="icon-img-box">
						<img class="icon-img" :src="item.imgUrl">
					</div>
					<p class="icon-name">{{item.iconName}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name: 'HomeIcons',
		props: {
			icons: Array
		},
		computed: {
			pages: function(){
				var pages = [];
				this.icons.forEach(function(item, index){
					var page = Math.floor(index / 8);
					if(!pages[page]) pages[page] = [];
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';
	.tm-icons-wrapper{
		position: relative;
		margin-top: .01rem;
		width: 100%;
		height: 0;
		padding-bottom: 55%;
		background-color: #fff;
		overflow: hidden;
	}
	.tm-icons-wrapper >>> .swiper-container{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}
	.tm-icons-wrapper .icon-box{
		position: relative;
		float: left;
		margin-top: .1rem;
		width: 25%;
		height: 0;
		padding-bottom: 25%;
	}
	.tm-icons-wrapper .icon-box .icon-img-box{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: .44rem;
	}
	.tm-icons-wrapper .icon-box .icon-img{
		display: block;
		margin: 0 auto;
		height: 100%;
	}
	.tm-icons-wrapper .icon-box .icon-name{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		line-height: .44rem;
		height: .44rem;
		color: $fontColor;
		font-size: .28rem;
		ellipsis();
	}
</style>
