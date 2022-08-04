import Companies from "./Companies";
import Header from "./Header";
import { VideoSection } from "./VideoSection";

const Hero = () => {
  return (
    <div className="home__hero">
      <Header />
      <VideoSection />
      <Companies />
    </div>
  );
};

export default Hero;
