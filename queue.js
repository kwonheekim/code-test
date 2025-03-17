// 큐 예시

let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue, '첫번째'); // [1, 2, 3, 4, 5]

queue.shift();
console.log(queue, '두번째'); // [2, 3, 4, 5]
queue.shift();
console.log(queue, '세번째'); // [3, 4, 5]