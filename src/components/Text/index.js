import React from "react";
const variantClasses = {
  h1: "font-black lg:text-[35px] xl:text-[44px] text-[50px] 3xl:text-[60px]",
  h2: "font-bold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h3: "lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h4: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h5: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h6: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body1: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
