import { Search } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { Container } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [focused, setFocused] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');

  return ( 
    <header className={styles.header}>
      <Container maxWidth="xl" sx={{display: "flex", alignItems: "center", height: "100%"}}> 
        <a className={styles.header__logo} href="/">
          <img src='/vk-logo.png' alt="Logo" />
        </a>
        <div className={styles.header__search}>
          {!focused && 
            <Search 
              id="search-icon" 
              fontSize="small" 
              sx={{color: "black", opacity: '0.6'}} 
            />
          }
          <input 
            name="search" 
            type="text" 
            placeholder="Поиск" 
            value={headerSearch}
            onChange={(e) => setHeaderSearch(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {focused && 
            <button
              type="button"
              className={styles.clearButton}
              onPointerDown={(e) => {
                e.preventDefault();
                setHeaderSearch("");
              }}
              aria-label="Очистить поиск"
            >
              <CloseIcon fontSize="small" sx={{cursor: "pointer"}} />
            </button>
          }
        </div>
      </Container>
    </header>
  );
}
 
export default Header; 