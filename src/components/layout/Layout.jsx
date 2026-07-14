import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
