import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/comps/navbar'
import { FlexBox, Image, Text } from '@/styles/globals'
import Card from '@/comps/card'
import { motion, useAnimation } from 'framer-motion'; 
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import LoadingAnimation from '@/public/airplane.json'
import Lottie from 'lottie-react'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const router = useRouter()

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const GetPersona = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 3000); // set the timeout for 2 seconds
  };

  return (
    <>
      <Head>
        <title>Renata Dzotova</title>
        <meta name="description" content="Renata Dzotova portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logogray.svg" />
      </Head>

      <FlexBox className='mainCont' overflowY='hidden' dir="column" linearGradient="linear-gradient(180deg,#717ADD 0%,rgb(255 247 247) 75%)" zIndex="-100">

        <NavBar></NavBar>

        {/* swings */}
        <motion.div initial={{position:'absolute', top:'0', left:"18vw"}} animate={{rotate: [-20, 20, -20]}} transition={{ease: "easeInOut", duration:'4', repeat: Infinity}}><Image src='/guys.svg' width="120px" position="absolute" top="-23vh" left="20%" opacity='50%' zIndex='-100'></Image></motion.div>

        {/* bird */}
        <motion.div initial={{position:'absolute', y: -1100, x: 1400, rotate:0}} animate={{y: -1400, x:-1500, rotate:20}} transition={{duration:'6', ease:'linear', delay:2}}>
          <Image src='/bird.svg' width="50px" zIndex='-200'></Image>
        </motion.div>

        {/* bird */}
        <motion.div initial={{position:'absolute', y: -950, x: -1500, rotate:30}} animate={{y: -500, x:1400, rotate:50}} transition={{duration:'6', ease:'linear', delay:6}}>
          <Image src='/bird2.svg' width="80px" zIndex='-200'></Image>
        </motion.div>

        {/* cloud */}
        <motion.div initial={{position:'absolute', y: -1500, x: -1400}} animate={{y: -1500, x:1400}} transition={{duration:'60', ease:'linear'}}>
          <Image src='/cloudyy.svg' width="400px" zIndex='-300'></Image>
        </motion.div>

        {/* cloud */}
        <motion.div initial={{position:'absolute', y: -1530, x: -1400}} animate={{y: -1530, x:1400}} transition={{duration:'60', ease:'linear', delay:10}}>
          <Image src='/cloudyy.svg' width="300px" zIndex='-300'></Image>
        </motion.div>

        {/* cloud */}
        <motion.div initial={{position:'absolute', y: -1400, x: -1400}} animate={{y: -1400, x:1400}} transition={{duration:'60', ease:'linear', delay:15}}>
          <Image src='/cloudyy.svg' width="400px" zIndex='-300'></Image>
        </motion.div>

        {/* cloud */}
        <motion.div initial={{position:'absolute', y: -1450, x: -1400}} animate={{y: -1450, x:1400}} transition={{duration:'60', ease:'linear', delay:25}}>
          <Image src='/cloudyy.svg' width="350px" zIndex='-300'></Image>
        </motion.div>

        {/* name */}
        <FlexBox className='landing' dir="column" height="100vh" width="100vw" zIndex='0'>
        <motion.div initial={{opacity:'0'}} animate={{opacity:1}} transition={{duration:'3'}}>
            <FlexBox dir="column" color="white" margin="25vh 0 0 0">
              <Text fontSize="80px" fontSizeM='60px' fontFamily="Pompiere" textAlign="center">Renata Dzotova</Text>
              <Text fontSize="36px" fontSizeM='30px' fontFamily="PT Sans Narrow" textAlign="center">UX/UI designer</Text>
            </FlexBox>
        </motion.div>

        <motion.div initial={{opacity:'0'}} animate={{opacity:1}} transition={{duration:'3'}}>
            <FlexBox dir="column" color="white" fontSize="22px" fontSizeM='18px' margin="35vh 0 0 0" marginM='35vh 3vh 0 3vh' fontFamily="PT Sans" textAlign='center'>
              {/* <Text textAlign="center">A problem solver with design sensibility and sky-high standards.</Text> */}
              
              <Typewriter
                onInit={(typewriter) => {
                typewriter.pasteString('A problem solver with design sensibility')
                typewriter.typeString(' and high')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1500)
                .deleteChars(4)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
                typewriter.typeString(' sky-high standards.')
                }}

              />
              <Text textAlign="center">I can find a creative solution to any challenge. </Text>
            </FlexBox>
          </motion.div>
        </FlexBox>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} initial={{ y: 300}} whileInView={{ y: 0}} viewport={{ once: true, amount: 0.1 }}>
          <Card 
          img="/rooty.jpg"
          name="Rooty"
          role="UI/UX design & Font-end Development"
          description="A freelance mobile marketplace allowing BCIT students to offer their interdisciplinary skillset to each other."
          onClick={()=>router.push("http://portfolio.renatadzotova.ca/Rooty/")}>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} initial={{ y: 300}} whileInView={{ y: 0}} viewport={{ once: true, amount: 0.2 }}>
          <Card 
          img="/westp.jpg"
          name="West Point Hotel"
          role="UI/UX design"
          description="A website for an imaginary luxury Caribbean resort West Point Hotel."
          onClick={()=>router.push("http://portfolio.renatadzotova.ca/west-point-hotel-2/")}>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} initial={{ y: 300}} whileInView={{ y: 0}} viewport={{ once: true, amount: 0.2 }}>
        <Card 
        img="/drinkupp.jpg"
        name="DrinkUp"
        role="UI/UX design & Font-end Development"
        description="Have you ever had difficulty choosing a cocktail at a bar? How do you know which one you will like?">
        </Card>
        </motion.div>

        {/* me */}
        <FlexBox margin='100px 0 0 0' bgImage="/back.png" width="100%" height='fit-content' bgPosition='center top' dir='column' dirM='column'>
          {/* <Image src="/back.png" width="100%"></Image> */}
          <FlexBox margin="150px 0 0 0" displayM='flex' dirM="column">
            <Image src="/me.png" width="450px"></Image>

            <FlexBox dir="column" margin="0 0 0 50px" height='570px' justifyContent='top' alignItems='left'>
                <Image src='/button.png' width='300px'></Image>
                <FlexBox dir='column' height='380px' justifyContent='space-between' alignItems='flex-start' margin='50px 0 0 0'>
                    <FlexBox dir='column' alignItems='flex-start'>
                        <Text maxWidth='370px' fontFamily="PT Sans" lineHeight='157%' letterSpacing='0.3px'>
                        My two favourite things in the world are pasta and human psychology. 
                        </Text>
                        <Text maxWidth='370px' fontFamily="PT Sans" lineHeight='157%' letterSpacing='0.3px'>
                        You may be wondering how it is related…
                        </Text>
                    </FlexBox>
                    <Text maxWidth='370px' fontFamily="PT Sans" lineHeight='157%' letterSpacing='0.3px'>
                    Well, UX design is just like cooking pasta al dente – it requires a perfect balance of form and function, with a focus on delivering a delightful experience to the end user.
                    </Text>
                    <Text maxWidth='370px' fontFamily="PT Sans" lineHeight='157%' letterSpacing='0.3px'>
                    Was it absolutely necessary to say this? No. But I felt the urge :)
                    </Text>
                    <FlexBox bgColor="#434343" fontFamily="PT Sans" hoverBgColor='#767fd5' padding="8px 17px 8px 17px" borderRadius="8px" margin="30px 0 0 0" onClick={()=>GetPersona()}>
                      <Text fontSize="17px" color="white">Generate a Persona</Text>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
          </FlexBox>
          {loading && <Lottie style={{height:300, width:300}} animationData={LoadingAnimation} loop={true}/>}
          {show==true && 
          <motion.div
          animate={{ y: 100}}
          transition={{ delay: 0 }}
          style={{display:'flex', justifyContent:'center'}}>
            <Image src='/persona.png' width='80%' margin='-60px 0 100px 0'></Image>
          </motion.div>
          }
          <FlexBox dir="column" width='100%'>
          <FlexBox color="#717ADD" fontFamily="Pompiere" margin="130px 25px 25px 25px" fontSize="40px">Let's connect!</FlexBox >
          <FlexBox>
          <Image margin="0px 25px 50px 25px" width="34px" src="/gmail.svg"></Image>
          <Image margin="0px 25px 50px 25px" width="30px" src="/linkedin.svg"></Image>
          <Image margin="0px 25px 50px 25px" width="30px" src="/instagram.svg"></Image>
          </FlexBox>
        </FlexBox>
        </FlexBox>

        {/* footer */}
        

      </FlexBox>
    </>
  )
}
