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
    var killed = document.getElementsByClassName("visible");
    for (var i = 0; i < length; i++) {
        $(".wrap" + i).show();
        $(".wrap" + i + " " + ".identify").text(identify[i]);
    }
    for (var zz = 0; zz < cc; zz++) {
        if (killed_num[zz] !== -1) {
            $(killed[killed_num[zz]]).children().eq(0).css("background-color", "rgb(130, 176, 154)");
            $(killed[killed_num[zz]]).children().eq(1).css("background-color", "rgb(130, 176, 154)");
            $(killed[killed_num[zz]]).css("background-color", "rgb(254, 255, 255)")
        }
    }
    $("button").click(function () {
      window.location.href = "judge-libretto.html";
    })
}) ;