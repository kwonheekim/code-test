function dfs(graph, v, visited) {
	// 현재 노드를 방문 처리
	visited[v] = true;
	console.log(v);
	// 현재 노드와 연결된 다른 노드를 재귀적으로 방문
	for (i of graph[v]) {
		if (!visited[i]) {
            console.log('방문 안함' + i, graph[i]);
			dfs(graph, i, visited);
		}
        console.log('방문함', i, graph[i]);
	}
}

graph = [
	[],
	[2, 3, 4],
	[1],
	[1, 5, 6],
	[1, 7],
	[3, 8],
	[3],
	[4],
	[5]
];
// 각 노드가 방문된 정보를 표현
visited = Array(9).fill(false);
// 정의된 DFS 함수 호출
dfs(graph, 1, visited);

