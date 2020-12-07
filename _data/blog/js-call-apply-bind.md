---
template: BlogPost
path: /js-call-apply-bind
date: 2020-12-9T20:07:53.137Z
title: JavaScript - Call, Apply, and Bind
thumbnail: '/assets/js-product.png'
metaDescription: Meta description for JavaScript - Call, Apply, Bind
---

# JavaSript : Call, Apply and Bind

## [Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

_Call_ adalah metode pada sebuah objek yang dapat menggantikan metode objek lain.

```javascript{numberLines:true}
const prajurit = {
  name: 'Superman',
  healthPoint: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const pemanah = {
  name: 'Ironman',
  health: 50,
};

console.log(pemanah); // health: 30

prajurit.heal.call(pemanah, 30, 20);
console.log(pemanah); // health: 100
```

pada contoh diatas, _call_ digunakan untuk meminjam metode dari objek prajurit and digunakan pada objek pemanah.
<br />
<br />

# [Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

Fungsi _apply_ hampir sama dengan _call_, hanya saja pada _apply_ _arguments_-nya berupa array.

```javascript{numberLines:true}
// tetap menggunakan kode yang sama seperti diatas
// wizard.heal.call(archer, 50, 20)
// diganti dengan
wizard.heal.apply(archer, [50, 20]);
// output yang dihasilkan tetap sama
```

<br />
<br />

# [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

Tidak seperti _call_ dan _apply_, _bind_ tidak mengeksekusi metode, tapi melakukan _return_ fungsi baru yang dapat dipanggil kemudian.

```javascript{numberLines:true}
// tetap menggunakan kode yang sama seperti diatas
console.log(pemanah); // health: 30
const healPemanah = wizard.heal.bind(pemanah, 30, 20);
healPemanah();
console.log(pemanah); // health: 100
```
