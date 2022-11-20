import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray301: "border border-gray_301 border-solid",
  OutlineIndigo900: "bg-white_A700 border border-indigo_900 border-solid",
};
const shapes = { RoundedBorder5: "rounded-radius5" };
const sizes = {
  sm: "lg:p-[15px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  md: "lg:p-[18px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf(["OutlineGray301", "OutlineIndigo900"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder5",
  variant: "OutlineGray301",
  size: "sm",
};

export { Input };
