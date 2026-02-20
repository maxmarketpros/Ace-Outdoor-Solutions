import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import EstimateForm from "@/components/EstimateForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <ServicesGrid />
        <ProcessSteps />
        <Reviews />
        <ServiceArea />
        <About />
        <EstimateForm />
      </main>
      <Footer />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
