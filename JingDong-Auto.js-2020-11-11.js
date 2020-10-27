var a = textContains("8秒").find();

var timeout = 5; //单位为秒，与网速和手机性能有关，推荐3秒以上

while(!a.empty()){
    var item = a.get(0);
    click(850,item.bounds().top);//根据测算得出

    wait8s();
    a = textContains("8秒").find();
}

function wait8s(){
    sleep(timeout * 2000);//点击开始浏览 到 加载出浏览进度条 之间的延时
    var save = 0;
    for (var i = 0; i < 15; i++) { //以1秒为周期，检测完成情况15次
        //取消关注 代码开始
        var focus = idContains("qa").find();
        if (!focus.empty() && save == 0) {
            focus.get(0).click();
            save = 1;
        }
        //取消关注 代码结束
        if (!textContains("浏览精").exists()) {
            sleep(500);
            break;
        } else {
            sleep(1000);
        }
    }
    back();
    sleep(timeout * 1500);//从 退出上一次浏览 到 开始下一次浏览 之间的延时
}
