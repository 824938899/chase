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
		data: function(){
			return {
				icons: [
					{id: '001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', iconName: '景点门票'}, 
					{id: '002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png', iconName: '去赏花'},
					{id: '003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', iconName: '成都必游'},
					{id: '004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png', iconName: '海洋馆'},
					{id: '005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png', iconName: '亲子游'},
					{id: '006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png', iconName: '稻城亚丁'},
					{id: '007', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', iconName: '一日游'},
					{id: '008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', iconName: '游乐场'},
					{id: '009', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png', iconName: '直通车'},
					{id: '0010', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png', iconName: '赏秋色'}
				]
			}
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
		margin-top: .1rem;
		width: 100%;
		height: 0;
		padding-bottom: 50%;
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
