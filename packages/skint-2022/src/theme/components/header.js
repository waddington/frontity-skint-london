import { Global, css, connect, styled, Head } from "frontity";
import Link from "@frontity/components/link"

const Header = ({ state, actions }) => {
    return (
        <>
            <header>
                <h1>Hello World</h1>
                <button onClick={actions.theme.toggleUrl}>Toggle URL</button>
                {state.theme.isUrlVisible ? <p>Current URL: {state.router.link}</p> : null}
                <nav>
                    <Link link="/">Home</Link>
                    <br/>
                    <Link link="/page/2">More posts</Link>
                    <br/>
                    <Link link="/about">About</Link>
                </nav>
            </header>
            <header className="w-full bg-slate-300 border-solid border-skintRed border-0 border-b-4">
                <div className="max-w-screen-xl mx-auto px-8 py-5 flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0 md:items-start">
                    OOOOO
                </div>
            </header>
        </>
    )
}

export default connect(Header);
