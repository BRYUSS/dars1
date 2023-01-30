
// const obj ={
//     ism :"ali"
// }


// const arr =  [2, ou, true,false, obj, {lhlkjl}]
// console.log(arr[3]);
// console.log(arr[2]);

// const num = [1, 2, 3, 4, 5, 6, 7,];
// num[3] = 'tort'
// num[5] = 'tort'

// console.log(num);

// let son = []
// son[3] = 'ali'
// console.log(son);




// const tepa = [];
// tepa[0] ='damas'
// tepa[1] ='kaptiva'
// tepa[2] ='damas2'
// tepa[3] ='spark'
// console.log(tepa);



//////////////////     Arrey methods
///



/// array.join ()        =========  array orasiga element qoshadi\


// let joy = document.querySelector('.log');
// let joy1 = document.querySelector('.log1');

// let arr = ['hskgdas','jafgisdf','fhiaewuhdfiye', 'llrhfiyuerf', 'eifov'];

// joy.innerHTML = arr.join('<br>');
// joy1.innerHTML = arr.join('<br>');



////// concat() ///        =========== arraylarni birlashtiradi

// let arr1 = ['fdyhafeuy','iseygidfyg','gani']
// let arr2 = ['djklhfvsdaf','sdpfbjsdg','asl']
// let arr3 = arr1.concat(arr1)
// console.log(arr3);


// console.log([...arr1,...arr2]);


////////////// push()  ====== oxiridan element qo'shadi

// let bentley = document.querySelector('.log'// let arr = ['hsk  .gdas','jafgisdf','fhiaewuhdfiye', 'llrhfiyuerf', 'eifov'];

// let usa = prompt('malumot');
// arr.push(usa);


// bentley.innerHTML = arr.join(' ');




// function add(params) {
//     arr.push ('atir'); 
//     bentley.innerHTML = arr.join('  ') ;
// };

// let tilda = prompt();
// let tilda1 =+prompt();

// const fifa=[];

// fifa[tilda1]=tilda;


// console.log(fifa);

////////// pop()  ============ oxiridan ochiradi
// const fruits = ['jashad','mango','xurmo','banan'];
// fruits.pop()
// console.log(fruits);


////////// unshift ()=============== boshidan qoshadi
// const fruits = ['jashad','mango','xurmo','banan'];
// fruits.unshift('anor')
// console.log(fruits);

////////// shift () ============= boshidan ochiradi

// const fruits = ['jashad','mango','xurmo','banan'];
// fruits.shift()
// console.log(fruits);

// const vera =['damas1','damas2','ferrari','nexsiya','audi','mersedes'];


// alert(vera[vera.length-1]);




///////////////////  array methods

//// inclades
// const array1 = [1,2,3]
// console.log(array1.includes(20));

// let mijoz  = prompt('')
// let arr = ['cat','dog','rabbit','horse','fish']
// let geta = {
//     mijoz : arr.includes(mijoz)
// }
// console.log(geta);


///////////// arrow function /// call back hell

// let abc = () =>{
//     console.log('salom');
// }

// let btn = document.querySelector('#btns')
// btn.addEventListener('click',()=>{
//    alert('hello')
// })

// let vivo = prompt('son kirit');
// console.log(Array.from(vivo).sort((a,b)=> a-b).join('')); 

// let x = prompt("")
// let metr = `${Math.floor(x/100)} metr bor`
// let sm = `${x%100} sm bor`

// console.log(`${x}smda`,metr,sm);

// let x = prompt("")
// console.log(`${x}ning 2-darajasi ${Math.pow(x,2)} ga teng`);
// console.log(`${x}ning 3-darajasi ${Math.pow(x,3)} ga teng`);
// console.log(`${x}ning 4-darajasi ${Math.pow(x,4)} ga teng`);


// let son = '24';
//  let raqam = Array.from(son);
// console.log(`${raqam[0]} on'lar,${raqam[1]}birlar` );


// let giva =+prompt('raqam kirit');

// let epa1 = giva.slice(0,1);
// let epa2 = giva.slice(1);
// console.log(epa1*epa2);

// 1-misol
// let soniya = +prompt("");
// let soat = (soniya -soniya%3600)/3600;
// let minut = ((soniya -soat*3600)-(soniya -soat*3600)%60)/60;
// let sekund = soniya-(soat*3600+minut*60);
// console.log(`${soniya}da ${soat}soat ${minut} minut ${sekund}sekund bor`);

//              //2-misol
// let sekund1 = +prompt('');
// let soat1 =Math.floor(sekund1/3600);
// let kattaqoldiqsek =sekund1%3600;
// let minut1 = Math.floor(kattaqoldiqsek/60);
// let oxirgisek =kattaqoldiqsek %60;
// console.log(soat1, minut1,oxirgisek);

// let x = 0;
// son.innerHTML =x;
// function inc(){  son.innerHTML= x--}
// function dec(){  son.innerHTML= x++}
// let arr = [];
// function push(params) {
//     arr.push(son.innerHTML);
//     joy.innerHTML=arr.join(' ')
// }


//      //3-misol
// let rels =document.querySelector('#rels');                 
// const cars =['malibu','gentra','spark','tahoe'];
// rels.innerHTML =cars;
// function almash() {
//     cars[0]=cars[cars.length-1];
//     cars[cars.length-1]=cars[0];
//     rels.innerHTML =cars;
// }


/////////  uyga vazifalar
// 1-masala
// let joker =+prompt()
// if (joker =="") {
// console.log('son kirit');
// }
// else if (isNaN(joker*1)) {
//     console.log("harf yozma");
// }
// else{
// if (joker==90||joker==91) {
//    console.log("beeline"); 
// }
// else if (joker==99||joker==98) {
//   console.log('uzmobile');  
// }

// else if (joker==93||joker==94) {
//    console.log("ucell"); 
// }
// else if (joker==33) {
//     console.log("humans");
// }
// else if (joker==97) {
//     console.log("mobiuz");
// }
// else{
//     console.log("Operator kodini to'g'ri kiriting!!!");
// }
// }





//  2-masala
//   3-masala
// let son = +prompt()
// if (son == "") {
//     console.log("son kiriting");
// }
// else if (isNaN(son * 1)) {
//     console.log('harf va simvollar qabul etilmaydi');
// }
// else {
//     if (son<0) {
//         console.log(son - 1);
//     }
//     else if (son>0) {
//         console.log(son+1);
//     }
//     else {
//         console.log(son);
//     }
// }

///// 4-masala

// let unit =+prompt()
// let unit1 =+prompt()

// if (unit&&unit1==""||unit==""&&unit1) {
//     console.log("sonlarni to'liq kiriting"); 
//  }
//  else if (isNaN(unit*1&& unit1*1)) {
//     console.log('harf va simvollar qabul etilmaydi');
// }
// else if (isNaN(unit*1 )&&unit1||unit&&isNaN(unit1*1)) {
//         console.log("sonlarni to'liq kiritilishi shart  , harf va simvollar esa qabul etilmaydi" );
// }
// else{
//     if (unit>unit1) {
//         console.log(`${unit} soni ${unit1}dan ${unit-unit1} ga katta`);
//     }
//    else if (unit<unit1) {
//     console.log(`${unit1} soni ${unit}dan ${unit1-unit} ga katta`);
//     }
//     else if (unit==unit1) {
//         console.log('sonlar teng');
//     }
// }



//////        ///// 5-masala
// let piton = +prompt("1 ")
// let piton1 = +prompt("2")
// let piton2 = +prompt("3")

// if (piton && piton1 && piton2 == "" || piton1 && piton2 && piton == "" || piton && piton2 && piton1 == "") {
//     console.log("sonlarni to'liq kiriting");
// }
// else if (piton == "" && piton1 == "" && piton2 == "") {
//     console.log('birorta ham son kiritmadingiz!!! son kiritish shart');
// }
// else if (isNaN(piton * 1 && piton1 * 1 && piton2 * 1)) {
//     console.log('harf va simvollar qabul etilmaydi');
// }
// else {
//     if (piton < piton1 < piton2 ) {
//         console.log(`${piton2} soni ${piton1}dan ${piton2 - piton1} ga katta va ${piton}dan ${piton2 - piton} ga katta`);
//     }
//     else if (piton < piton2 < piton1) {
//         console.log(`${piton1} soni ${piton}dan ${piton1 - piton} ga katta va ${piton2}dan ${piton1 - piton2} ga katta`);
//     }
//     else if(piton2 < piton < piton) {
//         console.log(`${piton2} soni ${piton}dan ${piton2 - piton} ga katta  va ${piton1}dan ${piton2 - piton1} ga katta`);
//     }
//     else if (piton == piton1 == piton2) {
//         console.log('sonlar teng');
//     }
//     else {
//         console.log("kiritishda xatolikka yo'l qo'ydingiz. qaytadan kiriting");
//     }
// }



// for (let h=1;  h<6; h++) {
//  console.log(h);
    
// }

// for (let i = 4; i>0; i--) {
//   console.log(i);
    
// }



                /////////FOR 

                ////for in

// const odam ={
//    ism :"Davron",
//    talaba:false,
// yosh:12,
// ball:[2,3,5,7,]
// }                
// for (const key in odam) {
//   console.log(key);
      
//    }

//                   ///// for of
// const array1 = ["a","b","c"]
// for (const x of array1) {
//    console.log(x
      
//       );
// }
                  //   vazifa
// let list=[
//    {ism:"Ali",yosh:26},
//    {ism:"Vali",yosh:40},
//    {ism:"G'ani",yosh:13},
//    {ism:"Toshmat",yosh:14},
//    {ism:"Xolmat",yosh:5}   
// ]


// let kino =[
//    {age:12, name:'titanic'},
//    {age:7, name:'avatar'},
//    {age:24, name:'panterra'}
// ]

// for (let i = 0; i <list.length; i++) {
//  for (let a = 0; a < kino.length; a++) {
//   if (list[i].yosh>kino[a].age) {
//    console.log(`${list[i].ism}ning yoshi ${list[i].yosh}da,${kino[a].name} kinosiga bora oladi yosh chegarasi ${kino[a].age}`);
//   } else {
//    console.log(`${list[i].ism}ning yoshi ${list[i].yosh}da,${kino[a].name} kinosiga bora olmaydi yosh chegarasi ${kino[a].age}`);
   
//   }
   
//  }
   
// }






