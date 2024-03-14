import React from "react";
import { Input, Img, Heading, Text, Button, Slider } from "components/utils";

const FooterSection = () => {
  return (
    <div>
      <div className="mt-[61px]">
        <div className="flex flex-col items-center gap-[22px] p-[22px] sm:p-5 bg-gray-100_01">
          <Heading
            size="xl"
            as="h2"
            className="w-[64%] md:w-full !text-blue_gray-900_01 text-center !text-[44.55px]"
          >
            Lorem ipsum dolor sit amet consectetuer
          </Heading>
          <Button
            shape="round"
            rightIcon={
              <Img
                src="images/img_16_arrows_directions_right.svg"
                alt="16/Arrows & Directions/Right"
              />
            }
            className="gap-[5px] sm:px-5 font-medium min-w-[124px]"
          >
            Get a Demo
          </Button>
        </div>
        <footer className="p-11 md:p-5 bg-blue_gray-900_01">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[772px]">
            <div className="flex flex-col items-start w-[32%] md:w-full gap-[27px]">
              <div className="flex flex-col items-start gap-0.5">
                <Text as="p" className="!text-gray-100_01">
                  Copyright © 2020 Landify UI Kit.
                </Text>
                <a href="#">
                  <Text as="p" className="!text-gray-100_01">
                    All rights reserved
                  </Text>
                </a>
              </div>
              <div className="flex gap-[11px]">
                <Button size="xs" shape="circle" className="w-[22px]">
                  <Img src="images/img_social_icons.svg" />
                </Button>
                <Button size="xs" shape="circle" className="w-[22px]">
                  <Img src="images/img_social_icons_white_a700.svg" />
                </Button>
                <Button size="xs" shape="circle" className="w-[22px]">
                  <Img src="images/img_social_icons_white_a700_22x22.svg" />
                </Button>
                <Button size="xs" shape="circle" className="w-[22px]">
                  <Img src="images/img_path.svg" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center w-[57%] md:w-full gap-5">
              <div className="flex flex-col items-center flex-1">
                <div className="flex flex-col items-start w-[59%] md:w-full gap-3 ">
                  <Heading
                    size="md"
                    as="h5"
                    className="self-center !text-white-A700"
                  >
                    Company
                  </Heading>
                  <ul className="flex flex-col items-start gap-[5px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          About us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Contact us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Pricing
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Testimonials
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 gap-5">
                <div className="flex flex-col items-start  md:w-full gap-3 mt-4">
                  <Heading size="md" as="h5" className="!text-white-A700">
                    Support
                  </Heading>
                  <ul className="flex flex-col items-start gap-[5px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Help center
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Terms of service
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Legal
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Privacy policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-gray-100_01">
                          Status
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col self-start w-[42%] gap-3">
                <Heading size="md" as="h5" className="!text-white-A700 mt-4">
                  Stay up to date
                </Heading>
                <Input
                  shape="round"
                  type="email"
                  name="date"
                  placeholder="Your email address"
                  suffix={
                    <Img
                      src="images/img_essential_icons_send.svg"
                      alt="Essential Icons / send"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterSection;
