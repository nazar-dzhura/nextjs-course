import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function About() {
    return (
        <MainLayout title={'Posts'}>
            <Head>
                <title>Posts</title>
            </Head>
            <h1>Posts page</h1>
        </MainLayout>
    )
}

// /posts
// /post/42