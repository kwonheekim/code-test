

// 문제
// 숫자 n이 주어지면, 1에서 n까지의 범위에 있는 각 정수 i에 대해 다음과 같이 한줄에 하나의 값을 출력합니다.
// - i가 3과 5의 배수이면 "FizzBuzz"를 출력합니다.
// - i가 3의 배수 (5가 아닌경우) 이면 "Fizz"를 출력합니다.
// - i가 5의 배수 (3이 아닌경우) 이면 "Buzz"를 출력합니다.
// - i가 3과 5의 배수가 아닌 경우 i를 출력합니다.

// 기능설명
// 아래 편집기에서 fizzBuzz 함수를 작성하세요.

// fizzBuzz 함수는 정수 n을 매개변수로 받습니다.
// int n : 테스트할 값의 상한 값(포함)
// return : NONAME
// Prints: 이 함수는 {1,2, ... n} 집합의 각 값 i 에 대한 적절한 응답을 오름차순으로 각각 별도의 줄에 인쇄해야합니다.

// 제약조건
// - 0 < n < 2 * 10^5

// input
// 15
// output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}

const n = 15;
    fizzBuzz(n);