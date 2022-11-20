import { toast } from 'react-toastify';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

const customIdSuccess = 'success';
const customIdError = 'error';

export default function Login() {
  toast.success('Oie, sucesso!', {
    toastId: customIdSuccess,
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
  toast.error('Oie, error!', {
    toastId: customIdError,
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
  return (
    <Container>
      <Title>
        Login
        <small> Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
