import Image from "next/image";
import Img from '@/assets/image.svg'
import { CartContainer, Details, ProductSessionSelected, Products } from "./styled";

import * as Dialog from '@radix-ui/react-dialog'

export default function Cart() {

  return (
    <>
      <CartContainer>
        <Dialog.Close asChild>
          <button>X</button>
        </Dialog.Close>

        <ProductSessionSelected>
          <Products>
            <Dialog.Title>Sacola de compras</Dialog.Title>
            <div>
              <Image src={Img} alt="" />
              <div>
                <small>Camiseta Beyond the Limits</small>
                <strong>R$ 79,90</strong>
                <p>Remover</p>
              </div>
            </div>

            <div>
              <Image src={Img} alt="" />
              <div>
                <small>Camiseta Beyond the Limits</small>
                <strong>R$ 79,90</strong>
                <p>Remover</p>
              </div>
            </div>

            <div>
              <Image src={Img} alt="" />
              <div>
                <small>Camiseta Beyond the Limits</small>
                <strong>R$ 79,90</strong>
                <p>Remover</p>
              </div>
            </div>
          </Products>

          <Details>
            <div>
              <p>Quantidades</p>
              <p>3 Itens</p>
            </div>

            <div>
              <small>Valor total</small>
              <strong>100,00</strong>
            </div>
          </Details>
        </ProductSessionSelected>
      </CartContainer>

    </>
  )
}