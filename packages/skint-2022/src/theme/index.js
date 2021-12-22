import React, { useEffect, StrictMode } from 'react';
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
      <StrictMode>
        <main>
          <Switch>
            <Home when={data.isHome}/>
            <List when={data.isArchive}/>
            <Post when={data.isPost}/>
            <Page when={data.isPage}/>
          </Switch>
        </main>
      </StrictMode>
    </>
  )
}
export default connect(Root)
