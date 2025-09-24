// let str = prompt("parol kiriting:");
// let uzunlik =str.length
// if (uzunlik == 0) {
//     console.log("parol kiritilmagan");
// } else if (uzunlik <= 5) {
//     console.log("juda zaif");
// } else if (uzunlik <= 9) {
//     console.log("ortacha")
// } else if (uzunlik >= 10){
//     console.log("parol kuchli")
// }


// let parol = prompt("Parol kiriting");


// if (parol.toLowerCase() !== parol && parol.toUpperCase() !== parol) {
//     console.log("Parol kuchli katta va kichik harflar borr");
// } else if (parol.toLowerCase() !== parol) {
//     console.log("Parol o'rtacha faqat kichik harflar emas");
// } else if (parol.toUpperCase() !== parol) {
//     console.log("Parol o'rtacha faqat katta harflar emas");
// } else {
//     console.log("Parol juda oddiy");
// }

// console.log(parol);



// const son = Math.random();
// let raqam = Math.floor(son * 10);

// console.log('natija ' + raqam);

// let count = 0; 

// function uyin() {
//     let kirish = Number(prompt('0-10 oraligidagi son kiriting'));
//     count++; 

//     if (raqam == kirish) {
//         alert(`Togri! Siz ${count} marta urinishda topdingiz `);
//     } else {

//         if(raqam>kirish){
//             alert('siz kiritgan son katta ');
//             // uyin(); 
//         }
      
//     }
// }

// // uyin();



// const lobar={
//     name:'lobar',
//     age:19,
//     from:'buxoro',
//     group:'1 24 ATT',
//     hobby:[
//         {
//             hobitypy:'uxlash',
//             reyt:100
//         },
//         {
//             hobitypy:'swimming',
//             reyt:80
//         },
//         {
//             hobitypy:'valebol',
//             reyt:90
//         },
        
//     ]
// }




// const asl={
//     name:'aslbek',
//     age:19,
//     from:'buxoro',
//     group:'1 24 ATT',
//     hobby:[
//         {
//             hobitypy:'fudbol',
//             reyt:80
//         },
//         {
//             hobitypy:'coder',
//             reyt:100
//         },
//         {
//             hobitypy:'valebol',
//             reyt:100
//         },
        
//     ]
// }




// const aynur={
//     name:'aynur',
//     age:19,
//     from:'buxoro',
//     group:'1 24 ATT',
//     hobby:[
//         {
//             hobitypy:'fudbol',
//             reyt:100
//         },
//         {
//             hobitypy:'coder',
//             reyt:100
//         },
//         {
//             hobitypy:'valebol',
//             reyt:80
//         },
        
//     ]
// }


// const group=[lobar,asl,aynur]
// console.log(group);

// for(index in group){
//     console.log(group[index].name)
// }



// let test=Number(prompt('balingizni kiriting'))
// let demo=document.getElementById('demo')


// if(test>=60){
//     demo.innerHTML='siz testdan utdingiz'
//     demo.style.fontSize='50px'
//     demo.style.backgroundColor='green'
//     demo.style.color='white'
//     demo.style.textAlign = 'center' 
// }else{
//     demo.innerHTML='siz testdan utolmadingiz'
//     demo.style.fontSize='50px'
//     demo.style.backgroundColor='red'
//     demo.style.color='white'
// }



// let test=Number(prompt('kvadrat tamonini kiriting'))
// let kv=document.getElementById('kvadrat')




// let test = Number(prompt('kvadrat tomonini kiriting'))
// let x=Number(prompt('x ni kirit'))
// let y=Number(prompt('y ni kirit'))
// document.getElementById("a").innerHTML+=(test+"px")
// document.getElementById("y").innerHTML+=(y+"px")
// document.getElementById("x").innerHTML+=(x+"px")
// document.addEventListener("keydown",function (e) {
//     console.log(e.key);
    
// })




// kv.style.width = test + 'px'
// kv.style.height = test + 'px'
// kv.style.backgroundColor = 'red'
// kv.style.marginTop=y+'px'
// kv.style.marginLeft=x+'px'
// let kv = document.getElementById('kvadrat');
// let x_kor=document.getElementById('x_kor')
// let y_kor=document.getElementById('y_kor')
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", function(e) {
//     if (e.key === 'ArrowUp') {
//         y = y - 10;
//     } else if (e.key === 'ArrowDown') {
//         y = y + 10;
//     } else if (e.key === 'ArrowRight') {
//         x = x + 10;
//     } else if (e.key === 'ArrowLeft') {
//         x = x - 10;
//     }
//    if(y<0){
//     y=0
//     return
//    }

//    if(x<0){
//     x=0
//     return
//    }
//    if(x>900){
//     x=900
//     return
//    }

//    if(y>500){
//     x=500
//     return
//    }
//    x_kor.innerHTML=x
//    y_kor.innerHTML=y
//     kv.style.marginLeft = x + "px";
//     kv.style.marginTop = y + "px";
// });





// let tv = document.getElementById('tv')
// let tvv = ['rasm1.jpg','rasm2.jpg','rasm3.jpg','rasm4.jpg','rasm5.jpg']
// let x = 0

// document.addEventListener('keydown', function(e){
//    console.log(e.key);

//    if(e.key == 'ArrowUp'){
//         x = x + 1
//    }

//    if(e.key == 'ArrowDown'){
//         x = x - 1
//    }

   
//    if(x > 4){   
//         x = 0
//    }
//    if(x < 0){
//         x = 4
//    }

  
//    tv.innerHTML = `<img src="./img/${tvv[x]}" style="width: 1000px; height: 500px;">`
// })
