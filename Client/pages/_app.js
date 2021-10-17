import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import store from "../redux/store";
import "../styles/globals.css";
import "../styles/Styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
