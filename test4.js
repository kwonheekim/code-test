//문제 (우주여행! 하이퍼웜홀)
// 미래 시대에 대부분의 별들은 최소 1개 이상의 하이퍼웜홀이라는 신기술로 서로 연결되어 있다.
// 어떤 미래인이 별에서 별로 여행을 떠난다고 할때, 자기별을 포함해서 하이퍼 웜홀만으로 여행할 수 있는 별이 N개 이하인 별은 모두 몇개일까?
// 자기별을 포함해서 하이퍼 웜홀로 이동이 가능한 별이 많아야 N = 3개 이하인 별들을 표시해보면 이 별들의 개수는 총 10개 이다.

// 입력
// 10 3 // [총 하이퍼 웜홀 개수] [N 값]
// 21 88
// 23 75
// 97 35
// 2 8
// 67 9
// 64 75
// 65 71
// 70 98
// 9 71
// 60 35

// 출력
// 자기별을 포함해서 하이퍼 웜홀만으로 여행가능한 별이 총 N개 이하인 별들의 수를 출력한다.
// 12
// 간단히 설명을 하면, 위 입력을 바탕으로 하이퍼 웜홀로 서로 이동가능한 별들을 그룹핑하면 다음과 같고, 
// N = 3을 만족하는 그룹은 #1, #2, #3, #4, #6 으로 이 별들의 총합은 12개 이다.

// #1 : 21 88
// #2 : 23 64 75
// #3 : 35 60 97
// #4 : 2 8
// #5 : 9 65 67 71
// #6 : 70 98

// dfs 알고리즘


const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'test4.txt');

const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

// 입력 처리
const [wormholeCount, maxGroupSize] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

// 그래프를 인접 리스트로 변환
const graph = new Map();
for (const [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
}

// DFS 함수
const visited = new Set();
let result = 0;

function dfs(node, group) {
    visited.add(node);
    group.push(node);
    for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, group);
        }
    }
}

// 모든 노드에 대해 그룹 검사
for (const node of graph.keys()) {
    if (!visited.has(node)) {
        const group = [];
        dfs(node, group);
        if (group.length <= maxGroupSize) {
            result += group.length;
        }
    }
}

console.log(result);