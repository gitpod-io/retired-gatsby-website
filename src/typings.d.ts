interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.svg' {
    const path: string;
    export = path
}

declare module '*.jpg' {
    const path: string;
    export = path
}

declare module '*.jpeg' {
    const path: string;
    export = path
}

declare module '*.png' {
    const path: string;
    export = path
}

declare module 'react-modal-video' {
    const ModalVideo: any;
    export = ModalVideo;
}

declare module 'react-tweet-embed' {
    const TweetEmbed: any;
    export = TweetEmbed;
}
