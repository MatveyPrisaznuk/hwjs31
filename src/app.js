function delayedPromise(value, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`проміс ${value} виконався за ${ms}  мілісекунд`);
    }, ms);
  });
}

const arrayPromise = [
  delayedPromise("promise1", 1000),
  delayedPromise("promise2", 2000),
  delayedPromise("promise3", 1500),
  delayedPromise("promise4", 600),
  delayedPromise("promise5", 800),
];

Promise.all(arrayPromise).then((res) => {
  console.log(res);
});

// ------------------------------

function randomDelay(value) {
  return new Promise((resolve, reject) => {
   const ms = Math.floor(Math.random() * (5000 - 1000) + 1000);
    setTimeout(() => {
      resolve(`проміс ${value} виконався за ${ms}  мілісекунд`);
    }, ms);
  });
}

const arrayNewPromise = [
  randomDelay("promise1"),
  randomDelay("promise2"),
  randomDelay("promise3"),
  randomDelay("promise4"),
  randomDelay("promise5"),
];

Promise.race(arrayNewPromise).then((res) => {
  console.log(res);
});
