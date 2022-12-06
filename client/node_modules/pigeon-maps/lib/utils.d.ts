export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (this: any, ...args: Parameters<T>) => void;
export declare function parentHasClass(element: HTMLElement, className: string): boolean;
export declare function parentPosition(element: HTMLElement): {
    x: number;
    y: number;
};
