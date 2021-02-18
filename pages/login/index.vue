<template>
	<view class="login-layout">
		<view class="pc-layout" v-if="!isApp">
			<view>
				<u-tabs ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"></u-tabs>
			</view>
			<swiper class="swiper-layout" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
					<UserForm></UserForm>
				</swiper-item>
			</swiper>
		</view>
		<view class="app-layout" v-if="isApp">
			<UserForm></UserForm>
		</view>
	</view>
</template>

<script>
	import UserForm from './components/UserForm'
	
	export default {
		name:'Login',
		components:{
			UserForm
		},
		data:function(){
			return {
							list: [
								{
									name: '密码登录'
								}, 
								{
									name: '扫描登录'
								},
							],
							// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
							current: 0, // tabs组件的current值，表示当前活动的tab选项
							swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
							
							
						}
		},
		computed:{
			isApp(){
				return this.$store.state.system.isApp
			}
		},
		methods:{
			
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
				this.current = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},

		}
	}
</script>

<style lang="scss">
	.login-layout{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.pc-layout{
			box-sizing: border-box;
			width: 900rpx;
			padding: 30rpx;
		}
		.app-layout{
			box-sizing: border-box;
			width: 750rpx;
			padding: 30rpx;
		}
	}
	
	.swiper-layout{
		max-width: 900rpx;
		height: 400rpx;
		.swiper-item{
			width: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>
