import addon from '../utils/addon';
import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractSlider, QAbstractSliderSignals } from './QAbstractSlider';

/**
 
> The QSound class provides a method to play .wav sound files..

* **This class is a JS wrapper around Qt's [QSound Class](https://doc.qt.io/qt-5/qsound.html)**

Use static method play or instantiate class.

### Example

```js
const { QSound } = require("@nodegui/nodegui");

QSound.play("./mySound.wav");

// or

const unicornSound = new QSound("./mySound.wav");

unicornSound.play();
unicornSound.stop();

```
 */
export class QSound extends QAbstractSlider<QSoundSignals> {
    native: NativeElement;

    constructor(filename: string, parent?: NodeWidget<any>) {
        let native;
        if (parent) {
            native = new addon.QSound(filename, parent.native);
        } else {
            native = new addon.QSound(filename);
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    fileName(): string {
        return this.native.fileName();
    }
    isFinished(): boolean {
        return this.native.isFinished();
    }
    loops(): number {
        return this.native.loops();
    }
    loopsRemaining(): number {
        return this.native.loopsRemaining();
    }
    setLoops(loops: number): void {
        this.native.setLoops(loops);
    }
    play(): void {
        this.native.play();
    }
    stop(): void {
        this.native.stop();
    }
    static play(filename: string): void {
        addon.QSound.play(filename);
    }
}

export type QSoundSignals = QAbstractSliderSignals;
