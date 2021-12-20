import { Global, css, connect, styled, Head } from 'frontity';
import Link from '@frontity/components/link';
import MobileMenu from './mobileMenu';
import DefaultMenu from './defaultMenu';

const Navigation = ({
  state,
  actions
}) => {
  const {isMobileMenuOpen} = state.theme


  if (!isMobileMenuOpen) {
    return (
      <DefaultMenu />
    )
  }

  return (
    <>
      <DefaultMenu />
      <MobileMenu />
    </>
  )
};





export default connect(Navigation);
