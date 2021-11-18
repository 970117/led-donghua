input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (list[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
})
let list: number[][] = []
list = [
[
0,
1,
1,
0,
1
],
[
1,
0,
1,
1,
0
],
[
0,
0,
1,
1,
1
],
[
1,
1,
0,
0,
1
],
[
0,
1,
0,
1,
0
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (list[y][x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }
}
