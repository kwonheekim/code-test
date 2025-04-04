//문제
//N개의 숫자가 공백없이 쓰여있다. 이숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
// 입력으로 주어진 숫자 N개의 합을 출력한다.
//예제 1

// let n = 5;

// console.log(Array(n).fill(1).map((_, i) => i + 1).reduce((a, b) => a + b, 0)); 

// test
let n = 25;
let m = "700000000000";
let answer = 0;

for (let x of m) {
    answer += parseInt(x);
}

console.log(answer);
