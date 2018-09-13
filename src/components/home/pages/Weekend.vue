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
		data: function () {
			return {
				weekendList: [
					{
						id: '0001',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
						title: '成都必游TOP10',
						introl: '成都的标志，也是现代人对老成都的记忆'
					},
					{
						id: '0002',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
						title: '慢游成都最美古镇',
						introl: '撷取一份悠闲，寻觅散落在时光里的幸福'
					},
					{
						id: '0003',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
						title: '玩转主题乐园',
						introl: '乐园，与青春作伴'
					},
					{
						id: '0004',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b8/e6206794272459.jpg_r_640x214_a002ded9.jpg',
						title: '郊野户外深呼吸',
						introl: '做个久违的深呼吸，来一场清肺之旅'
					},
					{
						id: '0005',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e8/7afdd7b86bf778.jpg_r_640x214_c70adb31.jpg',
						title: '我的周末我做主',
						introl: '在成都Hold各种长假短假'
					}

				]
			}
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