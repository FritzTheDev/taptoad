import React from "react";
import App from "next/app";

import { Layout } from "../components/Layout";

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}