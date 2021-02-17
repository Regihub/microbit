input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    stredKompasu()
    while (true) {
        // 326 - 348 °
        if (input.compassHeading() > 328 && input.compassHeading() <= 349) {
            stredKompasu()
            while (true) {
                led.toggle(1, 0)
                basic.pause(200)
                if (!(input.compassHeading() > 328 && input.compassHeading() <= 349)) {
                    led.unplot(1, 0)
                    break;
                }
            }
        }
        // 348 - 12 °
        if (input.compassHeading() > 349 || input.compassHeading() <= 11) {
            stredKompasu()
            while (true) {
                led.toggle(2, 0)
                basic.pause(200)
                if (!(input.compassHeading() > 349 || input.compassHeading() <= 11)) {
                    led.unplot(2, 0)
                    break;
                }
            }
        }
        // 12 - 36 °
        if (input.compassHeading() > 11 && input.compassHeading() <= 34) {
            stredKompasu()
            while (true) {
                led.toggle(3, 0)
                basic.pause(200)
                if (!(input.compassHeading() > 11 && input.compassHeading() <= 34)) {
                    led.unplot(3, 0)
                    break;
                }
            }
        }
        // 36 - 60 °
        if (input.compassHeading() > 34 && input.compassHeading() <= 56) {
            stredKompasu()
            while (true) {
                led.toggle(4, 0)
                basic.pause(200)
                if (!(input.compassHeading() > 34 && input.compassHeading() <= 56)) {
                    led.unplot(4, 0)
                    break;
                }
            }
        }
        azimut = 56
        y = 1
        // 60 - 156 °
        while (y <= 4) {
            if (input.compassHeading() > azimut && input.compassHeading() <= azimut + 23) {
                stredKompasu()
                while (true) {
                    led.toggle(4, y)
                    basic.pause(200)
                    if (!(input.compassHeading() > azimut && input.compassHeading() <= azimut + 23)) {
                        led.unplot(4, y)
                        break;
                    }
                }
            }
            y += 1
            azimut += 23
        }
        azimut = 146
        x = 3
        // 156 - 252 °
        while (x >= 0) {
            if (input.compassHeading() > azimut && input.compassHeading() <= azimut + 22) {
                stredKompasu()
                while (true) {
                    led.toggle(x, 4)
                    basic.pause(200)
                    if (!(input.compassHeading() > azimut && input.compassHeading() <= azimut + 22)) {
                        led.unplot(x, 4)
                        break;
                    }
                }
            }
            x += -1
            azimut += 22
        }
        azimut = 236
        y = 3
        // 252 - 348 °
        while (y >= 0) {
            if (input.compassHeading() > azimut && input.compassHeading() <= azimut + 23) {
                stredKompasu()
                while (true) {
                    led.toggle(0, y)
                    basic.pause(200)
                    if (!(input.compassHeading() > azimut && input.compassHeading() <= azimut + 23)) {
                        led.unplot(0, y)
                        break;
                    }
                }
            }
            y += -1
            azimut += 23
        }
    }
})
function stredKompasu () {
    led.plotBrightness(2, 1, 150)
    led.plotBrightness(1, 2, 150)
    led.plotBrightness(3, 2, 150)
    led.plotBrightness(2, 3, 150)
}
input.onGesture(Gesture.Shake, function () {
    soundExpression.hello.play()
    basic.showNumber(randint(1, 6))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
})
let x = 0
let y = 0
let azimut = 0
input.calibrateCompass()
