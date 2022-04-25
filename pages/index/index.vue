<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
  import { test200 } from "@/apis/test.js"  //按需引入
  export default {
      data() {
          return {
              title: ''
          }
      },
      onLoad() {
          this.test()
      },
      methods: {
          // 测试获取数据
          test () {
              test200().then(res => {
                  this.title = res.data
              })
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

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
