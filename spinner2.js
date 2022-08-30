const frames = [`|`, `/`, `-`, `\\`, `|`, `/`, `-`, `\\`, `|`];

let interval = 100;

for (let i = 0; i < frames.length; i++) {
  let char = frames[i];
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, interval += 200);
}