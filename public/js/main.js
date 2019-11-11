import "@babel/polyfill";

console.log(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  }));
  
  console.log(Object.assign({}, { x: 1 }, { y: 2 }));
  
  console.log(Array.from([1, 2, 3], v => v + v));