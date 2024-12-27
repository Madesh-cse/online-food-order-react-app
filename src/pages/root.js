import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar.jsx'
import Sidebar from '../components/Sidebar.jsx'


function RootLayout() {

  return (
    <>
      <main>
        <Sidebar/>
        <Navbar/>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
