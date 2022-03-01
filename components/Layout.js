import Header from "./Header";
import Footer from "./Footer";
// import Modal from "./Modal";

function Layout({ children }) {
  return (
    <div>
      {/* <Modal /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
