import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray301: "bg-transparent border border-gray_301 border-solid",
};
const shapes = { RoundedBorder5: "rounded-radius5" };
const sizes = {
  sm: "lg:pb-[24px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[16px] xl:pt-[20px] pt-[23px] 3xl:pt-[27px] lg:px-[16px] xl:px-[20px] px-[23px] 3xl:px-[27px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf(["OutlineGray301"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder5",
  variant: "OutlineGray301",
  size: "sm",
};
export { TextArea };
