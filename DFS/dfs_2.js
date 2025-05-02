// 문제
//  https://www.acmicpc.net/problem/1240
// N개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

// 입력
// 첫째 줄에 노드의 개수 
// N과 거리를 알고 싶은 노드 쌍의 개수 
// M이 입력되고 다음 
// N-1개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다. 그 다음 줄에는 거리를 알고 싶은 
// M개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.

// 출력
//  
// $M$개의 줄에 차례대로 입력받은 두 노드 사이의 거리를 출력한다.

// 제한
//  
// $2≤N≤1\,000$ 
//  
// $1≤M≤1\,000$ 
// 트리 상에 연결된 두 점과 거리는 
// $10\,000$ 이하인 자연수이다.
// 트리 노드의 번호는 
// 1부터 
// N까지 자연수이며, 두 노드가 같은 번호를 갖는 경우는 없다.

let fs = require('fs');
let path = require('path');
let filePath = path.join(__dirname, 'dfs_2.txt');

let input = fs.readFileSync(filePath, 'utf8').toString().split('\n');
let [N, M] = input[0].split(' ').map(Number);
console.log(N, M);

let graph = [];
for (let i = 0; i <= N; i++) {
    graph[i] = []
}
console.log(graph);
for(let i = 1; i< N; i++) {
    let [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

console.log(graph);

function dfs(x, dist) {
    if(visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < M; i++) {
    let [x,y] = input[N + i].split(' ').map(Number);
    visited = Array(N + 1).fill(false);
    distance = Array(N + 1).fill(-1);
    dfs(x, 0);
    console.log(distance[y]);
}
