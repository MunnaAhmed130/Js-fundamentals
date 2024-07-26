// --------------------------------------------------------
// let and const are es6(2015) addition and blocked scoped
// --------------------------------------------------------

// must be assigned a value when declared
// const name;  // syntaxError: Missing intializer in const declaration

try {
  // temporal dead zone
  // console.log(id); // referenceError

  // constant
  const id = 25647; // has to be declared and initialized at the same

  // cannot re-declare
  // const id = "";
  // let id = "";
  // var id = "";

  // modify not allowed, immutable,
  // id = ""; // TypeError: Assignment to constant variable

  if (true) {
    const id = 150; // block scoped
    console.log(id);
  }

  console.log(id);
} catch (err) {
  console.log(err.name, ":", err.message);
}
