export type Command = {
    name: string;
    description: string;
    execute: (args: string[], message: any) => Promise<void>;
};

export type Event = {
    name: string;
    execute: (...args: any[]) => Promise<void>;
};