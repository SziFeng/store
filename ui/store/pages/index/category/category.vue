<template>
	<view class="cont">
		<scroll-view scroll-y class="left-cell">
			<view v-for="(item,index) in titleList" :key="index" class="title-name" :class="{'select':currentId===item.id}" @click="change(item,index)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-cell"  @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view class="">
				<view v-for="(item,index) in titleList" :key="index"  :id="'main-'+index">
					<view class="list-name"><i class="iconfont iconleftline"></i><text class="text-cell">{{item.name}}</text><i class="iconfont iconrightline"></i></view>
					<view  class="card-list" >
					<block v-for="res in item.chiddren" :key="res" >
						<card-cell @goTo="goTo"></card-cell>
					</block>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import cardCell from '../../../cpmponents/card-cell/card-cell.vue'
	export default {
		components:{
			cardCell
		},
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				titleList:[
					{id:1,name:'上衣',chiddren:4},
					{id:2,name:'外套',chiddren:3},
					{id:3,name:'裤子',chiddren:5},
					{id:4,name:'鞋子',chiddren:3},
					{id:5,name:'帽子',chiddren:6},
				],
				type:0
			}
		},
		onShow() {
		},
		methods: {
			goTo(){
				this.$push('ware')
			},
			//一级分类点击
			change(val,ind){
				if(!this.sizeCalcState){
					this.calcSize()
				}
				this.currentId=val.id
				this.tabScrollTop = this.titleList[ind].top
			},
			// //右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.titleList.filter(item=>item.top-1 <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].id;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h=0
				console.log('执行了')
				this.titleList.forEach((item,index)=>{
					let view = uni.createSelectorQuery().in(this).select('#main-'+index)
					view.fields({
					    dataset: true,
					    size: true,
					    scrollOffset: true,
					    properties: ['scrollX', 'scrollY']
					}, res => {
						item.top = h;
						h += res.height;
						item.bottom = h;
					}).exec()
				})
				this.sizeCalcState = true;
			},
		},
		mounted() {
			this.calcSize()
		}
	}
</script>

<style scoped>
	.cont{
		position: absolute;
		height: 100%;
		width: 100%;
        display: flex;
	}
	.left-cell{
		height: 100%;
		flex: 2;
		text-align: center;
		/* box-shadow: 0 0 15rpx #666666; */
		background-color: #F7F7F7;
		opacity: 0.85;
	}
	.title-name{
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;
	}
	.right-cell{
		flex: 8;
		padding-bottom: 110rpx;
		padding-top:10rpx ;
	}
	.list-name{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70rpx;
		font-size: 28rpx;
		background-color: #F7F7F7;
		opacity: 0.85;
		margin:0 20rpx;
		border-radius: 30rpx;
	}
	.card-list{
		display: grid;
		grid-template-columns: repeat(2,50%);
		overflow: hidden;
	}
	.select{
		background-color: #FFFFFF;
		position: relative;
	}
	.select::before{
		content: '';
		position: absolute;
		left: 0;
		height: 100%;
		width: 6rpx;
		background-color: #EA4D4F;
	}
	.text-cell{
		width: 80rpx;
		padding: 0 20rpx;
		text-align: center;
	}
</style>
