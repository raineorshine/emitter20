export default emitter20;
declare function emitter20(): {
    clear: (eventName: any) => any;
    off: (eventName: any, callback: any) => any;
    on: (eventName: any, callback: any) => any;
    trigger: (eventName: any, data: any) => any;
};
