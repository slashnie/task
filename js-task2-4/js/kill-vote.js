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
// 杀人页面
    if (Number(condition) === 1) {
        $(".nav span").text("杀人页面");
        $(".vote span").text("天黑请闭眼，杀手请杀人");
        // 当杀手没杀人的时候
        num_kill[aa] = null;
        $("main").bind("click", function (e) {
            // 点击的元素是div的话
            if (e.target.nodeName === "DIV") {
                // 如果玩家被杀
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(254, 255, 255)") {
                    $(".hidden").css("opacity", 0);
                    num_kill[aa] = null;
                    killed_num[cc] = -1;
                }
                // 玩家活着
                else {
                    // 玩家身份是杀手
                    if ($(e.target).children().eq(0).text() === "杀手") {
                        $(".hidden").css("opacity", 0);
                        num_kill[aa] = null;
                        alert("兄弟，自己人");
                        killed_num[cc] = -1;
                    }
                    // 玩家是平民
                    else if ($(e.target).children().eq(0).text() === "平民") {
                        $(".hidden").css("opacity", 0);
                        $(e.target).next().css("opacity", 1);
                        num_kill[aa] = $(e.target).children().eq(1).text();
                        killed_num[cc] = $(".visible").index($(e.target));
                    }
                    // 点击其他地方不显示杀人标志
                    else {
                        $(".hidden").css("opacity", 0);
                        num_kill[aa] = null;
                        killed_num[cc] = -1;
                    }
                }
            }
            // 如果点击的元素是P的话
            else if (e.target.nodeName === "P") {
                // 如果玩家被杀
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(130, 176, 154)") {
                    $(".hidden").css("opacity", 0);
                    num_kill[aa] = null;
                    killed_num[cc] = -1;
                }
                // 玩家活着
                else {
                    killed_num[cc] = $(".visible").index($(e.target).parent());
                    // 玩家身份是杀手
                    if ($(e.target).text() === "杀手" || $(e.target).prev().text() === "杀手") {
                        $(".hidden").css("opacity", 0);
                        num_kill[aa] = null;
                        alert("兄弟，自己人");
                    }
                    // 玩家是平民
                    else {
                        $(".hidden").css("opacity", 0);
                        num_kill[aa] = $(e.target).parent().children().eq(1).text();
                        $(e.target).parent().next().css("opacity", 1);
                    }
                }
            }

        });
        // 杀人页面点击效果
        $("button.submit").text("确定").click(function () {
            cc = cc + 1;
            storage.setItem("cc", cc);
            localStorage.setItem("killed_num", JSON.stringify(killed_num));
            localStorage.setItem("num_kill", JSON.stringify(num_kill));
            storage.setItem("killer_num", killer_num);
            if (num_kill[aa] !== null) {
                civilian_num = civilian_num - 1;
                storage.setItem("civilian_num", civilian_num);
            }
            if (killer_num >= civilian_num || killer_num === 0 ){
                window.location.href = "result.html";
            }
            else {
                time = time + 0.5;
                storage.setItem("time", time);
                window.location.href = "judge-libretto.html";
            }
        });
    }
    // 投票页面
    else if (Number(condition) === 2) {
        $(".nav span").text("投票页面");
        $(".vote span").text("发言讨论，请点击得票最多人的玩家");
        num_vote[bb] = null;
        $("main").bind("click", function (e) {
            // 点击的元素是div的话
            if (e.target.nodeName === "DIV") {
                // 如果玩家被杀
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(130, 176, 154)") {
                    num_vote[bb] = null;
                    $(".hidden").css("opacity", 0);
                    killed_num[cc] = -1;
                }
                // 点击的是活着的玩家
                else if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(255, 255, 255)") {
                    num_vote[bb] = $(e.target).children().eq(1).text();
                    identify_vote[bb] = $(e.target).children().eq(0).text();
                    $(".hidden").css("opacity", 0);
                    $(e.target).next().css("opacity", 1);
                    killed_num[cc] = $(".visible").index($(e.target));
                }
                else {
                    num_vote[bb] = null;
                    $(".hidden").css("opacity", 0);
                    killed_num[cc] = -1;
                }
            }
            else if (e.target.nodeName === "P") {
                // 如果玩家被杀
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(130, 176, 154)") {
                    $(".hidden").css("opacity", 0);
                    num_vote[bb] = null;
                    killed_num[cc] = -1;
                }
                // 玩家活着
                else {
                    $(".hidden").css("opacity", 0);
                    identify_vote[bb] = $(e.target).parent().children().eq(0).text();
                    num_vote[bb] = $(e.target).parent().children().eq(1).text();
                    $(e.target).parent().next().css("opacity", 1);
                    killed_num[cc] = $(".visible").index($(e.target).parent());
                }
            }
        });
        // 投票页面的点击效果
        $("button.submit").text("确定").click(function () {
            if (num_vote[bb] === null) {
                alert("投一票先")
            }
            else {
                if (identify_vote[bb] === "平民") {
                    civilian_num = civilian_num - 1;
                }
                else {
                    killer_num = killer_num - 1;
                }
                cc = cc + 1;
                storage.setItem("cc", cc);
                localStorage.setItem("killed_num", JSON.stringify(killed_num));
                localStorage.setItem("num_vote", JSON.stringify(num_vote));
                localStorage.setItem("identify_vote", JSON.stringify(identify_vote));
                storage.setItem("killer_num", killer_num);
                storage.setItem("civilian_num", civilian_num);

                if (killer_num >= civilian_num || killer_num === 0) {
                    window.location.href = "result.html"
                }
                else {
                    time = time + 0.5;
                    storage.setItem("time", time);
                    window.location.href = "judge-libretto.html";
                }
            }
        });
    }
});

