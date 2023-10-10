import { Container } from './style'

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isActive = false, ...rest }){
  return (
    <Container type="button" $isactive={isActive} {...rest}>
      {title}
    </Container>
  )
}