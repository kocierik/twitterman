import React from 'react';
import { PigeonProps } from '../types';
interface OverlayProps extends PigeonProps {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
export declare function Overlay(props: OverlayProps): JSX.Element;
export {};
