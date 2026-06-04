import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "react-icons/ri";

export function ProfileCard() {
  // Write custom JavaScript here.
  // You may ignore this file and delete if if JavaScript is not required for your challenge.

  const userObject = {
    name: "Sarah Dole",
    position: "Front End Engineer",
    company: "Microsoft",
    description:
      "I turn coffee into bugs which are fixed by someone else. Certified Stack Oveflow and chatGPT developer",
  };

  return (
    <>
      <div className="flex flex-col gap-y-6 mb-auto w-85 mt-50 items-center gap-4 bg-white px-4 py-6 rounded-lg shadow-sm">
        <img
          className="w-16 h-16 rounded-full"
          src="/images/profile-card/profile.png"
          alt="profle-image"
        />
        <div className="flex flex-col text-center gap-1">
          <span className="font-semibold text-xl">{userObject.name}</span>
          <span>
            {userObject.position} @{userObject.company}
          </span>
        </div>
        <span className="text-center">{userObject.description}</span>
        <div className="w-full">
          <button className="bg-indigo-700 h-10 text-white w-full rounded-sm">
            Contact me
          </button>
        </div>
        <div className="w-full flex justify-center gap-8">
          <a
            aria-label="Link to GreatFrontEnd's GitHub profile"
            href="https://github.com/greatfrontend"
          >
            <RiGithubFill
              aria-hidden="true"
              className="text-indigo-700 hover:cursor-pointer"
              size={18}
            />
          </a>

          <a
            aria-label="Link to GreatFrontEnd's Linkedin profile"
            // href="https://github.com/greatfrontend"
          >
            <RiLinkedinBoxFill
              className="text-indigo-700 hover:cursor-pointer"
              size={18}
            />
          </a>

          <a
            aria-label="Link to GreatFrontEnd's Instagram profile"
            // href="https://github.com/greatfrontend"
          >
            <RiInstagramFill
              className="text-indigo-700 hover:cursor-pointer"
              size={18}
            />
          </a>

          <a
            aria-label="Link to GreatFrontEnd's X (Twitter) profile"
            // href="https://github.com/greatfrontend"
          >
            <RiTwitterXLine
              className="text-indigo-700 hover:cursor-pointer"
              size={18}
            />
          </a>
        </div>
      </div>
    </>
  );
}
