import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export default function Products({addToCart}) {
    const [produtos] = useState([
        {
          name: 'Asics Tênis ASICS Lyteracer 2',
          cost: 'R$ 89.99',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLIF8TySWLh6MRu9WkKZr1dQ6CrZPlFy6TA&usqp=CAU'
        },
        {
          name: 'Tênis Energyfalcon',
          cost: 'R$ 99.99',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5Af9fIX7a6zK1xWOyGxpGy6utHYVcGnvtA&usqp=CAU'
        },
        {
          name: 'Tênis Nike AllStar',
          cost: 'R$ 109.99',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNn0IdjHElE1Sd3fWa7zwGfyLO78KM21T99w&usqp=CAU'
        },
        {
          name: 'Tênis Nike - Sapatênis Masculino',
          cost: 'R$ 119.99',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9qmD1So2BFDFtFJSkneF-qpgc-gqScYcWQ&usqp=CAU'
        },
        {
          name: 'Tenis Masculino Esportivo',
          cost: 'R$ 99.99',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2j29KV-Am54O_kULDavY91BAHGj2vvz2R1A&usqp=CAU'
        },
        {
          name: 'Tenis Vegano Shoes',
          cost: 'R$ 89.99',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMyMOIq2CDSnXi9ZZseNbqulGLihTfwhI6A&usqp=CAU'
        },
        {
          name: 'Tenis Nike Esportivo Masculino',
          cost: 'R$ 89.99',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfK3bFvlhaAI09Dkm3LGwRr68862zalC9qg&usqp=CAU'
        },
        {
          name: 'Pampili - Tênis Infantil Summer Now United',
          cost: 'R$ 89.99',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzM15yzEB24T06PMJTS348eST--2PTZsLug&usqp=CAU'
        }
      ]);



    return(
        <>
          <h1>Produtos</h1>
          <div className="produtos">
            {produtos.map((produto, idx) => (
              <div className="produto" key={idx}>
                
                <img src={produto.image} alt={produto.name}/>
                <p className="name">{produto.name}</p>
                <p className="cost">{produto.cost}</p>
                <Button variant="outlined" color="secondary" startIcon={<AddShoppingCartIcon/>} onClick={()=> addToCart(produto)}>
                  Adicionar no carrinho
                  </Button>
              </div>
            ))} 
          </div>
        </>
    )
}