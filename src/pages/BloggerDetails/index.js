import React from "react";

import { Column, Stack, Row, Img, Button, Text, Grid } from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const BloggerDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="font-publicsans lg:h-[487px] xl:h-[609px] 2xl:h-[685px] 3xl:h-[822px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
          <Row className="absolute bg-gray_600 items-start lg:pb-[118px] xl:pb-[147px] 2xl:pb-[166px] 3xl:pb-[199px] lg:pr-[118px] xl:pr-[147px] 2xl:pr-[166px] 3xl:pr-[199px] top-[0] w-[100%]">
            <Stack className="lg:h-[249px] xl:h-[311px] 2xl:h-[350px] 3xl:h-[420px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] w-[61%]">
              <Img
                src="images/img_group146.png"
                className="absolute lg:h-[224px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] left-[0] top-[0] w-[53%]"
                alt="Group146"
              />
              <Column className="absolute bottom-[0] justify-start right-[0] w-[79%]">
                <Button
                  className="font-light font-publicsans ml-[1px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillWhiteA7003f"
                >
                  Writer
                </Button>
                <Text
                  className="font-bold font-merriweather italic leading-[normal] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] text-white_A700 tracking-ls1 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Eps 3 : How to write a book properly and correctly by paying
                  attention to various parts to support the story
                </Text>
                <Row className="font-publicsans items-center ml-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[38%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius501 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                    alt="EllipseFive"
                  />
                  <Column className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] w-[68%]">
                    <Text
                      className="font-semibold text-white_A700 tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      By Jhone Leonardo
                    </Text>
                    <Text
                      className="font-light ml-[1px] mt-[4px] text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Podcaster & Blogger
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Stack>
            <Column className="bg-white_A700_3f items-center justify-center lg:ml-[106px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[57px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius5 w-[27%]">
              <Text
                className="font-semibold leading-[normal] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-white_A700 tracking-ls1 w-[100%]"
                as="h4"
                variant="h4"
              >
                Find and make it easy for yourself in listening to our podcasts
                on
              </Text>
              <Row className="items-center justify-between 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Img
                  src="images/img_volume.svg"
                  className="volume"
                  alt="volume"
                />
                <Img
                  src="images/img_volume_50X50.svg"
                  className="volume"
                  alt="volume One"
                />
                <Img
                  src="images/img_signal_50X50.svg"
                  className="volume"
                  alt="signal"
                />
                <Img
                  src="images/img_camera_50X50.svg"
                  className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[2px] lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="camera"
                />
              </Row>
            </Column>
          </Row>
          <Row className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-center justify-center mx-[auto] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius5 shadow-bs5 w-[64%]">
            <Img
              src="images/img_rectangle39.png"
              className="lg:h-[153px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius5 w-[24%]"
              alt="RectangleThirtyNine"
            />
            <Column className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mr-[1px] w-[73%]">
              <Row className="items-center justify-between w-[100%]">
                <Button
                  className="font-light lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray200"
                >
                  Writer
                </Button>
                <Text
                  className="font-light text-bluegray_600 w-[auto]"
                  variant="body1"
                >
                  25 August, 2020{" "}
                </Text>
              </Row>
              <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[96%]">
                <Text
                  className="font-bold font-merriweather italic leading-[normal] text-gray_900 tracking-ls1 w-[99%]"
                  as="h5"
                  variant="h5"
                >
                  Eps 3 : How to write a book properly and correctly by paying
                  attention to various parts to support the story
                </Text>
                <Text
                  className="font-light font-publicsans lg:leading-[17px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-bluegray_600 w-[100%]"
                  variant="body1"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  sabot...
                </Text>
              </Column>
              <Row className="items-center ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[42%]">
                <Button
                  className="flex items-center justify-center text-center w-[49%]"
                  leftIcon={
                    <Img
                      src="images/img_play.svg"
                      className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:mr-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[12px]"
                      alt="play"
                    />
                  }
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillIndigo900"
                >
                  <div className="bg-transparent font-light xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    Play Now
                  </div>
                </Button>
                <Text
                  className="font-light lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] text-bluegray_600 w-[auto]"
                  variant="body1"
                >
                  Go to Spotify Now
                </Text>
              </Row>
            </Column>
          </Row>
        </Stack>
        <Column className="font-publicsans justify-start 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[77%]">
          <Row className="items-center pt-[1px] w-[39%]">
            <Button
              className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center mb-[1px] rounded-radius501 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              size="mdIcn"
              variant="icbFillGray302"
            >
              <Img
                src="images/img_microphone.svg"
                className="flex items-center justify-center lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px]"
                alt="microphone"
              />
            </Button>
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] w-[78%]">
              <Text
                className="font-black font-merriweather ml-[2px] text-gray_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Latest Podcasts{" "}
              </Text>
              <Text
                className="font-normal font-publicsans lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_600 tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                Get started on latest episodes
              </Text>
            </Column>
          </Row>
          <Grid className="lg:gap-[15px] xl:gap-[19px] 2xl:gap-[22px] 3xl:gap-[26px] grid grid-cols-4 lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
            <Column className="listthesecretsof">
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group308.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group313.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group316.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group315.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
            <Column className="listthesecretsof">
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group318.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Four"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group317.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Five"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group320.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Six"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group319.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Seven"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group322.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Eight"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group321.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Nine"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group324.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Ten"
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mt-[2px] rounded-radius5 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group323.png')" }}
                >
                  <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                      alt="playbuttonOne Eleven"
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
          </Grid>
          <Row className="items-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[19%]">
            <Text
              className="bg-indigo_901 flex font-normal items-center not-italic lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius501 text-white_A700 w-[40px]"
              as="h5"
              variant="h5"
            >
              1
            </Text>
            <Text
              className="bg-white_A700 flex font-normal items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius501 text-indigo_901 w-[40px]"
              as="h5"
              variant="h5"
            >
              2
            </Text>
            <Row className="items-start justify-between lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[34%]">
              <Text
                className="font-light text-indigo_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                Next
              </Text>
              <Img
                src="images/img_arrowright_16X16.svg"
                className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                alt="arrowright"
              />
            </Row>
          </Row>
        </Column>
        <Footer className="bg-gray_600 3xl:mt-[116px] lg:mt-[68px] xl:mt-[86px] 2xl:mt-[97px] w-[100%]" />
      </Column>
    </>
  );
};

export default BloggerDetailsPage;
