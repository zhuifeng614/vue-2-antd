module.exports = {
	lintOnSave: false,
	devServer: {
		open: true,
		port: 8081,
		proxy: {
			'/api': {
					target: 'http://192.168.14',
					ws: false,
					changeOrigin: true,
			}
		}
	}
}