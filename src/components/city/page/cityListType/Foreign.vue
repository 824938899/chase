<template>
	<div class="wrapper" id="city-foreign" ref="listWrapper">
	  <div class="content">
		    <div class="hot-cities">
		    	<h2 class="hot-cts-title">热门城市</h2>
		    	<ul class="tm-list list-tr3">
		    		<li v-for="item of hotCities" :key="item.id"><a href="javascript:;" @click="cityClick(item.name)">{{item.name}}</a></li>
		    	</ul>
		    </div>
		    <div class="alphabet-menu">
		    	<h2 class="alphabet-menu-title">字母排序</h2>
		    	<ul class="tm-list alphabet-lsit">
		    		<li v-for="(item, index) in letters" :key="index">
		    			<a href="javascript:;" @click="clickLetter($event)">{{item}}</a>
		    		</li>
		    	</ul>
		    </div>
		    <div class="alphabet-list" v-for="(item, key) in cities" :key="key" :ref="key" :data="key">
		    	<h2 class="alphabet-menu-title">{{key}}</h2>
		    	<ul class="tm-list list-tr4">
		    		<li v-for="items in item" :key="items.id">
		    			<a href="javascript:;" @click="cityClick(items.name)">{{items.name}}</a>
		    		</li>
		    	</ul>
		    </div>
		  </div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import axios from 'axios'
	export default {
		name: 'CityForeign',
		props: {
			hotCities: Array,
			cities: Object
		},
		data: function () {
			return {
				letter: ''
			}
		},
		computed: {
			letters: function () {
				var letters = [];
				for (var i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		methods: {
			clickLetter: function (e) {
				var e = e || e.event,
					target = e.target || e.srcElement
					this.letter = target.innerText
			},
			cityClick: function (city) {
				this.$store.dispatch('changeCityName', city)//内容分发
				this.$router.push({
					name: 'Home'
				})
			}
		},
		mounted: function () {
			this.scroll = new BScroll(this.$refs.listWrapper)
			
		},
		watch: {
			letter: function () {
				if (this.letter) {
					var element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		}

	}
</script>

