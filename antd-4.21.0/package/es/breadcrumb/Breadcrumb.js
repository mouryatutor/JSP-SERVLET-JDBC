import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import toArray from "rc-util/es/Children/toArray";
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import Menu from '../menu';
import { ConfigContext } from '../config-provider';
import warning from '../_util/warning';
import { cloneElement } from '../_util/reactNode';

function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? /*#__PURE__*/React.createElement("span", null, name) : /*#__PURE__*/React.createElement("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var getPath = function getPath(path, params) {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(function (key) {
    path = path.replace(":".concat(key), params[key]);
  });
  return path;
};

var addChildPath = function addChildPath(paths, childPath, params) {
  var originalPaths = _toConsumableArray(paths);

  var path = getPath(childPath || '', params);

  if (path) {
    originalPaths.push(path);
  }

  return originalPaths;
};

var Breadcrumb = function Breadcrumb(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      style = _a.style,
      className = _a.className,
      routes = _a.routes,
      children = _a.children,
      _a$itemRender = _a.itemRender,
      itemRender = _a$itemRender === void 0 ? defaultItemRender : _a$itemRender,
      _a$params = _a.params,
      params = _a$params === void 0 ? {} : _a$params,
      restProps = __rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var crumbs;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

  if (routes && routes.length > 0) {
    // generated by route
    var paths = [];
    crumbs = routes.map(function (route) {
      var path = getPath(route.path, params);

      if (path) {
        paths.push(path);
      } // generated overlay by route.children


      var overlay;

      if (route.children && route.children.length) {
        overlay = /*#__PURE__*/React.createElement(Menu, {
          items: route.children.map(function (child) {
            return {
              key: child.path || child.breadcrumbName,
              label: itemRender(child, params, routes, addChildPath(paths, child.path, params))
            };
          })
        });
      }

      return /*#__PURE__*/React.createElement(BreadcrumbItem, {
        overlay: overlay,
        separator: separator,
        key: path || route.breadcrumbName
      }, itemRender(route, params, routes, paths));
    });
  } else if (children) {
    crumbs = toArray(children).map(function (element, index) {
      if (!element) {
        return element;
      }

      process.env.NODE_ENV !== "production" ? warning(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children") : void 0;
      return cloneElement(element, {
        separator: separator,
        key: index
      });
    });
  }

  var breadcrumbClassName = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: breadcrumbClassName,
    style: style
  }, restProps), /*#__PURE__*/React.createElement("ol", null, crumbs));
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;
export default Breadcrumb;