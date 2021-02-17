def on_button_pressed_a():
    global azimut, y, x
    basic.clear_screen()
    stredKompasu()
    while True:
        # 326 - 348 °
        if input.compass_heading() > 328 and input.compass_heading() <= 349:
            stredKompasu()
            while True:
                led.toggle(1, 0)
                basic.pause(200)
                if not (input.compass_heading() > 328 and input.compass_heading() <= 349):
                    led.unplot(1, 0)
                    break
        # 348 - 12 °
        if input.compass_heading() > 349 or input.compass_heading() <= 11:
            stredKompasu()
            while True:
                led.toggle(2, 0)
                basic.pause(200)
                if not (input.compass_heading() > 349 or input.compass_heading() <= 11):
                    led.unplot(2, 0)
                    break
        # 12 - 36 °
        if input.compass_heading() > 11 and input.compass_heading() <= 34:
            stredKompasu()
            while True:
                led.toggle(3, 0)
                basic.pause(200)
                if not (input.compass_heading() > 11 and input.compass_heading() <= 34):
                    led.unplot(3, 0)
                    break
        # 36 - 60 °
        if input.compass_heading() > 34 and input.compass_heading() <= 56:
            stredKompasu()
            while True:
                led.toggle(4, 0)
                basic.pause(200)
                if not (input.compass_heading() > 34 and input.compass_heading() <= 56):
                    led.unplot(4, 0)
                    break
        azimut = 56
        y = 1
        # 60 - 156 °
        while y <= 4:
            if input.compass_heading() > azimut and input.compass_heading() <= azimut + 23:
                stredKompasu()
                while True:
                    led.toggle(4, y)
                    basic.pause(200)
                    if not (input.compass_heading() > azimut and input.compass_heading() <= azimut + 23):
                        led.unplot(4, y)
                        break
            y += 1
            azimut += 23
        azimut = 146
        x = 3
        # 156 - 252 °
        while x >= 0:
            if input.compass_heading() > azimut and input.compass_heading() <= azimut + 22:
                stredKompasu()
                while True:
                    led.toggle(x, 4)
                    basic.pause(200)
                    if not (input.compass_heading() > azimut and input.compass_heading() <= azimut + 22):
                        led.unplot(x, 4)
                        break
            x += -1
            azimut += 22
        azimut = 236
        y = 3
        # 252 - 348 °
        while y >= 0:
            if input.compass_heading() > azimut and input.compass_heading() <= azimut + 23:
                stredKompasu()
                while True:
                    led.toggle(0, y)
                    basic.pause(200)
                    if not (input.compass_heading() > azimut and input.compass_heading() <= azimut + 23):
                        led.unplot(0, y)
                        break
            y += -1
            azimut += 23
input.on_button_pressed(Button.A, on_button_pressed_a)

def stredKompasu():
    led.plot_brightness(2, 1, 150)
    led.plot_brightness(1, 2, 150)
    led.plot_brightness(3, 2, 150)
    led.plot_brightness(2, 3, 150)

def on_gesture_shake():
    soundExpression.hello.play()
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

x = 0
y = 0
azimut = 0
input.calibrate_compass()