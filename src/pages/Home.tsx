import { CatalogSection } from "../components/CatalogSection";
import { ChoiceSection } from "../components/ChoiceSection";
import { DecisionSection } from "../components/DecisionSection";
import { HeroSection } from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection";
import { IntegrationsSection } from "../components/IntegrationsSection";
import { OmnicanalitySection } from "../components/OmnicanalitySection";
import { PlatformSection } from "../components/PlatformSection";
import { TableSection } from "../components/TableSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChoiceSection />
      <PlatformSection />
      <OmnicanalitySection />
      <TableSection />
      <IntegrationsSection />
      <CatalogSection />
      <DecisionSection />
      <InfoSection />
    </>
  );
}
