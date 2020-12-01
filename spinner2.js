const spinner = (sentence) => {
  for (let i in sentence) {
    if (i < sentence.length-1) {
      setTimeout(() => {
        process.stdout.write(`\r${sentence[i]}   `);
      }, i * 200);
    } else { // additional word to show after the spinning lines, not required in the assignment
      setTimeout(() => {
        process.stdout.write(`${sentence[i]}\n`);
      }, i * 200);
    }        
  }
};

const sentence = ["|", "/", "-", "\\", "|", "/", "-", "\\", "lighthouse"];

spinner(sentence);