// ARRAY [...] : menyimpan koleksi data / menyimpan data lebih dari satu 
// dalam satu tempat

// CASE : buatlah program untuk menyimpan data username pelanggan
let user1 = "admin_super"
let user2 = "kristof"
let user3 = "elsa"
let user4 = "olaf"

// setiap kita mau buat data username baru kita harus buat variable baru
// dan kita harus ingat nama variable

// SOLUSI PAKAI ARRAY
let users = ["admin_super", "kristof", "elsa", "olaf"]
console.log(users)

// ARRAY dapat menampung semua tipe data termasuk array itu sendiri
let arr = [1, 0.0, NaN, true, "Purwadhika", "", ["Holla"]]

// CARA AKSES VALUE DI DALAM ARRAY / ELEMENT / ITEM
// gunnakan index atau urutan, index dimulai dari 0 => namaArray[index]
console.log(users[2])
console.log(users[0])
console.log(arr[3])

// MENAMBAHKAN DATA KEDALAM ARRAY ? => method .push()
// .push() di pakai untuk menambahkan value/element/item ke dalam array dan
// di letakkan di urutan terakhir
// namaArray.push(value)
users.push("anna")
users.push(18976)
console.log(users)