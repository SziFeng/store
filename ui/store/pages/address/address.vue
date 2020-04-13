<template>
	<view class="container">
		<view class="card-item" v-for="(item,index) in addressList" :key="index">
			<view class="cell1">
				<view class="cell-info">{{item.name}}  {{item.tel}}</view>
				<view class="cell-address">{{item.addresss}}</view>
			</view>
			<view class="myflex cell2">
				<view class="">
					<checkbox :checked="item.default" />默认地址
				</view>
				<view class="myflex">
					<view class="myflex">
						<i class="iconfont iconedit"></i>
						<text>编辑</text>
					</view>
					<view class="myflex">
						<i class="iconfont icondel"></i>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		<view class="my-btn">
			<button type="primary" style="border-radius: 100rpx;width: 70%;" @click="setAddress">添加地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[
					{name:'苏先生',tel:15219971821,default:true,addresss:'江门市蓬江区新云大道开心公寓3栋之4-501'},
					{name:'黎小姐',tel:13612268500,default:false,addresss:'江门市蓬江区新云大道开心公寓3栋之4-601'}
				]
			}
		},
		methods: {
			setAddress(){
				this.$push('buildAddress')
			}
		}
	}
</script>

<style scoped>
.container{
	position: absolute;
	background-color: #F2F2F2;
	height: 100%;
	width: 100%;
}
.card-item{
	margin-top: 20rpx;
	background-color: #FFFFFF;
	padding: 20rpx 0;
}
.my-btn{
	position: fixed;
	bottom: 20rpx;
	width: 100%;
	text-align: center;
}
.cell1{
	padding: 0 40rpx 10rpx;
}
.cell-address{
	color: #7f7f7f;
}
.cell2{
	border-top: 2rpx solid #f2f2f2;
	padding:10rpx 40rpx 0;
	color: #7f7f7f;
}
.iconedit,.icondel{
	line-height: 1;
	margin-left: 10rpx;
	color: #7f7f7f;
}
</style>
