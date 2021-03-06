import Header from "./Header";
import Footer from "./Footer";
// import Modal from "./Modal";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
