//console.log("Hello, Welcome to FSD class");

//  function sum(a,b){
//     return a+b;
// }

// function sqrt(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }


// const sum=function(a,b){
//     return a+b;
// }

// const sum=(a,b)=>{return a+b;}
// console.log(sum(4,9));

//IIFE
// (()=>{
//     console.log("Hello, using IIFE");
// })();

// let a=29;
// if(a>20){
//     let a=40;
//     console.log("Value of a inside block="+a);

// }
// console.log("Value of a outside block="+a);

//Callback functions
// function sum(a,b){
//     return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("Heyy,"+msg+" and your result is="+result);
// }
// msgWithSum(sum, "Programmer!");

// function login(error,message){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Message:"+message);
//     }
// }

// function loginHandler(userName,password,clbk){
//     if(userName=="salonivdesign" && password=="12345"){
//         clbk(null,"Login Successful");
//     }else{
//         clbk("Invalid username or password",null);
//     }
// }
// loginHandler("salonivdesign","12345",login);

// console.log("One");
// setTimeout(()=>{                   //setTimout(function as parameter,time in ms)
//     console.log("Two")},2000);
// console.log("Three");




const container=document.getElementById('container');
const btn=document.getElementById('btn');

const h1=document.createElement('h1');
console.log(h1);
h1.innerText="ABES Engineering College";
const loader=document.createElement('h2');
container.appendChild(loader)
const img= document.createElement("img");
//console.log(button)
//console.log(container)

function ping(){
    try{
        loader.innerHTML='<h2>Loading Datta...</h2>'
        container.innerHTML='<h2 style=color:red>Welcome to DOM</h2>';
        h1.style.backgroundColor='cyan';
        h1.style.color='red';
        container.appendChild(h1);
        img.src="./jeremy-hynes-Y2J1a43475Y-unsplash.jpg";
        img.setAttribute('height',200);
        img.setAttribute('width',200);
        container.appendChild(img);
    }catch(e){
        loader.innerHTML='<h2 style=color:red>Error in loading data'
    }finally{
        loader.innerHTML=' ';
    }
}
btn.addEventListener('click',ping)