// Understanding Closure, Async-Await, and Scope

function debounce(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}

async function timer(x) {
  for (let i = 0; i <= x; ++i) {
    const result = await debounce(i);

    console.log(result);
  }
}

timer(2);
