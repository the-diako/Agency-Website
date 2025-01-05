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
    <div className="w-full py-5 px-10 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <Navbar />
      </div>

      <div className="w-full mx-auto">
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
    </div>
  );
};

export default App;
