import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/comps/navbar'
import { FlexBox, Image, Text } from '@/styles/globals'
import Card from '@/comps/card'
import { motion, useAnimation } from 'framer-motion'; 
import Typewriter from 'typewriter-effect';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlexBox className='mainCont' dir="column" linearGradient="linear-gradient(180deg, #717ADD 0%, rgba(113, 122, 221, 0.13) 100%)" zIndex="-100">

        <NavBar></NavBar>

        <motion.div initial={{position:'absolute', top:'0', left:"18vw"}} animate={{rotate: [-20, 20, -20]}} transition={{duration:'4', repeat: Infinity}}><Image src='/guys.svg' width="120px" position="absolute" top="-23vh" left="20%" opacity='50%' zIndex='-100'></Image></motion.div>

        <motion.div initial={{position:'absolute', y: -900, x: 1400, rotate:0}} animate={{y: -1200, x:-1500, rotate:30}} transition={{duration:'6', ease:'linear', delay:2}}>
          <Image src='/bird.svg' width="50px" zIndex='-200'></Image>
        </motion.div>

        <motion.div initial={{position:'absolute', y: -500, x: -1500, rotate:30}} animate={{y: -200, x:1400, rotate:50}} transition={{duration:'6', ease:'linear', delay:6}}>
          <Image src='/bird2.svg' width="80px" zIndex='-200'></Image>
        </motion.div>

        <FlexBox className='landing' dir="column" height="100vh" width="100vw" zIndex='0'>
            <FlexBox dir="column" color="white" margin="25vh 0 0 0">
              <Text fontSize="80px" fontFamily="Pompiere" textAlign="center">Renata Dzotova</Text>
              <Text fontSize="36px" fontFamily="PT Sans Narrow" textAlign="center">UX/UI designer</Text>
            </FlexBox>

            <FlexBox dir="column" color="white" fontSize="22px" margin="35vh 0 0 0" fontFamily="PT Sans" textAlign='center'>
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
        </FlexBox>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} initial={{ y: 300}} whileInView={{ y: 0}} viewport={{ once: true, amount: 0.1 }}>
          <Card 
          img="/rooty.jpg"
          name="Rooty"
          role="UI/UX design & Font-end Development"
          description="A freelance mobile marketplace allowing BCIT students to offer their interdisciplinary skillset to each other.">
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} initial={{ y: 300}} whileInView={{ y: 0}} viewport={{ once: true, amount: 0.2 }}>
          <Card 
          img="/westp.jpg"
          name="West Point Hotel"
          role="UI/UX design"
          description="A website for an imaginary luxury Caribbean resort West Point Hotel.">
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

        <FlexBox dir="column">
          <FlexBox color="#717ADD" fontFamily="Pompiere" margin="130px 25px 25px 25px" fontSize="40px">Let's connect!</FlexBox >
          <FlexBox>
          <Image margin="0px 25px 50px 25px" width="60px" src="/gmail.svg"></Image>
          <Image margin="0px 25px 50px 25px" width="50px" src="/linkedin.svg"></Image>
          <Image margin="0px 25px 50px 25px" width="50px" src="/instagram.svg"></Image>
          </FlexBox>
        </FlexBox>

      </FlexBox>
    </>
  )
}
