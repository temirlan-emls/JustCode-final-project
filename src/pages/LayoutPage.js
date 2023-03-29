import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LayoutPage() {
  return (
    <div className='container min-h-screen relative'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
