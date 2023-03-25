import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { HeaderSpacer } from "../styles";

function Layout() {
  return (
    <>
      <HeaderSpacer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
