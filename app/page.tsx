
'use client';
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Services from "./components/services";
import AboutWeb from "./components/aboutWeb";
import DownloadAppSection from "./components/downloadAppSection";
import CustomerCard from "./components/customerCard";
import ArticlesSection from "./components/articlesSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Services />
      <AboutWeb />
      <DownloadAppSection />
      <CustomerCard />
      <ArticlesSection />
      <Footer />
    </>
  );
}
