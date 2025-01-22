import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import AccordionContent from '../components/AccordionContent'
import Footer from "../components/Footer";
function RootLayout() {

  return (
    <>
      <main>
        <Sidebar/>
        <Navbar/>
        <Outlet />
        <AccordionContent/>
        <Footer/>
      </main>
    </>
  );
}

export default RootLayout;
