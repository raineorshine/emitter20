declare const emitter20: () => {
    clear: (eventName: string) => any;
    off: (eventName: string, callback: (data?: any) => void) => any;
    on: (eventName: string, callback: (data?: any) => void) => any;
    trigger: (eventName: string, data?: any) => any;
};
export default emitter20;
