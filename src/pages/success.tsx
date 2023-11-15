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
          Uhuul <strong>{finished.name}</strong>, sua  já está a caminho da sua casa.
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

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })


  const customerName = session.customer_details?.name
  const products = session.line_items?.data.flatMap(item => {
    const product = item.price?.product as Stripe.Product

    return ({
      imageUrl: product.images[0]
    })

  })

  const finished = {
    name: customerName,
    images: products
  }


  return {
    props: {
      finished
    }
  }

}
