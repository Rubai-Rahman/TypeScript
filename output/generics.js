"use strict";
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Masrafi",
    age: 40,
    country: "Bangladesh",
});
//let user = "Masrafi";
addID(user);
