import { Global, css, connect, styled, Head } from 'frontity';
import Link from '@frontity/components/link';
import MobileMenu from './mobileMenu';
import { useEffect } from 'react';

const DefaultMenu = ({
  state,
  actions
}) => {

  const topLevelMenuListItemClasses = "px-0 text-sm lg:text-base lg:px-2 xl:text-xl"
  const topLevelMenuLinkClasses = "px-1 py-3 xl:px-3 hover:underline focus:underline active:underline underline-offset-2 hover:decoration-1 focus:decoration-1 active:decoration-1"

  useEffect(() => {
    state.theme.menu.forEach((item1) => {
      actions.source.fetch(item1.href);
      if (item1.submenu) {
        item1.submenu.forEach((item2) => {
          actions.source.fetch(item2.href)
        })
      }
    })
  }, [])

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-skintRed scale-[2] ml-auto shrink-0 sm:hidden" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" onClick={actions.theme.toggleMobileMenu}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <div className="hidden sm:block">
        <nav className="w-full relative flex flex-row justify-between">
          <ul className="flex font-light">
            {
              state.theme.menu.map((menuItem) => {
                const {name, href, submenu} = menuItem;
                if (!submenu) {
                  return (
                    <li
                      key={href}
                      className={topLevelMenuListItemClasses}
                    >
                      <Link link={href} className={topLevelMenuLinkClasses}>{name}</Link>
                    </li>
                  )
                }

                // submenu
                return (
                  <li
                    key={href}
                    className={`${topLevelMenuListItemClasses} group`}
                  >
                    <Link link={href} className={topLevelMenuLinkClasses}>{name}</Link>
                    <ul className="bg-white pr-5 py-3 absolute flex flex-col rounded-md shadow-2xl hidden group-hover:block">
                      {
                        submenu.map((subItem) => {
                          const {name: subName, href: subHref} = subItem
                          return (
                            <li
                              key={`${subName}-${subHref}`}
                              className="text-xl flex"
                            >
                              <Link link={subHref} className={topLevelMenuLinkClasses}>{subName}</Link>
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
    </>
  )
};





export default connect(DefaultMenu);
