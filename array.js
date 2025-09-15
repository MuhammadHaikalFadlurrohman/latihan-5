var angka = [1,2,3,4,5];
angka.forEach(function(e){
    console.log(e);
});
angka.forEach(num => console.log(num*2));

var angka2 = angka.map(function(e){
    return e * 2;
});
console.log(angka2);

var angka3 = angka2.map(function(e){
    return e * 3;
});
console.log(angka3);