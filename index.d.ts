declare class Emitter {
  on: (eventName: string, cb: (data?: any) => void) => void;
  trigger: (eventName: string, data?: any) => void;
}

export = Emitter;
