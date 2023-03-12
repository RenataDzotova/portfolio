import { FlexBox, Image, Text } from "@/styles/globals"
import { motion, useAnimation } from 'framer-motion'; 


export default function Card({
    img='src',
    name='name',
    role="role",
    description='description'
}){
    return(
        <FlexBox margin="35px" width="800px" height="fit-content" fontFamily="PT Sans" bgColor="#F2F2F2" color="#121212" boxShadow="4px 4px 15px 3px rgba(0, 0, 0, 0.15)" borderRadius="15px">
          <Image src={img} width="400px" height="370px" borderRadius="15px 0 0 15px"></Image>
          <FlexBox fontFamily="PT Sans" dir="column" alignItems="start" justifyContent="space-around" width="100%" padding="20px 35px" height="370px">
            <Text fontSize="43px">{name}</Text>
            <Text color="#6C6C6C" fontSize="19px" margin="5px 0 0 0">{role}</Text>
            <Text lineHeight="150%" fontSize="19px" margin="10px 0 0 0">{description}</Text>
          <FlexBox bgColor="#252525" padding="8px 17px 8px 17px" borderRadius="8px" margin="30px 0 0 0">
            <Text fontSize="20px" color="white">View Study Case</Text>
          </FlexBox>
          </FlexBox>
        </FlexBox>
    )
}