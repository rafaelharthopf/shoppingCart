import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';




export default function Cart({cart, removeFromCart}) {
    return(
        <>
        <h1>Carrinho</h1>
        <div className="produtos">
          {cart.map((produto, idx) => (
            <div className="produto" key={idx}>
              <img src={produto.image} alt={produto.name}/>
              <p className="name">{produto.name}</p>
              <p className="cost">{produto.cost}</p>
              <Button color='primary' startIcon={<DeleteIcon/>} onClick={()=> removeFromCart(produto)}>
                Remover do carrinho
              </Button>


            </div>
          ))} 
        </div>
        <Button variant="contained" startIcon={<AssignmentTurnedInIcon/>}>
          Finalizar compra!
        </Button>
      </>
    )
}