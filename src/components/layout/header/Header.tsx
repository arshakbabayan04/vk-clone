import { Search } from "@mui/icons-material";
import styles from './Header.module.css';
import { Container } from "@mui/material";

const Header = () => {
  return ( 
    <header className={styles.header}>
      <Container maxWidth="xl" sx={{display: "flex", alignItems: "center", height: "100%"}}> 
        <a className={styles.header__logo} href="/">
          <img src='/vk-logo.png' alt="Logo" />
        </a>
        <div className={styles.header__search}>
          <Search fontSize="small" sx={{color: "black", opacity: '0.6'}} />
          <input name="search" type="text" placeholder="Поиск" />
        </div>
      </Container>
    </header>
  );
}
 
export default Header; 