let neprestan = 0
input.onButtonPressed(Button.B, function () {
    neprestan = 0
    while (neprestan == 0) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
basic.forever(function () {
    let prestan_a = 0
    if (input.buttonIsPressed(Button.A) && prestan_a == 0) {
        neprestan = 1
        while (neprestan == 1) {
            if (input.lightLevel() > 60) {
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
            } else if (input.lightLevel() < 20) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . . . . .
                    `)
            }
        }
    }
})
