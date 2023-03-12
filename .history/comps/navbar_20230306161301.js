import { FlexBox, Image } from "@/styles/globals"
import { useState, useEffect } from 'react';

export default function NavBar({
    value="",
    onChange = ()=>{},
    onKeyDown = ()=>{},
})
{
  const [bgColor, setBgColor] = useState("rgba(113, 122, 221, 0)")
    
    useEffect(() => {
      const handleScroll = () => {
          const scrollPos = window.pageYOffset;
          if (scrollPos > 0) {
              setBgColor("rgba(113, 122, 221, 1)");
          } else {
              setBgColor("rgba(113, 122, 221, 0)");
          }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

    return(
        <FlexBox fontFamily="PT Sans Narrow" position="fixed" alignItems="end" bgColor={bgColor} top="0" width="100vw" height="60px" justifyContent="space-between" padding="10px 50px 10px 50px" zIndex="2">
          <FlexBox width="50%" justifyContent="flex-start">
          <Image className="logoMobile" src="/logo.svg" width="30px"></Image>
          </FlexBox>

          <FlexBox justifyContent="space-between" width="420px" color="white" fontSize="28px">
            <FlexBox margin="0 15px 0 0">About</FlexBox>
            <FlexBox>Creative</FlexBox>
            <FlexBox>Front-end</FlexBox>
          </FlexBox>
        </FlexBox>
    )
}