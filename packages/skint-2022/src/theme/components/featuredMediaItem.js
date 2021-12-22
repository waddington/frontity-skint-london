import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

export const imageSrcset = ({ media }) => {
  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return srcset
}

/**
 * The Component that renders a featured media, typically an image. The featured
 * media can represent an individual Post, Page, or Custom Post Type.
 *
 * @param props - The state injected by {@link connect } and the ID of the
 * featured media.
 *
 * @returns A react component.
 */
const FeaturedMedia = ({ state, id, rounded }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset = imageSrcset({ media })

  let classes = "w-full h-full block object-cover"
  if (rounded) {
    classes += " rounded-lg"
  }

  return (
    <Image
      alt={media.title.rendered}
      src={media.source_url}
      srcSet={srcset}
      width={media?.media_details?.width}
      height={media?.media_details?.height}
      className={classes}
    />
  );
};

export default connect(FeaturedMedia);
