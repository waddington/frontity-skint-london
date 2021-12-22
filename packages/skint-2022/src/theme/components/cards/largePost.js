import { useEffect } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import FeaturedMediaItem from '../featuredMediaItem';
import Link from '@frontity/components/link';



const LargePostCard = ({ state, children, actions, postId, postLink, libraries }) => {
  const data = state.source.get(postLink)
  const post = state.source[data.type][data.id]
  const {excerpt, link, title, featured_media: featuredMediaId} = post
  const author = state.source.author[post.author]
  const postDate = post.date

  const Html2React = libraries.html2react.Component;

  return (
    <div className="w-full bg-white">
      <div className="w-full h-60 object-cover ">
        <FeaturedMediaItem id={featuredMediaId} rounded={true}/>
      </div>
      <div>
        <h3 className="font-bold text-lg py-3 text-slate-800" dangerouslySetInnerHTML={{ __html: title.rendered }}/>
        <div>
          <Html2React html={excerpt.rendered} />
        </div>
        <div className="my-5">
          <Link link={link} className="py-2 px-3 rounded-lg border-2 border-skintRed bg-white hover:bg-skintRed hover:text-white focus:bg-skintRed focus:text-white active:bg-skintRed active:text-white">Read more</Link>
        </div>
        <div className="clear"/>
      </div>
    </div>
  )
}

export default connect(LargePostCard)
