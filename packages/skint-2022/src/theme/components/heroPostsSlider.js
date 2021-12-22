import React, { useEffect } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import FeaturedMediaItem from './featuredMediaItem';
import Link from '@frontity/components/link';
import carouselCss from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { imageSrcset } from './featuredMediaItem';

const SliderItem = ({state, postId, postLink, libraries}) => {
  const data = state.source.get(postLink)
  const post = state.source['post'][postId]
  const {excerpt, link, title, featured_media: featuredMediaId} = post
  const author = state.source.author[post.author]
  const postDate = post.date
  const Html2React = libraries.html2react.Component;
  return (
    <div className="relative w-full h-screen max-h-96">
      <div className="absolute w-full h-full">
        <FeaturedMediaItem id={featuredMediaId} />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-white/[.90] via-white/[.90] to-white/[.35]" />
      <div className="absolute w-full mx-auto bottom-0 px-5 py-5 pb-8">
        <div className="h-full w-full max-w-screen-xl mx-auto">
          <div className="h-full w-full max-w-screen-md">
            <div className="max-w-screen-xl mx-auto text-left sm:space-y-5">
              <h2 className="font-bold text-4xl py-3 text-slate-800" dangerouslySetInnerHTML={{ __html: title.rendered }}/>
              <div className="sm:pb-3">
                <Html2React html={excerpt.rendered} />
              </div>
              <div className="my-5">
                <Link link={link} className="py-3 px-5 rounded-lg bg-skintRed text-white font-bold hover:opacity-60 focus:opacity-60 active:opacity-60">Read more</Link>
              </div>
              <div className="clear"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



const HeroPostsSlider = ({ state, children, actions, postItems, postLink, libraries }) => {
  const data = state.source.get(postLink)
  const post = state.source[data.type][data.id]

  return (
    <div className="w-full bg-white mb-12">
      <Global styles={css(carouselCss)} />
      <Carousel
        autoPlay={true}
        interval={5000}
        emulateTouch={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
        transitionTime={1000}
      >
        {
          postItems.map((postItem) => <SliderItem state={state} postId={postItem.id} key={postItem.id} postLink={postItem.link} libraries={libraries} />)
        }
      </Carousel>
    </div>
  )
}

export default connect(HeroPostsSlider)
