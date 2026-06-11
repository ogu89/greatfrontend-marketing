import {
  RiBrushLine,
  RiCopyrightLine,
  RiDownload2Line,
  RiLoopRightFill,
  RiRefund2Fill,
  RiTeamLine,
} from "react-icons/ri";
import { FeatureSection } from "./FeatureSection";
import type { ReactNode } from "react";

export type FeatureSectionItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureSectionGrid() {
  // Write custom JavaScript here.
  // You may ignore this file and delete if if JavaScript is not required for your challenge.

  const featureSectionsItems: FeatureSectionItem[] = [
    {
      icon: <RiDownload2Line className="text-indigo-700 text-2xl" />,
      title: "Infinite Download",
      description:
        "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
    },
    {
      icon: <RiBrushLine className="text-indigo-700 text-2xl" />,
      title: "Purely Handcrafted",
      description:
        "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
    },
    {
      icon: <RiCopyrightLine className="text-indigo-700 text-2xl" />,
      title: "All Are Under Licensed",
      description:
        "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
    },
    {
      icon: <RiRefund2Fill className="text-indigo-700 text-2xl" />,
      title: "Cancel Anytime",
      description:
        "Subscribe at your own pace, and cancel when you feel it's enough.",
    },
    {
      icon: <RiTeamLine className="text-indigo-700 text-2xl" />,
      title: "Empowering For Team",
      description:
        "We support multiple seats at once, requiring only a single payment.",
    },
    {
      icon: <RiLoopRightFill className="text-indigo-700 text-2xl" />,
      title: "No Limitations",
      description:
        "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
    },
  ];

  return (
    <>
      <div className="mx-auto flex flex-col items-center w-full  bg-white gap-12 rounded-md  px-4 py-[62px] shadow-lg  md:gap-8 md:py-[72px]  lg:px-24 lg:py-[105px]">
        <div className="flex flex-col items-center text-center gap-y-4">
          <span className="text-indigo-700 font-semibold">
            Premium abstract images
          </span>
          <h1 className="text-4xl font-semibold text-neutral-900">
            Easy Access to top quality images
          </h1>
          <span className="text-neutral-600 max-w-[620px]">
            In a world where storytelling constantly evolves, we lead with
            groundbreaking images designed for your presentation excellence
          </span>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-10 gap-y-6 gap-x-6">
          {featureSectionsItems.map((item: FeatureSectionItem) => {
            return <FeatureSection data={item} />;
          })}
        </div>
      </div>
    </>
  );
}
