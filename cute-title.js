//网页当前状态判断
var hidden, state, visibilityChange, timer;
var leaveTitle = '(●-●) 我奔溃啦~';
var stayTitle = '(*´∇｀*) 被发现啦~';
var defaultTitle = document.title;
var resetTime = 1000;

leaveTitle += document.title;
stayTitle += document.title;


if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
    state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
}
// 添加监听器，在title里显示状态变化
document.addEventListener(visibilityChange, function () {
    if (timer != null) clearTimeout(timer);
    if (document[state] === 'visible') {
        document.title = stayTitle;
        timer = setTimeout(function () {
            document.title = defaultTitle;
        }, resetTime)
    }
    else {
        document.title = leaveTitle;
    }
}, false);
//初始化页面状态
document.title = document[state] === 'visible' ? stayTitle : leaveTitle;
    
