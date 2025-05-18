
'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {Provider} from "react-redux"
import{store}  from '@/lib/store'
import Profile from "./profile/page";
import Link from "next/link";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "./_Component/Navbar/page";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
      <Provider store={store}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

   
        <Navbar/>

        <Profile/>
        {children}
        
      </body>
      </Provider>
      </AppRouterCacheProvider>
    </html>
  );
}
