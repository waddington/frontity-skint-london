import { connect } from 'frontity';

const iconSize = "w-8 h-8"
const iconLinkClasses = "text-skintRed mx-2 hover:opacity-60 active:opacity-40 focus:outline-none focus:ring focus:ring-skintRed"

const FacebookIcon = () => (
  <a className={iconLinkClasses} href="https://www.facebook.com/SkintLondon" target="_blank" rel="noreferrer">
    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`${iconSize}`}
      viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  </a>
)

const TwitterIcon = () => (
  <a className={iconLinkClasses} href="https://twitter.com/SkintLondon" target="_blank" rel="noreferrer">
    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`${iconSize}`}
      viewBox="0 0 24 24">
      <path
        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  </a>
)

const InstagramIcon = () => (
  <a className={iconLinkClasses} href="https://www.instagram.com/skint_london/" target="_blank" rel="noreferrer">
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      className={`${iconSize}`} viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
    </svg>
  </a>
)

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-slate-300 border-solid border-skintRed border-0 border-t-8">
        <div className="max-w-screen-xl mx-auto px-8 py-12 flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0 md:items-start">
          <div className="max-w-md inline-flex flex-col space-y-5 items-center">
            <img src="https://www.skintlondon.com/wp-content/uploads/2014/03/431x80px-Logo-01.png" alt="The Skint London brand logo." />
            <p>&copy; {new Date().getFullYear()} Skint London</p>
          </div>
          <div className="inline-flex flex-row items-center md:pt-5">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </footer>
    </>
  )
}

export default connect(Footer)
