import svgPaths from "./svg-z9smu39mje";

function HeaderOverlay() {
  return (
    <div
      className="absolute bg-gradient-to-t from-50% from-[#f5f6f6] h-[440px] left-1/2 to-[#ffffff] top-0 translate-x-[-50%] w-[1440px]"
      data-name="header-overlay"
    />
  );
}

function Language() {
  return (
    <div className="relative shrink-0 size-5" data-name="language">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="language">
          <path
            clipRule="evenodd"
            d={svgPaths.p2a4d5a00}
            fill="var(--fill-0, #454A53)"
            fillRule="evenodd"
            id="icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-5 items-center justify-center p-0 relative shrink-0"
      data-name="button"
    >
      <Language />
      <div className="font-['Open_Sans:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#454a53] text-[16px] text-center text-nowrap tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Español
        </p>
      </div>
    </div>
  );
}

function XMark() {
  return (
    <div className="relative shrink-0 size-4" data-name="x-mark">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="x-mark">
          <path d={svgPaths.pa67a700} fill="var(--fill-0, #04060B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[#f6f6f6] relative rounded-[90px] shrink-0 size-8"
      data-name="container"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[16px] relative size-8">
          <XMark />
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="relative rounded-[999px] shrink-0 size-10"
      data-name="icon-button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[4px] relative size-10">
          <Container />
        </div>
      </div>
    </div>
  );
}

function TrailingActions() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 right-10 top-5"
      data-name="trailing-actions"
    >
      <Button />
      <IconButton />
    </div>
  );
}

function LogoNewAlt1() {
  return (
    <div
      className="absolute h-4 top-8 w-40"
      data-name="logo-new-alt 1"
      style={{ left: "calc(41.6667% + 32px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 160 16"
      >
        <g clipPath="url(#clip0_1_4704)" id="logo-new-alt 1" opacity="0.5">
          <path
            d={svgPaths.pd167d80}
            fill="var(--fill-0, #081E35)"
            id="Vector"
          />
          <path
            d={svgPaths.p286ba100}
            fill="var(--fill-0, #081E35)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1c4bf780}
            fill="var(--fill-0, #081E35)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3d7abd00}
            fill="var(--fill-0, #081E35)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3cef6d00}
            fill="var(--fill-0, #081E35)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p6c09d80}
            fill="var(--fill-0, #081E35)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p4609880}
            fill="var(--fill-0, #081E35)"
            id="Vector_7"
          />
          <path
            d={svgPaths.pf1e5a40}
            fill="var(--fill-0, #081E35)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p1b7f0900}
            fill="var(--fill-0, #081E35)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p18912700}
            fill="var(--fill-0, #081E35)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p39a8e300}
            fill="var(--fill-0, black)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p204c7240}
            fill="var(--fill-0, black)"
            id="Vector_12"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_4704">
            <rect fill="white" height="16" width="160" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavigationBar() {
  return (
    <div
      className="absolute h-20 left-0 overflow-clip top-0 w-[1440px]"
      data-name="navigation-bar"
    >
      <TrailingActions />
      <LogoNewAlt1 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative size-8" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="arrow">
          <path d={svgPaths.p16b6ae00} fill="var(--fill-0, #F6F6F6)" />
          <path
            d={svgPaths.p39292900}
            id="Vector"
            stroke="var(--stroke-0, #353535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Group71174621() {
  return (
    <div className="h-[13.336px] relative w-[7.773px]">
      <div className="absolute bottom-[-7.499%] left-[-10.294%] right-[-10.292%] top-[-5.999%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 16"
        >
          <g id="Group 71174621">
            <path
              d="M4.87988 14.3359H4.89322"
              id="Vector"
              stroke="var(--stroke-0, #353535)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p28871200}
              id="Vector_2"
              stroke="var(--stroke-0, #353535)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div
      className="bg-[#f6f6f6] relative rounded-[90px] size-8"
      data-name="arrow"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[16px] relative size-8">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <Group71174621 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame71174622() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Open_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#04060b] text-[16px] text-nowrap text-right tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          help
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-[784px]"
      data-name="header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-[784px]">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <Arrow />
            </div>
          </div>
          <Frame71174622 />
          <div className="absolute font-['Open_Sans:Regular',_sans-serif] leading-[0] left-[392px] not-italic text-[#5f6065] text-[16px] text-center text-nowrap top-[22px] tracking-[3.2px] translate-x-[-50%] uppercase">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Account funding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Circle() {
  return (
    <div
      className="absolute bottom-[0.001%] left-0 right-0 top-[-0.001%]"
      data-name="circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 72 72"
      >
        <g id="circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d4e3c80}
            fill="var(--fill-0, #F3F6F7)"
            fillRule="evenodd"
            id="Fill-1"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute bottom-[22.245%] left-[23.265%] right-[22.108%] top-[21.874%]"
      data-name="icon"
    >
      <div className="absolute bottom-[-1.864%] left-[-1.907%] right-[-1.907%] top-[-1.864%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 42 42"
        >
          <g id="icon">
            <path
              clipRule="evenodd"
              d={svgPaths.p11181000}
              fillRule="evenodd"
              id="Stroke-1"
              stroke="var(--stroke-0, #3A9DC5)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3ab8c500}
              fillRule="evenodd"
              id="Stroke-3"
              stroke="var(--stroke-0, #002157)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p24003680}
              fillRule="evenodd"
              id="Stroke-5"
              stroke="var(--stroke-0, #3A9DC5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3aac2d00}
              fillRule="evenodd"
              id="Stroke-7"
              stroke="var(--stroke-0, #002157)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MarketingCommService() {
  return (
    <div
      className="absolute bottom-[0.001%] contents left-0 right-0 top-[-0.001%]"
      data-name="marketing/comm/service"
    >
      <Circle />
      <Icon />
    </div>
  );
}

function CommunicationService() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[72px]"
      data-name="Communication/service"
    >
      <MarketingCommService />
    </div>
  );
}

function Frame1171273461() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="css-agmlph font-['Open_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#454a53] text-[24px] text-center tracking-[-0.24px] w-full">
        <p className="block leading-[32px]">Let us help you</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <CommunicationService />
      <Frame1171273461 />
    </div>
  );
}

function SpecMediumSize24ColorWhiteOrientationHorizontal() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0)] grow h-6 min-h-px min-w-px relative shrink-0"
      data-name="_Spec=Medium, Size=24, Color=White, Orientation=Horizontal"
    >
      <div className="relative size-full">
        <div className="h-6 w-full" />
      </div>
    </div>
  );
}

function DynamicSpacer() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dynamic Spacer"
    >
      <SpecMediumSize24ColorWhiteOrientationHorizontal />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow">
          <path d={svgPaths.p8212b00} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#0070e3] h-12 relative rounded-[999px] shrink-0 w-full"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-5 py-0 relative w-full">
          <div className="font-['Open_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.24px]">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Get started
            </p>
          </div>
          <Arrow2 />
        </div>
      </div>
    </div>
  );
}

function Frame3976() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-xl self-stretch shrink-0">
      <div className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start px-8 py-6 relative size-full">
          <Form />
          <div className="css-jp2iid font-['Open_Sans:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#454a53] text-[16px] text-center w-[264px]">
            <p className="block leading-[22px]">
              Follow a guided experience with Capitalize, our rollover partner.
            </p>
          </div>
          <DynamicSpacer />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Circle1() {
  return (
    <div
      className="absolute bottom-[0.001%] left-0 right-0 top-[-0.001%]"
      data-name="circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 72 72"
      >
        <g id="circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d4e3c80}
            fill="var(--fill-0, #F3F6F7)"
            fillRule="evenodd"
            id="Fill-1"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute bottom-[15.331%] left-[36.143%] right-[37.035%] top-[15.755%]"
      data-name="icon"
    >
      <div className="absolute bottom-0 left-[-3.884%] right-[-3.884%] top-[-1.512%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 51"
        >
          <g id="icon">
            <path
              clipRule="evenodd"
              d={svgPaths.p13233400}
              fillRule="evenodd"
              id="Stroke-4"
              stroke="var(--stroke-0, #002157)"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.pf4d0780}
              id="Stroke-6"
              stroke="var(--stroke-0, #002157)"
              strokeWidth="1.5"
            />
            <path
              d="M10.7857 31.7217V50.6177"
              id="Stroke-8"
              stroke="var(--stroke-0, #002157)"
              strokeWidth="1.5"
            />
            <path
              d="M5.8492 27.3619H15.6202"
              id="Stroke-10"
              stroke="var(--stroke-0, #3A9DC5)"
              strokeWidth="1.5"
            />
            <path
              d="M5.43408 50.6138V20.7678"
              id="Stroke-12"
              stroke="var(--stroke-0, #002157)"
              strokeWidth="1.5"
            />
            <path
              d="M15.6207 20.8228V50.6178"
              id="Stroke-14"
              stroke="var(--stroke-0, #002157)"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MarketingPeopleMale02() {
  return (
    <div
      className="absolute bottom-[0.001%] contents left-0 right-0 top-[-0.001%]"
      data-name="marketing/people/male_02"
    >
      <Circle1 />
      <Icon1 />
    </div>
  );
}

function PeopleMale02() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[72px]"
      data-name="People/male_02"
    >
      <MarketingPeopleMale02 />
    </div>
  );
}

function Frame1171273462() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="css-agmlph font-['Open_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#454a53] text-[24px] text-center tracking-[-0.24px] w-full">
        <p className="block leading-[32px]">Do it myself</p>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <Frame1171273462 />
    </div>
  );
}

function SpecMediumSize24ColorWhiteOrientationHorizontal1() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0)] grow h-6 min-h-px min-w-px relative shrink-0"
      data-name="_Spec=Medium, Size=24, Color=White, Orientation=Horizontal"
    >
      <div className="relative size-full">
        <div className="h-6 w-full" />
      </div>
    </div>
  );
}

function DynamicSpacer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dynamic Spacer"
    >
      <SpecMediumSize24ColorWhiteOrientationHorizontal1 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow">
          <path d={svgPaths.p8212b00} fill="var(--fill-0, #0070E3)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="h-12 relative rounded-[999px] shrink-0 w-full"
      data-name="button"
    >
      <div className="absolute border border-[#0070e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-5 py-0 relative w-full">
          <div className="font-['Open_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0070e3] text-[16px] text-center text-nowrap tracking-[0.24px]">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              View instructions
            </p>
          </div>
          <Arrow3 />
        </div>
      </div>
    </div>
  );
}

function Frame71174212() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-xl shrink-0">
      <div className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start px-8 py-6 relative w-full">
          <PeopleMale02 />
          <Form1 />
          <div
            className="css-jp2iid font-['Open_Sans:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#454a53] text-[16px] text-center"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">
              Follow a step-by-step guide to mail check. This usually takes
              longer.
            </p>
          </div>
          <DynamicSpacer1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Selection() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[672px]"
      data-name="selection"
    >
      <Frame3976 />
      <Frame71174212 />
    </div>
  );
}

function Frame71174603() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0">
      <div
        className="font-['Open_Sans:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#04060b] text-[28px] text-center tracking-[-1px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[32px]">
          How do you want to manage your rollover?
        </p>
      </div>
      <Selection />
    </div>
  );
}

function Widget() {
  return (
    <div
      className="bg-[#ffffff] h-[533px] min-h-[420px] relative rounded-3xl shadow-[0px_10px_60px_-15px_rgba(12,64,81,0.07)] shrink-0 w-full"
      data-name="Widget"
    >
      <div className="flex flex-col items-center min-h-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 h-[533px] items-center justify-start min-h-inherit pb-16 pt-0 px-0 relative w-full">
          <Header />
          <Frame71174603 />
        </div>
      </div>
    </div>
  );
}

function Frame71174486() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 top-[104px] w-[784px]"
      style={{ left: "calc(20.8333% + 28px)" }}
    >
      <Widget />
      <div className="font-['Open_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47494e] text-[14px] text-center w-[784px]">
        <p className="leading-[20px]">
          <span>{`Learn more about our `}</span>
          <span className="text-[#004d8f]">partnership with Capitalize</span>
        </p>
      </div>
    </div>
  );
}

export default function FlowTemplate() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Flow template">
      <HeaderOverlay />
      <NavigationBar />
      <Frame71174486 />
    </div>
  );
}