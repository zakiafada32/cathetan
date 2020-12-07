---
template: BlogPost
path: /js-closures
date: 2020-12-7T20:07:53.137Z
title: JavaScript Concept - Closures
thumbnail: '/assets/js-closures.jpg'
metaDescription: Meta description for JavaScript Concept - Closure
---

# JavaSCript Concept : [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

Closures mengijinkan sebuah fungsi untuk mengakses variabel dari fungsi diatasnya atau disebut _outer function_. Di dalam JavaScript semua fungsi akan dibersihkan oleh _Engine_ ketika fungsi tersebut sudah terhapus dari _call stack_ atau sudah tidak digunakan. Tapi JavaScripts _engine_ akan tetap menyimpan variabel didalam sebuah fungsi jika mempunyai referensi funsi didalamnya. Berikut contoh kodenya.

#

```javascript
function pagi() {
  let bubur = 'bubur';
  return function siang() {
    let nasiPadang = 'nasi padang';
    let batagor = 'batagor';
    // variabel batagor akan terhapus karena tidak digunakan lagi
    return function malam() {
      let indomie = 'indomie';
      return `Pagi hari sarapan ${bubur},
        lalu makan siang ${nasiPadang} 
        dan makan malam ${indomie}`;
      // closure mewariskan semua variabel pada *inner scopes* fungsi
    };
  };
}

const malam = pagi()();
console.log(malam());
//output "Pagi hari sarapan bubur, lalu makan siang nasi padang dan makan malam indomie"
```

#

Jadi fungsi anak tetap bisa mengakses variabel kakek dan paman meskipun fungsi tua dan dewasa sudah terhapus oleh _garbage collector_
