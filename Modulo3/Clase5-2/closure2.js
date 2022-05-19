function makeSizer(size) {
    return function(){
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size20 = makeSizer(20);
var size26 = makeSizer(26);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-20').onclick = size20;
document.getElementById('size-26').onclick = size26;