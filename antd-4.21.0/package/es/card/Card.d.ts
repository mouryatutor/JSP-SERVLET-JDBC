import * as React from 'react';
import type { TabsProps } from '../tabs';
export declare type CardType = 'inner';
export declare type CardSize = 'default' | 'small';
export interface CardTabListType {
    key: string;
    tab: React.ReactNode;
    disabled?: boolean;
}
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    prefixCls?: string;
    title?: React.ReactNode;
    extra?: React.ReactNode;
    bordered?: boolean;
    headStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    loading?: boolean;
    hoverable?: boolean;
    children?: React.ReactNode;
    id?: string;
    className?: string;
    size?: CardSize;
    type?: CardType;
    cover?: React.ReactNode;
    actions?: React.ReactNode[];
    tabList?: CardTabListType[];
    tabBarExtraContent?: React.ReactNode;
    onTabChange?: (key: string) => void;
    activeTabKey?: string;
    defaultActiveTabKey?: string;
    tabProps?: TabsProps;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;