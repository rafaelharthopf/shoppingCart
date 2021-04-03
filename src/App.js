import React, {useState} from 'react';
import './App.css';
import Produtos from './Components/Products';
import Cart from './Components/Cart';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';




const PAGE_PRODUCTS = 'produtos';
const PAGE_CART = 'carrinho';

function App() {
  const [cart, setCart] = useState ([]);
  const[page, setPage] = useState(PAGE_PRODUCTS);

  



  const removeFromCart = (produtoToRemove) => {
    setCart(cart.filter((produto) => produto !== produtoToRemove ))
  }

  const addToCart = (produto) => {
    setCart ([...cart, {...produto}]);
  };



  const navigateTo = (nextPage) => {
    setPage(nextPage);

  }


  return (
    <Container>
      <div className="App">
    
              <header>
                <AppBar>
                  <Toolbar >
                

                    <Button variant="contained" startIcon={<ShoppingCartIcon/>} onClick={() => navigateTo(PAGE_CART)}>
                      Ir para o carrinho({cart.length})
                    </Button>

                    <Button variant="contained" startIcon={<ShopIcon/>} onClick={() => navigateTo(PAGE_PRODUCTS)}>
                      Visualizar Produtos
                    </Button>
                    

                  </Toolbar>

                </AppBar>
                

              </header>
              {page === PAGE_PRODUCTS && (
                <Produtos addToCart={addToCart}/>
              )}
              {page === PAGE_CART && (
                <Cart cart={cart} removeFromCart={removeFromCart}/>
              )}



      </div>
    </Container>
  );
}

export default App;
