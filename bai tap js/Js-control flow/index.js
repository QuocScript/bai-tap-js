//Hw1
const operator = prompt("nhap phep toan can tinh");
const a = parseInt(prompt("nhap vao so a:"));
const b = parseInt(prompt("nhap vao so b:"));
switch (operator) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        console.log("khong hop le");
        
}
console.log(`ket qua cua phep tinh ${a} ${operator} ${b} = ${result} `);

//HW2
// chương trình tìm số nguyên tố

// nhập số cần nhập
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1){
    let isPrime = false;
}

// check if number is greater than 1
if (number >1){
    for(let i =2;i<number;i++){
        if(number %i===0){
            isPrime=false;
            break;
        }
    }
}
// check if number is less than 1
if (number <1){
    isPrime=false;
}
if(isPrime){
    console.log(`${number} la so nguyen to`);
}else{
    console.log(`${number} khong phai la so nguyen to`);
}
