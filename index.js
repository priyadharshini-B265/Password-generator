const password = document.getElementById('password');
const count = document.getElementById('count');
const upperCase = document.getElementById('upper');
const lowerCase = document.getElementById('lower');
const number = document.getElementById('number');
const specialCharacter = document.getElementById('special');
const submit = document.getElementById('submit');

submit.addEventListener('click',() => {

   const length = count.value;
//    console.log(length);

   if(length<0){
       alert('Provide a positive Number');
   }
   const upper = 'ABCDEFFGHIJKLMNOPQRSTUVWXYZ';
   const lower = 'abcdefghijklmnopqrstuvwxyz';
   const num = '1234567890';
   const special = '@#$&*';

   let finalString = '';

   if(upperCase.checked){
       finalString+=upper;
   }

   if(lowerCase.checked){
    finalString+=lower;
}
if(number.checked){
    finalString+=num;
}
if(specialCharacter.checked){
    finalString+=special;
}

// console.log(finalString);

let passwordValue ='';

for(let i=0;i<length;i++){
var mathIndex = Math.floor(Math.random()*finalString.length);
passwordValue += finalString[mathIndex];
 console.log(passwordValue);
}  

password.value = passwordValue;
})

