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
    <section className="overflow-x-hidden">
      <Nav />
      <Home />
      <FeaturesSection />
      <SecondFeatureSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </section>
  );
}

export default App;
