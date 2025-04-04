// 문제
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

// 입력
// 9 // 배열 갯수
// aaa
// aaazbz
// babb
// aazz
// azbz
// aabbaa
// abacc
// aba
// zzaz

// 출력
// 2

// let n = 9;
// let arr = ["aaa", "aaazbz", "babb", "aazz", "azbz", "aabbaa", "abacc", "aba", "zzaz"];
// let answer = 0;
// let check = new Set();
// console.log(check, 'check');

// for (let i = 0; i < n; i++) {
//     let word = arr[i];
//     let isGroupWord = true;
//     check.clear();
    
//     for (let j = 0; j < word.length; j++) {
//         if (!check.has(word[j])) {
//             check.add(word[j]);
//         } else if (word[j] !== word[j - 1]) {
//             isGroupWord = false;
//             break;
//         }
//     }
    
//     if (isGroupWord) {
//         answer++;
//     }
// }
// console.log(answer);

let arr = ["aaa", "aaazbz", "babb", "aazz", "azbz", "aabbaa", "abacc", "aba", "zzaz"];

function isGroupWord(word) {
    let seen = new Set();
    return [...word].every((char, i) => {
        if (i === 0 || char === word[i - 1]) {
            return true; // 연속된 문자면 통과
        } else if (!seen.has(char)) {
            seen.add(word[i - 1]); // 이전 문자 기억
            return true;
        } else {
            return false; // 이전에 등장했던 문자가 중간에 또 나옴
        }
    });
}

let answer = arr.filter(isGroupWord)
console.log(answer);