"use strict";
// tipe data any
let data;
data = "renald";
data = 24;
data = true;
// data = ["renald", 24, true];
function logValue(value) {
    console.log(value);
}
function anyRisk(value) {
    console.log(value.toFixed(2));
}
anyRisk("renald"); // terlihat tidak ada error pada saat kompilasi. tapi sebenarnya ada error pada saat runtime
// ganti argument menjadi number. karena toFixed() hanya bisa dijalankan pada tipe data number
logValue("renald");
logValue(24);
console.log(data);
