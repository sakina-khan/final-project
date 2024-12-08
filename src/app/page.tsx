import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HeroSection from "./components/hero";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <HeroSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
