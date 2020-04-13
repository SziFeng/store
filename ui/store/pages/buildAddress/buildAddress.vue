<template>
	<view class="container">
		<view class="swiper-card">
			<view class="myflex list-item" v-for="(item,ind) in addresData" :key="ind">
				<view class="item-name">{{item.name}}</view>
				<view class="item-input">
					<input type="text" style="font-size: 32rpx;" v-model="item.value" :placeholder="item.default" />
				</view>
			</view>
		</view>
		<view class="default-tab">
			<view class="myflex">
				<view class="">设为默认地址</view>
				<view class=""><checkbox  v-model="defaultSet"/></view>
			</view>
		</view>
		<view class="my-btn">
			<button type="primary" style="border-radius: 100rpx;width: 70%;" @click="setAddress">添加到我的地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addresData:[
					{name:'收货人',value:'',default:'请填写收货人姓名'},
					{name:'联系方式',value:'',default:'填写收货人手机号'},
					{name:'所在区域',value:'',default:'省、市、区'},
					{name:'详细地址',value:'',default:''},
					{name:'收货时间',value:'',default:'周一至周五收货'}
				],
				defaultSet:false
			}
		},
		methods: {
			setAddress(){
				console.log(this.addresData)
			}
		}
	}
</script>

<style scoped>
.container{
	position: absolute;
	height: 100%;
	width: 100%;
	border-top: 2rpx solid #F2F2F2;
	background-color: #F2F2F2;
}
.swiper-card{
	background-color: #fff;
}
.list-item{
	padding: 20rpx 20rpx 20rpx 0;
	margin-left: 40rpx;
	border-bottom: 2rpx solid #F2F2F2;
	background-color: #FFFFFF
}
.list-item:nth-last-child(1){
	border-bottom: 0rpx;
}
.item-name{
	font-size: 32rpx;
	flex: 2;
}
.item-input{
	flex: 7;
}
.default-tab{
	margin-top: 20rpx;
	padding: 20rpx 40rpx;
	background-color: #FFFFFF;
}
.my-btn{
	position: fixed;
	bottom: 20rpx;
	width: 100%;
	text-align: center;
}
</style>
