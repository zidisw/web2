import React from "react";

import { Column, Stack, Img, Text, Row, Button, List } from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const BlogDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="font-publicsans items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[92%]">
          <Stack className="lg:h-[586px] xl:h-[733px] 2xl:h-[824px] 3xl:h-[989px] w-[100%]">
            <Img
              src="images/img_rectangle20.png"
              className="absolute lg:h-[356px] xl:h-[445px] 2xl:h-[501px] 3xl:h-[601px] rounded-radius25 top-[0] w-[100%]"
              alt="RectangleTwenty"
            />
            <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] justify-end mx-[auto] lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius25 shadow-bs3 w-[83%]">
              <Text
                className="font-light font-publicsans lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                <span className="text-bluegray_600 lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                  Category
                </span>
                <span className="text-black_900 lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                  {" "}
                </span>
                <span className="text-pink_300 font-merriweather font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] tracking-ls1">
                  Writing
                </span>
              </Text>
              <Text
                className="font-merriweather italic leading-[normal] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] text-gray_600 tracking-ls1 w-[95%]"
                as="h2"
                variant="h2"
              >
                How to write a book properly and correctly by paying attention
                to various parts to support the story
              </Text>
              <Row className="font-publicsans items-center justify-between lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[97%]">
                <Row className="items-center justify-between w-[30%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius501 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    alt="EllipseFive"
                  />
                  <Column className="w-[72%]">
                    <Text
                      className="font-semibold text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      By Jhone Leonardo
                    </Text>
                    <Text className="test_12SeptemberTwo" variant="body1">
                      12 September, 2020
                    </Text>
                  </Column>
                </Row>
                <Button
                  className="flex items-center justify-center text-center w-[19%]"
                  leftIcon={
                    <Img
                      src="images/img_signal.svg"
                      className="text-center lg:w-[21px] lg:h-[22px] lg:mr-[7px] xl:w-[26px] xl:h-[27px] xl:mr-[8px] 2xl:w-[30px] 2xl:h-[31px] 2xl:mr-[10px] 3xl:w-[36px] 3xl:h-[37px] 3xl:mr-[12px]"
                      alt="signal"
                    />
                  }
                  shape="RoundedBorder5"
                  size="2xl"
                  variant="OutlinePink300"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Share Now
                  </div>
                </Button>
              </Row>
            </Column>
          </Stack>
          <Column className="justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[74%]">
            <Column className="justify-start w-[100%]">
              <Text
                className="font-light font-publicsans lg:leading-[24px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] text-bluegray_600 w-[99%]"
                as="h5"
                variant="h5"
              >
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt on Lieutenant Worf. Could
                someone survive inside a transporter buffer for 75 years? Fate.
                It protects fools, little children, and ships named
                “Enterprise.”
              </Text>
              <Row className="items-start lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] pb-[1px] pr-[1px] w-[96%]">
                <Img
                  src="images/img_trash.svg"
                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  alt="trash"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[90%]">
                  <Text
                    className="font-bold font-merriweather italic leading-[normal] text-bluegray_600 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    There is a way out of every box, a solution to every puzzle;
                    it’s just a matter of finding it.
                  </Text>
                  <Text
                    className="font-light font-publicsans lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    JEAN-LUC PICARD
                  </Text>
                </Column>
              </Row>
              <Text
                className="font-light font-publicsans lg:leading-[24px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] text-bluegray_600 w-[99%]"
                as="h5"
                variant="h5"
              >
                <span className="text-bluegray_600 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  The game’s not big enough unless it scares you a little. Wait
                  a minute – you’ve been declared dead. You can’t give{" "}
                </span>
                <span className="text-bluegray_600 font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  orders around
                </span>
                <span className="text-bluegray_600 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  {" "}
                  here. I’ll alert the crew. What? We’re not at all alike! Flair
                  is what marks the difference between artistry and mere
                  competence.
                </span>
              </Text>
              <Text
                className="font-light font-publicsans lg:leading-[24px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] text-bluegray_600 w-[98%]"
                as="h5"
                variant="h5"
              >
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard.
              </Text>
              <Text className="description_Three" as="h5" variant="h5">
                Could someone survive inside a transporter buffer for 75 years?
                Fate. It protects fools, little children, and ships named
                “Enterprise.”
              </Text>
              <Text
                className="font-bold font-merriweather lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] text-bluegray_600 w-[auto]"
                as="h4"
                variant="h4"
              >
                Lorem Ipsum Dolor Sit Amet
              </Text>
              <Text className="description_Three" as="h5" variant="h5">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt on Lieutenant Worf. Could
                someone survive inside a transporter buffer for 75 years? Fate.
                It protects fools, little children, and ships named
                “Enterprise.”
              </Text>
              <Row className="items-center justify-between lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] rounded-radius15 w-[100%]">
                <Img
                  src="images/img_rectangle23.png"
                  className="lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] rounded-radius15 w-[49%]"
                  alt="RectangleTwentyThree"
                />
                <Img
                  src="images/img_rectangle24.png"
                  className="lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] rounded-radius15 w-[49%]"
                  alt="RectangleTwentyFour"
                />
              </Row>
              <Text
                className="font-light font-publicsans lg:leading-[24px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] text-bluegray_600 w-[98%]"
                as="h5"
                variant="h5"
              >
                What’s a knock-out like you doing in a computer-generated gin
                joint like this? But the probability of making a six is no
                greater than that of rolling a seven. I guess it’s better to be
                lucky than good.
              </Text>
              <Text className="description_Three" as="h5" variant="h5">
                Damage report! I’ve had twelve years to think about it. And if I
                had it to do over again, I would have grabbed the phaser and
                pointed it at you instead of them. Some days you get the bear,
                and some days the bear gets you. Ensign Babyface! I’m afraid I
                still don’t understand, sir. Mr. Crusher, ready a collision
                course with the Borg ship. Yesterday I did not know how to eat
                gagh. You’re going to be an interesting companion.
              </Text>
              <Column className="font-publicsans justify-end lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[50%]">
                <Row className="items-start mr-[auto] mt-[1px] w-[53%]">
                  <div className="bg-bluegray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius501 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipseseventeen" as="h5" variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[72%]">
                  <div className="bg-bluegray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[4px] rounded-radius501 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipseseventeen" as="h5" variant="h5">
                    At vero eos et accusamus et iusto odio.
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[88%]">
                  <div className="bg-bluegray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius501 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipseseventeen" as="h5" variant="h5">
                    Excepteur sint occaecat cupidatat non proident.
                  </Text>
                </Row>
              </Column>
              <Text
                className="font-light font-publicsans lg:leading-[24px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-bluegray_600 w-[99%]"
                as="h5"
                variant="h5"
              >
                Could someone survive inside a transporter buffer for 75 years?
                Fate. It protects fools, little children, and ships named
                “Enterprise.”
              </Text>
            </Column>
            <Column className="justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] rounded-radius5 w-[51%]">
              <Text
                className="font-medium text-bluegray_600 w-[auto]"
                as="h4"
                variant="h4"
              >
                Tags
              </Text>
              <Row className="items-center justify-between xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius5 w-[100%]">
                <Button
                  className="font-thin lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[19%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillGray200"
                >
                  Writing
                </Button>
                <Button
                  className="font-thin lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[19%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillGray200"
                >
                  Tutorial
                </Button>
                <Button
                  className="font-thin lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[19%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillGray200"
                >
                  How to
                </Button>
                <Button
                  className="font-thin lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[15%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillGray200"
                >
                  Book
                </Button>
                <Button
                  className="font-thin lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[15%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillGray200"
                >
                  2020
                </Button>
              </Row>
            </Column>
            <Column className="justify-start lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[63%]">
              <Stack className="lg:h-[104px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] w-[100%]">
                <Img
                  src="images/img_group.svg"
                  className="absolute 3xl:h-[100px] lg:h-[60px] xl:h-[74px] 2xl:h-[84px] left-[0] top-[0] w-[17%]"
                  alt="Group"
                />
                <Text
                  className="absolute bottom-[0] font-light lg:leading-[28px] xl:leading-[35px] 2xl:leading-[40px] 3xl:leading-[48px] right-[0] text-bluegray_600 text-center w-[91%]"
                  as="h4"
                  variant="h4"
                >
                  Increase your knowledge by reading new things and I will share
                  whatever I know for you, as long as I enjoy it
                </Text>
              </Stack>
              <Row className="items-center justify-end ml-[auto] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[38%]">
                <Img
                  src="images/img_ellipse5.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius501 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="EllipseFive One"
                />
                <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[68%]">
                  <Text
                    className="font-semibold text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    By Jhone Leonardo
                  </Text>
                  <Text className="test_12SeptemberTwo" variant="body1">
                    Podcaster & Blogger
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[19px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] rounded-radius5 w-[94%]"
          orientation="horizontal"
        >
          <Column
            className="bg-cover bg-repeat justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius5 w-[100%]"
            style={{ backgroundImage: "url('images/img_group120.png')" }}
          >
            <Text
              className="font-bold font-merriweather italic leading-[normal] ml-[1px] xl:mt-[115px] 2xl:mt-[130px] 3xl:mt-[156px] lg:mt-[92px] text-white_A700 w-[79%]"
              as="h4"
              variant="h4"
            >
              Consistent way of working to train yourself
            </Text>
            <Text
              className="font-light font-publicsans mb-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              5 minutes ago
            </Text>
          </Column>
          <Column
            className="bg-cover bg-repeat justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius5 w-[100%]"
            style={{ backgroundImage: "url('images/img_group121.png')" }}
          >
            <Text
              className="font-bold font-merriweather italic leading-[normal] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:mt-[94px] text-white_A700 w-[78%]"
              as="h4"
              variant="h4"
            >
              Consistent way of working to train yourself
            </Text>
            <Text
              className="font-light font-publicsans lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              5 minutes ago
            </Text>
          </Column>
          <Column
            className="bg-cover bg-repeat justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius5 w-[100%]"
            style={{
              backgroundImage: "url('images/img_group121_273X433.png')",
            }}
          >
            <Text
              className="font-bold font-merriweather italic leading-[normal] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:mt-[94px] text-white_A700 w-[78%]"
              as="h4"
              variant="h4"
            >
              Consistent way of working to train yourself
            </Text>
            <Text
              className="font-light font-publicsans lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              5 minutes ago
            </Text>
          </Column>
        </List>
        <Footer className="bg-gray_600 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[100%]" />
      </Column>
    </>
  );
};

export default BlogDetailsPage;
