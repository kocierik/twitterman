import React from 'react';
import { PigeonProps } from '../types';
interface ZoomProps extends PigeonProps {
    style?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
}
export declare function ZoomControl({ style, buttonStyle, setCenterZoom, mapState, mapProps }: ZoomProps): JSX.Element;
export {};
