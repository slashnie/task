var input_text = document.getElementById("demo");
var input_range = document.getElementById("myRange");
var x;
var setUl = [];
var li = [];
var killer_num;
var civilian_num;
var ul = document.getElementById("gamer");

function remind() {
    // if (isNaN(+(input_text.value))) {
    //     alert("请输入4-18的数字");
    // }

    if (input_text.value < 4) {
        alert("玩家人数不能小于4")
        input_text.value = 4;
    }
    else if (input_text.value > 18) {
        alert("玩家人数不能多于18");
        input_text.value = 18;
    }
}

function setNumber() {
    //             每次按按钮前先清除ul的子元素
    ul.innerHTML = "";
    li.splice(0,li.length);
    //             笨办法，ul子元素一个一个的移除掉
//     if(as == 0){
//         bb();
//         as = input_text.value;
// }
//     else{
//         for( var x =0 ; x<as ; x++ )
//             ul.removeChild(li[x]);
//         bb();
//         as = input_text.value;
//     }
    //             创建一个数组来装li+
    for (x = 0; x < input_text.value; x++) {
        li[x] = document.createElement("li");
        li[x].className = ("civilian");
        li[x].innerHTML = "平民";
    }
    //             不同人数玩家，添加不同数量的杀手

    if (input_text.value >= 4 && input_text.value <= 5) {
        li[2].className = ("killer");
        li[2].innerHTML = "杀手";
        killer_num = 1;
        civilian_num = input_text.value -1;
    }
    else if (input_text.value >= 6 && input_text.value <= 8) {
        for (var f = 0; f < 2; f++) {
            li[f].className = ("killer");
            li[f].innerHTML = "杀手";
        }
        killer_num = 2;
        civilian_num = input_text.value -2;
    }
    else if (input_text.value >= 9 && input_text.value <= 11) {
        for (var d = 0; d < 3; d++) {
            li[d].className = ("killer");
            li[d].innerHTML = "杀手";
        }
        killer_num = 3;
        civilian_num = input_text.value -3;
    }
    else if (input_text.value >= 12 && input_text.value <= 15) {
        for (var s = 0; s < 4; s++) {
            li[s].className = ("killer");
            li[s].innerHTML = "杀手";
        }
        killer_num = 4;
        civilian_num = input_text.value -4;
    }
    else if (input_text.value >= 16 && input_text.value <= 18) {
        for (var a = 0; a < 5; a++) {
            li[a].className = ("killer");
            li[a].innerHTML = "杀手";
        }
        killer_num = 5;
        civilian_num = input_text.value -5 ;
    }
    //                   将数组乱序
    // li.sort(function () {
    //     return 0.5 - Math.random()
    // });
    //                   定义数组乱序方法
        function shuffle(a){
          var len = a.length;
          for (var i = 0; i < len - 1; i++) {
              var index = parseInt(Math.random() * (len - i));
              var temp = a[index];
              a[index] = a[len - i - 1];
              a[len - i - 1] = temp;
          }
      }

      //                 执行乱序方法
      shuffle(li);
    //                   将创建的乱序数组元素传递给ul
    for (var y = 0; y < input_text.value; y++) {
        ul.appendChild(li[y]);
    }
}



document.getElementById("set").onclick = setNumber;

function demoValue() {
    input_range.value = input_text.value;
}

function rangeValue() {
    input_text.value = input_range.value;
}

var text = input_text.value;


function reduce() {
    if (input_range.value > 4) {
        input_range.value--;
        rangeValue();

    }
    else {
        alert("不能小了")
    }
}

function chkPrice(obj) {
    obj.value = obj.value.replace(/[^\d.]/g, "");
//必须保证第一位为数字而不是.
    obj.value = obj.value.replace(/^\./g, "");
//保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g, ".");
//保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
}

function chkLast(obj) {
// 如果出现非法字符就截取掉
    if (obj.value.substr((obj.value.length - 1), 1) == '.')
        obj.value = obj.value.substr(0, (obj.value.length - 1));
}

function increase() {
    if (input_range.value < 18) {
        input_range.value++;
        rangeValue();
    }
    else {
        alert("不能大了")
    }
}
document.getElementById("deal").onclick = function () {
    if (li.length !== parseInt(input_text.value)) {
        alert("请先点击设置玩家分配")
    }
    else{
        var identify = [];
        for(var i = 0; i< input_text.value ; i++ ){
            identify[i] = li[i].innerHTML;
        }
        var time = 0.5 ;
        var condition = 0;
        var identify_kill =[];
        var num_kill = [];
        var identify_vote =[];
        var num_vote = [];
        var killed_num = [];
        var aa = -1;
        var bb = -1;
        var cc = 0;
        var storage = window.localStorage;
        storage.setItem("length",input_text.value);
        storage.setItem("time",time);
        storage.setItem("condition",0);
        storage.setItem("aa", -1);
        storage.setItem("bb", -1);
        storage.setItem("cc", 0);
        storage.setItem("killer_num", killer_num);
        storage.setItem("civilian_num",civilian_num);
        storage.setItem("killer", killer_num);
        storage.setItem("civilian",civilian_num);
        localStorage.setItem("identify_kill",JSON.stringify(identify_kill));
        localStorage.setItem("identify_vote",JSON.stringify(identify_vote));
        localStorage.setItem("num_kill",JSON.stringify(num_kill));
        localStorage.setItem("num_vote",JSON.stringify(num_vote));
        localStorage.setItem("killed_num",JSON.stringify(killed_num));
        localStorage.setItem("identify",JSON.stringify(identify));
        window.location.href = "task2-3.html";

      //                           笨办法：键值对的形式去传参数
        // var storage = window.localStorage;
        // for(var i = 0; i < input_text.value ;i++){
        //     storage.setItem("aa"+i,li[i].innerHTML);
        //     // var data=JSON.stringify("aa"+i);
        // }

    }
};




