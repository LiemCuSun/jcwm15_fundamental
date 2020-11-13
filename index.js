// REVIEW FUNDAMENTAL
// ARRAY => []
// untuk menyimpan multiple data dalam satu variable
// atau data type yang mampu menyimpan multiple value dan multiple data type
// array bisa menyimpan Number, String, Boolean, Object, Array, Function, etc.

// CRUD OPERATION (CREATE, READ, UPDATE, DELETE)
// CREATE ARRAY
let arr = [] // array kosong
let arr2 = new Array() // array kosong
console.log(arr)
console.log(arr2)

// kalau misal kita pakai class array, kita bisa define di awal
// panjang array nya dan juga isinya

// aku bikin array dengan panjang 5 isinya 0
let nol = [0, 0, 0, 0, 0]
let nol2 = new Array(5).fill(0)
console.log(nol)
console.log(nol2)

// READ ARRAY => CARA DAPETIN VALUE ATAU ITEM/ELEMENT DI DALMANYA
// PAKAI INDEX => MULAI DARI 0
let users = ["elsa", "olaf", "dading"]
console.log(users[1])
console.log(users[0])

// UPDATE ARRAY => EDIT VALUE ATAU NAMABAHIN ITEM/ELEMENT BARU
// ADD ITEM BARU => .push(value) or .unshift(value)
users.push("anemo") // add value/item di akhir
users.unshift("pyro") // add value/item di awal
console.log(users)

// EDIT VALUE
users[4] = "geo"
users[users.length - 1] = "ana" // ganti value dari element terkahir di array
console.log(users)

// DELETE ITEM DI DALAM ARRAY
users.splice(2, 1) 
// .splice(i, n), kita mau delete mulai dari index ke-i
// sebanyak n-buah
delete users[0]

console.log(users)

// ARRAY BISA DI ISI DENGAN ARRAY, OBJECT, ATAU FUNCTION
let arr3 = [0, ["Hello"], true, () => console.log("world"), { name : "alee" }]
console.log(arr3[2])
console.log(arr3[4])
console.log(arr3[4].name)
console.log(arr3[3])
arr3[3]() // invoke function / jalanin function

// ARROW FUNCTION => SYNTAX SINGKAT UNTUK MEMBUAT/MEN-DECLARE SEBUAH FUNCTION
// FUNCTIONAL EXPRESSION => FUNCTION YANG DISIMPAN DI DALAM VARIABLE
const HelloWorld = () => console.log("Hello World")
// karena variable kita isi dengan suatu function, maka variable tersebut
// akan berubah menjadi function
HelloWorld()

const Hello = (name) => {
    console.log("Hello, " + name)
}

Hello("krist")

// OBJECT => tujuannya untuk menyimpan multiple data type, mirip dengan array
// tetapi jika array aksess value dari element didalam array menggunakan index
// kalau di object aksess value dari element menggunakan key/props
// karena di object value selalu berpasangan dengan key/props
// => { key : value }
// value => Object, Array, Boolean, Number, String, function, etc.

// OBJECT lebih dipakai untuk mengkelompokan data yang memiliki hubungan
// kita anggap data dengan analogi OBJECT REAL

// misalkan kita punya data user => kita anggap user adalah OBJECT
// kita deskripsikan user dengan key dan value
// misal : user punya nama alee => key "nama" dan valuenya "alee"

// CRUD OBJECT => CREATE, READ< UPDATE, AND DELETE