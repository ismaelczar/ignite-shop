import { HomeContainer, Product } from "@/styles/components/home"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'

import Logo1 from '@/assets/1.png'
import Logo2 from '@/assets/2.png'
import Logo3 from '@/assets/3.png'

import 'keen-slider/keen-slider.min.css'


export default function Home() {

  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,

    }
  })

  return (
    <HomeContainer ref={slideRef}>
      <Product className="keen-slider__slide">
        <Image src={Logo1} width={520} height={480} alt=" " />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Logo2} width={520} height={480} alt=" " />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Logo3} width={520} height={480} alt=" " />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Logo3} width={520} height={480} alt=" " />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
