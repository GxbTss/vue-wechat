// 工具函数

// localstorage设置
export const Storage = {
    get:(value) => {
        let val = localStorage.getItem(value)
        try { return JSON.parse(val) }
        catch(e) { return val || undefined }
    },
    set:(key,value) => {
        if (value === undefined) { return }
        localStorage.setItem(key,JSON.stringify(value))
    },
    remove:(key) => {
        localStorage.removeItem(key)
    }
}

// 截取url的api
export const getQueryString = function (url) {
    if (url) {
        url = url.substr(url.indexOf("?") + 1);
    }
    let result = {},
        queryString = url || location.search.substring(1),
        re = /([^&=]+)=([^&]*)/g,
        m

    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
    }

    return result;
}

// 访问地址切换
export const convertRequestURL = function(url,environment) {
    let converted_url
    let mode = getQueryString().mode

    if(mode == 'test'){
        if(environment == 'baodan') converted_url = "http://192.168.1.1:8000/"+url
        else if(environment == 'open') converted_url = "http://192.168.1.1:8000/"+url
        else if(environment == 'openApi') converted_url = "http://192.168.1.1:8000/"+url
    }
    else{
        if(environment == 'baodan') converted_url = "http://192.168.1.1:8000/"+url
        else if(environment == 'open') converted_url = "http://192.168.1.1:8000/"+url
        else if(environment == 'openApi') converted_url = "http://192.168.1.1:8000/"+url
        else if(environment == 'baodandai') converted_url = "http://192.168.1.1:8000/"+url
    }

    return converted_url
}

// 自动生成script标签
export const getScript = (url, callback) => {
    let head = document.getElementsByTagName('head')[0],
        js = document.createElement('script');

    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);

    head.appendChild(js);

    let callbackFn = function(){
        if(typeof callback === 'function'){
            callback();
        }
    }
    js.onload = function() {
        callbackFn();
    }
}

// 定义规则
export const rules = {
    IDCard(val){
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
    },
    password(val){
        return /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,16}/.test(val);
    },
    tel(val) {
        return /^(\+86([\s-])?)?1\d{10}$/.test(val);
    },
    number(val) {
        return /^[0-9]*$/.test(val);
    },
    email(val) {
        return /^(?:\w+\.?\+?)*\w+@(?:\w+\.)+\w+$/.test(val);
    },
    licence(val) {
        return /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{5}$/.test(val);
    }
}

// date格式转换
export const dateFormat = (date,fmt) => {
    let _date = new Date(date)
    let o = {
        "M+" : _date.getMonth()+1, //月份
        "d+" : _date.getDate(), //日
        "h+" : _date.getHours()%12 == 0 ? 12 : _date.getHours()%12, //小时
        "H+" : _date.getHours(), //小时
        "m+" : _date.getMinutes(), //分
        "s+" : _date.getSeconds(), //秒
        "q+" : Math.floor((_date.getMonth()+3)/3), //季度
        "S" : _date.getMilliseconds() //毫秒
    };
    let week = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (_date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[_date.getDay()+""]);
    }
    for(let k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
