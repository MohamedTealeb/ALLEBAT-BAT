import Hero from "@/components/sections/hero";
import Isolation from "@/components/sections/isolation";
import Photo from "@/components/sections/photo";
import Rectangle from "@/components/sections/rectangle";
import Services from "@/components/sections/services";
import Systems from "@/components/sections/systems";
import Travaux from "@/components/sections/Travaux";
import Contact from "@/components/sections/contact";
import ClientOnlyFooter from "@/components/shared/ClientOnlyFooter";

export default function Page() {
    return (
      <>
        <Hero />
        <Services />
        <Travaux />
        <Rectangle />
        <Systems />
        <Isolation />
        <Photo />
        <Contact />
        <ClientOnlyFooter />
      </>
    );
  }
  