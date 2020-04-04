<template>
	<view>
		<view class="" @click="test">
		shopcar
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			test(){
				console.log('1111')
				this.$push('/pages/index/index')
			}
		}
	}
</script>

<style>

</style>
