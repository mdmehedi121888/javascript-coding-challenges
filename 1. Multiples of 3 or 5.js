const solution = (number) => {
  let answer = 0;
  if (number <= 0) return answer;
  for (let i = number - 1; i > 2; --i) {
    if (i % 3 == 0 || i % 5 == 0) answer += i;
  }
  return answer;
};

console.log(solution(0)); // 0
console.log(solution(-15)); // 0
console.log(solution(10)); // 23
console.log(solution(20)); // 78
console.log(solution(200)); // 9168
