import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

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
import { forwardRef, useContext, useImperativeHandle } from 'react';
import classNames from 'classnames';
import CalendarOutlined from "@ant-design/icons/es/icons/CalendarOutlined";
import ClockCircleOutlined from "@ant-design/icons/es/icons/ClockCircleOutlined";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import SwapRightOutlined from "@ant-design/icons/es/icons/SwapRightOutlined";
import { RangePicker as RCRangePicker } from 'rc-picker';
import enUS from '../locale/en_US';
import { ConfigContext } from '../../config-provider';
import SizeContext from '../../config-provider/SizeContext';
import DisabledContext from '../../config-provider/DisabledContext';
import LocaleReceiver from '../../locale-provider/LocaleReceiver';
import { getRangePlaceholder, transPlacement2DropdownAlign } from '../util';
import { Components, getTimeProps } from '.';
import { FormItemInputContext } from '../../form/context';
import { getMergedStatus, getStatusClassNames } from '../../_util/statusUtils';
export default function generateRangePicker(generateConfig) {
  var RangePicker = /*#__PURE__*/forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
        customGetPopupContainer = props.getPopupContainer,
        className = props.className,
        placement = props.placement,
        customizeSize = props.size,
        customDisabled = props.disabled,
        _props$bordered = props.bordered,
        bordered = _props$bordered === void 0 ? true : _props$bordered,
        placeholder = props.placeholder,
        customStatus = props.status,
        restProps = __rest(props, ["prefixCls", "getPopupContainer", "className", "placement", "size", "disabled", "bordered", "placeholder", "status"]);

    var innerRef = React.useRef(null);

    var _useContext = useContext(ConfigContext),
        getPrefixCls = _useContext.getPrefixCls,
        direction = _useContext.direction,
        getPopupContainer = _useContext.getPopupContainer;

    var prefixCls = getPrefixCls('picker', customizePrefixCls);
    var format = props.format,
        showTime = props.showTime,
        picker = props.picker;
    var rootPrefixCls = getPrefixCls();
    var additionalOverrideProps = {};
    additionalOverrideProps = _extends(_extends(_extends({}, additionalOverrideProps), showTime ? getTimeProps(_extends({
      format: format,
      picker: picker
    }, showTime)) : {}), picker === 'time' ? getTimeProps(_extends(_extends({
      format: format
    }, props), {
      picker: picker
    })) : {}); // ===================== Size =====================

    var size = React.useContext(SizeContext);
    var mergedSize = customizeSize || size; // ===================== Disabled =====================

    var disabled = React.useContext(DisabledContext);
    var mergedDisabled = customDisabled || disabled; // ===================== FormItemInput =====================

    var formItemContext = useContext(FormItemInputContext);
    var hasFeedback = formItemContext.hasFeedback,
        contextStatus = formItemContext.status,
        feedbackIcon = formItemContext.feedbackIcon;
    var suffixNode = /*#__PURE__*/React.createElement(React.Fragment, null, picker === 'time' ? /*#__PURE__*/React.createElement(ClockCircleOutlined, null) : /*#__PURE__*/React.createElement(CalendarOutlined, null), hasFeedback && feedbackIcon);
    useImperativeHandle(ref, function () {
      return {
        focus: function focus() {
          var _a;

          return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
        blur: function blur() {
          var _a;

          return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
      };
    });
    return /*#__PURE__*/React.createElement(LocaleReceiver, {
      componentName: "DatePicker",
      defaultLocale: enUS
    }, function (contextLocale) {
      var _classNames;

      var locale = _extends(_extends({}, contextLocale), props.locale);

      return /*#__PURE__*/React.createElement(RCRangePicker, _extends({
        separator: /*#__PURE__*/React.createElement("span", {
          "aria-label": "to",
          className: "".concat(prefixCls, "-separator")
        }, /*#__PURE__*/React.createElement(SwapRightOutlined, null)),
        disabled: mergedDisabled,
        ref: innerRef,
        dropdownAlign: transPlacement2DropdownAlign(direction, placement),
        placeholder: getRangePlaceholder(picker, locale, placeholder),
        suffixIcon: suffixNode,
        clearIcon: /*#__PURE__*/React.createElement(CloseCircleFilled, null),
        prevIcon: /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-prev-icon")
        }),
        nextIcon: /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-next-icon")
        }),
        superPrevIcon: /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-super-prev-icon")
        }),
        superNextIcon: /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-super-next-icon")
        }),
        allowClear: true,
        transitionName: "".concat(rootPrefixCls, "-slide-up")
      }, restProps, additionalOverrideProps, {
        className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), getStatusClassNames(prefixCls, getMergedStatus(contextStatus, customStatus), hasFeedback), className),
        locale: locale.lang,
        prefixCls: prefixCls,
        getPopupContainer: customGetPopupContainer || getPopupContainer,
        generateConfig: generateConfig,
        components: Components,
        direction: direction
      }));
    });
  });
  return RangePicker;
}