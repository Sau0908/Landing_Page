import React from "react";
import { Input, Img, Heading, Text, Button, Slider } from "components/utils";
const HeroSection = () => {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  return (
    <div>
      <div className="flex flex-col gap-[27px] ">
        <div className="h-[416px] relative">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            renderDotsItem={(props) => {
              return props?.isActive ? (
                <div className="h-[6px] w-[6px] mr-[5.57px] bg-green-500" />
              ) : (
                <div className="h-[6px] w-[6px] mr-[5.57px] bg-green_500_75" />
              );
            }}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex md:flex-col justify-between items-center gap-5 p-[66px] mx-auto md:p-5 bg-gray-100_01">
                  <div className="flex flex-col items-start w-[57%] md:w-full ml-[33px] gap-[22px]">
                    <div className="flex flex-col self-stretch gap-[13px]">
                      <Heading size="xl" as="h1" className="!text-[44.55px]">
                        <span className="text-gray-800">
                          Lessons and insights
                        </span>
                        <br />
                        <span className="text-green-500">from 8 years</span>
                      </Heading>
                      <Text size="md" as="p" className="!text-[11.14px]">
                        Where to grow your business as a photographer: site or
                        social media?
                      </Text>
                    </div>
                    <Button
                      shape="round"
                      className="sm:px-5 font-medium min-w-[89px]"
                    >
                      Register
                    </Button>
                  </div>
                  <Img
                    src="images/img_illustration.svg"
                    alt="illustration"
                    className="h-[283px] md:w-full mr-[33px]"
                  />
                </div>
              </React.Fragment>
            ))}
          />
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex flex-col items-center w-full gap-2 mx-auto md:p-5 max-w-[772px]">
            <Heading size="lg" as="h2" className="text-center !text-[25.06px]">
              Our Clients
            </Heading>
            <Text size="md" as="p" className="text-center !text-[11.14px]">
              We have been working with some Fortune 500+ clients
            </Text>
          </div>
          <Img
            src="images/img_clients_logos.svg"
            alt="clientslogos"
            className="h-[68px] w-full mx-auto md:p-5 max-w-[801px]"
          />
        </div>

        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col items-center pb-0.5 gap-1.5">
            <Heading
              size="lg"
              as="h2"
              className="w-[38%] md:w-full text-center !text-[25.06px]"
            >
              Manage your entire community in a single system
            </Heading>
            <Text size="md" as="p" className="text-center !text-[11.14px]">
              Who is Nextcent suitable for?
            </Text>
          </div>
          <div className="flex md:flex-col w-full gap-[88px] mx-auto md:p-5 max-w-[801px]">
            <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] my-[7px] bg-white-A700 shadow-sm rounded-[5px]">
              <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                <Img
                  src="images/img_icon.svg"
                  alt="image"
                  className="h-[38px]"
                />
                <Heading
                  size="s"
                  as="h3"
                  className="text-center !text-[19.49px] !leading-[25px]"
                >
                  Membership Organisations
                </Heading>
              </div>
              <Text
                size="s"
                as="p"
                className="w-[94%] md:w-full mb-[5px] text-center !text-[9.74px]"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] bg-white-A700 shadow-sm rounded-[5px]">
              <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                <Img
                  src="images/img_icon_green_50.svg"
                  alt="icon_one"
                  className="h-[38px]"
                />
                <Heading
                  size="s"
                  as="h4"
                  className="text-center !text-[19.49px] !leading-[25px]"
                >
                  National Associations
                </Heading>
              </div>
              <div className="flex justify-center w-[90%] md:w-full mb-[5px]">
                <Text size="s" as="p" className="text-center !text-[9.74px]">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] my-[7px] bg-white-A700 shadow-sm rounded-[5px]">
              <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                <Img
                  src="images/img_icon_green_50_38x45.svg"
                  alt="icon_one"
                  className="h-[38px]"
                />
                <Heading
                  size="s"
                  as="h5"
                  className="w-[87%] md:w-full text-center !text-[19.49px] !leading-[25px]"
                >
                  Clubs And Groups
                </Heading>
              </div>
              <Text
                size="s"
                as="p"
                className="w-[94%] md:w-full mb-[5px] text-center !text-[9.74px]"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
