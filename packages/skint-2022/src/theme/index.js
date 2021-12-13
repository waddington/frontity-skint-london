import React from "react"
import {connect, Global, css, styled} from "frontity"
import Switch from "@frontity/components/switch"
import List from "./list";
import Post from "./post";
import Page from "./page";
import Home from "./layouts/home";
import 'tailwindcss/base.css'
import externalCSS from './main-out.css'

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Global styles={css`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              html {
                font-family: system-ui, Verdana, Arial, sans-serif;
              }
            `}/>
            <Global styles={css(externalCSS)} />
            <main>
                <Switch>
                    <Home when={data.isHome}>ABC</Home>
                    <List when={data.isArchive}/>
                    <Post when={data.isPost}/>
                    <Page when={data.isPage}/>
                </Switch>
            </main>
        </>
    )
}
export default connect(Root)

const Header = styled.header`
  background-color: #e5edee;
`