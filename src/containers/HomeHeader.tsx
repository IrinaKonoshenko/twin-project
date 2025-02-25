import clsx from "clsx";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { HomeLogo } from "../components/HomeLogo";

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 py-[30px] items-center transition-colors duration-300",
        scrolled ? "bg-[#E6EAF2]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[52px]">
          <Link to="/" className="">
            <HomeLogo type="homeHeader" />
          </Link>

          <Navbar />
        </div>

        <Button color="blue" rounded filled text="Личный кабинет" />
      </div>
    </header>
  );
}
