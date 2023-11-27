//your JS code here. If required.
let student = {
    name: "Manish"
}

Object.prototype.getKeys = function() {
    return Object.keys(this);
}

const keys = student.getKeys();
console.log(keys);