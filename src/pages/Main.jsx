import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Aboutme } from "../components/Aboutme";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const Main = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <main className="before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:bg-custom-gradient before:-z-50">
      <Navbar handleOpenSidebar={handleOpenSidebar} />

      <div className="md1:flex">
        <Sidebar
          openSidebar={openSidebar}
          handleOpenSidebar={handleOpenSidebar}
        />

        <div className="w-full">
          <Aboutme />

          <Skills />

          <Projects />

          <Contact />

          <Footer />
        </div>
      </div>
    </main>
  );
};
