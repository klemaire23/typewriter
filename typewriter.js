const sentence = "hello there from lighthouse labs";
let myDelay = 0;

for (let char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, myDelay += 50)

};

setTimeout(() => {
  console.log('\n');
}, myDelay)



// want to create a function that will print each letter of the sentence with a 50ms delay in between
// want this function to be very general (so that we can change the sentence and still have it work)
 