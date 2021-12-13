import { Global, css, connect, styled, Head } from "frontity";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = ({ state, children }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    return (
        <>
            <Header />
            {children}
            {/*<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />*/}
            <Footer />
        </>
    )
}

export default connect(Home)