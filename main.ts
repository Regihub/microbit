input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.clearScreen()
        images.createImage(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `).showImage(0)
        if (input.compassHeading() < 11) {
            while (true) {
                led.toggle(2, 0)
                basic.pause(200)
                if (input.compassHeading() > 11) {
                    break;
                }
            }
        }
        if (input.compassHeading() >= 11 && input.compassHeading() < 34) {
            while (true) {
                led.toggle(3, 0)
                basic.pause(200)
                if (!(input.compassHeading() <= 11 && input.compassHeading() > 34)) {
                    break;
                }
            }
        }
        if (input.compassHeading() >= 34 && input.compassHeading() < 56) {
            while (true) {
                led.toggle(4, 0)
                basic.pause(200)
                if (!(input.compassHeading() <= 34 && input.compassHeading() > 56)) {
                    break;
                }
            }
        }
        if (input.compassHeading() >= 56 && input.compassHeading() < 78) {
            while (true) {
                led.toggle(4, 1)
                basic.pause(200)
                if (!(input.compassHeading() <= 56 && input.compassHeading() > 78)) {
                    break;
                }
            }
        }
        if (input.compassHeading() >= 78 && input.compassHeading() < 101) {
            while (true) {
                led.toggle(4, 2)
                basic.pause(200)
                if (!(input.compassHeading() <= 78 && input.compassHeading() > 101)) {
                    break;
                }
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.hello.play()
    basic.showNumber(randint(1, 6))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
})
input.calibrateCompass()
