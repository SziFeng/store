//构建需要传的数据
const mytools={}
const setParams=function(url, query = {}){
	if (!query) return url
	const joiner = url.match(/\?/) ? '&' : '?'
	const queryStr = Object.keys(query)
		.map(key => `${key}=${encodeURIComponent(JSON.stringify(query[key]))}`)
		.join('&')
	return url + joiner + queryStr
}
mytools.install = (Vue)=>{
//格式化拿到的数据
	Vue.prototype.$getParams=function (originQuery = {}){
		const result = {}
		if (!originQuery) return {}
		return Object.keys(originQuery).reduce((prev, curr) => {
			    result[curr] = JSON.parse(decodeURIComponent(originQuery[curr]))
				return result
			}, result)
	}
	Vue.prototype.$push=function(url,params=null){
		console.log('目的路径:',this.$getUrl[url])
		uni.navigateTo({url:setParams(this.$getUrl[url],params)})
	}
}
export default mytools