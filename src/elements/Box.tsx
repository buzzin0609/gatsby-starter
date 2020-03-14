import { is, isNil } from 'ramda';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

type AllHTMLProps = ComponentPropsWithoutRef<'div'> &
  ComponentPropsWithoutRef<'label'> &
  ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'> &
  ComponentPropsWithoutRef<'select'>;

export type BoxProps = {
  background?: string;
  border?: number | string;
  borderRadius?: number | string;
  color?: string;
  fontSize?: number;
  height?: number | string;
  textAlign?: string;
  width?: number | string;

  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  px?: number | string;
  py?: number | string;

  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;

  children?: any;
  component?: any;
} & AllHTMLProps;

const Box = forwardRef<any, BoxProps>(
  (
    {
      background,
      border,
      borderRadius,
      color,
      fontSize,
      height,
      textAlign,
      width,

      p,
      pt,
      pr,
      pb,
      pl,
      px,
      py,

      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,

      children,
      component,
      ...props
    }: BoxProps,
    ref: any
  ) => {
    if (component) {
      // @ts-ignore
      props.as = component;
    }

    const addCss = (cssName: string, val?: any) => {
      if (!isNil(val)) {
        return `${cssName}: ${val}`;
      }

      return '';
    };
    const addUnitValue = (val?: number | string) => {
      if (isNil(val)) {
        return '';
      }

      return val + (is(Number, val) ? 'px' : '');
    };

    return (
      <div
        ref={ref}
        css={`
          && {
            ${addCss('background', background)};
            ${addCss('border', addUnitValue(border))};
            ${addCss('border-radius', addUnitValue(border))};
            ${addCss('color', color)};
            ${addCss('font-size', addUnitValue(fontSize))};
            ${addCss('height', addUnitValue(height))};

            ${addCss('padding', addUnitValue(p))};
            ${px &&
              `
          ${addCss('padding-left', addUnitValue(px))};
          ${addCss('padding-right', addUnitValue(px))};
        `};
            ${py &&
              `
          ${addCss('padding-top', addUnitValue(py))};
          ${addCss('padding-bottom', addUnitValue(py))};
        `};
            ${addCss('padding-top', addUnitValue(pt))};
            ${addCss('padding-right', addUnitValue(pr))};
            ${addCss('padding-bottom', addUnitValue(pb))};
            ${addCss('padding-left', addUnitValue(pl))};

            ${addCss('margin', addUnitValue(m))};
            ${mx &&
              `
          ${addCss('margin-left', addUnitValue(mx))};
          ${addCss('margin-right', addUnitValue(mx))};
        `};
            ${my &&
              `
          ${addCss('margin-top', addUnitValue(my))};
          ${addCss('margin-bottom', addUnitValue(my))};
        `};
            ${addCss('margin-top', addUnitValue(mt))};
            ${addCss('margin-right', addUnitValue(mr))};
            ${addCss('margin-bottom', addUnitValue(mb))};
            ${addCss('margin-left', addUnitValue(ml))};

            ${addCss('text-align', textAlign)};
            ${addCss('width', addUnitValue(width))};
          }
        `}
        {...(props as any)}
      >
        {children}
      </div>
    );
  }
);

export default Box;
