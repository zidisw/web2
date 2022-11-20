import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  TextArea,
  Button,
} from "components";
import Footer from "components/Footer/Footer";

const ContactUsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center justify-between lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
            <Row className="items-center justify-center xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] w-[10%]">
              <Img src="images/img_edit.svg" className="edit" alt="edit" />
              <Text
                className="font-extrabold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] text-gray_600 uppercase w-[auto]"
                as="h4"
                variant="h4"
              >
                Blogsly
              </Text>
            </Row>
            <Column className="font-publicsans w-[37%]">
              <Row className="items-start w-[78%]">
                <Text
                  className="cursor-pointer hover:font-bold font-bold my-[1px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Home
                </Text>
                <Text
                  className="cursor-pointer hover:font-bold font-bold mb-[1px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Podcast
                </Text>
                <Text
                  className="cursor-pointer hover:font-bold font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Blog
                </Text>
                <Text
                  className="cursor-pointer hover:font-bold font-bold mb-[1px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] text-indigo_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  About
                </Text>
                <Text
                  className="cursor-pointer hover:font-bold font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] my-[1px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Contact
                </Text>
              </Row>
              <Line className="bg-indigo_900 h-[1px] lg:ml-[178px] xl:ml-[223px] 2xl:ml-[251px] 3xl:ml-[301px] mt-[2px] w-[10%]" />
            </Column>
            <Img
              src="images/img_search.svg"
              className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mb-[2px] xl:mr-[123px] 2xl:mr-[139px] 3xl:mr-[166px] lg:mr-[98px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="search"
            />
          </Row>
        </header>
        <Column className="font-publicsans items-center justify-start 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] pt-[2px] w-[77%]">
          <Column className="items-center justify-start w-[24%]">
            <Text
              className="font-bold text-bluegray_600 w-[auto]"
              as="h3"
              variant="h3"
            >
              Contact us
            </Text>
            <Text
              className="font-light 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_600 w-[auto]"
              as="h5"
              variant="h5"
            >
              Complete the form to contact us
            </Text>
          </Column>
          <Row className="items-start justify-evenly lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]">
            <Column className="justify-start w-[31%]">
              <Text
                className="font-bold text-bluegray_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Info
              </Text>
              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pr-[1px] py-[1px] w-[92%]">
                <Row className="items-start w-[43%]">
                  <Img
                    src="images/img_call.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="call"
                  />
                  <Text
                    className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    0331223282
                  </Text>
                </Row>
                <Row className="items-start ml-[3px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[67%]">
                  <Img
                    src="images/img_mail.svg"
                    className="emailOne"
                    alt="mail"
                  />
                  <Text
                    className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Hellolaos@gmail.com
                  </Text>
                </Row>
                <Row className="items-start mb-[3px] ml-[3px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[71%]">
                  <Img
                    src="images/img_location_20X17.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[8%]"
                    alt="location"
                  />
                  <Text
                    className="font-light lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] text-bluegray_600 w-[88%]"
                    as="h5"
                    variant="h5"
                  >
                    Massachusetts Ave NW, Washington, DC 20036
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-start mt-[4px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius10 shadow-bs4 w-[69%]">
              <Column className="justify-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] rounded-radius5 w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Input
                    className="placeholder:text-gray_400 field1"
                    wrapClassName="w-[48%]"
                    type="text"
                    name="field"
                    placeholder="Your Name"
                  ></Input>
                  <Input
                    className="placeholder:text-gray_400 field1"
                    wrapClassName="w-[48%]"
                    type="email"
                    name="field One"
                    placeholder="Your Email"
                  ></Input>
                </Row>
                <Input
                  className="placeholder:text-gray_400 field1"
                  wrapClassName="2xl:mt-[30px] 3xl:mt-[36px] lg:mt-[21px] w-[100%] xl:mt-[26px]"
                  name="field Two"
                  placeholder="Your Subject"
                ></Input>
                <TextArea
                  className="font-light lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  name="field Three"
                  placeholder="Description"
                ></TextArea>
                <Button
                  className="font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[27%]"
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillIndigo900"
                >
                  Send Message
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
        <Footer className="bg-gray_600 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[100%]" />
      </Column>
    </>
  );
};

export default ContactUsPage;
