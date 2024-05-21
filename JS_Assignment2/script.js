// 1. Write code to display from 1 to 100 but just even numbers.
const n = ()=>{
  for(let i = 1;i<=100;i++){
      if(i%2 === 0){
          console.log(i); 
      }
  }
}

n();


// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const cal = (n1,n2,nasim)=>{
  let result;

  switch(nasim){
      case 'add':
          result = n1 + n2;
          break;
      case 'sub':
          result = n1 - n2;
          break;
      case 'mul':
          result = n1 * n2;
          break;
      case 'div':
          if(n2 != 0){
              result = n1 / n2;
          }
          else{
              result = Infinity;
          }
          break;
      default:
          result = "Please enter valid operation";
  }
  return result;
}

let answer = cal(6,2,'sub');
console.log(answer);

// You need to write a function findTax() that takes a number 
// type variable as an argument which is the salary of a person. 
// You need to calculate the tax amount on his salary by using 
// the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

const findTax = (salary)=>{
  let taxedAmount;

  switch(true){
      case (salary > 0 && salary <= 500000):
          taxedAmount = 0;
          break;
      case (salary > 500000 && salary <= 1000000):
          taxedAmount = salary * 0.1;
          break;
      case (salary > 1000000 && salary <= 1500000):
          taxedAmount = salary * 0.2;
          break;
      case (salary > 1500000):
          taxedAmount = salary * 0.3;
          break;
      default:
          taxedAmount = "Invalid!~"; 
  }
  return taxedAmount;
}

console.log(findTax(100000));   
console.log(findTax(60000000));     
console.log(findTax(-1)); 

// 4. Write a function to perform this. You are given two numbers n1 and n2. 
// You need to find the sum of the products of their corresponding digits. 
// So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sum(n1,n2){
  let s = 0;

  while(n1 > 0 || n2 > 0){
      const d1 = n1 % 10;
      const d2 = n2 % 10;

      s += d1 * d2;
  
      num1 = Math.floor(n1 / 10);
      num2 = Math.floor(n2 / 10);
  }

  return s;
}

console.log(sum(6,34));
console.log(sum(4546,453));