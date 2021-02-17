def on_button_pressed_a():
    basic.show_number(input.compass_heading())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    soundExpression.hello.play()
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

input.calibrate_compass()
for y in range(5):
    for x in range(5):
        led.plot(x, y)
        basic.pause(70)
basic.clear_screen()