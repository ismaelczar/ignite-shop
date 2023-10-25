import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/components/product"
import { ValueFormatter } from "@/utils/formatter"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Stripe from "stripe"


interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    priceId: string
  }
}


export default function Clientes({ product }: ProductProps) {

  function handleByProduct() {
    console.log(product.priceId)
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button onClick={handleByProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_OphEf67Gr7HXVQ' } }
    ],
    fallback: true
  }
}



export const getStaticProps: GetStaticProps = async ({ params }: any) => {


  const productId = String(params.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price

  return {

    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: ValueFormatter.format(price.unit_amount !== null
          ? price.unit_amount / 100
          : 0),
        description: product.description,
        priceId: price.id,
      }
    }
  }

}