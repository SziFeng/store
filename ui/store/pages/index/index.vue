<template>
	<view class="content">
		<!--  首页  -->
		<view  class="wrapper" v-if="type===0"><store></store></view>
		<!-- 分类 -->
		<view class="wrapper" v-if="type===1"><category></category></view>
		<!-- 购物车 -->
		<view class="wrapper" v-if="type===2"><shop-car ></shop-car></view>
		<!-- 我的 -->
		<view class="wrapper" v-if="type===3"><user></user></view>
		<view class="bot-bar" >
			<view class="tab-icon" :class="{'setect-tab':type===index}" v-for="(item,index) in iconList" :key="index" @tap="change(item.name,index)">
				<i  class="iconfont" :class="item.icon" ></i>
			</view>
		</view>
	</view>
</template>

<script>
	import store from './store/store.vue'
	import shopCar from './shopcar/shopcar.vue'
	import user from './user/user.vue'
	import category from './category/category.vue'
	export default {
		components: {
			store,/* 首页 */
			category,/* 分类 */
			shopCar,/* 购物车 */
			user/* 我的 */
		},
		data() {
			return {
				iconList:[
					{name:'店家',icon:'iconstore'},
					{name:'分类',icon:'iconsearch'},
					{name:'购物车',icon:'iconcart'},
					{name:'我的',icon:'iconuser'},
				],
				active:'店家',
				type:0
			}
		},
		onLoad() {

		},
		methods: {
			test(){
				console.log('1111')
				this.$push('test',{name:'szf'})
			},
			change(val,index){
				this.active=val
				this.type=index
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.bot-bar{
		display: flex;
		justify-content: center;
		align-items:flex-end;
		position: fixed;
		width: 100%;
		height:100rpx;
		left: 0;
		bottom: 0;
		/* background-color: rgba(234, 234, 234, 0.7); */
		background-color: rgba(255, 255, 255, 0.85);
		padding-bottom: 6rpx;
	}
	.tab-icon{
		padding: 0 30rpx 0 ;
		margin: 0 10rpx;
        color: rgba(0,0,0,0.3);
	}
	.setect-tab{
		color: #5f4534 !important;
		border-bottom: 6rpx solid #5f4534;
	}
</style>
