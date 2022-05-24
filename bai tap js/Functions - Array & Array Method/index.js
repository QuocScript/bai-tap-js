//HW1

console.log(checkAge(prompt("how old r u ?")));
function checkAge(age) {
     return age >= 18 || confirm('nope');
}

//HW 2
// cach binh thuong
const a = parseInt(prompt("nhap vao so a:"));
const b = parseInt(prompt("nhap vao so b:"));
if (a > b) {
     console.log(`gia tri nho nhat cua  so a va b la ${b}`);
} else {
     console.log(`gia tri nho nhat cua  so a va b la ${a}`);
}
// su dung ham min 
function min(b, c) {
     return b < c ? b : c;
}
console.log(min(1, 9));
//HW 3
let ask = (question, yes, no) =>{
     if (confirm(question)) 
     yes();
     else no();
   }
   
   ask(
     "Do you agree?",
     () => { alert("You agreed."); },
     () => { alert("You canceled the execution."); }
   );
//HW 4
let username = prompt("nhap ten tai khoan cua ban");
if (username == 'admin');
let password = prompt("nhap mat khau");
if (password == '1234') {

} else if (username == "" || username == "out") {
     alert("outed");
} else {
     alert("wrong username or username not exist")
}

