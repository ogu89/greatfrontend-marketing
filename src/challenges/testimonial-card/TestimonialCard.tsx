export function TestimonialCard() {
  // Write custom JavaScript here.
  // You may ignore this file and delete if if JavaScript is not required for your challenge.
  const userObject = {
    name: "Sarah Dole",
    username: "sarahdole",
    description:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  };

  return (
    <>
      <div className="flex mb-auto flex-col w-85 mt-50 gap-4 bg-white text-black p-5 rounded-lg shadow-sm">
        <div className="flex gap-4">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/testimonial-card/profile-thumbnail.png"
            alt="profle-image"
          />
          <div className="flex flex-col gap-px">
            <p className="text-lg font-semibold leading-7">{userObject.name}</p>
            <p className="text-sm leading-5">{`@${userObject.username}`}</p>
          </div>
        </div>
        {/* <span>{userObject.description}</span> */}
        <blockquote>{userObject.description}</blockquote>
      </div>
    </>
  );
}
