import Head from "next/head";

import Layout from "@/components/layout";
import Home from "@/components/home";

import {NextPage} from "next";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>VinhHienEdu</title>
                <meta name="description" content="A second brain for stucents"/>
                <meta name="viewport"
                      content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0;"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
                <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon-192x192.png"/>
            </Head>
            <Layout>
                <Home/>
            </Layout>
        </>
    )
}

export default HomePage