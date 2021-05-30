function checkbrowser() {
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var userBrowser = 0;
var isOpera = userAgent.indexOf("Opera") > -1;
//判断是否Opera浏览器
if (isOpera) {
	userBrowser = 1;
};
//判断是否Firefox浏览器
if (userAgent.indexOf("Firefox") > -1) {
	userBrowser = 2;
} 
//判断是否Chrome浏览器
if (userAgent.indexOf("Chrome") > -1){
	userBrowser = 3;
}
//判断是否Safari浏览器
if (userAgent.indexOf("Safari") > -1) {
	userBrowser = 4;
}
//判断是否IE浏览器
if (!!window.ActiveXObject || "ActiveXObject" in window) {
	userBrowser = 0;
}

if (userBrowser == 0) {
    alert("检测到您在使用IE浏览器，此浏览器会造成页面显示异常，建议更换Chrome或Firefox。点击确定继续。");
}

var system = { 
            win: false, 
            mac: false, 
            xll: false, 
            ipad:false 
        }; 
        //检测平台 
        var p = navigator.platform; 
        system.win = p.indexOf("Win") == 0; 
        system.mac = p.indexOf("Mac") == 0; 
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
        system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 
        //跳转语句，如果是手机访问就自动跳转到indexm页面 
        if (system.win || system.mac || system.xll) { 
        } else { 
		window.location.href = "indexm.html"; 
        } 
	
}

function runapp() {
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var userBrowser = 0;
var isOpera = userAgent.indexOf("Opera") > -1;

var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

//判断是否Opera浏览器
if (isOpera) {
	userBrowser = 1;
};
//判断是否Firefox浏览器
if (userAgent.indexOf("Firefox") > -1) {
	userBrowser = 2;
} 
//判断是否Chrome浏览器
if (userAgent.indexOf("Chrome") > -1){
	userBrowser = 3;
}
//判断是否Safari浏览器
if (userAgent.indexOf("Safari") > -1) {
	userBrowser = 4;
}
//判断是否IE浏览器
if (!!window.ActiveXObject || "ActiveXObject" in window) {
	userBrowser = 0;
}

if (userBrowser == 0) {
    alert("启动失败!IE浏览器暂无法使用此网络应用程序。点击确定继续。");
window.location.href = "index.html"; 
}
else{
window.location.href = "app\\index.html"; 
}
}

function openNav() {
document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("sidenav").style.width = "0";
}