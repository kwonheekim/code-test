// 이진 탐색을 사용하는 시점
// 1. 매우 넓은 범위에서 특정한 값을 찾고자 할 때
// 2. 데이터를 정렬할 뒤에 다수의 쿼리를 날려야 하는 경우

//lower bound, upper bound
// lower bound: 찾고자 하는 값이 처음으로 등장하는 위치
// upper bound: 찾고자 하는 값이 마지막으로 등장하는 위치

function lower_bound(arr, target, start, end) {
  while (start < end) {
    let middle = parseInt((start + end) / 2); // 중간 인덱스
    if (arr[middle] >= target) end = middle; // 왼쪽 탐색
    else start = middle + 1; // 오른쪽 탐색
  }
  return end;
}

function upper_bound(arr, target, start, end) {
  while (start < end) {
    let middle = parseInt((start + end) / 2); // 중간 인덱스
    if (arr[middle] > target) end = middle; // 왼쪽 탐색
    else start = middle + 1; // 오른쪽 탐색
  }
  return end;
}

// countByRange
function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upper_bound(arr, rightValue, 0, arr.length);
  let leftIndex = lower_bound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let arrr2 = [1, 2, 3, 3, 3, 4, 4, 8, 9];
console.log(countByRange(arrr2, 4, 4)); // 2
console.log(countByRange(arrr2, -1, 3)); // 6

//while문 방법
function binary_search2(arr, target, start, end) {
  while (start <= end) {
    let middle = parseInt((start + end) / 2); // 중간 인덱스
    if (arr[middle] === target) return middle; // 찾은 경우
    else if (arr[middle] > target) end = middle - 1; // 왼쪽 탐색
    else start = middle + 1; // 오른쪽 탐색
  }
  return -1; // 찾지 못한 경우
}

// 재귀 함수 방법
function binary_search(arr, target, start, end) {
  if (start > end) return -1; // 찾지 못한 경우
  let middle = parseInt((start + end) / 2); // 중간 인덱스

  if (arr[middle] === target) return middle; // 찾은 경우
  else if (arr[middle] > target)
    return binary_search(arr, target, start, middle - 1); // 왼쪽 탐색
  else return binary_search(arr, target, middle + 1, end); // 오른쪽 탐색
}

let n = 10;
let target = 7;
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let result = binary_search(arr, target, 0, n - 1);
if (result === -1) console.log("찾지 못했습니다.");
else console.log(result + 1 + "번째에 있습니다."); // 4번째에 있습니다.
