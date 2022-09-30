const request = new XMLHttpRequest()
request.open("GET","http://qq.com:8888/friends.json")

request.onreadystatechange=()=>{
    
    if(request.readyState===4 ){
        console.log(request.readyState)
        if(request.status >= 200 && request.status<300){
            console.log(request.status)
            console.log(request.response)
        }
    }
}
request.send()