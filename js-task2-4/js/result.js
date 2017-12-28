$(document).ready(function () {
    var storage = window.localStorage;
    var time = Number(storage.getItem("time"));                          //点击次数
    var identify = JSON.parse(localStorage.getItem("identify"));         //玩家身份数组
    var condition = storage.getItem("condition");                        //杀人/投票页面参数
    var identify_vote = JSON.parse(storage.getItem("identify_vote"));    //被投死玩家的身份数组
    var num_kill = JSON.parse(storage.getItem("num_kill"));              //被杀玩家的编号
    var num_vote = JSON.parse(storage.getItem("num_vote"));              //被投死玩家的编号-
    var killed_num = JSON.parse(storage.getItem("killed_num"));          //死亡玩家的索引数组
    var length = Number(storage.getItem("length"));                              //玩家人数
    var aa = Number(storage.getItem("aa"));                              //被杀玩家玩家数组索引
    var bb = Number(storage.getItem("bb"));                              //被投死玩家玩家数组索引
    var cc = Number(storage.getItem("cc"));
    var killer_num = Number(storage.getItem("killer_num"));              //杀手人数
    var civilian_num = Number(storage.getItem("civilian_num"));           //平民人数
    var i = Math.ceil(time) - 1;
    var killer = Number(storage.getItem("killer"));              //杀手人数
    var civilian = Number(storage.getItem("civilian"));           //平民人数
    var day = document.getElementsByClassName("main-result");

    $("#num").text("杀手" + killer + "人" + "  " + "平民" + civilian + "人");
    if(killer_num===0){
        $("#civilian_win").show();
       $("#words").text("太棒了！在捉鬼游戏中卧底取得游戏的最终胜利！")
    }
    if(killer_num===civilian_num){
        $("#killer_win").show();
        $("#words").text("太棒了！你们知道么？在捉鬼游戏中只有20%的杀手取得游戏的最终胜利哦！")

    }
    for (var q1 = 0; q1 <= i; q1++) {
        $(day[q1]).show();
        if (num_kill[q1] !== null) {
            $(day[q1]).children().show().eq(1).text("夜晚：  "+num_kill[q1] + "被杀, 身份:平民")
        }
        else {
            $(day[q1]).children().show().eq(1).text("夜晚：  没人被杀")
        }
        if($.inArray(num_vote[q1], num_vote) !== -1)
            $(day[q1]).children().show().eq(2).text("白天：  "+ num_vote[q1] + "被全民投票投死, 身份:"+identify_vote[q1]);
    }
    $("button#again").click(function(){
        window.location.href = "task2-1.html";
    })
});