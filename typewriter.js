const sentence = "hello there from lighthouse labs";
let countTime = 0;
for (const char of sentence) {
  setTimeout(() => {
        process.stdout.write(char);}, countTime) // <= 1s delay to make it noticeable. Can dial it down later.
        countTime += 50;

}