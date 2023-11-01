import Image from "next/image";
import Img from '@/assets/image.svg'
import { Close, Content, Details, ImageContainer, Overlay, ProductsSelected, Product, ProductsContainer, Title, Summary, Separator } from "./styled";
import { X } from "phosphor-react";
import { useState } from "react";

import { useShoppingCart } from 'use-shopping-cart'
import dynamic from 'next/dynamic';

export default function Cart() {

  interface ProductProps {
    id: string;
    imageUrl: string;
    description: string;
    price: string
  }

  const [products, setProducts] = useState<ProductProps[]>([])
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <Overlay>
      <Content>

        <ProductsSelected>
          <Close asChild>
            <button>
              <X size={24} weight="bold" />
            </button>
          </Close>

          <Title>Sacola de compras</Title>

          <ProductsContainer>
            <Product>
              <ImageContainer>
                <Image src={Img} alt="" />
              </ImageContainer>

              <Details>
                <small>Camiseta Beyond the Limits</small>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </Details>
            </Product>

            <Product>
              <ImageContainer>
                <Image src={Img} alt="" />
              </ImageContainer>

              <Details>
                <small>Camiseta Beyond the Limits</small>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </Details>
            </Product>
          </ProductsContainer>
        </ProductsSelected>


        <Summary>
          <div>
            <Separator>
              <p>Quantidades</p>
              <p>{cartCount} Itens</p>
            </Separator>

            <Separator>
              <b>Valor total</b>
              <strong>R$ {totalPrice}</strong>
            </Separator>
          </div>

          <button onClick={redirectToCheckout}>Finalizar compra</button>
        </Summary>
      </Content>

    </Overlay>
  )

}