<template>
	<view class="records">
		<view class="nav-top">
			<view class="cell-name" v-for="(item,index) in  list" :key="index" @click="select(index)" :id="'type'+index">
				<view v-if="type===index" class="select">{{item.name}}</view>
				<view v-else>{{item.name}}</view>
			</view>
			<!-- <view class="line-cell">
				<view class="active">
					
				</view>
			</view> -->
		</view>
		<view class="swiper-content">
			<view class="card-item" v-for="item in 5" :key="item">
				<view class="title-cell myflex">
					<view class="time-cell">2020-05-15 16:39</view>
					<view class="status-cell">订单关闭</view>
				</view>
				<view class="info-cell">
					<view class="img-cell"><image :src="require('../../common/image/img5.jpg')" mode=""></image></view>
					<view class="text-cell">
						<view class="details">韩版最新款 夏季防晒</view>
						<view class="type">天空蓝 M x 1</view>
						<view class="price">￥179.5</view>
					</view>
				</view>
				<view class="sum-cell">
					共7件商品 实付款<text class="price">￥143.7</text>
				</view>
				<view class="btn-cell">
					<button type="default" class="cancel" >取消订单</button>
					<button type="default" class="pay" >立即支付</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0,
				list:[
					{name:'全部'},
					{name:'代付款'},
					{name:'待收货'},
					{name:'待评价'},
					{name:'售后'},
				]
			}
		},
		methods: {
			select(index){
				this.type=index
			},
			moveLine(){
				let view = uni.createSelectorQuery().in(this).select('#type'+this.type)
				console.log('obj',view)
					view.fields({
					    dataset: true,
					    size: true,
					    scrollOffset: true,
					    properties: ['scrollX', 'scrollY']
					}, res => {
				console.log('res',res)
					}).exec()
			}
		},
		mounted() {
			this.moveLine()
		}
	}
</script>

<style lang="scss">
.records{ 
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #F7F7F7;
	.nav-top{
		position: relative;
		box-shadow: 0 0 20rpx #999999;
		background-color: #FFFFFF;
		.cell-name{
			display: inline-block;
			width: 16%;
			padding: 10rpx 0 0;
			text-align: center;
			margin: 0 2%;
			.select{
				color: #5F4534;
				border-bottom: 4rpx solid #5F4534;
			}
		}
		.line-cell{
				position: absolute;
				left: 2%;
				bottom: 0;
				width: 120rpx;
			.active{
				margin: 0 auto;
				width: 70%;
				height: 4rpx;
				background-color: #5F4534;
			}
		}
	}
	.swiper-content{
		position: absolute;
		width: 100%;
		top: 70rpx;
		bottom: 0;
		overflow: hidden;
		overflow-y: scroll;
		.card-item{
			margin: 20rpx 0;
			padding-left: 20rpx;
			background-color: #FFFFFF;
			.title-cell{
				padding: 10rpx 20rpx 10rpx 0;
				border-bottom: 2rpx solid $border-color-base;
			}
			.info-cell{
				padding: 10rpx 0;
				display: flex;
				.img-cell{
					position: relative;
					width: 200rpx;
					height: 170rpx;
					image{
						position: absolute;
						width: 100%;
						height: 100%;
					}
				}
				.text-cell{
					padding-left: 20rpx;
					.type{
						color: $font-color-disabled;
					}
				}
			}
			.sum-cell{
				text-align: right;
				padding: 10rpx 20rpx 10rpx 0;
				.price{
					font-size: $font-lg*1.2;
				}
			}
			.btn-cell{
				display: flex;
				justify-content: flex-end;
				padding: 10rpx 20rpx 10rpx 0;
				.cancel{
					margin: auto 10rpx;
					font-size: $font-base;
				}
				.pay{
					margin: auto 10rpx;
					font-size: $font-base;
					color: $font-color-spec;
				}
			}
		}
	}
}
</style>
