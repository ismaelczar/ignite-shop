import Head from "next/head"
import { HomeContainer, Product, Separator } from "./styled"
import Image from "next/image"
import SkeletonImg from '@/assets/skeleton.svg'

export default function Skeleton() {
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer>



        <Product>
          <Image src={SkeletonImg} alt="" />


          <footer>
            <Separator>
              <strong></strong>
              <span></span>
            </Separator>
            <button>
            </button>
          </footer>
        </Product>



      </HomeContainer>
    </>
  )

}