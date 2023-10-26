import logo from '@assets/logo.png';
import ellipse from '@assets/ellipse.png';

import { Avatar, Container, Logo } from "./styles"

export const Header = () => {
  return (
    <Container>
      <Logo source={logo}/>
      <Avatar source={ellipse}/>
    </Container>
  )
}