//backtick mathod
//console.log(`${fname} ${lname} is from ${city}`)

// push method
//let array = ['a','b','c','d','e']
//array.push('f')
//console.log(array)

//const btn = document.getElementById("btn")
//const colortext = document.getElementById("color")
//const wrap = document.getElementById("wrap")
//const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//btn.addEventListener('click',changeDB)

//function changeDB(){
    //let hexcolor = '#'
   // for(let i=1;i<=6;i++) {
     //   hexcolor += randhexvalue()
    //}
    //wrap.style.backgroundColor = hexcolor
  //  colortext.innerHTML = hexcolor
//}

//function randhexvalue() {
//    let randomindex = Math.floor(Math.random()*16)
  //  return hex[randomindex]
//}

// let arr=[1,2,3,4,5]
// let sumofarr = (arr) => {
//     let sum = 0
//     for(let val of arr) {
//         sum +=val
//     }
//     return sum
// }

// function* generator() {
//     let index = 1
//     while(true) {
//         yield index++;
//     }
// }
// const gen = generator()

// console.log(gen.next().value)
// console.log(gen.next().value) 

// console.clear()

// function greetconsole(name) {
//     console.log('hello',name)
// }
// function greetheading(name) {
//     const heading = document.querySelector('h1')
//     heading.innerHTML = 'hello' + name
// }
// function greet(callback) {
//     callback('john')
// }

// greet(greetconsole)
// greet(greetheading)

// arr = ['ece','ise','it']
// arr.forEach(val => {
//     const opt = document.createElement('option')
//     opt.textContent = val
//     opt.value = val
//     document.getElementById('branch').appendChild(opt)
// });

// arr2d = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// let count = arr2d.flat().reduce((accu,val)=> {
//   if(accu[val])
//     accu[val]++
//   else
//     accu[val] = 1
//   return accu
//   }
//   ,{})
//   console.log(count)

// function outer() {
//   let outerval = 'bread'
//   function inner() {
//     let innerval = 'butter'
//     console.log(innerval)
//     console.log(outerval)
//   }
//   inner()
// }

// outer()

// function adder(x) {
//   return function(y) {
//     return (x+y)
//   }
// }

// let add = adder(8)
// console.log(add(2))

// class Printn{
//   constructor(name){
//     this.firstname = name
//   }
//   printname() {
//     return "my name is" + this.firstname
//   }
// }

// const print = new Printn("john")
// console.log(print.printname())

// let ampm = document.getElementById('ampm')
// function distime() {
//   let datetime = new Date()
//   let hr = datetime.getHours()
//   let min = padzero(datetime.getMinutes())
//   let sec = padzero(datetime.getSeconds())
//   if(hr>12) {
//     ampm.innerHTML = "PM"
//     hr = hr-12
//   }

//   document.getElementById('hours').innerHTML = padzero(hr)
//   document.getElementById('min').innerHTML = min
//   document.getElementById('sec').innerHTML = sec

// }

// function padzero(num) {
//   return num<10?"0"+num:num
// }

// setInterval(distime)

// const takkal = new Promise((resolve,reject)=> {
//   let booking = true 
//   if(booking) {
//     resolve(840)
//   }
//   else {
//     reject()
//   }
// })
//   takkal.then((amt)=>console.log(`thanks i have transferred Rs.${amt}`))
//   .catch(()=> console.log("sorry"))

// let myset = new Set()
// myset.add(4)
// console.log(myset)

// let reachA = new Promise((resolve,reject)=> {
//   const reached = true
//   if(reached){
//     setTimeout(resolve,3000,"reached")
//   }
//   else {
//     reject("not reached")
//   }
// })

// let reachb = new Promise((resolve,reject)=> {
//   const reached = false
//   if(reached){
//     setTimeout(resolve,2000,"reached")
//   }
//   else {
//     reject("not reached")
//   }
// })

// let reachc = new Promise((resolve,reject)=> {
//   const reached = true
//   if(reached){
//     setTimeout(resolve,3000,"reached")
//   }
//   else {
//     reject("not reached")
//   }
// })

// Promise.all([reachA,reachb,reachc])
// .then((message)=> console.log(message))
// .catch((message)=> console.log(message))

let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json(res))
.then(res=>displaydropdown(res))


function displaydropdown(res){
  let curr = Object.entries(res)
  for(let i=0;i<curr.length;i++) {
    let opt =`<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt
 
  }
}

btn.addEventListener('click', ()=>{
  let curr1 = select[0].value
  let curr2 = select[1].value
  let inputval = input.value

  if(curr1===curr2) {
    alert("choose different choices")
  }
  else  {
    convert(curr1,curr2,inputval)
  }
})

function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]
  });
}











