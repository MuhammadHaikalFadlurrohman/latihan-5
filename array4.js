// var mhs = {};
// mhs.nama = "Haikal";
// mhs.umur = 20;
// mhs.email =email;
// mhs.jurusan = "Teknik Informatika";
// return mhs;

// var mhs3=buatObject("Haikal", 20, '12345','haikal32@gmail.com','Teknik Informatika');

const prompt = require('prompt-sync')();

let mahasiswa =[
    {nama : 'budi', nilai : 85},
    {nama : 'siti', nilai : 90},
    {nama : 'ani', nilai : 78},
    {nama : 'lina', nilai : 68}
];
// data mahasiswa ditampilkan menggunakan forEach
console.log('\Daftar Mahasiswa:');
mahasiswa.forEach (mhs => {
    let hasil =mhs.nilai >= 60 ? 'Lulus' : 'Tidak Lulus';
    console.log(`${mhs.nama} - Nilai : ${mhs.nilai}`);
});

let daftarNama =mahasiswa.map(mhs => mhs.nama);
console.log('\nDaftar Nama Mahasiswa:', daftarNama);


let urutNilai = [ ...mahasiswa].sort((a,b) => b.nilai - a.nilai);
console.log('\nDaftar nilai mahasiswa dari tertinggi -> terendah:');
urutNilai.forEach(mhs => console.log(`${mhs.nama} - Nilai : ${mhs.nilai}`));

let cariNama = prompt('Masukkan nama mahasiswa yang dicari: ');
let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

if (hasilCari) {
    console.log(`Mahasiswa ditemukan: ${hasilCari.nama} - Nilai : ${hasilCari.nilai}`);
} else {
    console.log('Mahasiswa tidak ditemukan.');
}








