import React from "react";

import { Row, Img, Text, Column, Line } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
          <Row className="items-center justify-center xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] w-[10%]">
            <Img src="images/img_edit.svg" className="edit" alt="edit" />
            <Text
              className="font-extrabold font-nunitosans xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] text-gray_600 uppercase w-[auto]"
              as="h4"
              variant="h4"
            >
              Blogsly
            </Text>
          </Row>
          <Row className="items-start lg:ml-[150px] xl:ml-[187px] 2xl:ml-[211px] 3xl:ml-[253px] w-[29%]">
            <Column className="justify-start mt-[1px] w-[20%]">
              <Text
                className="font-bold font-publicsans text-indigo_900 tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                Home
              </Text>
              <Line className="bg-indigo_900 h-[1px] mt-[4px] w-[64%]" />
            </Column>
            <Text
              className="font-bold font-publicsans text-indigo_200 tracking-ls1 w-[auto]"
              as="h5"
              variant="h5"
            >
              Podcast
            </Text>
            <Text
              className="font-bold font-publicsans lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] text-indigo_200 tracking-ls1 w-[auto]"
              as="h5"
              variant="h5"
            >
              Blog
            </Text>
            <Text
              className="font-bold font-publicsans lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] text-indigo_200 tracking-ls1 w-[auto]"
              as="h5"
              variant="h5"
            >
              About
            </Text>
            <Text
              className="font-bold font-publicsans lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] text-indigo_200 tracking-ls1 w-[auto]"
              as="h5"
              variant="h5"
            >
              Contact
            </Text>
          </Row>
          <Img
            src="images/img_search.svg"
            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mb-[2px] lg:ml-[230px] xl:ml-[288px] 2xl:ml-[324px] 3xl:ml-[389px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
            alt="search"
          />
        </Row>
      </header>
    </>
  );
};

export default Header;
