import styled from "styled-components";

export const FlexBox = styled.div`
    display:flex;
    justify-content:${props=>props.justifyContent || "center"};
    align-items:${props=>props.alignItems || "center"};
    flex-direction:${props=>props.dir || "row"};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin || "0px"};
    min-height: ${props=>props.minHeight};
    max-height: ${props=>props.maxHeight};
    background-image: ${props=>props.linearGradient || "none"}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition || "center"};
    background-size: ${props=>props.bgSize || "cover"};
    background-repeat: ${props=>props.bgRepeat};
    border-radius:${props=>props.borderRadius};
    filter: ${props=>props.filter};
    border: ${props=>props.border};
    z-index:${props=>props.zIndex};
    position: ${props=>props.position};
    top: ${props=>props.top};
    left:${props=>props.left};
    bottom: ${props=>props.bottom};
    border-bottom-style: ${props=>props.borderBottom};
    box-shadow: ${props=>props.boxShadow};
    border-top: ${props=>props.topBorder};
    border-bottom: ${props=>props.bottomBorder};
    color: ${props=>props.color};
    font-weight: ${props=>props.fontWeight};
    font-size: ${props=>props.fontSize};
    font-family: ${props=>props.fontFamily};
    cursor: ${props=>props.cursor};
    max-width: ${props=>props.maxWidth};
    min-width: ${props=>props.minWidth};
    overflow-y: ${props=>props.overflowY};
    overflow-anchor: ${props=>props.overflowA};
    overflow-x: ${props=>props.overflowX};
    z-index: ${props=>props.zIndex};
    text-align:${props=>props.textAlign};
    :hover {
    text-decoration: ${props => props.textDecoration || ""};
    text-decoration-thickness: ${props => props.textDecorThick || "2px"};
    }
`


export const Image = styled.img`
    min-height:${props=>props.minHeight};
    max-height:${props=>props.maxHeight};
    height:${props=>props.height};
    width:${props=>props.width};
    object-fit: ${props=>props.bgSize || "cover"};
    object-position: ${props=>props.bgPosition};
    background-repeat: no-repeat;
    margin:${props=>props.margin};
    display:flex;
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    bottom: ${props=>props.bottom};
    border-radius: ${props=>props.borderRadius};
    margin: ${props=>props.margin}
    z-index: ${props=>props.zIndex}
    opacity: ${props=>props.opacity}
`


export const Text = styled.p`
font-family: ${props=>props.fontFamily};
color:${props=>props.color};
font-size: ${props=>props.fontSize};
font-weight: ${props=>props.fontWeight};
margin: ${props=>props.margin};
width: ${props=>props.width};
padding: ${props=>props.padding};
width:${props=>props.width};
text-align:${props=>props.textAlign};
line-height:${props=>props.lineHeight};
`


export const Paragraph = styled.p`
    // font-family: 'Montserrat', cursive;  
    font-size:${props=>props.fSize || "16px"};
    font-weight:${props=>props.fWeight};
    color:${props=>props.color};
    padding:${props=>props.padding};
    width:${props=>props.width};
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    cursor:${props=>props.cursor};
    text-shadow:${props=>props.textShadow};
    color:${props=>props.color || "white"};
    text-align:${props=>props.textAlign || "center"};
    line-height: ${props=>props.lineHeight};
`
