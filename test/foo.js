const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const profiles = [
  { "profile": { "dob": "1912-06-23" }, "name": "Turing", "age": 108, "alive": false },
  { "profile": { "dob": "1938-01-10" }, "name": "Knuth", "age": 80, "alive": true },
  { "profile": { "dob": "1955-06-08" }, "name": "Berners-Lee", "age": 63, "alive": true },
  { "profile": { "dob": "1906-12-09" }, "name": "Hopper", "age": 112, "alive": false },
  { "profile": { "dob": "1872-05-18" }, "name": "Russell", "age": 146, "alive": false },
  { "profile": { "dob": "1969-12-28" }, "name": "Torvalds", "age": 48, "alive": true },
];

(async () => {
  process.stdout.on('error', e => e.code === 'EPIPE' && process.exit());
  for (let i = 0; i < Infinity; i++) {
    console.log(JSON.stringify({ a: i, ...profiles[i % 5] }));
    await timeout(10);
  }
})();
