var identify = JSON.parse(localStorage.getItem("identify"));
$(document).ready(function () {
    var i = 1;
    var storage = window.localStorage;
    var length = storage.getItem("length");
    $("span.circle").text(1);
    $("span.look").text("" + "查看1号身份" + "");
    $("button").click(function () {
        i = i + 0.5;
        var num = Math.floor(i);
        var identify_num = Math.ceil(i);
        $("p").toggle().text(identify[num - 1]);
        $("img.role").toggle();
        $("img.identify").toggle();
        $("span.circle").text(num);
        if (i === (Number(length) + 0.5)) {
            $("span.pass").show().text("" + "法官查看" + "");
            $(this).click(function () {
                window.location.href = "judge.html";
            });
        }
        else {
            $("span.pass").toggle().text("" + "隐藏并传递给" + identify_num + "号" + "");
        }
        $("span.look").toggle().text("" + "查看" + identify_num + "号身份" + "");
    });
});

