type KeyType = {
    initial: number,
    shift: number,
};

type Key = {
    code: string,
    value: number,
};

type KeyExtended = {
    code: string,
    regular: KeyType,
    modified: KeyType;
};

type Modifiers = {
    KeyQ: boolean,
    ShiftLeft: boolean,
};

export type {
    Key,
    KeyExtended,
    KeyType,
    Modifiers,
};
