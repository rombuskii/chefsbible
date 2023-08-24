import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useUser} from "@auth0/nextjs-auth0/client"
import Cover from '../components/Cover'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {user, error, isLoading} = useUser();
  return (
    <div className='flex flex-col items-center'>
      <Cover text={"Welcome To The Chef's Bible!"} bg={"bg-cyan-500"} col={"text-slate-500"}/>
      <Cover text={"Your one-stop shop for every recipe you'll ever need"} bg={"bg-green-500"} col={"text-white"}/>
    </div>
  )
}
