// JavaScriptの"this"と"プロトタイプ"
// this
function funcA() {
  this.name = "Tsubasa";
};
funcA.prototype.updateX = function(val) {
  this.name = val;
};

const a1 = new funcA();
const a2 = new funcA();
console.log("a1 - before : ", a1.name);
console.log("a2 - before : ", a2.name);

a1.updateX("Eriko");

console.log("a1 - after : ", a1.name);
console.log("a2 - after : ", a2.name);

// prototype
function funcB() {
  this.name = "Tamaroh";
};
funcB.prototype.name = "Tsubasa";

funcB.prototype.updateX = function(val) {
  funcB.prototype.name = val;
  this.name = val;
}


const b1 = new funcB();
const b2 = new funcB();
console.log("b1.name - before : ", b1.name);
console.log("b2.name - before : ", b2.name);
console.log("b1 - before : ", b1);
console.log("b2 - before : ", b2);

b1.updateX("Eriko");

console.log("b1 - after : ", b1.name);
console.log("b2 - after : ", b2.name);
console.log("b1 - after : ", b1);
console.log("b2 - after : ", b2);
