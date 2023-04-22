

//bài 1 tìm số chính phương
let num=[3,4,5,6,4,5,6,7,77];

for(let i=0;i<num.length;i++)
{
    if(Math.sqrt(num[i])*Math.sqrt(num[i])===i)
    {
        console.log(num[i]);
    }
}
//bài 2 tìm số nguyen tố
let num2=[3,5,6,6,7,8,8,8,9,9,33];

for(let i=0;i<num2.length;i++)
{
    let flag= 0;
    if(num2[i]<2)
    {
        flag=1;
        break;
    }
    else
    {
         for(let j=2;j<num2[i];j++)
     {
         if(num2[i]%j===0)
         {
            flag=1;
            break; 
         }
            flag=0;
     } 
    }
   
    if(num2[i]>1 && flag===0)
    {
        console.log(num2[i]);
    }
}
//bài 3
let shoppingCart=[];
let shoppingCart1={
    stt:1,
    fruitName: "táo",
    price: "5000",
    expirationDate:"7-5-2023",
    divisionUnit:{
         name:"Đại ly cấp 1",
         address:"số 11/ngõ 93/Trung Kính",
     },
};
shoppingCart1.divisionUnit=shoppingCart1.divisionUnit.name + "-" +shoppingCart1.divisionUnit.address;
//hoặc dùng for 
// for(let i in shoppingCart)
// {
//     console.log( i,":",shoppingCart[i]);
// }
console.log(shoppingCart1);
let shoppingCart2={
    stt:1,
    fruitName: "cam",
    price: "5000",
    expirationDate:"7-5-2023",
    divisionUnit:{
         name:"Đại ly cấp 1",
         address:"số 11/ngõ 93/Trung Kính",
     },
};
shoppingCart2.divisionUnit=shoppingCart2.divisionUnit.name + "-" +shoppingCart2.divisionUnit.address;
//hoặc dùng for 
// for(let i in shoppingCart)
// {
//     console.log( i,":",shoppingCart[i]);
// }
console.log(shoppingCart2);
let shoppingCart3={
    stt:1,
    fruitName: "quất",
    price: "5000",
    expirationDate:"7-5-2023",
    divisionUnit:{
         name:"Đại ly cấp 1",
         address:"số 11/ngõ 93/Trung Kính",
     },
};
shoppingCart3.divisionUnit=shoppingCart3.divisionUnit.name + "-" +shoppingCart3.divisionUnit.address;
//hoặc dùng for 
// for(let i in shoppingCart)
// {
//     console.log( i,":",shoppingCart[i]);
// }
console.log(shoppingCart3);
shoppingCart.push(shoppingCart1,shoppingCart2,shoppingCart3);
console.log(shoppingCart)
let index = parseInt(prompt("stt:"));
for( let i=0;i<shoppingCart.length;i++)
{
    if(i===index)
    {
        let person = prompt("nhập ngày sửa :");
        shoppingCart[i].expirationDate= person;
        console.log(shoppingCart);
    }
}
