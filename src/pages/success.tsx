import { stripe } from "@/lib/stripe";
import { ImageContainer, Images, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  finished: {
    name: string;
    quantity: number;
    images: {
      imageUrl: string;
    }[]
  }
}

export default function success({ finished }: SuccessProps) {

  const ImageProductsUrl = finished.images

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <Images>
          {ImageProductsUrl.map(image => {
            return (
              <ImageContainer key={image.imageUrl}>
                <Image src={image.imageUrl} alt="" width={120} height={110} key={image.imageUrl} />
              </ImageContainer>
            )
          })}
        </Images>
        <p>
          Uhuul <strong>{finished.name}</strong>, sua compra de {finished.quantity} camisetas já está a caminho.
        </p>
        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id);

  function somaQuantity(acc: any, object: any) {
    return acc + object.quantity
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const quantityProducts = session.line_items?.data.reduce(somaQuantity, 0)
  const images = session.line_items?.data.flatMap(item => {
    const product = item.price?.product as Stripe.Product

    return ({
      imageUrl: product.images[0]
    })
  })

  const finished = {
    name: customerName,
    images: images,
    quantity: quantityProducts
  }

  return {
    props: {
      finished
    }
  }
}
