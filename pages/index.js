import Link from 'next/link'
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (
    <MainLayout title={'Home'}>
        <h1>Hello Next.JS!</h1>
        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href="/posts"><a>Posts</a></Link></p>
        <p>Lorem Ipsum Dolor</p>
    </MainLayout>
    )
        }