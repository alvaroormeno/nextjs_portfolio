import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

import ActiveSectionContextProvider from "@/src/contexts/ActiveSectionContext";
import ThemeContextProvider from "@/src/contexts/ThemeContext";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/src/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

import GoogleAnalytics from "@/src/components/GoogleAnalytics/GoogleAnalyticsScript";

export const metadata: Metadata = {
    title: "Alvaro | Dev Portfolio",
    description: "Alvaro is a full-stack web developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <head>
            <GoogleAnalytics />

  
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H6RNXKSYN9"></Script>
        <Script id="google-tag">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-H6RNXKSYN9')`}
        </Script> */}

        </head>
            <body className={`${inter.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
                {/* Color divs */}
                <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
                <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
                    <ThemeContextProvider>
                        <ActiveSectionContextProvider>
                            <Header/>
                            {children}
                            <Footer />
                            <Toaster position='top-right'/>
                        </ActiveSectionContextProvider>
                        <ThemeSwitch/>
                    </ThemeContextProvider>
                </body>
        </html>
    );
}
