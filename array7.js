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

     


