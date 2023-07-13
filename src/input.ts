import keyMap from "./keymap";
import { Key, KeyExtended, Modifiers } from "./types";

export function setupInput(input: HTMLTextAreaElement, output: HTMLParagraphElement) {
    const modifiers: Modifiers = {
        KeyQ: false,
        ShiftLeft: false,
        ControlLeft: false,
    };

    const setText = (currentCode: string) => {
        const key = getKey(currentCode, modifiers, keyMap);

        if (modifiers.ControlLeft === false) {
            if (key.code !== '' && key.value !== 0) {
                const character = String.fromCharCode(key.value);
                input.setRangeText(character, input.selectionStart, input.selectionEnd, 'end');
            }
        }
    }

    input.addEventListener('keydown', (e) => {
        const keyCode = e.code;

        console.log(keyCode);

        keyMap.forEach(key => {
            if (keyCode === key.code && modifiers.ControlLeft === false) {
                e.preventDefault();
            }
        });

        switch (keyCode) {
            case 'KeyQ':
                modifiers.KeyQ = true;
                break;

            case 'ShiftLeft':
                modifiers.ShiftLeft = true;
                break;

            case 'ControlLeft':
                modifiers.ControlLeft = true;
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

            case 'ControlLeft':
                modifiers.ControlLeft = false;
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
