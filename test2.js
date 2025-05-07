// 문제 (주사위 탈출 게임)
// 영희는 보드게임 기획자 입니다. 영희는 주사위를 사용한 새 보드 게임을 기획하고 있습니다.

// 오솔길 처럼 생긴 앞으로만 갈수 있는 길이 있고 플레이어는 자신의 주사위를 가지고 시작 지점에서 출발합니다.
// 주사위를 굴려 나온 눈의 수 만큼 플레이어는 앞을 한칸씩 이동합니다. 이 때, 플레이어가 멈춘 지점이 '탈출' 칸이면 플레이어는 게임에서 승리하고,
// 플레이어가 탈출 칸에 서지 않고 마지막 칸에 도달하면 플레이어는 패배합니다.

// 영희는 게임을 더 흥미롭게 만들기 위해 몇가지 실험을 하려고 합니다.
// - 탈툴 칸을 어디에 투어야 플레이어의 승률이 높아질까?
// - 주사위에서 나올수 있는 눈의 가지수에 따라서 플레이어의 승률이 어떻게 달라질까?

// 어떤 주사위 하나가 있을때 특정 칸에 도달할수 있는 주사위 눈의 가짓수를 찾는 프로그램을 작성하세요.

// 입력
// 6 4
// 1 2 3 4 5 6

// 보드 크기는 4칸이고 6면체 주사위 입니다. 마지막 칸에 도달하는 방법은 다음과 같습니다.
// 1 1 1 1
// 1 1 2
// 1 2 1
// 1 3
// 2 1 1
// 2 2
// 3 1
// 4

// 따라서 출력은 다음과 같습니다.
// 8
// dfs 알고리즘

let fs = require('fs');
let path = require('path');
let filePath = path.join(__dirname, 'test2.txt');

let input = fs.readFileSync(filePath, 'utf8').toString().split('\n');
const [diceCount, boardSize] = input[0].split(' ').map(Number);
const diceFaces = input[1].split(' ').map(Number);

// 메모이제이션을 위한 배열
const memo = Array(boardSize + 1).fill(-1);

function dfs(position) {
    // 종료 조건
    if (position === boardSize) return 1;
    if (position > boardSize) return 0;

    // 이미 계산된 경우 반환
    if (memo[position] !== -1) return memo[position];

    let total = 0;
    for (let face of diceFaces) {
        total += dfs(position + face);
    }

    memo[position] = total;
    return total;
}

console.log(dfs(0));
