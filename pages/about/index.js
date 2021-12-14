import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

export default function Index() {
    const linkClickHandler = () => {
        Router.push('/posts')
    }

    return (
        <MainLayout title={'About'}>
            <h1>About page</h1>
            <button onClick={linkClickHandler}>Go back to posts</button>
            <button onClick={() => Router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}