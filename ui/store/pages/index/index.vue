<template>
	<view class="content"  @touchstart="touchstart" @touchend="touchend">
		<!--  首页  -->
		<view ref="store" class="wrapper" v-if="type===0"><store></store></view>
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
				type:0,
				flag:true
			}
		},
		onLoad() {

		},
		onPageScroll(res){
			if(res.scrollTop===0){
				this.flag=true
			} else{
				this.flag =false
			}
		},
		methods: {
			test(){
				console.log('1111')
				this.$push('test',{name:'szf'})
			},
			change(val,index){
				this.active=val
				this.type=index
			},
			touchstart(e){
				this.vueTouches=e.changedTouches[0]?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:0,y:0}
			},
			touchend(e){
				let disX=e.changedTouches[0]? (e.changedTouches[0].pageX-this.vueTouches.x):0//计算移动的位移差
				let disY=e.changedTouches[0]?(e.changedTouches[0].pageY-this.vueTouches.y):0
				if(Math.abs(disX)>10||Math.abs(disY)>100){//当横向位移大于10，纵向位移大于100，则判定为滑动事件
					this.touchType=="swipe"&&this.vueCallBack(this.binding.value,e);//若为滑动事件则返回
					if(Math.abs(disX)>Math.abs(disY)){//判断是横向滑动还是纵向滑动
						if(disX>100){//右滑
						console.log('右滑')
						if(this.type>0){this.type-=1}//滑动切换页面
						};
						if(disX<-100){//左滑
						console.log('左滑')
						if(this.type<3){this.type+=1}//滑动切换页面
					};
					}else{
						if(disY>10){//下滑
						console.log('下滑',this.$children,this.$refs)
						if(this.flag&&this.type===0){this.$children[0].showDown()}
						};
						if(disY<-10){//上滑
						console.log('上滑')
						if(this.type===0){this.$children[0].showUp()}
						};  
					};
				}
			}
		}
	}
</script>

<style scoped>
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
		box-shadow: 0 0 20rpx rgba(0,0,0,0.1);
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
	.wrapper{
		padding-bottom: 110rpx;
	}
</style>
