import './styles/styles.css'
import styles from './styles/NavBar.module.css'
import { StyledButton, Wrapper, StyledBootstrapButton, MyGreenButton } from './styles/StyledNavBar';
import Button from 'react-bootstrap/Button';


export const NavBar = () => {
//   const styles = {
//     marginTop: "200px",
//     backgroundColor: "blue",
//   };

  return (
    <Wrapper>
    <div
      style={{
        marginTop: "200px",
        backgroundColor: "blue",
      }}
    >
      <button className="navBarButtonOne">Click me One</button>
      <button className={styles.buttonTwo}>Click me Two</button>
      <button className={styles.buttonThree}>Click me</button>
      <MyGreenButton>Click me Four</MyGreenButton>
      <Button variant='warning'>Click me Five</Button>
      <StyledBootstrapButton variant="secondary">Click me Six</StyledBootstrapButton>
    </div>
    </Wrapper>
  );
};
