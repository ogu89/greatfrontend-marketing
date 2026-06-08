import { CheckCircleIcon } from "./CheckCircleIcon";

const features = [
  "Minimum 5K image resolution",

  "Various format variants available",

  "Retina display support",
];

export function HelloSectionFeatureBullets() {
  // Write custom JavaScript here.
  // You may ignore this file and delete if if JavaScript is not required for your challenge.

  return (
    <>
      <section className="mx-auto grid max-w-[1440px] bg-white gap-12 rounded-md bg-gradient-to-b  px-4 py-[62px] shadow-lg md:grid-cols-6 md:gap-8 md:py-[72px] lg:grid-cols-12 lg:px-24 lg:py-[105px]">
        <div className="flex flex-col justify-center gap-8 md:col-span-6 md:gap-16 lg:col-span-5">
          {/* title */}
          <h1 className="text-4xl font-semibold leading-10 text-neutral-900 sm:text-5xl sm:leading-none lg:text-6xl lg:leading-none">
            Premium abstract images
          </h1>
          {/* check lists */}
          <ul className="flex flex-col gap-5 text-lg leading-7 text-neutral-600">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircleIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* buttons */}
          <div className="flex flex-row-reverse gap-4 sm:flex-row sm:justify-start sm:gap-8">
            <button className="h-12 flex-1 rounded border border-neutral-200 bg-white px-5 font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none sm:h-[60px] sm:w-[213px] sm:flex-none sm:text-lg lg:w-[175.5px]">
              Learn more
            </button>
            <button className="h-12 flex-1 rounded bg-indigo-700 px-5 font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none sm:h-[60px] sm:w-[213px] sm:flex-none sm:text-lg lg:w-[175.5px]">
              See pricing
            </button>
          </div>
        </div>

        {/* <img
            className="w-full rounded-sm"
            src="images/hero-section-feature-bullets/prism.png"
            alt="hero image"
          /> */}
        <img
          className="h-[264px] w-full rounded object-cover md:col-span-6 md:h-[526px] lg:col-span-7 lg:h-full"
          src="images/hero-section-feature-bullets/prism.png"
          alt="hero image"
        />
      </section>
    </>
  );
}
