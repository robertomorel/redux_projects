import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart, addProduct, setShipping }) => {
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
                Total: <strong>60</strong>
            </p>
            <button onClick={() => addProduct}>Adicionar produto</button>
            <button onClick={() => setShipping}>Calcular Frete</button>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state,
});

const mapDispatchToProps = dispatch => ({
    addProduct: ()=> dispatch({ type: 'ADD' }),
    setShipping: ()=> dispatch({ type: 'SET_SHIPPING' }),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Cart);