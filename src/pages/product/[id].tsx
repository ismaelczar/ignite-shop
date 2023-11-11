import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/components/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"

import { useShoppingCart } from "use-shopping-cart"


interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    priceId: string
    currency: string
    sku: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()



  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button onClick={() => addItem(product, { count: 1 })}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
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
        price: price.unit_amount !== null
          ? price.unit_amount / 100
          : 0,
        description: product.description,
        priceId: price.id,
        sku: product.id,
        currency: 'USD',
      }
    }
  }

}