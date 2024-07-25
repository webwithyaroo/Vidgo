import Nav from "./Components/Nav";
import {
  Home,
  FeaturesSection,
  SecondFeatureSection,
  Testimonials,
  FAQ,
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
