input.onButtonPressed(Button.A, function () {
    radio.sendString("on")
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("off")
    basic.showIcon(IconNames.No)
    basic.pause(200)
    basic.showIcon(IconNames.No)
})
radio.setGroup(2)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # #
        . # . # .
        . # # # .
        `)
})
