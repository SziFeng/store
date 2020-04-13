<template>
	<view class="container">
		<view class="info">
			<view class="info-img">
				<view class="img-cell">
					<image class="cell1" :src="require('../../../common/image/img6.jpg')" mode=""></image>
				</view>
			</view>
			<view class="info-message">
				<view class="info-name">不再飞的鱼</view>
				<view class="info-txt">描述你自己......</view>
				<view class="info-person">
					<view class="cell2">
						<view>365</view>
						<view>钱包</view>
					</view>
					<view class="cell2">
						<view>35</view>
						<view>收藏</view>
					</view>
					<view class="cell2">
						<view>3634</view>
						<view>浏览历史</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list ">
			<view class="list-cell myflex" v-for="(item,index) in list" :key="index">
				<view class="cell-name">
					<i  class="iconfont" :class="item.icon" ></i>
					<text>{{item.name}}</text>
				</view>
				<view class="cell-icon"><i class="iconfont iconright"></i></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'我的订单',icon:'iconorder',path:''},
					{name:'地址管理',icon:'iconaddress',path:''},
					{name:'消息',icon:'iconmessage',path:''},
					{name:'密码',icon:'iconkeys',path:''},
					{name:'设置',icon:'iconsetting',path:''},
				]
			}
		},
		methods: {
			goTo(path){
				this.$push(path)
			}
		}
	}
</script>

<style scoped>
.info{
	padding:20rpx 0;
	margin: 0 40rpx;
	border-bottom: 2rpx solid #CCCCCC;
	display: flex;
}
.info-img{
	flex: 3;
}
.img-cell{
	position: relative;
	width:140rpx;
	height: 140rpx;
	border-radius: 50%;
	overflow: hidden;
}
.cell1{
	position: absolute;
	width: 100%;
	height: 100%;
}
.info-name{
	font-size: 40rpx;
	color: #666666;
}
.info-message{
	flex: 10;
	padding: 0 20rpx;
}
.info-person{
	display: grid;
	grid-template-columns: repeat(3,33.3%);
}
.cell2>>>view:nth-child(1){
	font-size: 40rpx;
	color: #666666;
	font-weight: bold;
}
.list{
	/* border: 2rpx solid #CCCCCC; */
	border-radius: 10rpx;
	margin: 20rpx  0;
}
.list-cell{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0 40rpx;
}
.list .list-cell:active{
	background-color: #F7F7F7;
}
.iconright,.cell-name{
	font-size: 36rpx;
	line-height: 2;
	display: flex;
	align-items: center;
}
</style>
