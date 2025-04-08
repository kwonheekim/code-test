let participant = ["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana" ]

// participant.sort();
// console.log(participant);
// completion.sort();
// console.log(completion);


for (let i in participant) {
    console.log(participant[i],'qwe');
    if( participant[i] !== completion[i]) return console.log(participant[i]);
}
