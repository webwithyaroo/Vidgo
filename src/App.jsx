import Home from "./sectionFolder/Home";
import Nav from "./Components/Nav";
import FeaturesSection from "./sectionFolder/FeaturesSection";
import { SecondFeatureSection } from "./sectionFolder/SecondFeatureSection";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <FeaturesSection />
      <SecondFeatureSection />
    </>
  );
}

export default App;
