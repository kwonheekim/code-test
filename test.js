
// 중복된숫자만 찾기

let hp = 24;
let arm = [5,3,1];
let answer = 0;
arm.forEach((a) => {
    if (hp / a !== 0) {
        answer += parseInt(hp / a); 
        hp = hp - (parseInt(hp / a) * a);
    }
});
console.log(answer);















