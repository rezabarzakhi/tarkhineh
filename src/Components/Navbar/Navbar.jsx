import useMediaQuery from "../../Hooks/useMediaQuery/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  return <div>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</div>;
}
