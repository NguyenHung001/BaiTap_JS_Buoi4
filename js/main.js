// ! Sắp xếp thứ tự tăng dần
/**
 * - INPUT: số nguyên : a,b,c
 * - SOLUTION:
 *  + nếu 3 số bằng nhau a=b=c
 *  + nếu có 2 số bằng nhau
 *      a==b : nếu a>c thì a=b>c nếu ko thì a=b<c
 *      a==c : nếu a>b thì a=c>b nếu ko thì a=b<c
 *      b==c : nếu a>b thì b=c<a nếu ko thì b=c>a
 * - OUTPUT: xuất ra màn hình kết quả
 */

function tinhTB(){
    var a = Number(document.getElementById('num1').value);
    var b = Number(document.getElementById('num2').value);
    var c = Number(document.getElementById('num3').value);
    var kqBai1 = document.getElementById('txtNotify1');
// <-------------------------------------------------------------------------->  
if(a==b && b==c){
    kqBai1.innerHTML = "Ba số bằng nhau"
}else if(a==b){
    (a>c) ?  kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ c +' < '+ a +' = '+ b
    : kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ a +' = '+ b +' < '+ c;
}else if(b==c){
    (a>b) ?  kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ b +' = '+ c +' < '+ a
    : kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ a +' < '+ c +' = '+ b;
}else if(a==c){
    (a>b) ? kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ b +' < '+ a +' = '+ c
    : kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ c +' = '+ a +' < '+ b;
}else if(a>b && a>c){
    (b>c) ? kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ c +' < '+ b +' < '+ a
    : kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ b +' < '+ c +' < '+ a;
}else if(b>a && b>c){
    (a>c) ? kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ c +' < '+ a +' < '+ b
    : kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ a +' < '+ c +' < '+ b;
}else if(c>a && c>b){
    (a>b) ? kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ b +' < '+ a +' < '+ c
    : kqBai1.innerHTML = 'Thứ tự tăng dần là:  <br>'+ a +' < '+ b +' < '+ c;
}}

// <====================================================================================>
// ! Chào hỏi các thành viên 
/**
 * - INPUT: chọn người đang sử dụng máy
 * - SOLUTION: 
 *  + kiểm tra người sử dụng máy
 * - OUTPUT: in ra lời chào phù hợp
 */
function hello(){
    var user = document.getElementById('user').value;
    var kqBai2 = document.getElementById('txtNotify2');
// <-------------------------------------------------------------->
    (user == '') ? kqBai2.innerHTML = 'Vui lòng chọn lại !' :
    (user == 'bo') ? kqBai2.innerHTML = 'Hello Father !' :
    (user == 'me') ? kqBai2.innerHTML = 'Hello Mother !' :
    (user == 'anhtrai') ? kqBai2.innerHTML = 'Hello Brother !' :
    kqBai2.innerHTML = 'Hello Sister !'
    kqBai2.classList.add('animate__zoomIn');
}

// <====================================================================================>
// ! Đếm số lẻ, số chẵn
/**
 * - INPUT: cho 3 số nguyên num1, num2, num3
 * - SOLUTION:
 *   tạo 2 biến đếm số chẵn lẻ demSoChan, demSoLe
 *   nếu num1 % 2 == 0 thì demSoChan = ++demSoChan nếu ko thì ++demSoLe
 *   nếu num2 % 2 == 0 thì demSoChan = ++demSoChan nếu ko thì ++demSoLe
 *   nếu num2 % 2 == 0 thì demSoChan = ++demSoChan nếu ko thì ++demSoLe
 * - OUTPUT: in ra màn hình số chẵn, số lẻ
 */
function soChanLe(){
var num1 = Number(document.getElementById('number1').value);
var num2 = Number(document.getElementById('number2').value);
var num3 = Number(document.getElementById('number3').value);
var kqBai3 = document.getElementById('txtNotify3');
var dem = 0;
// <---------------------------------------------------------->
if((num1 % 2) == 0) {++dem};
if((num2 % 2) == 0) {++dem};
if((num3 % 2) == 0) {++dem};
kqBai3.innerHTML = "Có " + dem + " số chẵn<br>" 
                 + "Có " + (3-dem) + " số lẻ"
}

// <====================================================================================>
// ! Nhận biết tam giác
/**
 * - INPUT: 3 cạnh của tam giác edge1, edge2, edge3
 * - SOLUTION:
 *      + lấy giá trị 3 cạnh: edge1, edge2. edge3
 *      + kiểm tra: + nếu 1 trong 3 cạnh <= 0 hoặc tổng 2 cạnh <= cạnh còn lại đây ko phải tam giác
 *                  + nếu 3 cạnh bằng nhau đây là tam giác đều
 *                  + nếu có 2 cạnh bằng nhau thì là tam giác đều
 *                  + kiểm tra cạnh lớn nhất và nếu bình phương cạnh huyền = bình ohuowng 2 cạnh còn lại 
 *                    thì là tam giác vuông
 * - OUTPUT: in ra kết qủa
 */
function nhanBiet(){
    var edge1 = Number(document.getElementById('edge1').value);
    var edge2 = Number(document.getElementById('edge2').value);
    var edge3 = Number(document.getElementById('edge3').value);
    var kqBai4 = document.getElementById('txtNotify4')
    let caseOne = false;
    let result = '';
// <------------------------------------------------------------->
    if(edge1<= 0 || edge2<= 0 || edge3<= 0 || (edge1+edge2<=edge3) || (edge1+edge3<=edge2) || (edge2+edge3<=edge1)){
        result = "Không Phải Tam Giác";
        caseOne = true;
    } else if(edge1 == edge2 && edge2 == edge3) {
        result = "Đây là Tam Giác Đều"
        caseOne = true;
    } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
        result = "Đây là Tam Giác Cân"
        caseOne = true;
    } 
    if(caseOne)  {
        kqBai4.innerText = result;
        return;
    } else {
        ((edge1>edge2 && edge1>edge3 && (Math.pow(edge1,2) ==  Math.pow(edge2,2) +  Math.pow(edge3,2)))
        || (edge2>edge1 && edge2>edge3 && (Math.pow(edge2,2) ==  Math.pow(edge1,2) +  Math.pow(edge3,2)))
        || (edge3>edge2 && edge3>edge1 && (Math.pow(edge3,2) ==  Math.pow(edge2,2) +  Math.pow(edge1,2)))) ?
         result = 'Đây là tam giác vuông' : result = 'Tam giác khác'
    }
    kqBai4.innerText = result;
}


