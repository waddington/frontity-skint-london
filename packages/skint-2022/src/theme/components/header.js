import { Global, css, connect, styled, Head } from 'frontity';
import Link from '@frontity/components/link';
import Navigation from './navigation'

const Header = ({
  state,
  actions
}) => {

  return (
    <>
      {/*<header className="w-full bg-white border-solid border-skintRed border-0 border-b">*/}
      <header className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto px-8 py-5 flex flex-row justify-between items-center">
          <img src="https://www.skintlondon.com/wp-content/uploads/2014/03/431x80px-Logo-01.png" alt="The Skint London brand logo." className="max-w-[50%] sm:max-w-[25%] lg:max-w-xs shrink" />
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default connect(Header);
