import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({text, onSelect}) => {
  return (
    <a href="#" className="menu-item" onClick={() => onSelect(text)}>
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [pageTitle, setPageTitle] = useState('Domů')

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  }

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
  }

  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu--closed"}>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem}/>
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem}/>
            <MenuItem text="Náš tým" onSelect={handleSelectItem}/>
            <MenuItem text="Blog" onSelect={handleSelectItem}/>
            <MenuItem text="Kontakt" onSelect={handleSelectItem}/>
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
