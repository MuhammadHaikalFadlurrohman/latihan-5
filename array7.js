let mhs1 ={ 
    nama : 'budi',
    energi : 10,
    makan : function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}
let mhs2 ={ 
    nama : 'ani',
    energi : 20,
    makan : function (porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`); 
    }      
    }
mhs1.makan(5);
mhs2.makan(10);


function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

let mhs3 = new Mahasiswa('siti', 15);
let mhs4 = new Mahasiswa('joko', 25);
mhs3.makan(5);
mhs4.makan(10);                 



