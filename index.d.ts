declare module 'emitter20' {
  interface Emitter {
    on: (eventName: string, args: any) => void;
    trigger: (eventName: string) => void;
  }
  function EmitterFactory(): Emitter;
  export = EmitterFactory;
}
