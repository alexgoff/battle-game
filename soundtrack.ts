// Add your code here
namespace soundtrack {
    const i1 = Note.E4
    const i2 = Note.FSharp4
    const i3 = Note.GSharp4
    const i4 = Note.A4
    const i5 = Note.B4
    const i6 = Note.CSharp5
    const i7 = Note.E5
    const i9 = Note.FSharp5

    function octaveUp (freq: number) {
        return freq * 2
    }
    function octaveDown (freq: number) {
        return Math.round(freq / 2)
    }
    export function defend() {
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
    export function shieldsUp() {
        music.setTempo(120)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
    export function shoot() {
        music.setTempo(120)
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(octaveUp(i2), music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
    export function noPower() {
        music.setTempo(120)
        music.play(music.tonePlayable(octaveDown(i2), music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    }
    export function damage() {
        music.setTempo(120)
        music.play(music.tonePlayable(Note.GSharp3, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(Note.E3, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(Note.F3, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    export function outro() {
        music.setTempo(80)
        music.play(music.tonePlayable(octaveDown(i5), music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(octaveDown(i5), music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(octaveDown(i5), music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i3, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i3, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
    export function intro() {
        introShort()
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i4, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i4, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i6, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    export function introShort() {
        music.setTempo(100)
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i1, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i5, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i7, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(i9, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}