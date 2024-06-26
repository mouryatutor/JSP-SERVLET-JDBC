import * as React from 'react';
import type { MenuProps as RcMenuProps, MenuRef } from 'rc-menu';
import { ItemGroup } from 'rc-menu';
import SubMenu, { SubMenuProps } from './SubMenu';
import Item, { MenuItemProps } from './MenuItem';
import { MenuTheme } from './MenuContext';
import type { ItemType } from './hooks/useItems';
export { MenuDividerProps } from './MenuDivider';
export { MenuItemGroupProps } from 'rc-menu';
export declare type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
export interface MenuProps extends Omit<RcMenuProps, 'items'> {
    theme?: MenuTheme;
    inlineIndent?: number;
    /**
     * @private Internal Usage. Not promise crash if used in production. Connect with chenshuai2144
     *   for removing.
     */
    _internalDisableMenuItemTitleTooltip?: boolean;
    items?: ItemType[];
}
declare class Menu extends React.Component<MenuProps, {}> {
    static Divider: React.FC<import("./MenuDivider").MenuDividerProps>;
    static Item: typeof Item;
    static SubMenu: typeof SubMenu;
    static ItemGroup: typeof ItemGroup;
    menu: MenuRef | null;
    focus: (options?: FocusOptions) => void;
    render(): JSX.Element;
}
export { MenuTheme, SubMenuProps, MenuItemProps };
export default Menu;
