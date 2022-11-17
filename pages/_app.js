import "../styles/globals.css";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
