// amaliyot

const myarray=[[false,true],[1,2],90,'yaxshi']

// 1 mashq
// for bilan

// for(let i = 0;i<myarray.length;i++){
//     if(typeof myarray[i]=='string'){
//         console.log('string index:',i);
        
//     }
// }




// foreach
// myarray.forEach((e,i) =>{
//    if(typeof e=='string'){
//     console.log('string index:',i);
    
//    }
   
// })



// 2 mashq
// const data=[[1,2,3,4],'qizil',123,[5,6,7]]
// const newdata=[]
// data.forEach((item)=>{
//     const res=Array.isArray(item)
//     if(res){
//         item.forEach((num)=>{
//          newdata.push(num)  
//         })
//     }
// })

// console.log(newdata);


// 3 mashq

// const checkdata=[null,'false',0,2,5,2,false,undefined,NaN,'0']
// const res=[]
// checkdata.forEach((item)=>{
//     if(!item){
//         res.push(item)
//     }
// })

// console.log(res);
//  console.log()


// 4 mashq teskari ism qilish

// const ism = 'aslbek';
// const splitism = ism.split('');
// let newword = '';
// for (let i = ism.length - 1; i >= 0; i--) {
//     newword += splitism[i];
// }
// console.log(newword);


// 5 mashq 1chi xarfni kichkina qolganlarini katta qiladi
// const word = 'asSalomu Alaykum'
// const splitword = word.split(' ')  
// let newword = ''

// splitword.forEach((item) => {
//   const boshi = item.charAt(0).toLowerCase()
//   const davomi = item.slice(1).toUpperCase()
//   newword += boshi + davomi + ' '
// })

// console.log(newword.trim())


// 6 mashq arrayda natural sonlar yigindisini topadigan

// const numbers=[-1,87,4,3.1,-5.5,Infinity,0,0.9]
// let naturalson=0
// numbers.forEach((num)=>{
//     if(num>=0.0&&Math.floor(num)===num&&num!==Infinity&&num!==0){
//       naturalson+=num
        
//     }
// })

// console.log(naturalson);



// 7-mashq kiritilgan sozlarda a harfi nechi marta ishtirok etganini topish

// const text=(prompt('text kiriting'))
// let counter=0

// let splitword=text.split('')

// splitword.forEach((item)=>{
//     if(item==='a'||item==='A'){
//         counter++
//     }
// })

// alert(`siz kiritgan textda: ${counter} ta  bor`);


// 8 mashq elementlar type of buyicha

// const types=[21.1,'roziya','array',['i am array'],null,true,214]
// const typesoff=[]
// types.forEach((type)=>{
//     typesoff.push(typeof type);
    
// })

// console.log(typesoff);


// 9 mashq kiritilgan textni nechta ellementlardan iborat ekanligini aniqlang (length dan foydalanmay)


// const word='uzbekistan'
// console.log((word.lastIndexOf(word.slice(-1)))+1);


// 10 mashq array berilgan [1,2,3,4,5] uning ichidagi elementlariga oz index(position)
// raqamini qushib yanngi array hosil qilish

// const number=[1,2,3,4,5]
// let result=[]
// number.forEach((num,i)=>{
//     result.push(num+i)
// })

// console.log(result);


// 11 mashq berilgan sonlar yigindisini chiqarish

// let counter=0
// for(let i=1;i<=100;i++){
//     counter+=i
// }
// console.log(counter);

// 12 mashq berilgan sonni nga kopaytirip 1 ni qushib yozadigan kod yozing



// let number=9

// for(let i=1;i<=10;i++){
//     let result=(number*i)+1
//     console.log(result);
    
// }


// 13 mashq funksiyaga array kiritsak teskari ishorada ishlab berilsin

// let numbers=[1,2,3,4,5]
// let result=[]

// const reverseFunc=(arr)=>{
//     arr.forEach(num => {
//         result.push(num*-1)
//     });
// }
// reverseFunc(numbers)
// console.log(result);


// 14 mashq funcsiya berilgan raqamni 0 dan osha raqamgacha bulgan sonlarni3,5va 15ga
// bolinish holatini tekshiring

// let result = []

// const fizzbuzzFunc = function(number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('fizzbuzz')
//         } else if (i % 3 === 0) {
//             result.push('fizz')
//         } else if (i % 5 === 0) {
//             result.push('buzz')
//         } else {
//             result.push(i)
//         }
//     }
// }

// fizzbuzzFunc(25)
// console.log(result)


// 15 mashq uzingiz xaqida object yarating va unga haqida metod qushing
// u metotdan foydalanilsa objectdagi malumotlardan foydalanib uzingiz xaqida gapirib beradi



// const aslbekobj={
//     name:'aslbek',
//     lastname:'boboqulov',
//     age:19,
//     region:'buxoro',
//     ismerried:false,
//     job:'student',
//     haqida: function(){
//         return `
// Assalomu alaykum,mening ismim ${this.name},familyam${this.lastname}.yoshim${this.age} da.${this.region} da yashayman. ${this.job} man.${ this.ismerried ? 'uylanganman' : 'uylanmaganman'}

//         `
//     }
// }

// const result=aslbekobj.haqida()
// alert(result);
