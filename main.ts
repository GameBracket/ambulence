let continieer = 0
function _continue () {
    continieer = 1
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    _continue()
})
input.onButtonPressed(Button.A, function () {
    while (continieer == 1) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . # #
            . . # # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . # # #
            . . . # #
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            `)
        basic.showLeds(`
            . . # # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            # # . . .
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . # # #
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . # # #
            `)
    }
    while ((0 as any) != (1 as any)) {
        basic.clearScreen()
    }
})
function _break () {
    continieer = 0
}
input.onButtonPressed(Button.AB, function () {
    _break()
})
input.onButtonPressed(Button.B, function () {
    while (continieer == 1) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 142)
    }
    while (continieer != 0) {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
