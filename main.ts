input.onButtonPressed(Button.A, function () {
    if (state.state === GameState.Running) {
        state.ship.shoot()
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    if (state.state === GameState.Running) {
        state.ship.shields = false
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (state.state === GameState.Running) {
        state.ship.shields = true
    }
})
radio.onReceivedValue(function (event, value) {
    switch (event) {
        case "attack":
            if(state.state === GameState.Running) {
                state.ship.defend(value)
                if (state.ship.hp == 0) {
                    state.lose()
                }
            }
            break;
        case "end":
            if (state.state === GameState.Running && value == 0) {
                state.win()
            }
            break;
        case "shields":
            if(state.state === GameState.Running && value == 0) {
                led.toggle(2,0);
                basic.pause(50);
                led.toggle(2, 0);
                basic.pause(50);
                led.toggle(2, 0);
                basic.pause(50);
                led.toggle(2, 0);
                basic.pause(50);
                led.toggle(2, 0);
                basic.pause(50);
                led.unplot(2, 0);
            }
        default:
            console.log('Unknown');
    }
})

let state = new systems.Game()

state.start()
radio.setGroup(156)
radio.setTransmitSerialNumber(true)

basic.forever(function () {
    if (state.state === GameState.Running) {
        state.ship.run()
    }
})
