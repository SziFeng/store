<template>
	<view class="ware">
		<view class="title-item myflex">
			<view class="name-cell" v-for="(item,index) in list" :key="index">
				{{item.name}}
				<i class="iconfont iconup" v-if="item.name==='价格'"></i>
			</view>
			<view class="icon-cell"><i class="iconfont iconlist"></i></view>
		</view>
		<view class="swiper-content">
			<view class="card-container">
				<view class="card-cell" v-for="(item,index) in 21" :key="index">
					<view class="img-cell"><image :src="require('../../common/image/img1.jpg')" mode=""></image></view>
					<view class="txt-cell">潮流时尚 假两件 夏季新款</view>
					<view class="myflex info-cell">
						<view class="price">￥179</view>
						<view class="sale">已售65</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'综合排序'},
					{name:'销量优先'},
					{name:'价格'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.ware{
	.title-item{
		padding: 10rpx 20rpx;
		box-shadow: 0 0 20rpx $border-color-light;
		.name-cell{
			flex: 7;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 4rpx solid #666666;
			line-height: 1;
			.iconup{
				line-height: 1;
			}
		}
		.icon-cell{
			flex:4;
			display: flex;
			justify-content: center;
			.iconlist{
				line-height: 1;
			}
		}
	}
	.swiper-content{
		position: absolute;
		width: 100%;
		top: 90rpx;
		bottom: 0;
		overflow: hidden;
		overflow-y: scroll;
		.card-container{
			display: grid;
			grid-template-columns: repeat(2,50%);
			justify-content: center;
			padding: 0 10rpx;
			.card-cell{
				padding: 10rpx;
				.img-cell{
					position: relative;
					width: 100%;
					height: 300rpx;
					image{
						position: absolute;
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
				}
				.txt-cell{
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.info-cell{
					.price{
						color: $base-color;
						font-size: $font-lg*1.2;
					}
					.sale{
						color: $font-color-light;
					}
				}
			}
		}
	}
}
</style>
