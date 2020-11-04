// CASE : n = 5
// 1 2 3 4 5 4 3 2 1    | 9 col, dimulai dari 1, max 5 => -1
// 2 3 4 5 4 3 2        | 7 col, -- 2
// 3 4 5 4 3            | 5 col, -- 3
// 4 5 4                | 3 col, -- 4
// 5                    | 1 col, -- 5

let n = 5
let pattern = ""
let intial = 1
for (let i = n; i > 0; i--) {
    let output = intial
    let output2
    for (let j = 2 * i - 1; j > 0; j--) {
        if (output > 5) {
            output2--
            pattern += `${output2} `
        } else {
            pattern += `${output} `
            output2 = output
            output++
        }
    }

    pattern += "\n"
    // reset initial
    intial += 1
}

console.log(pattern)
