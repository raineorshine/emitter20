declare class Emitter {
  on: (eventName: string, callback: (data?: any) => void) => void;
  off: (eventName: string, callback: (data?: any) => void) => void;
  trigger: (eventName: string, data?: any) => void;
  clear: (eventName?: string) => void;
}

export = Emitter;
