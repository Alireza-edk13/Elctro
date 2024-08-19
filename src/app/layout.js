import ReduxProvider from '@/redux/ReduxProvider';
import './globals.css'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const morabba = localFont({
  src: [
    {
      path: '../../public/fonts/Morabba/woff2/Morabba-Light.woff2',
      style: "normal",
      weight: "400",
    },
    {
      path: '../../public/fonts/Morabba/woff2/Morabba-Medium.woff2',
      style: "normal",
      weight: "500"
    },
    {
      path: '../../public/fonts/Morabba/woff2/Morabba-Bold.woff2',
      style: "normal",
      weight: "600",
    },

  ],
  variable: "--font-morabba",
  style: "normal",
  display: "swap",
});
const dana = localFont({
  src: [
    {
      path: '../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2',
      style: "normal",
      weight: "400",
    },
    {
      path: '../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2',
      style: "normal",
      weight: "500"
    },
    {
      path: '../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2',
      style: "normal",
      weight: "600",
    },

  ],
  variable: "--font-dana",
  style: "normal",
  display: "swap",
});


export const metadata = {
  title: 'Elctro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl' >
      <ReduxProvider>
        <body className={` ${dana.variable}  ${morabba.variable} font-dana text-base text-[#2a322d] font-medium`}>
          {children}
          <ToastContainer rtl bodyClassName={"font-morabba"} autoClose={3000} />
        </body>
      </ReduxProvider>
    </html>

  )
}
