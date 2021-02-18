<template>
	<view style="width: 100%;">
		<u-form :model="form" ref="uForm">
			<u-form-item left-icon="account" prop="username">
				<u-input v-model="form.username" placeholder="请输入用户名" />
			</u-form-item>
			<u-form-item left-icon="lock" prop="password">
				<u-input v-model="form.password" placeholder="请输入密码" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				form: {
					username: '',
					password: '',
				},
				rules:{
					username: [
						{ 
							required: true, 
							message: '必须填写用户名', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['blur'],
						}
					],
					password: [
						{ 
							required: true, 
							message: '必须填写密码', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['blur'],
						}
					],
				}
			}
		},
		mounted() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods:{
			submit(){
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
		}
	}
</script>

<style>
</style>
