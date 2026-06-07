import { HelloSectionFeatureBullets } from "./challenges/hero-section-feature-bullets";
import { ProfileCard } from "./challenges/profile-card";
import { TestimonialCard } from "./challenges/testimonial-card";

function App() {
  const path = window.location.pathname;

  let challenge = <></>;

  if (path === "/testimonial-card") {
    challenge = <TestimonialCard />;
  }

  if (path === "/profile-card") {
    challenge = <ProfileCard />;
  }

  if (path === "/hello-section-feature-bullets") {
    challenge = <HelloSectionFeatureBullets />;
  }

  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]">
      {challenge}
    </main>
  );
}

export default App;
