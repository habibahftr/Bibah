const h12= document.querySelector("p[bebas='suka2']");
const h15 = document.querySelectorAll("p")
console.log("file: ", h12)
console.log("file s: ", h15)

let styleList= h15[1].classList;
console.log(styleList);
console.log(styleList.add("textBold"));
console.log(h15.classList);
console.log(styleList.remove("bgAqua"));
console.log(h15.classList);

h15[1].innerHTML = 'ini untuk <a href="/index2.html">paragraf 2</a>'
// h15[1].innerText = 'ini untuk <a href="/index2.html">paragraf 2</a>'

let names = ["admin", 2, true]
names.push("empat")
console.log(names);
names.pop()
console.log(names);
names.shift()
console.log(names);
names.unshift("lala")
console.log(names);

let user = {
    name: "admin",
    age: 21,
    "add-ress": "Jakarta" //kalo ada karakter dalam katanya wajib pake ""
}

let user2 = {
    name: "user",
    age: 20
}

let user3 = {
    name: "operator",
    age: 23
}

console.log(user.name);
console.log(user["add-ress"]);

let users = [user, user2, user3]

for (let index=0; index<users.length; index++){
    const element = users[index];
    console.log("element: ", element)
}

function fn1(params){
    console.log("fn1");
}
fn1()

const fn2 = function (params){
    console.log("total = ", params);
}
fn2(10)

const fn3 = params =>{
    console.log("fn3");
    params(9)
}
fn3(fn2)

const fn5 = () =>{}
const fn6 = _=>{}

const fn4 = (param1, param2, cb)=>{
    console.log("fn4");
    const total = param1+param2
    cb(total)
}
fn4(1, 2, fn2)
console.log("bawah");
const promiseFn = new Promise((resolve, reject)=> {
    console.log("promise")
    // resolve(3)
    // reject("gagal");
    // axios
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json =>resolve(json))
    .catch(()=> reject("gagal"))
})
console.time("Promise")
promiseFn
.then(value => console.log("value: ", value))
.catch(err=> console.error("Error: ", err))
.finally(()=>{
    console.info("finally");
    console.timeEnd ("Promise")
})

// foreach asinkronus
let users2=[]
users.forEach((value, index)=>{
    console.info("value: ", value);
    console.warn("index: ", index);
    // let newData ={
    //     name: value.name,
    //     age: value.age,
    //     gender: value.age > 21 ? "L" :"P"
    // }
    // users2.push(newData)

    // fungsi ... untuk mengcopy isi semua array
    users2.push({...value, 
        gender: value.age > 21 ? "L" :"P"
    })
})
console.log("users2: ", users2)

// find hanya menampilkan data yang pertama ditemukan
const dataFind= users.find(value => value.age >=21)
console.log("dataFind: ", dataFind);
// filter menampilkan semua hasil
const dataFind2= users.filter(value => value.age >=21)
console.log("dataFind: ", dataFind2);
const users3 = users.map(function (value) {
    return {...value, gender: value.age > 21 ? "L" :"P"}});
console.log("users3: ", users3);


