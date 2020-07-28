import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const Cart = ({ cart, total, addProduct, setShipping }) => {
    return (
        <div>
            <h1>Carrinho</h1>
            <p>
                Items: <strong>{cart.items.length}</strong>
            </p>
            <p>
                Frete: <strong>{cart.shipping_value}</strong>
            </p>
            <p>
                Total: <strong>{total}</strong>
            </p>
            <button onClick={addProduct}>Adicionar produto</button>
            <button onClick={setShipping}>Calcular Frete</button>
        </div>
    );
}

/*
Deste modo, o selector não é memorizado.
Ou seja, o método sempre vai ser chamado.

const calculaTotal = items => {
    console.log('Entrou aqui!!!')
    return items.reduce((subTotal, item) => subTotal + item.price, 0);
}
*/

const calculaTotal = createSelector(
    /* 
      Quais items do estado do redux quero monitorar para, caso sejam alterados,
      a função posterior ser rodada. 
    */  
    state => state.items,
    state => state.shipping_value,
    // -- Função a ser rodada.
    (items, shipping_value) => {
        return items.reduce((subTotal, item) => subTotal + item.price, 0) + shipping_value;
    }
);

const mapStateToProps = state => ({
    cart: state,
    // -- Selector: total
    //total: calculaTotal(state.items),
    total: calculaTotal(state),
});

const mapDispatchToProps = dispatch => ({
    addProduct: () => dispatch({ type: "ADD" }),
    setShipping: () => dispatch({ type: "SET_SHIPPING" })
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Cart);
