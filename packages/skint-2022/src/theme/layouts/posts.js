import { Global, css, connect, styled, Head } from "frontity";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = ({ state, children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default connect(Home)