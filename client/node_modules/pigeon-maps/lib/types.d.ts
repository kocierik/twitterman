import React from 'react';
export declare type Point = [number, number];
export interface Bounds {
    ne: [number, number];
    sw: [number, number];
}
export interface MapProps {
    center?: Point;
    defaultCenter?: Point;
    zoom?: number;
    defaultZoom?: number;
    width?: number;
    defaultWidth?: number;
    height?: number;
    defaultHeight?: number;
    provider?: (x: number, y: number, z: number, dpr?: number) => string;
    dprs?: number[];
    children?: React.ReactNode;
    animate?: boolean;
    animateMaxScreens?: number;
    minZoom?: number;
    maxZoom?: number;
    metaWheelZoom?: boolean;
    metaWheelZoomWarning?: string;
    twoFingerDrag?: boolean;
    twoFingerDragWarning?: string;
    warningZIndex?: number;
    attribution?: JSX.Element | false;
    attributionPrefix?: JSX.Element | false;
    zoomSnap?: boolean;
    mouseEvents?: boolean;
    touchEvents?: boolean;
    onClick?: ({ event, latLng, pixel }: {
        event: MouseEvent;
        latLng: [number, number];
        pixel: [number, number];
    }) => void;
    onBoundsChanged?: ({ center, zoom, bounds, initial, }: {
        center: [number, number];
        bounds: Bounds;
        zoom: number;
        initial: boolean;
    }) => void;
    onAnimationStart?: () => void;
    onAnimationStop?: () => void;
    limitBounds?: 'center' | 'edge';
    boxClassname?: string;
    tileComponent?: TileComponent;
}
export declare type TileComponent = (props: TileComponentProps) => JSX.Element;
export interface TileComponentProps {
    tile: Tile;
    tileLoaded: () => void;
}
export interface Tile {
    key: string;
    url: string;
    srcSet: string;
    left: number;
    top: number;
    width: number;
    height: number;
    active: boolean;
}
export interface TileValues {
    tileMinX: number;
    tileMaxX: number;
    tileMinY: number;
    tileMaxY: number;
    tileCenterX: number;
    tileCenterY: number;
    roundedZoom: number;
    zoomDelta: number;
    scaleWidth: number;
    scaleHeight: number;
    scale: number;
}
export declare type WarningType = 'fingers' | 'wheel';
export declare type WAdd = typeof window.addEventListener;
export declare type WRem = typeof window.removeEventListener;
export interface MoveEvent {
    timestamp: number;
    coords: Point;
}
declare type MinLat = number;
declare type MaxLat = number;
declare type MinLng = number;
declare type MaxLng = number;
export declare type MinMaxBounds = [MinLat, MaxLat, MinLng, MaxLng];
export interface MapReactState {
    zoom: number;
    center: Point;
    width: number;
    height: number;
    zoomDelta: number;
    pixelDelta?: [number, number];
    oldTiles: TileValues[];
    showWarning: boolean;
    warningType?: WarningType;
}
export interface MapState {
    bounds: Bounds;
    zoom: number;
    center: Point;
    width: number;
    height: number;
}
export interface PigeonProps {
    anchor?: Point;
    offset?: Point;
    left?: number;
    top?: number;
    mapState?: MapState;
    mapProps?: MapProps;
    latLngToPixel?: (latLng: Point, center?: Point, zoom?: number) => Point;
    pixelToLatLng?: (pixel: Point, center?: Point, zoom?: number) => Point;
    setCenterZoom?: (center: Point | null, zoom: number, zoomAround?: Point | null, animationDuration?: number) => void;
}
export {};
