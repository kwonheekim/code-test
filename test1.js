// 문제
// 구슬이 서말이라도 꿰어야 보배!
// 주어진 문자열(M)은 실에 꿰어진 구슬들이고, 각 구슬들은 일정한 (1~3) 가격을 가진다.
// 이것을 S번째 구슬부터 E번째 구슬까지 남도록 양쪽에 가위로 잘라 버리는 경우 남은 구슬들의 가격의 합을 구하여라.
// 단. 구슬들 사이에 매듭("*" = ascii decimal 42)이 있는데 양쪽 다 매듭이 묶여 있어야 구슬이 빠지지 않고 남을수 있다.

// * S와 E는 0부터 시작한다.
// * 매번 양쪽을 자르는 행위는 독립적이며, 다음번 수행에 영향을 주지 않는다.

// 예) 2113*3*121*212*111 과 같이 잘렸다면
// 2113(녹색)*3(오렌지색)*121(오렌지색)*212(오렌지색)*111(녹색) 녹색의 구슬들은 매듭이 없어 빠져나가고 오렌지색 구슬만 남아서 총합이 12가 된다.

// 입력예)
// 20
// 111*213*22*3*132**12
// 4
// 3 8
// 10 18
// 0 11
// 4 9

// 출력예)
// 6
// 9
// 10
// 0

// 해설)
// 3에서 8까지 자르는 경우 *213*2 이며 매듭(*)덕분에 빠지지 않는 구슬이 213이다. 합은 6
// 10에서 18까지 자르는 경우 *3*132**1 이며 매듭(*)덕분에 빠지지 않는 구슬은 3132이다. 합은 9
// 0에서 11까지 자르는 경우 111*213*22*3 이며 매듭(*)덕분에 빠지지 않는 구슬은 21322이다. 합은 10
// 4에서 9까지 자르는 경우 213*22 이며 매듭(*)덕분에 빠지지 않는 구슬은 없다.
// 합은 0

// 누적합 알고리즘


let fs = require('fs');
let path = require('path');
let filePath = path.join(__dirname, 'test1.txt');

let input = fs.readFileSync(filePath, 'utf8').toString().split('\n');

const n = parseInt(input[0]);
const m = input[1];
const q = parseInt(input[2]);
const queries = input.slice(3, 3 + q).map(line => line.split(' ').map(Number));

// 1. 매듭(*) 위치 추출
const starIndexes = [];
for (let i = 0; i < m.length; i++) {
    if (m[i] === '*') starIndexes.push(i);
}

// 2. 유효한 *숫자* 덩어리 추출
const blocks = [];

for (let i = 0; i < starIndexes.length - 1; i++) {
    const start = starIndexes[i];
    const end = starIndexes[i + 1];
    const content = m.slice(start + 1, end);
    if (/^[1-3]+$/.test(content)) {
        const sum = content.split('').reduce((acc, ch) => acc + Number(ch), 0);
        blocks.push({ start, end, sum });
    }
}

// 3. 쿼리 처리
for (const [s, e] of queries) {
    let total = 0;
    for (const block of blocks) {
        if (block.start >= s && block.end <= e) {
            total += block.sum;
        }
    }
    console.log(total);
}