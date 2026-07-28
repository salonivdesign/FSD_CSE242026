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

function login(error,message){
    if(error){
        console.log("Error: "+error);
    }
    else{
        console.log("Message:"+message);
    }
}

function loginHandler(userName,password,clbk){
    if(userName=="salonivdesign" && password=="12345"){
        clbk(null,"Login Successful");
    }else{
        clbk("Invalid username or password",null);
    }
}
loginHandler("salonivdesign","12345",login);