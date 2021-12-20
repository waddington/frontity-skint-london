import { Global, css, connect, styled, Head } from "frontity";
import Header from "../components/header";
import Footer from "../components/footer";
import LargePostCard from '../components/cards/largePost';
import { useEffect } from 'react';
import Link from '@frontity/components/link';

const AsideCard = ({title, text, linkText, link}) => {
  return (
    <div className="sm:basis-6/12 md:basis-0">
      <h4 className="font-bold text-lg p2-3 text-slate-800">{title}</h4>
      <p className="font-light my-2">{text}</p>
      <Link link={link} target="_blank" className="text-skintRed underline hover:no-underline active:no-underline focus:no-underline">{linkText}</Link>
    </div>
  )
}

const Home = ({ state, children, actions }) => {
  const data = state.source.get(state.router.link)
  const recentItems = data.items;
  const largeCardItems = recentItems.slice(0,2)

  useEffect(() => {
    actions.source.fetch("/");
    recentItems.forEach((item) => actions.source.fetch(item.link))
  }, [])

  return (
    <div className="w-full bg-white">
      <Header />
      {/* hero */}
        <div>HERO IMAGE</div>
      {/*  Body */}
        <div className="max-w-screen-xl mx-auto px-8 py-5">
          <div className="mb-16 flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-8 md:items-stretch">
            <LargePostCard postId={largeCardItems[0].id} postLink={largeCardItems[0].link}/>
            <LargePostCard postId={largeCardItems[1]} postLink={largeCardItems[1].link}/>
            <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-5 md:flex-col md:space-x-0 md:space-y-8">
              <AsideCard title="Support us on Ko-Fi" text="Skint London is a tiny, freelance outfit. If you like our work please think about buying us a cup of coffee. Thank you" linkText="ko-fi.com/skintlondoncom" link="https://ko-fi.com/skintlondoncom" />
              <AsideCard title="Follow us on Twitter" text="Fab things London £10 and under!" linkText="twitter.com/SkintLondon" link="https://twitter.com/SkintLondon" />
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
