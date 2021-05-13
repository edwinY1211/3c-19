input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    robotbit.rgb().showColor(neopixel.rgb(0, 0, 255))
    robotbit.MotorRun(robotbit.Motors.M1A, 30)
    robotbit.MotorRun(robotbit.Motors.M1B, 30)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    robotbit.rgb().showColor(neopixel.rgb(255, 0, 0))
    robotbit.MotorStopAll()
})
basic.forever(function () {
    basic.showString("Group 5")
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Purple))
})
