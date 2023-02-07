const array1 = ["one", "two", "three"];

function arrayBackwards(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const result = array[i];

    console.log(result);
  }
}
arrayBackwards(array1);

function printOnlyEvenNumbers() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printOnlyEvenNumbers();

function kmToMiles(km) {
  const miles = km * 0.621371;
  console.log(miles);
}
kmToMiles(3);
