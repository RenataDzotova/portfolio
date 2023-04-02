import { FlexBox, Image, Text } from "@/styles/globals"
import { motion, useAnimation } from 'framer-motion'; 


export default function Card({
    img='src',
    name='name',
    role="role",
    description='description'
}){
    return(
        <FlexBox margin="35px" width="725px" displayM='flex'dirM="column" widthM="330px" height="fit-content" fontFamily="PT Sans" bgColor="#F2F2F2" color="#121212" boxShadow="4px 4px 15px 3px rgba(0, 0, 0, 0.15)" borderRadius="15px">
          <FlexBox bgImage={img} width="550px" widthM='330px' height="305px" borderRadius="15px 0 0 15px" borderRadiusM='15px 15px 0 0'></FlexBox>
          <FlexBox fontFamily="PT Sans" dir="column" alignItems="start" justifyContent="space-around" width="100%" padding="20px 35px" height="305px">
            <Text fontSize="37px" color='#222222'>{name}</Text>
            <Text color="#6C6C6C" fontSize="18px" margin="5px 0 0 0">{role}</Text>
            <Text lineHeight="150%" fontSize="17px" margin="10px 0 0 0" color='#222222'>{description}</Text>
          <FlexBox bgColor="#434343"  hoverBgColor='#767fd5' padding="8px 17px 8px 17px" borderRadius="8px" margin="30px 0 0 0">
            <Text fontSize="17px" color="white">View Study Case</Text>
          </FlexBox>
          </FlexBox>
        </FlexBox>
    )
}