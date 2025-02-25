import { useLocation } from "react-router-dom";
import { HomeHeader } from "../containers/HomeHeader";
import { HomeFooter } from "../containers/HomeFooter";
import { Header } from "../containers/Header";
import { Footer } from "../containers/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {isHomePage ? <HomeHeader /> : <Header />}
      <main className="flex-grow">{children}</main>
      {isHomePage ? <HomeFooter /> : <Footer />}
    </div>
  );
}
