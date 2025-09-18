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
//         alert('Xato Qayta urinib koring ');
//         uyin(); 
//     }
// }

// uyin();





// const son = Math.random();
// let raqam = Math.floor(son * 100);

// console.log('natija ' + raqam);

// function uyin() {
//     let kirish = Number(prompt('0-100 oraligidagi son kiriting'));

//     if (raqam === kirish) {
//         alert("Togri! Siz dastur oylagan sonni topdingiz");
//     } else if (kirish < raqam) {
//         let qiymat = Math.floor(raqam / kirish);
//         alert(`Siz kiritgan son dastur sonidan ${qiymat} marta kichik`);
//     } else {
//         let qiymat = Math.floor(kirish / raqam);
//         alert(`Siz kiritgan son dastur sonidan ${qiymat} marta katta`);
//     }
// }

// uyin();
