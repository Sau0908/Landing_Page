import React from "react";
import { Input, Img, Heading, Text, Button, Slider } from "components/utils";
import SocialProof from "components/SocialProof/SocialProof";
import Features from "components/Features/Features";

const InfoMainSection = () => {
  return (
    <div>
      <div className="flex flex-col mt-[26px] gap-[33px]">
        <SocialProof />
        <div className="flex md:flex-col justify-between items-center gap-5 p-11 md:p-5 bg-gray-100_01">
          <div className="flex flex-col items-start w-[47%] md:w-full ml-[55px] pb-0.5 gap-1.5">
            <Heading
              size="lg"
              as="h2"
              className="w-[76%] md:w-full !text-[25.06px]"
            >
              <span className="text-gray-800">Helping a local </span>
              <br />
              <span className="text-green-500">business reinvent itself</span>
            </Heading>
            <Text size="md" as="p" className="!text-gray-900 !text-[11.14px]">
              We reached here with our hard work and dedication
            </Text>
          </div>
          <div className="w-[47%] md:w-full mr-[54px]">
            <div className="justify-center gap-5 grid-cols-2 md:grid-cols-[1fr] grid">
              <div className="flex items-center w-full gap-[11px]">
                <Img
                  src="images/img_icon_green_500_33x33.svg"
                  alt="image"
                  className="h-[33px] w-[33px]"
                />
                <div className="flex flex-col items-start py-px">
                  <Heading size="s" as="h3" className="!text-[19.49px]">
                    2,245,341
                  </Heading>
                  <Text size="md" as="p" className="!text-[11.14px]">
                    Members
                  </Text>
                </div>
              </div>
              <div className="flex justify-end items-center w-full gap-[11px]">
                <Img
                  src="images/img_icon_green_500.svg"
                  alt="icon_one"
                  className="h-[33px] w-[33px]"
                />
                <div className="flex flex-col items-start py-0.5">
                  <Heading size="s" as="h4" className="!text-[19.49px]">
                    46,328
                  </Heading>
                  <Text size="md" as="p" className="!text-[11.14px]">
                    Clubs
                  </Text>
                </div>
              </div>
              <div className="flex items-center w-full gap-[11px]">
                <Img
                  src="images/img_icon_33x33.svg"
                  alt="icon_one"
                  className="h-[33px] w-[33px]"
                />
                <div className="flex flex-col items-start justify-center py-px">
                  <Heading size="s" as="h5" className="!text-[19.49px]">
                    828,867
                  </Heading>
                  <Text size="md" as="p" className="!text-[11.14px]">
                    Event Bookings
                  </Text>
                </div>
              </div>
              <div className="flex justify-end items-center w-full gap-[11px]">
                <Img
                  src="images/img_icon_1.svg"
                  alt="icon_one"
                  className="h-[33px] w-[33px]"
                />
                <div className="flex flex-col items-start justify-center ">
                  <Heading size="s" as="h6" className="!text-[19.49px]">
                    1,926,436
                  </Heading>
                  <Text size="md" as="p" className="!text-[11.14px]">
                    Payments
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-col justify-between items-center pt-[3px] gap-5 px-[3px]">
            <div className="w-[29%] md:w-full ml-[135px]">
              <div>
                <div className="h-[298px] relative">
                  <div className="flex flex-col items-end w-[67%] right-0 top-0 m-auto absolute">
                    <Img
                      src="images/img_padlock.svg"
                      alt="padlock_one"
                      className="h-[71px] mr-[3px] z-[1]"
                    />
                    <div className="flex self-stretch justify-end items-center mt-[-39px]">
                      <div className="h-[211px] flex-1 relative">
                        <Img
                          src="images/img_vector.svg"
                          alt="vector_one"
                          className="h-[35px] bottom-[20%] right-0 m-auto absolute"
                        />
                        <div className="justify-center h-[211px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <Img
                            src="images/img_vector_blue_gray_700.svg"
                            alt="vector_three"
                            className="justify-center h-[211px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="justify-center h-[198px] w-[91%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img
                              src="images/img_vector_white_a700.svg"
                              alt="vector_five"
                              className="justify-center h-[198px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <div className="flex flex-col justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <div className="flex flex-col w-[23%] md:w-full ml-8">
                                <div className="flex flex-col">
                                  <Img
                                    src="images/img_vector_green_500.svg"
                                    alt="vector_seven"
                                    className="h-[10px]"
                                  />
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    alt="vector_nine"
                                    className="h-[10px] mt-[-10px]"
                                  />
                                </div>
                              </div>
                              <div className="h-[4px] w-[62%] mt-0.5 ml-5 opacity-0.2 bg-white-A700_6c" />
                              <div className="h-[3px] w-[25%] mt-[13px] opacity-0.1 bg-black-900_63" />
                              <div className="h-[12px] mt-1 relative">
                                <Img
                                  src="images/img_vector_gray_300.svg"
                                  alt="vector_fifteen"
                                  className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="h-[3px] w-[49%] left-[8%] top-[34%] m-auto opacity-0.2 bg-white-A700_6c absolute" />
                              </div>
                              <div className="h-[3px] w-[25%] mt-2.5 opacity-0.1 bg-black-900_63" />
                              <div className="h-[12px] mt-1 relative">
                                <Img
                                  src="images/img_vector_gray_300_12x74.svg"
                                  alt="vector"
                                  className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="h-[3px] w-[49%] ml-[5px] left-[7%] bottom-0 top-0 my-auto opacity-0.2 bg-white-A700_6c absolute" />
                              </div>
                              <div className="h-[3px] w-[25%] mt-[11px] opacity-0.1 bg-black-900_63" />
                              <div className="h-[12px] mt-1 relative">
                                <Img
                                  src="images/img_vector_12x74.svg"
                                  alt="vector"
                                  className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-col w-[58%] bottom-[31%] left-[7%] m-auto absolute">
                                  <div className="flex justify-center items-center">
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="self-start h-[2px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_3x2.svg"
                                      alt="vector"
                                      className="h-[3px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="self-start h-[2px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="self-start h-[2px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="self-start h-[2px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="self-start h-[2px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_3x2.svg"
                                      alt="vector_fortyone"
                                      className="h-[3px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="h-[2px] w-[2px]"
                                    />
                                    <Img
                                      src="images/img_vector_green_500_2x2.svg"
                                      alt="vector"
                                      className="h-[2px] w-[2px]"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_group.svg"
                                    alt="image_one"
                                    className="h-[3px] mt-[-3px]"
                                  />
                                </div>
                              </div>
                              <div className="h-[16px] mt-[21px] ml-[7px] relative">
                                <Img
                                  src="images/img_vector_green_500_16x55.svg"
                                  alt="vector"
                                  className="justify-center h-[16px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <Text
                                  size="xs"
                                  as="p"
                                  className="w-max top-[29%] right-0 left-0 m-auto !text-gray-300_02 !font-montserrat !text-[5.66px] absolute"
                                >
                                  SING UP
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_vector_green_500_78x59.svg"
                        alt="vector"
                        className="self-end h-[78px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end items-start w-[20%] bottom-[21%] right-[1%] m-auto absolute">
                    <Img
                      src="images/img_vector_blue_gray_900_01_101x43.svg"
                      alt="vector_fiftyone"
                      className="h-[101px] z-[1]"
                    />
                    <div className="flex flex-col items-start mt-[11px] ml-[-39px] gap-[18px]">
                      <div className="flex self-end justify-end items-center">
                        <Img
                          src="images/img_vector_blue_gray_900_01_23x3.svg"
                          alt="vector"
                          className="h-[23px]"
                        />
                        <Img
                          src="images/img_vector_blue_gray_900_01_23x3.svg"
                          alt="vector"
                          className="self-end h-[5px]"
                        />
                      </div>
                      <Img
                        src="images/img_vector_blue_gray_900_01.svg"
                        alt="vector"
                        className="h-[11px]"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_speech_bubble.svg"
                    alt="speechbubble"
                    className="h-[42px] left-0 top-[31%] m-auto absolute"
                  />
                  <Img
                    src="images/img_character.svg"
                    alt="character_one"
                    className="h-[200px] bottom-0 left-[8%] m-auto absolute"
                  />
                </div>
                <Img
                  src="images/img_vector_blue_gray_900_01_1x223.svg"
                  alt="vector"
                  className="self-stretch h-px z-[1]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start w-[60%] md:w-full mr-24 gap-[22px]">
              <div className="flex flex-col w-[91%] md:w-full gap-[11px]">
                <Heading size="lg" as="h2" className="!text-[25.06px]">
                  How to design your site footer like we did
                </Heading>
                <Text size="s" as="p" className="!text-[9.74px]">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </Text>
              </div>
              <Button
                shape="round"
                className="sm:px-5 font-medium min-w-[105px]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-between gap-5 p-[22px] sm:p-5 bg-gray-100_01">
          <Img
            src="images/img_image_9.png"
            alt="imagenine_one"
            className="w-[226px] ml-[77px] object-cover rounded-[5px]"
          />
          <div className="flex flex-col w-[65%] md:w-full mr-[77px] gap-[22px]">
            <div className="flex flex-col gap-[11px]">
              <Text
                size="md"
                as="p"
                className="!text-[11.14px] !font-medium !leading-4"
              >
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </Text>
              <div className="flex flex-col self-start items-start gap-[9px] py-px">
                <Heading as="h2" className="!text-green-500 !text-[13.92px]">
                  Tim Smith
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="!text-blue_gray-400 !text-[11.14px]"
                >
                  British Dragon Boat Racing Association
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col justify-between items-center gap-5">
              <Img
                src="images/img_frame_10.svg"
                alt="image_two"
                className="h-[33px] sm:w-full"
              />
              <div className="flex justify-end items-center gap-[7px] py-[5px]">
                <Heading as="h3" className="!text-green-500 !text-[13.92px]">
                  Meet all customers
                </Heading>
                <Img
                  src="images/img_24_arrows_directions_right.svg"
                  alt="24arrows_one"
                  className="h-[16px] w-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default InfoMainSection;
