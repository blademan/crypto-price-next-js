import Head from "next/head";
import Link from "next/link";
import { type ReactNode } from 'react';
import { Github } from "./GitHub/Github";



interface LayoutProps {
  children: ReactNode;
  title?: string | undefined;
}

const Layout = ({ children, title = "Crypto Tracker" }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Crypto Tracker" />
        <meta property="og:image" content="https://crypto-tracker-zeta.vercel.app/meta-028-crypto.png" />
        <meta
          property="og:image:alt"
          content="A card with the Bitcoin logo and the cryptocurrency price. Click to visit website."
        />
        <meta property="og:description" content="Project by Emmanuel Jose" />
        <meta property="og:url" content="https://crypto-tracker-zeta.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="A cryptocurrency price tracking app. Click to visit website." />
        <meta name="theme-color" content="#1F1E1E" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Next.js, crypto tracker, cryptocurrency, bitcoin"
        />
        <meta name="author" content="Emmanuel Jose" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">

        <Github />
      </header>


      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#150c22] to-[#232669]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Link href='/'>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Crypto <span className="text-[hsl(280,100%,70%)]">Price</span> App
            </h1>
          </Link>
          <div className="grid w-full">

            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;

