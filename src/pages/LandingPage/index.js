import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  Button,
  List,
  Line,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="bg-white_A700 lg:h-[298px] xl:h-[372px] 2xl:h-[419px] 3xl:h-[502px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] lg:px-[29px] xl:px-[36px] 2xl:px-[41px] 3xl:px-[49px] w-[77%]">
          <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] rounded-radius50 w-[70%]">
            <Text
              className="font-merriweather leading-[normal] text-center text-gray_600 w-[100%]"
              as="h1"
              variant="h1"
            >
              Share via writing and podcasts, hope you enjoy
            </Text>
            <Text
              className="font-normal font-publicsans lg:leading-[24px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic text-center text-gray_601 w-[80%]"
              as="h4"
              variant="h4"
            >
              Increase your knowledge by reading new things and I will share
              whatever I know for you, as long as I enjoy it
            </Text>
            <Row className="font-publicsans items-center justify-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius355 w-[66%]">
              <Column className="bg-indigo_900 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius355 shadow-bs2 w-[43%]">
                <Text
                  className="font-normal mt-[1px] not-italic text-white_A700 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Read More
                </Text>
              </Column>
              <Column className="border-2 border-indigo_201 border-solid items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius355 w-[52%]">
                <Text
                  className="font-normal mt-[1px] not-italic text-indigo_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Listen to Podcasts
                </Text>
              </Column>
            </Row>
          </Column>
          <Img
            src="images/img_ornamen.svg"
            className="absolute lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] inset-x-[0] mx-[auto] top-[14%] w-[92%]"
            alt="ornamen"
          />
        </Stack>
        <Column className="font-publicsans items-center justify-start 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[77%]">
          <Row className="items-center justify-between w-[100%]">
            <Row className="items-center justify-between pt-[1px] w-[39%]">
              <Button
                className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center mb-[1px] rounded-radius501 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                size="mdIcn"
                variant="icbFillGray300"
              >
                <Img
                  src="images/img_microphone.svg"
                  className="flex items-center justify-center lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px]"
                  alt="microphone"
                />
              </Button>
              <Column className="mt-[1px] w-[78%]">
                <Text
                  className="font-black font-merriweather ml-[2px] text-gray_600 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Latest Podcasts{" "}
                </Text>
                <Text
                  className="font-normal font-publicsans lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_601 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Get started on latest episodes
                </Text>
              </Column>
            </Row>
            <Text
              className="font-bold text-indigo_901 tracking-ls1 w-[auto]"
              variant="body1"
            >
              See all podcasts
            </Text>
          </Row>
          <List
            className="lg:gap-[15px] xl:gap-[19px] 2xl:gap-[22px] 3xl:gap-[26px] grid grid-cols-4 min-h-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="listthesecretsof">
              <Column className="items-center justify-start lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group308.png')" }}
                >
                  <Button
                    className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    variant="icbFillGray60076"
                  >
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne"
                    />
                  </Button>
                </Column>
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Text className="Thesecretsof" as="h6" variant="h6">
                    The secrets of writing a good book
                  </Text>
                  <Text className="ByLaosPodcast" variant="body1">
                    By LaosPodcast
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="listthesecretsof">
              <Column className="items-center justify-start lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group309.png')" }}
                >
                  <Button
                    className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    variant="icbFillGray60076"
                  >
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne One"
                    />
                  </Button>
                </Column>
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Text className="Thesecretsof" as="h6" variant="h6">
                    The secrets of writing a good book
                  </Text>
                  <Text className="ByLaosPodcast" variant="body1">
                    By LaosPodcast
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="listthesecretsof">
              <Column className="items-center justify-start lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group310.png')" }}
                >
                  <Button
                    className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    variant="icbFillGray60076"
                  >
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Two"
                    />
                  </Button>
                </Column>
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Text className="Thesecretsof" as="h6" variant="h6">
                    The secrets of writing a good book
                  </Text>
                  <Text className="ByLaosPodcast" variant="body1">
                    By LaosPodcast
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="listthesecretsof">
              <Column className="items-center justify-start lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group311.png')" }}
                >
                  <Button
                    className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    variant="icbFillGray60076"
                  >
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Three"
                    />
                  </Button>
                </Column>
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Text className="Thesecretsof" as="h6" variant="h6">
                    The secrets of writing a good book
                  </Text>
                  <Text className="ByLaosPodcast" variant="body1">
                    By LaosPodcast
                  </Text>
                </Column>
              </Column>
            </Column>
          </List>
        </Column>
        <Row className="font-publicsans items-start 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[77%]">
          <Column className="justify-start w-[68%]">
            <List
              className="gap-[0] min-h-[auto] w-[96%]"
              orientation="vertical"
            >
              <Column className="justify-start lg:my-[17px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[100%]">
                <Row className="font-publicsans items-center justify-between w-[100%]">
                  <Row className="items-center justify-between w-[33%]">
                    <Img
                      src="images/img_ellipse5.png"
                      className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius501 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                      alt="EllipseFive"
                    />
                    <Column className="w-[65%]">
                      <Text
                        className="font-semibold text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        By Jhone Leonardo
                      </Text>
                      <Text className="test_12SeptemberTwo" variant="body1">
                        12 September, 2020
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    <span className="text-bluegray_600 font-publicsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Category{" "}
                    </span>
                    <span className="text-pink_300 font-merriweather font-black lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Writing
                    </span>
                  </Text>
                </Row>
                <Text className="Consistentway" as="h2" variant="h2">
                  Consistent way of working to train yourself
                </Text>
                <Img
                  src="images/img_rectangle11.png"
                  className="RectangleEleven"
                  alt="RectangleEleven"
                />
                <Text className="description" as="h5" variant="h5">
                  We all know that every person has his or her own desire to
                  work, but do you know that we can actually be consistent in
                  making works if we want, now in this article I want to invite
                  all of you to learn to be consistent in creating.
                </Text>
                <Row className="font-publicsans items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[65%]">
                  <Row className="items-center w-[33%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillLightblue50"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="clock"
                      />
                    </Button>
                    <Text className="post" variant="body1">
                      5 minutes ago
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[23%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillLime50"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="checkmark"
                      />
                    </Button>
                    <Text className="post" variant="body1">
                      12 Like
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[22%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillRed50"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="location"
                      />
                    </Button>
                    <Text
                      className="font-light text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Share
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[14px] text-center w-[35%] xl:mt-[17px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="text-center lg:w-[17px] lg:h-[18px] lg:ml-[13px] xl:w-[22px] xl:h-[23px] xl:ml-[16px] 2xl:w-[25px] 2xl:h-[26px] 2xl:ml-[19px] 3xl:w-[30px] 3xl:h-[31px] 3xl:ml-[22px]"
                      alt="arrow_right"
                    />
                  }
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillIndigo90067"
                >
                  <div className="bg-transparent font-bold font-publicsans lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-ls1">
                    Continue Reading
                  </div>
                </Button>
              </Column>
              <Column className="justify-start lg:my-[17px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[100%]">
                <Row className="font-publicsans items-center justify-between w-[100%]">
                  <Row className="items-center justify-between w-[33%]">
                    <Img
                      src="images/img_ellipse5.png"
                      className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius501 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                      alt="EllipseFive One"
                    />
                    <Column className="w-[65%]">
                      <Text
                        className="font-semibold text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        By Jhone Leonardo
                      </Text>
                      <Text className="test_12SeptemberTwo" variant="body1">
                        12 September, 2020
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    <span className="text-bluegray_600 font-publicsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Category{" "}
                    </span>
                    <span className="text-pink_300 font-merriweather font-black lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Writing
                    </span>
                  </Text>
                </Row>
                <Text className="Consistentway" as="h2" variant="h2">
                  Consistent way of working to train yourself
                </Text>
                <Img
                  src="images/img_rectangle11_390X728.png"
                  className="RectangleEleven"
                  alt="RectangleEleven One"
                />
                <Text className="description" as="h5" variant="h5">
                  We all know that every person has his or her own desire to
                  work, but do you know that we can actually be consistent in
                  making works if we want, now in this article I want to invite
                  all of you to learn to be consistent in creating.
                </Text>
                <Row className="font-publicsans items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[65%]">
                  <Row className="items-center w-[33%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillLightblue50"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="clock One"
                      />
                    </Button>
                    <Text className="post" variant="body1">
                      5 minutes ago
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[23%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillLime50"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="checkmark One"
                      />
                    </Button>
                    <Text className="post" variant="body1">
                      12 Like
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[22%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillRed50"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="location One"
                      />
                    </Button>
                    <Text
                      className="font-light text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Share
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[14px] text-center w-[35%] xl:mt-[17px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="text-center lg:w-[17px] lg:h-[18px] lg:ml-[13px] xl:w-[22px] xl:h-[23px] xl:ml-[16px] 2xl:w-[25px] 2xl:h-[26px] 2xl:ml-[19px] 3xl:w-[30px] 3xl:h-[31px] 3xl:ml-[22px]"
                      alt="arrow_right"
                    />
                  }
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillIndigo90067"
                >
                  <div className="bg-transparent font-bold font-publicsans lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-ls1">
                    Continue Reading
                  </div>
                </Button>
              </Column>
              <Column className="justify-start lg:my-[17px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[100%]">
                <Row className="font-publicsans items-center justify-between w-[100%]">
                  <Row className="items-center justify-between w-[33%]">
                    <Img
                      src="images/img_ellipse5.png"
                      className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius501 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                      alt="EllipseFive Two"
                    />
                    <Column className="w-[65%]">
                      <Text
                        className="font-semibold text-bluegray_600 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        By Jhone Leonardo
                      </Text>
                      <Text className="test_12SeptemberTwo" variant="body1">
                        12 September, 2020
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    <span className="text-bluegray_600 font-publicsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Category{" "}
                    </span>
                    <span className="text-pink_300 font-merriweather font-black lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Writing
                    </span>
                  </Text>
                </Row>
                <Text className="Consistentway" as="h2" variant="h2">
                  Consistent way of working to train yourself
                </Text>
                <Img
                  src="images/img_rectangle11_1.png"
                  className="RectangleEleven"
                  alt="RectangleEleven Two"
                />
                <Text className="description" as="h5" variant="h5">
                  We all know that every person has his or her own desire to
                  work, but do you know that we can actually be consistent in
                  making works if we want, now in this article I want to invite
                  all of you to learn to be consistent in creating.
                </Text>
                <Row className="font-publicsans items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[65%]">
                  <Row className="items-center w-[33%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillLightblue50"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="clock Two"
                      />
                    </Button>
                    <Text className="post" variant="body1">
                      5 minutes ago
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[23%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillLime50"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="checkmark Two"
                      />
                    </Button>
                    <Text className="post" variant="body1">
                      12 Like
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[22%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius501 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillRed50"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                        alt="location Two"
                      />
                    </Button>
                    <Text
                      className="font-light text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Share
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[14px] text-center w-[35%] xl:mt-[17px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="text-center lg:w-[17px] lg:h-[18px] lg:ml-[13px] xl:w-[22px] xl:h-[23px] xl:ml-[16px] 2xl:w-[25px] 2xl:h-[26px] 2xl:ml-[19px] 3xl:w-[30px] 3xl:h-[31px] 3xl:ml-[22px]"
                      alt="arrow_right"
                    />
                  }
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillIndigo90067"
                >
                  <div className="bg-transparent font-bold font-publicsans lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-ls1">
                    Continue Reading
                  </div>
                </Button>
              </Column>
            </List>
            <Row className="items-center justify-end ml-[auto] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[28%]">
              <Text
                className="bg-indigo_900 flex font-normal items-center not-italic lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius501 text-white_A700 w-[40px]"
                as="h5"
                variant="h5"
              >
                1
              </Text>
              <Text
                className="bg-white_A700 flex font-normal items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius501 text-indigo_900 w-[40px]"
                as="h5"
                variant="h5"
              >
                2
              </Text>
              <Row className="items-start justify-between lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[34%]">
                <Text
                  className="font-light text-indigo_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Next
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="arrowright Three"
                />
              </Row>
            </Row>
          </Column>
          <Column className="justify-start w-[32%]">
            <Column className="justify-start rounded-radius5 w-[99%]">
              <Img
                src="images/img_ellipse5.png"
                className="lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius5 w-[100%]"
                alt="RectangleTen"
              />
              <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[55%]">
                <Text
                  className="font-bold font-merriweather ml-[1px] text-gray_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Jhone Leonardo
                </Text>
                <Text
                  className="font-medium font-publicsans lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Podcaster & Blogger
                </Text>
              </Column>
              <Text
                className="font-light lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] text-bluegray_600 w-[92%]"
                as="h5"
                variant="h5"
              >
                I want to share knowledge in my own style. I have been working
                on various things that I think I really need to share with you
                all. I am a jhone podcaster and blogger
              </Text>
            </Column>
            <Column className="font-merriweather justify-start ml-[1px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[55%]">
              <Text
                className="font-bold text-gray_600 w-[auto]"
                as="h5"
                variant="h5"
              >
                Follow Me On
              </Text>
              <Column className="font-publicsans justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                <Row className="items-start justify-evenly w-[100%]">
                  <Img
                    src="images/img_email1.svg"
                    className="emailOne"
                    alt="emailOne"
                  />
                  <Text className="test_12SeptemberTwo" as="h6" variant="h6">
                    Hellojhone@gmail.com
                  </Text>
                </Row>
                <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[77%]">
                  <Img
                    src="images/img_camera.svg"
                    className="emailOne"
                    alt="camera"
                  />
                  <Text className="rowcamera" as="h6" variant="h6">
                    @Johoe_Podcast
                  </Text>
                </Row>
                <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[77%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer emailOne"
                    onClick={handleNavigate1}
                    alt="twitter"
                  />
                  <Text className="rowcamera" as="h6" variant="h6">
                    @JohoeLeonardo
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="font-merriweather justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[100%]">
              <Text
                className="font-bold text-gray_600 w-[auto]"
                as="h5"
                variant="h5"
              >
                Tranding Blog
              </Text>
              <Column
                className="bg-cover bg-repeat items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_bloghead.png')" }}
              >
                <Column className="bg-gray_900_3f justify-end lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius5 w-[100%]">
                  <Text
                    className="font-bold font-merriweather italic leading-[normal] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] text-white_A700 w-[82%]"
                    as="h5"
                    variant="h5"
                  >
                    Consistent way of working to train yourself
                  </Text>
                  <Text
                    className="font-light font-publicsans xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    5 minutes ago
                  </Text>
                </Column>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14.png"
                    className="RectangleFourteen"
                    alt="RectangleFourteen"
                  />
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="Consistentway_Four" as="h5" variant="h5">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="duration_Four" variant="body1">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14_96X96.png"
                    className="RectangleFourteen"
                    alt="RectangleFourteen One"
                  />
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="Consistentway_Four" as="h5" variant="h5">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="duration_Four" variant="body1">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14_1.png"
                    className="RectangleFourteen"
                    alt="RectangleFourteen Two"
                  />
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="Consistentway_Four" as="h5" variant="h5">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="duration_Four" variant="body1">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14_2.png"
                    className="RectangleFourteen"
                    alt="RectangleFourteen Three"
                  />
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="Consistentway_Four" as="h5" variant="h5">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="duration_Four" variant="body1">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
              </List>
            </Column>
            <Column className="font-merriweather justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[100%]">
              <Text
                className="font-bold text-gray_600 tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                Categories
              </Text>
              <Column className="font-publicsans items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Writing
                  </Text>
                  <Text
                    className="bg-blue_50 flex font-normal items-center not-italic lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius501 text-gray_600 w-[40px]"
                    as="h5"
                    variant="h5"
                  >
                    1
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[0.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Working
                  </Text>
                  <Text
                    className="bg-blue_50 flex font-normal items-center not-italic xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius501 text-gray_600 w-[40px]"
                    as="h5"
                    variant="h5"
                  >
                    5
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[0.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Podcaster
                  </Text>
                  <Text
                    className="bg-blue_50 flex font-normal items-center not-italic xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius501 text-gray_600 w-[40px]"
                    as="h5"
                    variant="h5"
                  >
                    3
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
        <Row className="bg-green_50 font-publicsans items-center justify-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-radius5 w-[77%]">
          <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[55%]">
            <Text
              className="font-light font-publicsans text-indigo_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              NEWSLETTER
            </Text>
            <Text
              className="font-black font-merriweather leading-[normal] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-gray_600 w-[86%]"
              as="h3"
              variant="h3"
            >
              Subscribe to our website newsletter to receive news and updates.
            </Text>
            <Text
              className="font-light font-publicsans lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-bluegray_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Get special offers directly to your email every week!
            </Text>
          </Column>
          <Column className="lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[43%]">
            <Column className="justify-start rounded-radius5 w-[100%]">
              <Input
                className="font-bold p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-indigo_900_79 text-indigo_900_79 w-[100%]"
                wrapClassName="w-[100%]"
                type="email"
                name="field"
                placeholder="Your Email"
                size="md"
                variant="OutlineIndigo900"
              ></Input>
              <Button
                className="font-semibold lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[31%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillIndigo900"
              >
                Subscribe
              </Button>
            </Column>
            <Button
              className="flex lg:h-[55px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] items-center justify-center lg:ml-[201px] xl:ml-[251px] 2xl:ml-[283px] 3xl:ml-[339px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[54px] xl:w-[68px] 2xl:w-[77px] 3xl:w-[92px]"
              size="smIcn"
              variant="icbOutlinePink3007f"
            >
              <Img
                src="images/img_ticket.svg"
                className="flex items-center justify-center lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px]"
                alt="ticket"
              />
            </Button>
          </Column>
        </Row>
        <Footer className="bg-gray_600 xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] lg:mt-[91px] w-[100%]" />
      </Column>
    </>
  );
};

export default LandingPagePage;
