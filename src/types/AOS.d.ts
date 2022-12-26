declare module 'aos' {
  export interface AosOptions {
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset?: number; // offset (in px) from the original trigger point
    delay?: number; // values from 0 to 3000, with step 50ms
    duration?: number; // values from 0 to 3000, with step 50ms
    easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'; // default easing for AOS animations
    once?: boolean; // whether animation should happen only once - while scrolling down
    mirror?: boolean; // whether elements should animate out while scrolling past them
    anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'center-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top'; // defines which position of the element regarding to window should trigger the animation

    // Global settings:
    disable?: boolean; // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent?: 'DOMContentLoaded' | 'load'; // name of the event dispatched on the document, that AOS should initialize on
    initClassName?: string; // class applied after initialization
    animatedClassName?: string; // class applied on animation
    useClassNames?: boolean; // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver?: boolean; // disables automatic mutations' detections (advanced)
    debounceDelay?: number; // the delay on debounce used while resizing window (advanced)
    throttleDelay?: number; // the delay on throttle used while scrolling the page (advanced)
  }

  export default class Aos {
    constructor(options?: AosOptions);
    static init(options?: AosOptions): void;
    static refresh(): void;
    static refreshHard(): void;
  }
}