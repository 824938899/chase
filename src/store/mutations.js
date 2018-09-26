export default {
	changeCityName: function (state, city) {
  		state.city = city
  		localStorage.city = city
  	},
  	chengeGalleryImages: function (state, galleryImages) {
  		state.galleryImages = galleryImages
  		localStorage.galleryImages = galleryImages
  	},
  	chengeGalleryImagesNum: function (state, galleryImagesNum) {
  		state.gelleryImagesNum = galleryImagesNum
  	}
}