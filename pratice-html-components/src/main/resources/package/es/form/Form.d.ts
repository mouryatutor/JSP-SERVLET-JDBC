import * as React from 'react';
import { List, useWatch } from 'rc-field-form';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import type { Options } from 'scroll-into-view-if-needed';
import type { ColProps } from '../grid/col';
import type { FormLabelAlign } from './interface';
import useForm, { FormInstance } from './hooks/useForm';
import type { SizeType } from '../config-provider/SizeContext';
export declare type RequiredMark = boolean | 'optional';
export declare type FormLayout = 'horizontal' | 'inline' | 'vertical';
export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
    prefixCls?: string;
    colon?: boolean;
    name?: string;
    layout?: FormLayout;
    labelAlign?: FormLabelAlign;
    labelWrap?: boolean;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    form?: FormInstance<Values>;
    size?: SizeType;
    disabled?: boolean;
    scrollToFirstError?: Options | boolean;
    requiredMark?: RequiredMark;
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark?: boolean;
}
declare const Form: <Values = any>(props: FormProps<Values> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<FormInstance<Values>> | undefined;
}) => React.ReactElement;
export { useForm, List, FormInstance, useWatch };
export default Form;
