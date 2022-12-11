input.onButtonPressed(Button.A, function () {
    prestan_a = 0
    prestan_b = 1
})
input.onButtonPressed(Button.B, function () {
    prestan_b = 0
    prestan_a = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let neprestan1 = 0
let neprestan = 0
let prestan_b = 0
let prestan_a = 0
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.West)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && prestan_a == 0) {
        neprestan = 0
        while (neprestan == 0) {
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
    }
    if (input.buttonIsPressed(Button.B) && prestan_b == 0) {
        prestan_a = 1
        neprestan = 1
        while (neprestan == 1) {
            if (input.temperature() == 50) {
                neprestan1 = 0
                while (neprestan1 == 0) {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 4671, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
                }
            } else {
                if (input.temperature() == 40) {
                    neprestan1 = 1
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                } else {
                    if (input.temperature() == 30) {
                        neprestan1 = 1
                        basic.showLeds(`
                            . . # . .
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    } else {
                        if (input.temperature() == 20) {
                            neprestan1 = 1
                            basic.showLeds(`
                                . . . . .
                                . . # . .
                                # # # # #
                                # # # # #
                                # # # # #
                                `)
                        } else {
                            if (input.temperature() == 15) {
                                neprestan1 = 1
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . # . .
                                    # # # # #
                                    # # # # #
                                    `)
                            } else {
                                if (input.temperature() == 0) {
                                    neprestan1 = 1
                                    basic.showLeds(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . # . .
                                        # # # # #
                                        `)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
