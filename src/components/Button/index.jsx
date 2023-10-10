import { Container } from './styles'


// eslint-disable-next-line react/prop-types
export function Button({ title, loading, ...rest }){

  return(
  <Container
    type="button"
    disable={loading}
    {...rest}
  >
    { loading ? 'Carregando...' : title }
  </Container>
  );
}