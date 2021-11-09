function anagram(x, y) {
    x = x.split('')
    y = y.split('')
    let sortX = []
    let sortY = []

    //find sorting X
    for (let i = 0; i < x.length; i++) {
        for (let j = i; j < x.length; j++) {
            if (x[i] <= x[j]) {
                let temp = x[i]
                x[i] = x[j]
                x[j] = temp
            }
        }
        sortX.push(x[i])
    }

    //find sorting Y
    for (let i = 0; i < y.length; i++) {
        for (let j = i; j < y.length; j++) {
            if (y[i] <= y[j]) {
                let temp = y[i]
                y[i] = y[j]
                y[j] = temp
            }
        }
        sortY.push(y[i])
    }
    console.log(x, y)
        //compare X and Y
        // for (let i = 0; i < x.length; i++) {
        //     if (x.join("") == y.join("")) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }
    return x.join("") == y.join("")
}
console.log(anagram('anagram', 'nagaram'))
console.log(anagram('aaz', 'zza'))