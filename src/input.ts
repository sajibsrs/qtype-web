import keyMap from "./keymap";
import { Key, KeyExtended, Modifiers } from "./types";

export function setupInput(input: HTMLInputElement, output: HTMLParagraphElement) {
    const modifiers: Modifiers = {
        KeyQ: false,
        ShiftLeft: false,
    };

    let text = '';

    const setText = (currentCode: string) => {
        const key = getKey(currentCode, modifiers, keyMap);

        if (key.value !== 0) {
            if (key.code === 'Backspace') {
                text = text.slice(0, -1);
            } else {
                const character = String.fromCharCode(key.value);
                text += character;
                console.log(character)
            }

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

function getKey(keyCode: string, modifiers: Modifiers, keyMap: Array<KeyExtended>): Key {
    let code: Key = { code: '', value: 0 };

    if (modifiers.KeyQ === true && modifiers.ShiftLeft === true) {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = { code: key.code, value: key.modified.shift };
            }
        });
    } else if (modifiers.KeyQ === true) {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = { code: key.code, value: key.modified.initial };
            }
        });
    } else if (modifiers.ShiftLeft === true) {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = { code: key.code, value: key.regular.shift };
            }
        });
    } else {
        keyMap.map((key) => {
            if (keyCode === key.code) {
                code = { code: key.code, value: key.regular.initial };
            }
        });
    }
    return code;
}
