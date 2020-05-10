import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { path } from "ramda";
import PageLayout from "components/PageLayout";
import { initAppState } from "modules/Global/redux/actions";
import "../styles.css";
import "react-tagsinput/react-tagsinput.css";
import createStore from "../store";

//Global Css Imports

import "public/assets/css/vendors/Bootstrap/bootstrap.css";
//import "../public/assets/css/font-awesome.css";
import "public/assets/css/main.css";
// import 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700';



class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    const dispatch = path(["store", "dispatch"])(this.props);
    dispatch(initAppState());
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Provider store={store}>
        <PageLayout>
          <Component {...pageProps} router={router} />
        </PageLayout>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
