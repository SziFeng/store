<template> 
	<view >
		<my-swiper :imgList="imgList"></my-swiper>
		<menu-list :show="show"></menu-list>
		<view class=""  v-for="item in proList" :key="item.id">
			<view class="title myflex">
				<view class="name">{{item.name}}</view>
				<view class="more"><i  class="iconfont iconmore" ></i></view>
			</view>
			<view class="card-list">
				<block v-for="(res) in 4" :key="res">
					<card-cell :point1="true" :point2="true"></card-cell>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import mySwiper from '../../../cpmponents/my-swiper/my-swiper.vue'
	import menuList from '../../../cpmponents/menu-list/menu-list.vue'
	import cardCell from '../../../cpmponents/card-cell/card-cell.vue'
 	export default {
		components:{
			mySwiper,
			menuList,
			cardCell
		},
		data() {
			return {
				xin:false,
				show:false,
				vueTouches:{x:'',y:''},
				flag:true,
				imgList:[
					{img:require('@/common/image/img1.jpg')},
					{img:require('@/common/image/img2.jpg')},
					{img:require('@/common/image/img3.jpg')},
				],
				proList:[
					{id:10,name:'上衣'},
					{id:11,name:'外套'},
					{id:12,name:'裤子'},
				]
			}
		},
		methods: {
			showDown(val=true){
				this.show=val
			},
			showUp(){
				this.show=false
			}
		}
	}
</script>

<style scoped>
	.title{
		background-color: rgba(243, 236, 231, 0.85);
		color: ##666666;
		margin-top: 20rpx;
		padding:0 20rpx;
		opacity: 0.85;
	}
	.name{
		font-size: 44rpx;
		font-weight: 500;
	}
	.more{
		font-size: 30rpx;
		font-weight: 500;
	}
	.card-list{
		display: grid;
		grid-template-columns: repeat(2,50%);
		overflow: hidden;
	}
</style>
