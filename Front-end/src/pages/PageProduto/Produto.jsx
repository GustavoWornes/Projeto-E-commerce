import React, { useContext, useEffect, useState } from "react";
import { matchPath, useParams } from "react-router";
import {api, searchProduct} from "../../Services/services"
import { utils } from "../../utils";
import { CartContext, useCart } from "../../contexts/auth";
import {Style}  from "./style.css"
const BodyPageProduto = () =>{
  const [product,setProduct] = useState([]);
  const {id} = useParams()
  const cart = useContext(CartContext)
  const add = (product) => () =>{
      cart.addToCart(product)
  }
  useEffect(()=>{
   
    api.get(`/product/${id}`).then(({data}) =>{
      setProduct(data)
    });
    console.log("Esse é o id",id)
    
    
  },[id])
console.log("Console.log Produto",product)
console.log("console.log name",product.name)


    return(
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm-1">
              <div className="miniproduto">
                <img id="Img-um" alt="Imagem da lateral do tenis sonic 4 balance m da cor vermelha " src={`${product.img_um}`} />
              </div>
              <div className="miniproduto">
                <img id="Img-dois" alt="imagem da diagonal da frente do tenis sonic 4 balance m da cor vermelha" src={`${product.img_dois}`}/>
              </div>
              <div className="miniproduto">
                <img id="Img-tres" alt="imagem da dimenção de cima do tenis sonic 4 balance m da cor vermelha" src={`${product.img_tres}`} />
              </div>
              <div className="miniproduto">
                <img id="Img-quatro" alt="imagem da parte de baixo do tenis sonic 4 balance m da cor vermelha" src={`${product.img_quatro}`}/>
              </div>
              <div className="miniproduto">
                <img id="Img-cinco" alt="imagem do tenis sonic 4 balance de tras sendo ele de cor vermelha" src={`${product.img_cinco}`}/>
              </div>
            </div>
            <div className="col-sm-7">
              <img  src={`${product.img_principal}`}  id="imagem" />
            </div>
            {/* <div class="w-100"></div>
                usado para separar divs
                src={`${product.img_principal}`} 
                */}
            <div className="col-sm-3" id="descricaoProduto">
              <h2 style={{textTransform: 'uppercase'}}>{product.name}</h2>
              <span id="produto-id-1997">
                <p>R$:{product.precoProduto}</p>
                
              {/* <pre>
                {JSON.stringify(cart,null,2)}
              </pre> */}
              </span>
              <p className="text">Cor:{product.cor}</p>
              <label htmlFor="inputDoTamanho">Tamanho</label>
              <select id="inputDoTamanho" className="form-control">
                <option selected>Escolha Uma Opção...</option>
                <option value={0}>35</option>
                <option value={1}>36</option>
                <option value={3}>37</option>
                <option value={4}>38</option>
                <option value={5}>39</option>
                <option value={6}>40</option>
                <option value={7}>41</option>
                <option value={8}>42</option>
                <option value={9}>43</option>
                <option value={10}>44</option>
                <option value={11}>45</option>
              </select>
              <br />
              <button type="button" id="comprar" data-testeid="add-product-button" className="btn btn-pill btn-dark"
              onClick={add(product)}
              >Adicionar no carrinho</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h2 className="title text-center" style={{textTransform: 'uppercase'}}>informações</h2>
            <table className="table table-md">
              <tbody><tr>
                  <th>Terreno</th>
                  <td>{product.Terreno}</td>
                </tr>
                <tr>
                  <th>Sistema de amarração</th> 
                  <td>{product.Sistema_De_Amarracao}</td>
                </tr>
                <tr>
                  <th>Peso Aprox.</th>
                  <td>{product.Peso_Aproximado}</td>
                </tr>
                <tr>
                  <th>Impermeabilização</th>
                  <td>{product.Impermeabilizacao}</td>
                </tr>
                <tr>
                  <th>Drop (mm)</th>
                  <td>{product.Drop}</td>
                </tr>
                <tr>
                  <th>Ajuste</th>
                  <td>{product.Ajuste}</td>   
                </tr>
              </tbody></table>
          </div>
          <div>
            <p className="texto-descricao">
             {product.descricao}
            </p>
          </div>
        </div>
      </main>
    )
        
}

export default BodyPageProduto