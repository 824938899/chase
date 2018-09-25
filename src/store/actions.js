export default {
	changeCityName: function (ctx, city) {
  		ctx.commit('changeCityName', city)
  	},
  	chengeGalleryImages: function (ctx, galleryImages) {
  		ctx.commit('chengeGalleryImages', galleryImages)
  	},
  	chengeGalleryImagesNum: function (ctx, galleryImagesNum) {
  		ctx.commit('chengeGalleryImagesNum', galleryImagesNum)
  	}
}