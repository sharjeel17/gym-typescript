import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const flexbetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  
  return (
    <nav>

      {/* top of page and contents inside are centered (vertically) and
      have equal spacing between them
      content is above everything (z)  takes full width and has 24px padding around*/}
      <div className={`${navbarBackground} ${flexbetween} fixed top-0 z-30 w-full py-6` }>

        {/* inner div and contents inside are centered (vertically) and
        have equal spacing between them
        83% width with the rest being margin around the container*/}
        <div className={`${flexbetween} w-5/6 mx-auto`}>

          {/* inner div and contents inside are centered (vertically) and
          have equal spacing between them
          use full width of the container div is inside of (width comes from above container)
          items inside container have gap of 24px (x and y)*/}
          <div className={`${flexbetween} w-full gap-16`}>

            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {/* Change navbar according to screen size */}
            { isAboveMediumScreens ? 
            (
            <div className={`${flexbetween} w-full gap-8`}>

              {/* INNER LEFT SIDE */}
              <div className={`${flexbetween} gap-8 text-md`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                
              </div>

              {/* INNER RIGHT SIDE */}
              <div className={`${flexbetween} gap-8`}>
                <p>
                  Sign In
                </p>
                <ActionButton setSelectedPage = {setSelectedPage}>
                  Become a Member
                </ActionButton>
                
              </div>
            </div> 
            )
            // If screen size is below medium screens
            : (
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {/* Is not above medium screen and is menu toggled? */}
      {(!isAboveMediumScreens) && (isMenuToggled) && (
        <div className="fixed right-0 bottom-0 h-full w-[300px] z-40 bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-start p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text=gray-400"/>
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="flex flex-col items-center gap-10 text-lg">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          </div>
        </div>
      ) }
    </nav>
  )
};

export default Navbar;