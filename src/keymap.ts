import { KeyExtended } from "./types";

const keyMap: Array<KeyExtended> = [
    {
        code: 'KeyA',
        regular: { initial: 0x0986, shift: 0x09be },
        modified: { initial: 0x0985, shift: 0 },
    },
    {
        code: 'KeyB',
        regular: { initial: 0x09ac, shift: 0x09ad },
        modified: { initial: 0x0983, shift: 0 },
    },
    {
        code: 'KeyC',
        regular: { initial: 0x099a, shift: 0x099b },
        modified: { initial: 0x0981, shift: 0 },
    },
    {
        code: 'KeyD',
        regular: { initial: 0x09a6, shift: 0x09a7 },
        modified: { initial: 0x09a1, shift: 0x09a2 },
    },
    {
        code: 'KeyE',
        regular: { initial: 0x098f, shift: 0x0990 },
        modified: { initial: 0x09c7, shift: 0x09c8 },
    },
    {
        code: 'KeyF',
        regular: { initial: 0x09ab, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyG',
        regular: { initial: 0x0997, shift: 0x0998 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyH',
        regular: { initial: 0x09b9, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyI',
        regular: { initial: 0x0987, shift: 0x0988 },
        modified: { initial: 0x09bf, shift: 0x09c0 },
    },
    {
        code: 'KeyJ',
        regular: { initial: 0x099c, shift: 0x099d },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyK',
        regular: { initial: 0x0995, shift: 0x0996 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyL',
        regular: { initial: 0x09b2, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyM',
        regular: { initial: 0x09ae, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyN',
        regular: { initial: 0x09a8, shift: 0x09a3 },
        modified: { initial: 0x0999, shift: 0x0982 },
    },
    {
        code: 'KeyO',
        regular: { initial: 0x0993, shift: 0x0994 },
        modified: { initial: 0x09cb, shift: 0x09cc },
    },
    {
        code: 'KeyP',
        regular: { initial: 0x09aa, shift: 0x09ab },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyQ',
        regular: { initial: 0, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyR',
        regular: { initial: 0x09b0, shift: 0x09dc },
        modified: { initial: 0x09dd, shift: 0 },
    },
    {
        code: 'KeyS',
        regular: { initial: 0x09b8, shift: 0x09b6 },
        modified: { initial: 0x09b7, shift: 0 },
    },
    {
        code: 'KeyT',
        regular: { initial: 0x09a4, shift: 0x09a5 },
        modified: { initial: 0x099f, shift: 0x09a0 },
    },
    {
        code: 'KeyU',
        regular: { initial: 0x0989, shift: 0x098a },
        modified: { initial: 0x09c1, shift: 0x09c2 },
    },
    {
        code: 'KeyV',
        regular: { initial: 0x09ad, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyW',
        regular: { initial: 0x098b, shift: 0x09c3 },
        modified: { initial: 0x09ce, shift: 0 },
    },
    {
        code: 'KeyX',
        regular: { initial: 0x09cd, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyY',
        regular: { initial: 0x09df, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'KeyZ',
        regular: { initial: 0x09af, shift: 0 },
        modified: { initial: 0, shift: 0 },
    },
    {
        code: 'Digit1',
        regular: { initial: 0x09e7, shift: 0x0021 },
        modified: { initial: 0x0031, shift: 0 },
    },
    {
        code: 'Digit2',
        regular: { initial: 0x09e8, shift: 0x0040 },
        modified: { initial: 0x0032, shift: 0 },
    },
    {
        code: 'Digit3',
        regular: { initial: 0x09e9, shift: 0x0023 },
        modified: { initial: 0x0033, shift: 0 },
    },
    {
        code: 'Digit4',
        regular: { initial: 0x09ea, shift: 0x0024 },
        modified: { initial: 0x0034, shift: 0x09f3 },
    },
    {
        code: 'Digit5',
        regular: { initial: 0x09eb, shift: 0x0025 },
        modified: { initial: 0x0035, shift: 0 },
    },
    {
        code: 'Digit6',
        regular: { initial: 0x09ec, shift: 0x005e },
        modified: { initial: 0x0036, shift: 0 },
    },
    {
        code: 'Digit7',
        regular: { initial: 0x09ed, shift: 0x0026 },
        modified: { initial: 0x0037, shift: 0 },
    },
    {
        code: 'Digit8',
        regular: { initial: 0x09ee, shift: 0x002a },
        modified: { initial: 0x0038, shift: 0 },
    },
    {
        code: 'Digit9',
        regular: { initial: 0x09ef, shift: 0x0028 },
        modified: { initial: 0x0039, shift: 0 },
    },
    {
        code: 'Digit0',
        regular: { initial: 0x09e6, shift: 0x0029 },
        modified: { initial: 0x0030, shift: 0 },
    },
    {
        code: 'Period',
        regular: { initial: 0x002e, shift: 0x0964 },
        modified: { initial: 0, shift: 0 },
    },
];

export default keyMap;
