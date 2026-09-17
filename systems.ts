enum GameState{
    Ready,
    Running,
    Win,
    Lose
}

namespace systems {
    export class Game {
        public rounds: number;
        public score: number;
        public state: GameState;
        public ship: entities.Ship

        constructor() {
            this.rounds = 0
            this.score = 0
            this.state = GameState.Ready
            this.ship = new entities.Ship()
        }

        public start() {
            this.rounds++
            this.state = GameState.Running
            if(this.rounds === 0) {
                soundtrack.intro()
            } else {
                soundtrack.introShort()
            }
        }

        public lose() {
            this.state = GameState.Lose
            radio.sendValue('end', 0)
            basic.showString('Game Over')
            this.reset()
        }

        public win() {
            this.state = GameState.Win
            this.score++
            radio.sendValue('end', 1)
            soundtrack.outro()
            basic.showString('Winner')
            this.reset()
        }

        public reset() {
            this.state = GameState.Ready
            this.ship.reset();
            this.start()
        }
    }
}