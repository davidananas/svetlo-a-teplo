input.onButtonPressed(Button.A, function () {
    Neprestan = 0
    while (Neprestan == 0) {
        if (input.lightLevel() > 100) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (input.lightLevel() < 100) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Neprestan = 1
    while (Neprestan == 1) {
        if (input.temperature() > 20) {
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.temperature() < 15) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # # # # #
                `)
        }
    }
})
let Neprestan = 0
basic.showString("A OR B")
basic.forever(function () {
	
})
