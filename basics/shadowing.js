// when block and global is let fruit - shadowing
// when block is let and global is var fruit - shadowing
// when block is var and global is let - illigal shadowing
// illigal shadowing will throw error

// let fruit = "apple";
// var fruit = "apple";

if (true) {
  var fruit = "orange";
  // let fruit = "orange";

  console.log(fruit);
}

console.log(fruit);
