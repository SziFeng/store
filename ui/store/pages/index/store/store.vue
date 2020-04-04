<template> 
	<view class="" >
		<my-swiper :imgList="imgList"></my-swiper>
	</view>
</template>

<script>
	import mySwiper from '../../../cpmponents/my-swiper/my-swiper.vue'
	export default {
		components:{
			mySwiper
		},
		data() {
			return {
				imgList:[
					{img:require('@/common/image/img1.jpg')},
					{img:require('@/common/image/img2.jpg')},
					{img:require('@/common/image/img3.jpg')},
				]
			}
		},
		methods: {
		}
	}
</script>

<style>
</style>
