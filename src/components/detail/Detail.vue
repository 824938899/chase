<template>
	<div class="tm-page">
		<detail-header
					:detailTitle="sightName"></detail-header>
		<detail-banner
					:bannerTitle="sightName"
					:galleryImagesLen="galleryImages.length"
					:isVideo="isVideo"
					:bannerImage="bannerImage"
					></detail-banner>
		<detail-list :list="categoryList"></detail-list>
	</div>
</template>

<script>
	import DetailHeader from 'components/detail/page/Header'
	import DetailBanner from 'components/detail/page/Banner'
	import DetailList from 'components/detail/page/List'
	import axios from 'axios'
	export default {
		name: 'Detail',
		components:{
			'detail-header': DetailHeader,
			'detail-banner': DetailBanner,
			'detail-list': DetailList
		},
		data: function () {
			return {
				sightName: '',
				bannerImage: '',
				categoryList: [],
				galleryImages: [],
				isVideo: false
			}
		},
		methods: {
			getDetailInfo: function () {
				axios.get('/api/detail.json').then(this.getDetailInfoSuccess)
			},
			getDetailInfoSuccess: function (res) {
				if(res.data.ret && res.data.data){
					var data = res.data.data
					this.sightName = data.sightName
					this.bannerImage = data.bannerImage
					this.categoryList = data.categoryList
					this.galleryImages = data.galleryImages
					this.isVideo = data.isVideo
					this.$store.dispatch('chengeGalleryImages', this.galleryImages)
					this.$store.dispatch('chengeGalleryImagesNum', this.galleryImages.length)
				}
			}
		},
		mounted: function () {
			this.getDetailInfo()
		}
	}
</script>


<style lang="stylus" scoped>
	
</style>
