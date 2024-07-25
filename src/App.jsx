import Nav from "./Components/Nav";
import {
  Home,
  FeaturesSection,
  SecondFeatureSection,
  Testimonials,
  FAQ,
} from "./constants/constants";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <FeaturesSection />
      <SecondFeatureSection />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default App;
