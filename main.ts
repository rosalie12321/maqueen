Maqueen_V5.I2CInit()
basic.forever(function () {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    basic.pause(100)
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
})
