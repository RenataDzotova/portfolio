import '@/styles/globals.css'
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  return (

  <Component {...pageProps} />

)}
