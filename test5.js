//문제
// 채팅에서 욕설을 걸러내는 기능은 게임 서비스에 필수적인 기능이다. 예를 들어 다음과 같은 욕설리스트를 운영팀으로부터 전달받았다고 가정하자.
// 개나리
// 시베리아
// 십장생
// 이십자수
// ....
// 빠가사리
// 이런개나리
// 시베리아허스키
// 십자수
// ....

// 욕설이 위와 같이 한단어씩 입력된다고 할때. 현재 입력받은 단어에 이전에 입력받은 욕설이 포함 되어있는 경우,
// 그 입력이 뭐였는지 운영팀에게 알려주기로 했다. 위의 예에서 본다면 '이런개나리'는 이전에 입력받은 '개나리'라는 욕설을 포함하고 있고,
// '시베리아허스키'도 이전에 '시메리아'를 포험하고 있으니 운영팀에게 알려줘야 한다. 
// 다만 순차입력을 가정했을때, '십자수'의 경우는 '이십자수'를 포함하고 있지 않으므로 운영팀에 전달할 필요가 없다.

// 입력
// 문제를 단순하게 하기 위해 모든 욕설은 빈칸없는 영소문자로 입력된다고 하자. 처음에 모든 욕설의 개수가 입력되고 다음줄 부터는 
// 욕설 단어의 리스트가 한줄씩 나열된다. (주석 부분은 실제로 입력되지 않는다.)
// 욕설 단어의 크기는 최대 100자를 넘지 않는다고 가정하자.

//입력 예시
// 10 // 총 욕설 단어의 수
// abcd // 욕설 단어
// abcde
// sdkfkkoxcc
// dkfuds
// kdgugs
// dkfdu
// dsf
// dkjfgusdgg
// dkdkfdufd
// kkoxcc

//출력
// abcde
// dkdkfdufd
// 완전 탐색
// const lines = input.trim().split('\n');
// const n = parseInt(lines[0]);
// const words = lines.slice(1);

// const result = [];
// const previous = [];

// for (let i = 0; i < n; i++) {
//     const current = words[i];
//     for (const prev of previous) {
//         if (current.includes(prev)) {
//             result.push(current);
//             break; 
//         }
//     }
//     previous.push(current); 
// }

// for (const word of result) {
//     console.log(word);
// }

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'test5.txt');

const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const words = input.slice(1);

// Trie 노드 정의
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

// Trie 클래스 정의
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // 단어 삽입
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
    }

    // 텍스트 내에 Trie에 등록된 단어가 부분 문자열로 포함되어 있는지 검사
    containsAnyIn(text) {
        for (let i = 0; i < text.length; i++) {
            let node = this.root;
            for (let j = i; j < text.length; j++) {
                const char = text[j];
                if (!node.children.has(char)) break;
                node = node.children.get(char);
                if (node.isEnd) return true;
            }
        }
        return false;
    }
}

const trie = new Trie();
const result = [];

for (let i = 0; i < n; i++) {
    const current = words[i];
    if (trie.containsAnyIn(current)) {
        result.push(current);
    }
    trie.insert(current);
}

// 결과 출력
for (const word of result) {
    console.log(word);
}