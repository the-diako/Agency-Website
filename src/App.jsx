import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";
import Calender from "./components/Calender";
import Community from "./components/Community";
import CommunityUpdates from "./components/CommunityUpdates";
import Customer from "./components/Customer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="w-full px-24">
      <div className="py-5">
        <Navbar />
      </div>

      <div className="py-10">
        <Hero />
        <Clients />
        <Services />
        <Unlock />
        <Achievements />
        <Calender />
        <Community />
        <CommunityUpdates />
        <Customer />
        <Footer />
      </div>
    </section>
  );
};

export default App;
