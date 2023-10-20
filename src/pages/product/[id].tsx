import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/components/product"
import { useRouter } from "next/router"

export default function Clientes() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,99</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt excepturi nam fuga mollitia illo ratione! Natus iure tenetur ducimus distinctio beatae veniam tempora dolor dignissimos quidem, quo, atque quia magnam.</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}