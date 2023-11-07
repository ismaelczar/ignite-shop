import Image from "next/image"
import Logo from '@/assets/logoIgnite.svg'
import { BagContainer, BagLength, Container, Header } from "./styled"
import { Bag } from "phosphor-react"

import * as Dialog from '@radix-ui/react-dialog';
import Cart from "../Cart";
import { useShoppingCart } from "use-shopping-cart";


interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

  const { cartCount } = useShoppingCart()

  return (
    <Container>
      <Header>
        <Image src={Logo} alt="" />

        <Dialog.Root>

          <Dialog.Trigger asChild>
            <BagContainer>
              <Bag size={18} weight='bold' />
              <BagLength>
                {cartCount}
              </BagLength>
            </BagContainer>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Cart />
          </Dialog.Portal>

        </Dialog.Root>

      </Header>

      {children}

    </Container >
  )
}