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
})
function _break () {
    continieer = 0
}
input.onButtonPressed(Button.AB, function () {
    _break()
})
input.onButtonPressed(Button.B, function () {
    while (continieer == 1) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 140)
    }
})
basic.forever(function () {
	
})
