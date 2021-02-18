<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log('系统类型',uni.getSystemInfoSync().platform)
			if(['android','ios'].includes(uni.getSystemInfoSync().platform)){
				this.$store.state.system.isApp = true
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	page{
		width: 100%;
		height: 100%;
	}
</style>
