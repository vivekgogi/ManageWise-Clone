import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Features from "../components/Features";
import AndMore from "../components/AndMore";
import Integrations from "../components/Integrations";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home_page">
      <Header />
      <Welcome />
      <Features />
      <AndMore />
      <Integrations />
      <FAQ />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
