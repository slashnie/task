var x = 1
for(var i = 0; i< 100000 ; i++){
    var arr = [1,2,3,4];
    arr.sort(function(){ return 0.5-Math.random()});
    if( arr[0]==1){
        x++;
    }
}
console.log(x);
// 第一个demo



function shuffle(a){
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = a[index];
        a[index] = a[len - i - 1];
        a[len - i - 1] = temp;
    }
}
var arr = [1,2,3,4,5,6,7,8,9,10]
var x = 0;
for(var i = 0; i<20 ; i++){
    shuffle(arr);
    if(arr[0] == 1){
        x++;
    }
}
console.log(x);





// 第三种

if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}
var arr = [1,2,3,4,5,6,7,8,9,10]
var x = 0;
for(var i = 0; i<100000 ; i++){
    shuffle(arr);
    if(arr[0] == 1){
        x++;
    }
}
console.log(x);