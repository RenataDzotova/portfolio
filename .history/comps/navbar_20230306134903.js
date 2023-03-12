import { FlexBox, Image } from "@/styles/globals"

export default function NavBar({
    value="",
    onChange = ()=>{},
    onKeyDown = ()=>{}
}){
    return(
        <FlexBox fontFamily="PT Sans Narrow" position="fixed" alignItems="end" bgColor="rgba(113, 122, 221, 0.4);" top="0" width="100vw" height="60px" justifyContent="space-between" padding="10px 25px 10px 25px" zIndex="2">
          <FlexBox width="80%" justifyContent="flex-start">
          <Image className="logoMobile" src="/logo.svg" width="30px"></Image>
          </FlexBox>

          <FlexBox justifyContent="space-around" width="420px" color="white" fontSize="28px">
            <FlexBox margin="0 15px 0 0">About</FlexBox>
            <FlexBox>Creative</FlexBox>
            <FlexBox>Front-end</FlexBox>
          </FlexBox>
        </FlexBox>
    )
}