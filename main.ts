let addendo1 = 0
let addendo2 = 0
input.onButtonPressed(Button.A, function () {
    addendo1 = randint(0, 100)
    addendo2 = randint(0, 100)
    basic.showNumber(addendo1)
    basic.showString("+")
    basic.showNumber(addendo2)
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(addendo1 + addendo2)
})
