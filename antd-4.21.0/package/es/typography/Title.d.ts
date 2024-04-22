import * as React from 'react';
import type { BlockProps } from './Base';
declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];
export declare type TitleProps = Omit<BlockProps & {
    level?: typeof TITLE_ELE_LIST[number];
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}, 'strong'>;
declare const _default: React.ForwardRefExoticComponent<TitleProps & React.RefAttributes<HTMLHeadingElement>>;
export default _default;
