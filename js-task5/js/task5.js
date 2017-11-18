$("document").ready(function () {
    $("input").bind('input propertyChange', function () {
        $("button").attr('disabled', false).css("cursor", "pointer");
        // 输入字符串长度小于4
        if (this.value.length < 4) {
            $(this).parent().next().text("不能小于四位");
            $("button").attr('disabled', true).css("cursor", "not-allowed");
        }
        else {
            $(this).parent().next().text(" ");
            // 输入其他字符的情况
            if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(this.value)) {
                $(this).parent().next().text("只能是 数字、字母、汉字或下划线");
                $("button").attr('disabled', true).css("cursor", "not-allowed");
            }
        }
    });
    $("button").click(function () {
        var act = $("#account").val();
        var pass = $("#password").val();
        $.ajax({
            type: 'post',
            url: '/carrots-admin-ajax/a/login',
            dataType: 'json',
            data: {name: act, pwd: pass},
            success: function (data) {
                if(act==="admin" && pass==="123456"){
                    window.location.href = "http://dev.admin.carrots.ptteng.com/"
                }
                 else{
                    $("#pass_info").text("账号或密码错误");
                }
            },
            error: function (error) {
                console.log(error);
                $("#pass_info").text("登录失败");
            }
        })
    });
});