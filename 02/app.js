let example = [
    1, 9, 10, 70,
    2, 3, 11, 0,
    99,
    30, 40, 50
];

const evalOpCodes = function (opcodes, idx = 0) {
    switch (opcodes[idx]) {
        case 1:
            let a = opcodes[idx + 1];
            let b = opcodes[idx + 2];
            opcodes[opcodes[idx + 3]] = opcodes[a] + opcodes[b];
            console.log(opcodes);
            evalOpCodes(opcodes, idx + 4);
            break;
        case 2:
            let c = opcodes[idx + 1];
            let d = opcodes[idx + 2];
            opcodes[opcodes[idx + 3]] = opcodes[c] * opcodes[d];
            console.log(opcodes);
            evalOpCodes(opcodes, idx + 4);
            break;
        case 99:
            console.log("Reached opcode 99: halting program.");
            break;
        default:
            console.log("There's something wrong - unidentified opcode: " + opcodes[idx]);
    }
}
