import { Global, css, connect, styled, Head } from 'frontity';
import Link from '@frontity/components/link';

const MobileMenu = ({
  state,
  actions
}) => {
  const mobileMenuLinkClasses = "block py-5 hover:underline focus:underline active:underline underline-offset-2 hover:decoration-1 focus:decoration-1 active:decoration-1"

  return (
    <>
      <Global styles={css`
        body {
        position: fixed;
        width: 100vw;
        }
      `} />
      {/*body overlay*/}
      <div className="w-full h-screen fixed inset-0 bg-gray-900/[.95]" onClick={actions.theme.toggleMobileMenu}>
        {/*menu container area*/}
        <div className="bg-white w-full h-screen max-w-md fixed top-0 left-0 flex flex-col" onClick={(e) => e.stopPropagation()}>
          {/*top stuff (logo, close button)*/}
          <div className="w-full relative px-5 py-5 flex flex-row justify-between flex border-b border-gray-200">
            <img src="https://www.skintlondon.com/wp-content/uploads/2018/08/for-fav-1.png" alt="The Skint London brand logo."
                 className="max-h-10" height="auto"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-skintRed cursor-pointer" viewBox="0 0 24 24" onClick={actions.theme.toggleMobileMenu}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          {/* nav */}
          <nav className=" w-full overflow-y-scroll px-8 py-8 pb-16 pt-0 flex flex-grow">
            <ul className="font-light">
              {
                state.theme.menu.map((menuItem) => {
                  const {name, href, submenu} = menuItem;
                  // if no submenu
                  if (!submenu) {
                    return (
                      <li
                        key={href}
                        className="text-xl"
                      >
                        <Link link={href} className={mobileMenuLinkClasses}>{name}</Link>
                      </li>
                    )
                  }

                  // submenu
                  return (
                    <li key={href} className="text-xl">
                      <Link link={href} className={mobileMenuLinkClasses}>{name}</Link>
                      <ul className="pl-5">
                        {
                          submenu.map((subItem) => {
                            const {name: subName, href: subHref} = subItem
                            return (
                              <li
                                key={`${subName}-${subHref}`}
                                className="text-xl"
                              >
                                <Link link={subHref} className={mobileMenuLinkClasses}>{subName}</Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
};





export default connect(MobileMenu);
