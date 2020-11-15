import React from "react";
import Head from "next/head";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/ui/Theme";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

import { LazyLoadComponent } from "react-lazy-load-image-component";

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = { value: 0, selectedIndex: 0 };
  }

  setValue = (index) => {
    this.setState({ value: index });
  };

  setSelectedIndex = (index) => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={Theme}>
          <Header
            value={this.state.value}
            setValue={this.setValue}
            selectedIndex={this.state.selectedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          {/* The 'component' component below, is actually which ever page we are on. right now it is the index.js. */}
          <Component
            {...pageProps}
            setValue={this.setValue}
            setSelectedIndex={this.setSelectedIndex}
          />
          <LazyLoadComponent threshold={400}>
            <Footer
              setValue={this.setValue}
              setSelectedIndex={this.setSelectedIndex}
            />
          </LazyLoadComponent>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
