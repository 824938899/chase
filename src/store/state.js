

var defaultCity = '成都'

try {
	if(localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {
	
}

var defaultGalleryImages = ''

try {
	if(localStorage.galleryImages) {
		defaultGalleryImages = localStorage.galleryImages.split(",") //字符串转换成数组
	}
} catch (e) {
	console.log(e);
}


export default {
	city: defaultCity,
	galleryImages: defaultGalleryImages,
	chengeGalleryImagesNum: ''
}