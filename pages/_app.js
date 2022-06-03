import TopNav from "../components/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "../context";
import { ToastContainer, toast } from 'react-toastify';
function MyApp({ Component, pageProps }) {
  return (
    <>
     <Provider>
      <TopNav />
      <ToastContainer/>

      <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;