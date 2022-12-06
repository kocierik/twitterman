import React from 'react';
import { PigeonProps, Point } from '../types';
interface DraggableProps extends PigeonProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onDragStart?: (anchor: Point) => void;
    onDragMove?: (anchor: Point) => void;
    onDragEnd?: (anchor: Point) => void;
}
export declare function Draggable(props: DraggableProps): JSX.Element;
export {};
