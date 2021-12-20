import { Global, css, connect, styled, Head } from "frontity";
import Header from "../components/header";
import Footer from "../components/footer";
import LargePostCard from '../components/cards/largePost';

const Home = ({ state, children, actions }) => {
  const data = state.source.get(state.router.link)
  const recentItems = data.items;
  const largeCardItems = recentItems.slice(0,2)
  return (
    <div className="w-full bg-white">
      <Header />
      {/* hero */}
        <div>HERO IMAGE</div>
      {/*  Body */}
        <div className="max-w-screen-xl mx-auto px-8 py-5">
          <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-8">
            <LargePostCard postId={largeCardItems[0].id} postLink={largeCardItems[0].link}/>
            <LargePostCard postId={largeCardItems[1]} postLink={largeCardItems[1].link}/>
            <div>
              <div>KOFI</div>
              <div>TWITTER</div>
            </div>
          </div>
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC
            ABC

        </div>
      {/*<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />*/}
      <Footer />
    </div>
  )
}

export default connect(Home)
