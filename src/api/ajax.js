//请求接口函数
import axios from 'axios'

export default function Ajax(url="",data={},type="GET"){
	return new Promise(function(response,reject){
		let promise;
		if(type == "GET"){
			let dataStr = "";
			Object.keys(data).forEach(key => {
				dataStr += key + "=" + data[key] + "&"
			})
			if(dataStr !== ""){
				dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
				url += "?" + dataStr
			}
			//发送get请求
			promise = axios.get(url);
		}else{
			//发送post请求
			promise = axios.post(url,data);
		}
		promise.then(response=>{
			resolve(response.data);
		}).catch(error=>{
			reject(error);
		})
	})
}