/*
* for
* foreach
* for  in
* for of
* find some every
* map
* filter
* reduce
*
*
* */
let arr=['cdboxs','12','新闻'];
arr.forEach((item,index)=>{
    console.log(item+'---'+index);
})
arr.forEach(res=>{
    console.log(res);
})
for(item in arr){
    console.log(item);
}
for(item of arr){
    console.log(item);
}

let arr3=[2,8,6,9].filter(function(item){
    return item>5&&item<9;
});
console.log(arr3);

var arr2=[1,2,3,4,5,6].map(function(item){
    //console.log(item);
    return `<li>${item}</li>`;

});
console.log(arr2.join(""));
//find 找到数组中具体的某一项
let arr4=[2,5,26,8,9,55];
let a=arr4.find((item,key)=>{
    return item.toString().indexOf(5)>-1;
});
console.log(a);
arr4.reduce((prev,next,index,item)=>{
    console.log(arguments);
});
// console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].join(','));
let newsarr=[[1, 2, 3], [4, 5, 6], [7, 8, 9]].reduce(function(prev,next,item){
    return prev.concat(next);
});
console.log(newsarr);