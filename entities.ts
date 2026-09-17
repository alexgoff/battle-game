
namespace entities {
    export class Ship {
        public hp: number;
        public pp: number;
        private shielded: boolean;
        private lastCharge: number;
        private readonly chargeInterval = 1000;

        constructor() {
            this.shielded = false;
            this.hp = 100;
            this.pp = 0;
            this.lastCharge = 0;
        }

        private plotBars(value: number, y: number) {
            for (let i = 0; i <= 4; i++) {
                if (i < Math.floor(value / 20)) {
                    led.plot(i, y)
                } else {
                    led.unplot(i, y)
                }
            }
        }

        private renderShield() {
            this.plotBars(0, 2);

            if (this.shielded) {
                if (Math.round(input.runningTime() / 1000) % 2 === 0) {
                    led.plot(0, 2)
                    led.plot(2, 2)
                    led.plot(4, 2)
                } else {
                    led.plot(1, 2)
                    led.plot(3, 2)

                }
            }
        }

        public render() {
            this.plotBars(this.hp, 3);
            this.plotBars(this.pp, 4);
            this.renderShield();
        }

        public reset() {
            this.shielded = false;
            this.hp = 100;
            this.pp = 0;
            this.render();
        }

        public set shields(value: boolean) {
            this.shielded = value && this.pp > 5 ? true : false;
            this.render()
            if (this.shielded && value) {
                soundtrack.shieldsUp()
            }

            radio.sendValue('shields', this.shielded ? 1 : 0);
        }

        public get shields() {
            return this.shielded
        }

        public run() {
            if (input.runningTime() > this.lastCharge + this.chargeInterval) {
                this.pp = this.shielded ? Math.max(0, this.pp - 5) : Math.min(100, this.pp + 10);
                if (this.pp < 5) {
                    this.shields = false
                    soundtrack.noPower()
                }
                this.lastCharge = input.runningTime();
                this.render();
            }
        }

        public shoot(power = 25) {
            if (this.pp >= power) {
                this.pp = Math.max(0, this.pp - power)
                radio.sendValue("attack", power)
                soundtrack.shoot()
                this.render()
            } else {
                soundtrack.noPower()
            }
        }

        public defend(power: number) {
            if (this.shielded) {
                soundtrack.defend()
                led.toggle(0, 2)
                led.toggle(1, 2)
                led.toggle(2, 2)
                led.toggle(3, 2)
                led.toggle(4, 2)
                basic.pause(50)
                led.toggle(0, 2)
                led.toggle(1, 2)
                led.toggle(2, 2)
                led.toggle(3, 2)
                led.toggle(4, 2)
            } else {
                soundtrack.damage()
                this.hp = Math.max(0, this.hp - power)
            }
        }
    }
}
