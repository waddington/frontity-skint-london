# Frontity Skint London Theme using TailwindCSS

## Using TailWind

Using TailWind is a bit tricky, there are several blog/forum posts about it, because Frontity uses Styled Components. I tried some of the methods such as using the `twin.macro` library however this requires wrapping your CSS class strings in the ``tw` ` `` string processor - I don't particularly like styled components and this seemed pretty inconvenient.

My solution: to use tailwind by importing a `.css` file as a Frontity `<Global>` style, with a separate npm script to monitor for file changes and run the tailwind build accordingly, with the Frontity dev script also watching for changes and rebuilding again whenever the constructed `.css` file changes.

It's a bit janky because you get 3 builds whenever you make a style change: a Frontity build change because a `.js` file changed, a tailwind build because you changed a `.js` file (which the tailwind build script is watching for), and then another Frontity build because the tailwind-generated `.css` file in the `src` directory has changed. I like this method though because I only need the Tailwind library and nodemon to get this to work.