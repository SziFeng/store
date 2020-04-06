<template>
	<view class="container">
		<view >
			<image class="back-img" :src="require('../../../common/image/img1.jpg')" mode="scaleToFill" ></image>
		</view>
		<view class="info">
			<view class="info-img">
				<image class="cell1" :src="require('../../../common/image/img6.jpg')" mode="scaleToFill"></image>
			</view>
			<view class="cell2">
				<text>你的名字</text>
			</view>
			<view class="cell3">
				<text>广东XX,中国</text>
			</view>
		</view>
		<view class="list ">
			<view class="list-cell myflex" v-for="(item,index) in list" :key="index">
				<view class="cell-name">{{item.name}}</view>
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
					{name:'账户',path:''},
					{name:'地址管理',path:''},
					{name:'消息',path:''},
					{name:'密码',path:''},
					{name:'设置',path:''},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.back-img{
	width: 100%;
}
.info{
	position: relative;
	margin: auto;
}
.info-img{
	width: 300rpx;
	height: 300rpx;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	margin: auto;
	left: 50%;
	transform: translate(-150rpx,-54%);
}
.cell1{
	position: absolute;
	width: 100%;
	height: 100%;
}
.cell2{
	padding-top: 150rpx;
	font-size: 44rpx;
	text-align: center;
}
.cell3{
	text-align: center;
}
.list{
	border: 2rpx solid #CCCCCC;
	border-radius: 10rpx;
	margin: 20rpx  80rpx;
}
.list-cell{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:10rpx 20rpx;
	border-top: 2rpx solid #CCCCCC;
}
.list-cell:nth-child(1){
	border-top: 0rpx ;
}
.list .list-cell:active{
	background-color: #F7F7F7;
}
.iconright,.cell-name{
	font-size: 36rpx;
	line-height: 2;
}
</style>
