let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

// let result = document.querySelector('p');
// result.innerText = `Your word is ${word}`;
console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

// result.innerText = `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
//   process.memoryUsage().heapUsed
// }. \nAfter using the loop to add elements to the array, the process is using ${
//   process.memoryUsage().heapUsed - initialMemory
// } more bytes of memory.`;

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`
);

//bu codni ishlatish uchun terminalldan node node-process.js va istalga so'zingizni kiriting so'z process.argv[2] orqali, yuqoridagi let word='' o'zgaruvchisiga biriktiriladi;
