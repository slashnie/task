$(document).ready(function () {
    var storage = window.localStorage;
    var time = storage.getItem("time");
    var aa = Number(storage.getItem("aa"));
    var bb = Number(storage.getItem("bb"));
    var condition = storage.getItem("condition");
    var identify_kill = JSON.parse(storage.getItem("identify_kill"));
    var identify_vote = JSON.parse(storage.getItem("identify_vote"));
    var num_kill = JSON.parse(storage.getItem("num_kill"));
    var num_vote = JSON.parse(storage.getItem("num_vote"));
    var i = Math.ceil(time) - 1;
    var q2;
    for (var q1 = 0; q1 < i; q1++) {
        $(".process" + q1).hide();
        $(".process" + q1).children().eq(1).removeClass("kill").addClass("kill1");
        $(".process" + q1).children().eq(3).removeClass("kill").addClass("kill1");
        $(".process" + q1).children().eq(4).removeClass("kill").addClass("kill1");
        $(".process" + q1).children().eq(5).removeClass("kill").addClass("kill1");

    }
    for (q2 = 0; q2 <= i; q2++) {
        $(".day" + q2).show().text("第" + (q2 + 1) + "天").click(function () {
            $(this).next().toggle();
        });
        if (num_kill.length > 0) {
            $(".process" + q2 + " " + ".short-line").css("height", "0.69rem");
            $(".process" + i ).children().eq(1).removeClass("kill").addClass("kill1");
            $(".process" + i ).children().eq(2).css("background-color", "rgb(250, 250, 250)");
            if (num_kill[q2] !== null) {
                $(".process" + q2).children().eq(2).show().text(num_kill[q2] + "被杀, 身份:平民").css("background-color", "rgb(250, 250, 250)");
            }
            else {
                $(".process" + q2).children().eq(2).show().text("没有人被杀").css("background-color", "rgb(250, 250, 250)");
            }
            if (num_kill.length === i) {
                // 最新的一天还没有杀人操作，杀人内容不显示
                $(".process" + i + " " + ".short-line").css("height", "0.29rem");
                $(".process" + i ).children().eq(1).removeClass().addClass("kill");
                $(".process" + i).children().eq(2).hide().text(" ");
            }
        }
        if (num_vote.length > 0) {
            if (num_vote.length === i) {
                $(".process" + q2 + " " + ".long-line").css("height", "1.64rem");
                $(".process" + i + " " + ".long-line").css("height", "1.25rem");
                $(".process" + q2).children().eq(6).show().text(num_vote[q2] + "被投死, 身份:" + identify_vote[q2]).css("background-color", "rgb(250, 250, 250)");
                // 最新的一天还没有投票操作，投票内容不显示
                $(".process" + i).children().eq(6).hide().text(" ");
            }
            else {
                $(".process" + q2 + " " + ".long-line").css("height", "1.64rem");
                $(".process" + q2).children().eq(6).show().text(num_vote[q2] + "被投死, 身份:" + identify_vote[q2]).css("background-color", "rgb(250, 250, 250)");
            }
        }
        $(".process" + q2).children().eq(1).click(function (e) {
            if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(61, 117, 130)") {
                alert("大兄弟，已经点过了")
            }
            else {
                condition = 1;
                aa = aa + 1;
                storage.setItem("aa", aa);
                storage.setItem("condition", 1);
                window.location.href = "kill-vote.html";
            }
        });
        $(".process" + q2).children().eq(3).click(function (e) {
            if (window.getComputedStyle(e.target.previousElementSibling, "").backgroundColor === "rgb(255, 255, 255)") {
                alert("请按照顺序依次点击");
            }
            else {
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(61, 117, 130)") {
                    alert("大兄弟，已经点过了");
                }
                else {
                    $(e.target).removeClass("kill").addClass("kill1");
                    alert("亡灵发表遗言");
                }
            }
        });
        $(".process" + q2).children().eq(4).click(function (e) {
            if (window.getComputedStyle(e.target.previousElementSibling, "").backgroundColor === "rgb(36, 167, 198)") {
                alert("请按照顺序依次点击");
            }
            else {
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(61, 117, 130)") {
                    alert("大兄弟，已经点过了");
                }
                else {
                    $(e.target).removeClass("kill").addClass("kill1");
                    alert("玩家依次发言");
                }
            }
        });

        $(".process" + q2).children().eq(5).click(function (e) {
            if (window.getComputedStyle(e.target.previousElementSibling, "").backgroundColor === "rgb(36, 167, 198)") {
                alert("请按照顺序依次点击");
            }
            else {
                if (window.getComputedStyle(e.target, "").backgroundColor === "rgb(61, 117, 130)") {
                    alert("大兄弟，已经点过了")
                }
                else {
                    condition = 2;
                    bb = bb + 1;
                    storage.setItem("bb", bb);
                    storage.setItem("condition", 2);
                    $(e.target).removeClass("kill").addClass("kill1");
                    window.location.href = "kill-vote.html";
                }
            }
        });

        $(".process" + i).show();
    }
});
