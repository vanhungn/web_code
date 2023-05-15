// // //bai 1
let a = parseInt(prompt("Please enter a number"));
let b = parseInt(prompt("Please enter a number"));
let sum_nguye_to = 0;
for (let i = a; i < b; i++) {
    let flag = 0;
   if (i < 2) {
       flag=1;
       break;
   } else {
       for (let j = 2; j < i; j++) {
           if  (i % j == 0) {
               flag = 1;
               break;
           }
           flag = 0;
       }
   }
   if(i > 1 && flag === 0) {
       sum_nguye_to += i;
   }
}
console.log("Tổng các số nguyên tố từ a đến b là:", sum_nguye_to);
const sum=sum_nguye_to;
const SumWeb = document.write(sum);
document.write("</br>");
document.write("</br>");
document.write("</br>");

// //bai 2
function numberOneTriangle(num)
{
    if(num<1||num>10)
    {
        console.log("nhap gia tri trong khoang 1 dem 10");
    }
    else{
        for(let i=1;i<=num;i++)
        {
            for(let j=1;j<=i;j++)
            {
                 document.write("*");
            }
            document.write("<br/>");
        }
    }
}
numberOneTriangle(4);









