
declare global {
  interface Window {
    iFrameResize?: (options: {
      log: boolean;
      checkOrigin: boolean;
    }, selector: string) => void;
  }
}

export {};
