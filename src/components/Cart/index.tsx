import Image from "next/image";
import {
  Close,
  Content,
  Details,
  ImageContainer,
  Overlay,
  ProductsSelected,
  Product,
  ProductsContainer,
  Title,
  Summary,
  Separator,
  Empty,
  Control
} from "./styled";
import { X } from "phosphor-react";

import { useShoppingCart } from 'use-shopping-cart'
import axios from "axios";


export default function Cart() {

  const {
    totalPrice,
    cartDetails,
    cartCount,
    removeItem,
    incrementItem,
    decrementItem,
    redirectToCheckout
  } = useShoppingCart()

  const products = cartDetails ? Object.keys(cartDetails).map(item => cartDetails[item]) : [];

  async function handleByProduct() {

    try {
      const response = await axios.post('/api/checkout', {
        products: products
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      alert('Falha ao redirencionar ao checkout!')
    }


  }

  console.log(cartDetails)

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
                        <Control>
                          <button onClick={() => decrementItem(product.id)}>-</button>
                          <span>{product.quantity}</span>
                          <button onClick={() => incrementItem(product.id)}>+</button>
                          <div>
                            <button onClick={() => removeItem(product.id)}>Remover</button>
                          </div>
                        </Control>
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
                  <p>{cartCount} Itens</p>
                </Separator>

                <Separator>
                  <b>Valor total</b>
                  <strong>R$ {totalPrice?.toFixed(2)}</strong>
                </Separator>
              </div>
              <button onClick={handleByProduct}>Finalizar compra</button>
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