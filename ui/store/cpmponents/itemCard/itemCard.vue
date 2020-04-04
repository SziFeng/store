<template>
	<view>
		<view class="card">	
			<view class="picture">
				<image src="/static/image4.jpg" mode=" widthFix"/>
			</view>
			<view class="name"></view>
			<view class="desc"></view>
			<view class="price"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'itemCard',
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.card{
		border-radius: 5%;
		width: 110px;
		height: 120px;
		border: #EEEEEE solid 1rpx;
	}

</style>
