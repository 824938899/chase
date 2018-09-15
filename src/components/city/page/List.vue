<template>
	<div class="city-container">
		<div class="switch-tab">
			<div class="tab-btn-box">
				<a href="javascript:;" class="tab-item active" @click="cityTypeSwitch('domestic')">境内</a>
				<a href="javascript:;" class="tab-item" @click="cityTypeSwitch('foreign')">境外·港澳台</a>
			</div>
		</div>
		<city-domestic></city-domestic>
		<city-foreign></city-foreign>
	</div>
</template>

<script>
	import CityDomestic from 'components/city/page/cityListType/Domestic'
	import CityForeign from 'components/city/page/cityListType/Foreign'

	export default {
		name: 'CityList',
		components: {
			'city-domestic': CityDomestic,
			'city-foreign': CityForeign
		},
		data: function () {
			return {
				cityType: 'domestic'
			}
		},
		methods: {
			cityTypeSwitch: function (type) {
				console.log(e);
				this.cityType = type;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl';
	@import '~styles/mixins.styl';
	
	.switch-tab{
		height: .4rem;
	    line-height: .4rem;
	    background-color: #00bcd4;
	    padding: .2rem 1rem;
	    color: #fff;
	}
	.switch-tab .tab-btn-box{
		border: 1px solid #fff;
	    border-radius: .03rem;
	    clerfix();
	}
	.switch-tab .tab-item{
	    width: 50%;
	    float: left;
	    text-align: center;
	    background-color: #00bcd4;
	    font-size: .28rem;
	    color: #fff;
	}
	
	.switch-tab .tab-item.active{
	    background-color: #fff;
		color: #00bcd4;
	}
	
	.city-container >>> h2{
		font-size: .24rem;
    	margin: .24rem .3rem;
	}
	
	.city-container >>> .tm-list{
		position: relative;
		overflow: hidden;
		background-color: #fff;
		z-index: 0;
	}
	
	.city-container >>> .tm-list:after {
		content: '';
	    position: absolute;
	    width: 0;
	    left: 75%;
	    height: 100%;
	    border-left: .02rem solid #ddd;
	    border-right: 0;
	}
	
	.city-container >>> .tm-list:before {
		content: '';
	    position: absolute;
	    width: 25%;
	    left: 25%;
	    height: 100%;
	    border-left: .02rem solid #ddd;
	    border-right: .02rem solid #ddd;
	}
	
	.city-container >>> .tm-list li{
		float: left;
		position: relative;
		width: 25%;
	    height: .9rem;
	    line-height: .9rem;
	    font-size: .28rem;
	    text-align: center;
	    border-bottom: .02rem solid #ddd;
	    margin-bottom: -1px;
	    z-index: 10;
	    color: #212121;
	}
	.city-container >>> .tm-list li a{
	    color: #212121;
	    display: block;
	    font-size: .28rem;
	    ellipsis();
	}
	
	.city-container >>> .tm-list.list-tr3 li {
		width: 33.33%;
	}
	.city-container >>> .tm-list.list-tr3:after {
		border: 0;
	}
	
	.city-container >>> .tm-list.list-tr3:before {
		width: 33.33%;
		left: 33.33%;
	}

	.city-container >>> .tm-list.list-tr4 li {
		width: 25%;
	}
    
    .city-container >>> .tm-list.alphabet-lsit:before,
    .city-container >>> .tm-list.alphabet-lsit:after{
		border: 0;
    }
    
    .city-container >>> .tm-list.alphabet-lsit li{
    	width: 16.66%;
    	border: 0;
    }

    .city-container >>> .alphabet-lsit a {
		text-transform: uppercase;
    }
	
</style>