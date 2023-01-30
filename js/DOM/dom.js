
// let tort = document.querySelector('#tort')

// function boss() {
//    tort.style.cssText  =`
// border-radius :50%;
//    `
// }

// function boss2() {
//     boss()                                                                                                                                                                                                                                                                               
//     tort.style.cssText  =`
   
//     background-color:black;
//     box-shadow: 5px ;
//     ` 
// }






// setInterval(() => {
// let y = [ "yakshanba","dushanba",'seshanba','chorshanba','payshanba','juma','shanba']

//    let x =new Date();
// //    let hafta = x.getDay()
// //    soat.innerHTML = ` ${x.getHours()}   ${x.getMinutes()}   ${x.getSeconds()} `
// //    sana.innerHTML = ` ${x.getFullYear()}   ${x.getMonth()+1}   ${x.getDate()} ${y[hafta]}`
// // }, 1000);





// // setInterval(() => {
// // let kun = document.getElementsByClassName("kun")
// // let zed = [ "yakshanba","dushanba",'seshanba','chorshanba','payshanba','juma','shanba']
// //  let k =new Date();
// //  let hafta1 = k.getDay();
// // kun[hafta1].style.cssText=`
// // background-color: rgb(162, 16, 45);

// // `
// // console.log(kun[hafta1]);

// // }, 1000);




// ////zaryadka

   
function zaryadka() {
   setTimeout(() => {
      let foiz = document.getElementsByClassName('foiz')
      foiz[0].style.cssText=`
      background-color:greenyellow
      
      `
   }, 1000);

   setTimeout(() => {
      let foiz = document.getElementsByClassName('foiz')
      foiz[1].style.cssText=`
      background-color:greenyellow
      
      `
   }, 2000);
   setTimeout(() => {
      let foiz = document.getElementsByClassName('foiz')
      foiz[2].style.cssText=`
      background-color:greenyellow
      
      `
   }, 3000);
   setTimeout(() => {
      let foiz = document.getElementsByClassName('foiz')
      foiz[3].style.cssText=`
      background-color:greenyellow
      
      `
   }, 4000);
   setTimeout(() => {
      let foiz = document.getElementsByClassName('foiz')
      foiz[4].style.cssText=`
      background-color:greenyellow
    
   
      `
   }, 5000);

   setTimeout(() => {
      let foiz = document.getElementsByClassName('foiz')

      for (let i = 0; i <foiz.length; i++) {
       
         foiz[i].style.cssText=`
      background-color: #ffffff;
      `
      }
   }, 6000);
}


let x = 0 ; 
let betta;
let betta1;
let betta2;
 function zaryadla() {
   shnur.style.cssText = `
  transform:translate(0, -32px) ;

  transition: 2s;
   `
bosh1.style.cssText= `
transform:translate(0, -32px) ; 

transition: 2s;

`


    betta1 = setTimeout(() => {
      zaryadka()
   setInterval(() => {
      zaryadka()
   }, 6000);
   
   
   betta2=  setInterval(() => {
      x++ 
      console.log(x);
      monitor.innerHTML = x+"%"
   }, 2000);
   }, 1000);
   let betta = [betta1,betta2 ];

   betta =[betta1,betta2]

return betta 
}



function stop() {

   shnur.style.cssText = `
   transform:translate(0, 32px);
 
   transition: 2s;
    `
 bosh1.style.cssText= `
 transform:translate(0, 32px); 
 
 transition: 2s;
 `
clearInterval(betta [1,2]) 

                      
}

let intervalID;
 
function atto() {
   intervalID = setInterval(
      ()=>{
         console.log("oij");
      }, 1000);
   return  intervalID
 }
  


 function toxta() {
   clearInterval(intervalID);
 }








// jo'natish


// function kit() {
//    let xmen = document.getElementById("xmen")
//    xmen.style.cssText = ` 
//    transform: translate(300px);
//    transition: 1s;
//    `
   
// }


/// birlashtir

// function birlash() {
  
//    vivo1.style.cssText =`
//    transform: translate(73px);
//    border-right: none;
// transition: 1s;
  
//    `

//    vivo2.style.cssText =`
//    transform: translate( -73px);
//    border-left: none;
// transition: 1s;
   
//   `
//   setTimeout(() => {
//    vivo1.style.cssText =`
//    background-color: red;
//    transform: translate( 73px);
//    border-right: none;

//   `
//   vivo2.style.cssText =`
//    background-color: red;
//    transform: translate( -73px);
//    border-left: none;
//   `
//   }, 1000);


// }