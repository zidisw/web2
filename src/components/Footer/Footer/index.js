import React from "react";

import { Column, Row, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="items-center justify-start lg:mb-[24px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] mx-[auto] w-[77%]">
          <Row className="items-start pt-[1px] w-[100%]">
            <Column className="justify-end mt-[1px] pr-[1px] py-[1px] w-[31%]">
              <Row className="items-center mr-[auto] mt-[2px] w-[43%]">
                <Img
                  src="images/img_edit_24X24.svg"
                  className="edit"
                  alt="edit One"
                />
                <Text
                  className="font-extrabold font-nunitosans xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] text-white_A700 uppercase w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Blogsly
                </Text>
              </Row>
              <Row className="items-start mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[48%]">
                <Img
                  src="images/img_favorite.svg"
                  className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="favorite"
                />
                <Text
                  className="font-medium font-publicsans 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Build with heart
                </Text>
              </Row>
            </Column>
            <Row className="items-start justify-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[43%]">
              <Text
                className="font-light font-publicsans my-[1px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Home
              </Text>
              <Text
                className="font-light font-publicsans mb-[1px] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Podcast
              </Text>
              <Text
                className="font-light font-publicsans lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] mt-[1px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Blog
              </Text>
              <Text
                className="font-light font-publicsans lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] my-[1px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                About
              </Text>
              <Text
                className="font-light font-publicsans lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] my-[1px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Contact
              </Text>
            </Row>
            <Column className="items-center justify-start lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] w-[10%]">
              <Text
                className="font-bold font-publicsans text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Follow Me on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                alt="GroupNinetyFour"
              />
            </Column>
          </Row>
          <Text
            className="font-light font-publicsans lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] text-white_A700 w-[auto]"
            variant="body1"
          >
            Powered by Blogsly
          </Text>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
