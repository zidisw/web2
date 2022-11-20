import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder38: "rounded-radius38",
  icbRoundedBorder27: "rounded-radius275",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  icbFillIndigo9004f: "bg-indigo_900_4f",
  icbFillGray300: "bg-gray_300",
  icbFillGray60076: "bg-gray_600_76",
  icbFillLightblue50: "bg-light_blue_50",
  icbFillLime50: "bg-lime_50",
  icbFillRed50: "bg-red_50",
  icbOutlinePink3007f: "bg-pink_300 shadow-bs",
  icbFillGray302: "bg-gray_302",
  FillGray200: "bg-gray_200 text-bluegray_600",
  FillIndigo90067: "bg-indigo_900_67 text-indigo_900",
  FillIndigo900: "bg-indigo_900 text-white_A700",
  OutlinePink300:
    "bg-white_A700 border border-pink_300 border-solid text-pink_300",
  FillWhiteA7003f: "bg-white_A700_3f text-white_A700",
};
const sizes = {
  smIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  mdIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  lgIcn: "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lg: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  xl: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  "2xl": "lg:p-[15px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  "3xl": "lg:p-[19px] xl:p-[24px] p-[27px] 3xl:p-[32px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder38",
    "icbRoundedBorder27",
    "RoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "icbFillIndigo9004f",
    "icbFillGray300",
    "icbFillGray60076",
    "icbFillLightblue50",
    "icbFillLime50",
    "icbFillRed50",
    "icbOutlinePink3007f",
    "icbFillGray302",
    "FillGray200",
    "FillIndigo90067",
    "FillIndigo900",
    "OutlinePink300",
    "FillWhiteA7003f",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder38",
  variant: "icbFillIndigo9004f",
  size: "lgIcn",
};

export { Button };
