import Image from "next/image";
import { Close, Content, Details, ImageContainer, Overlay, ProductsSelected, Product, ProductsContainer, Title, Summary, Separator, Empty } from "./styled";
import { X } from "phosphor-react";

import { DebugCart, useShoppingCart } from 'use-shopping-cart'


export default function Cart() {

  const { totalPrice, cartDetails, removeItem } = useShoppingCart()
  const products = cartDetails ? Object.keys(cartDetails).map(item => cartDetails[item]) : [];

  console.log(products)

  return (
    <Overlay>
      <Content>

        {products.length > 0 ? (
          <>
            <ProductsSelected>
              <Close asChild>
                <button>
                  <X size={24} weight="bold" />
                </button>
              </Close>

              <Title>Sacola de compras</Title>

              <ProductsContainer>
                {
                  products.map(product => (
                    <Product key={product.id}>
                      <ImageContainer>
                        <Image src={product.imageUrl} alt="" width={94} height={94} />
                      </ImageContainer>

                      <Details>
                        <small>{product.name}</small>
                        <strong>{product.price}</strong>
                        <button onClick={() => removeItem(product.id)}>Remover</button>
                      </Details>
                    </Product>
                  ))
                }
              </ProductsContainer>
            </ProductsSelected>
            <Summary>
              <div>
                <Separator>
                  <p>Quantidades</p>
                  <p>{products.length} Itens</p>
                </Separator>

                <Separator>
                  <b>Valor total</b>
                  <strong>R$ {totalPrice}</strong>
                </Separator>
              </div>

              <button>Finalizar compra</button>
            </Summary>
          </>
        ) :
          (
            <Empty>
              <strong>Carinho vazio...</strong>
              <small>Volte aqui quando tiver adicionado os seus produtos</small>
            </Empty>
          )}

      </Content>
    </Overlay>
  )

}