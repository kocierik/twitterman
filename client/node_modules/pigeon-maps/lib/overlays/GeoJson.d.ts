import React, { CSSProperties, SVGProps } from 'react';
import { PigeonProps, Point } from '../types';
interface GeoJsonProps extends PigeonProps {
    className?: string;
    data?: any;
    svgAttributes?: any;
    styleCallback?: any;
    hover?: any;
    feature?: any;
    style?: CSSProperties;
    children?: React.ReactNode;
    onClick?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
    onContextMenu?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
    onMouseOver?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
    onMouseOut?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
}
interface GeoJsonLoaderProps extends GeoJsonProps {
    link?: string;
}
interface GeoJsonGeometry {
    type: string;
    coordinates?: [number, number] | Array<[number, number]> | Array<Array<[number, number]>> | Array<Array<Array<[number, number]>>>;
    geometries?: Array<GeoJsonGeometry>;
}
interface GeometryProps {
    coordinates?: [number, number] | Array<[number, number]> | Array<Array<[number, number]>> | Array<Array<Array<[number, number]>>>;
    latLngToPixel?: (latLng: Point, center?: Point, zoom?: number) => Point;
    svgAttributes?: SVGProps<SVGElement>;
    geometry?: GeoJsonGeometry;
}
export declare function PointComponent(props: GeometryProps): JSX.Element;
export declare function MultiPoint(props: GeometryProps): JSX.Element;
export declare function LineString(props: GeometryProps): JSX.Element;
export declare function MultiLineString(props: GeometryProps): JSX.Element;
export declare function Polygon(props: GeometryProps): JSX.Element;
export declare function MultiPolygon(props: GeometryProps): JSX.Element;
export declare function GeometryCollection(props: GeometryProps): JSX.Element;
export declare function GeoJsonFeature(props: GeoJsonProps): JSX.Element;
export declare function GeoJson(props: GeoJsonProps): JSX.Element;
export declare function GeoJsonLoader(props: GeoJsonLoaderProps): JSX.Element;
export {};
