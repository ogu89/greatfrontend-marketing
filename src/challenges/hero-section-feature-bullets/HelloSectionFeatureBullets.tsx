import { CheckCircleIcon } from "./CheckCircleIcon";

export function HelloSectionFeatureBullets() {
  // Write custom JavaScript here.
  // You may ignore this file and delete if if JavaScript is not required for your challenge.

  return (
    <>
      <div className="flex w-full h-auto  bg-white m-1 rounded-lg shadow-lg">
        <div className="lg:px-20 lg:py-30 py-12 px-5 grid lg:grid-cols-2">
          <div className="flex flex-col gap-y-14">
            {/* title */}
            <span className="font-medium lg:text-7xl sm:text-5xl text-3xl">
              Premium abstract images
            </span>
            {/* check lists */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <CheckCircleIcon />{" "}
                <span className="text-xl text-gray-500">
                  Minimum 5K image resolution
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-xl text-gray-500">
                  Various format variants available
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon />{" "}
                <span className="text-xl text-gray-500">
                  Retina display support{" "}
                </span>
              </li>
            </ul>
            {/* buttons */}
            <div className="flex gap-6 w-full">
              <button className="px-6 w-40 shadow-sm h-12 rounded-sm hover:cursor-pointer">
                Learn more
              </button>
              <button className="px-6 w-40 shadow-sm h-12 bg-indigo-700 text-white rounded-sm hover:cursor-pointer">
                See pricing
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-full rounded-sm"
              src="images/hero-section-feature-bullets/prism.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
