// 문제 (공룡 이름 맞추기)
// 아이들은 공룡을 좋아합니다. 철수도 예외는 아닙니다. 어느날 철수는 아빠와 공룡 이름 맞추기 게임을 하기로 했습니다.
// 철수가 공룡 이름 하나를 머리속에 정해두면, 아빠는 몇 가지 질문을 통해 그 이름을 맞추는 식으로 게임은 진행됩니다.

//공룡 이름은 다음과 같은 규칙을 갖고 있습니다.
// - 공룡 이름은 10개의 알파벳 소문자로만 구성되어 있습니다.
// - 모든 공룡 이름은 'saurus'로 끝납니다. 따라서 앞 네 글자를 알면 공룡 이름을 만들수 있습니다.
// - 이름의 첫 번째와 세번째 글자는 서로 다른 'b', 'd', 'g', 'n', 'p', 'r', 's', 't' 8개의 글자중 하나입니다.
// - 이름의 두번째와 네번째 글자는 서로 다른 'a', 'e', 'i', 'o', 'u' 5개의 글자중 하나입니다.

// 게임 순서는 다음과 같습니다.
// - 먼저, 철수가 머리속으로 공룡 이름을 하나 정합니다.
// - 아빠가 공룡 이름을 말하면 철소는 정답 이름과 얼마나 비슷한 지 알려줍니다. 마지막 6글자는 항상 'saurus'이니까 아 4글자만 고려하기로 합니다.
// - 철수는 위치까지 같은 글자 수 a와 위치만 다른 글자 수 b를 알려줍니다. 예를 들자면,
// (dino, dino) -> (a = 4, b = 0)
// (dino, nodi) -> (a = 0, b = 4)
// (dino, doni) -> (a = 2, b = 2)
// 아빠의 질문과 철소의 대답이 주어졌을때 철수가 생각하고 있는 공룡 이름을 맞추는 프로그램을 작성하세요.

// 입력 예
// 7
// roga 1 1
// rase 0 1
// poru 0 1
// gipa 0 1
// dego 3 0
// bego 3 0
// nego 3 0

// 출력 형식
// - 정답 4글자를 출력합니다.
// - 답이 없거나 여러개일 경우 x를 출력합니다.

//출력 예 1:
// tego
//출력 예 2:
// x

// 완전탐색 알고리즘

let fs = require('fs');
let path = require('path');
let filePath = path.join(__dirname, 'test3.txt');

let input = fs.readFileSync(filePath, 'utf8').toString().split('\n');
const n = parseInt(input[0]);
const feedbacks = input.slice(1).map(line => {
    const [word, a, b] = line.split(' ');
    return { word, a: parseInt(a), b: parseInt(b) };
});

const consonants = ['b', 'd', 'g', 'n', 'p', 'r', 's', 't'];
const vowels = ['a', 'e', 'i', 'o', 'u'];
let candidates = [];

// 공룡 이름 후보 전부 생성 (1120개)
for (let c1 of consonants) {
    for (let v1 of vowels) {
        for (let c2 of consonants) {
            if (c1 === c2) continue; // 1번째와 3번째 자음은 달라야 함
            for (let v2 of vowels) {
                if (v1 === v2) continue; // 2번째와 4번째 모음도 달라야 함
                candidates.push(c1 + v1 + c2 + v2);
            }
        }
    }
}

// 피드백을 만족하는지 체크하는 함수
function isValid(candidate) {
    for (const { word, a, b } of feedbacks) {
        let aCount = 0;
        let bCount = 0;

        const used = Array(4).fill(false);
        const matched = Array(4).fill(false);

        // 정확히 일치하는 자리 수 (a)
        for (let i = 0; i < 4; i++) {
            if (candidate[i] === word[i]) {
                aCount++;
                used[i] = true;
                matched[i] = true;
            }
        }

        // 위치는 다르지만 같은 문자 수 (b)
        for (let i = 0; i < 4; i++) {
            if (used[i]) continue;
            for (let j = 0; j < 4; j++) {
                if (matched[j]) continue;
                if (candidate[i] === word[j]) {
                    bCount++;
                    matched[j] = true;
                    break;
                }
            }
        }

        if (aCount !== a || bCount !== b) return false;
    }
    return true;
}

// 조건을 만족하는 후보 필터링
const valid = candidates.filter(isValid);

// 결과 출력
if (valid.length === 1) {
    console.log(valid[0]);
} else {
    console.log('x');
}