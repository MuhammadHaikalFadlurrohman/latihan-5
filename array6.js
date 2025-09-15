let produk =[
    {nama : 'laptop', harga : 12000000},
    {nama : 'HP', harga : 35000000},
    {nama : 'Tablet', harga : 5000000},
    {nama : 'Smartwatch', harga : 1500000}
];

// data produk ditampilkan menggunakan forEach
console.log('\Daftar Produk:');
produk.forEach (prd => {
    console.log(`${prd.nama} - Harga : ${prd.harga}`);
});                 
let daftarNama =produk.map(prd => prd.nama);
console.log('\nDaftar Nama Produk:', daftarNama);

let urutHarga = [ ...produk].sort((a,b) => b.harga - a.harga);
console.log('\nDaftar harga produk dari tertinggi -> terendah:');
urutHarga.forEach(prd => console.log(`${prd.nama} - Harga : ${prd.harga}`));

let cariNama = prompt('Masukkan nama produk yang dicari: ');
let hasilCari = produk.find(prd => prd.nama.toLowerCase() === cariNama.toLowerCase());

do {
if (hasilCari) {
    console.log(`Produk ditemukan: ${hasilCari.nama} - Harga : ${hasilCari.harga}`);
} else {
    console.log('Produk tidak ditemukan.');
}

// tanyakan apakah ingin mencari lagi 
let pilihan = prompt('/n Apakah Anda ingin mencari lagi? (y/n): '); toLowerCase();
}       
while (pilihan !== 'y' && pilihan !== 'yes') {
    hasilCari = false;
    console.log('/n Terimakasi kasih ! Programan Selesai.');
}   

