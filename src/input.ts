import keyMap from "./keymap";
import { Key, Modifiers } from "./types";

export function setupInput(input: HTMLInputElement, output: HTMLParagraphElement) {
    const modifiers: Modifiers = {
        KeyQ: false,
        ShiftLeft: false,
    };

    let text = '';

    const setText = (currentCode: string) => {
        const key = getKey(currentCode, modifiers, keyMap);

        if (key !== 0) {
            const character = String.fromCharCode(key);
            text += character;
            console.log(character)
        }
        output.innerHTML = `${text}`;
    }

    input.addEventListener('keydown', (e) => {
        const keyCode = e.code;

        console.log(keyCode);

        switch (keyCode) {
            case 'KeyQ':
                e.preventDefault();

                modifiers.KeyQ = true;
                break;

            case 'ShiftLeft':
                modifiers.ShiftLeft = true;
                break;

            default:
                break;
        }
        setText(keyCode);
    });

    input.addEventListener('keyup', (e) => {
        const keyCode = e.code;

        switch (keyCode) {
            case 'KeyQ':
                modifiers.KeyQ = false;
                break;

            case 'ShiftLeft':
                modifiers.ShiftLeft = false;
                break;

            default:
                break;
        }
    });
    setText('');
}

function getKey(keyCode: string, modifiers: Modifiers, keyMap: Array<Key>): number {
    let code = 0;

    if (modifiers.KeyQ === true && modifiers.ShiftLeft === true) {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = key.modified.shift;
            }
        });
    } else if (modifiers.KeyQ === true) {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = key.modified.initial;
            }
        });
    } else if (modifiers.ShiftLeft === true) {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = key.regular.shift;
            }
        });
    } else {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = key.regular.initial;
            }
        });
    }
    return code;
}
