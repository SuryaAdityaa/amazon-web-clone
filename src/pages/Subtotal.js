import React from 'react'
import '../style/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../provider/StateProvider';
import { getBasketTotal } from '../provider/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" name="" id=""/> This order contain gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <button className="checkout__proceed">
                Proceed to checkout
            </button>
        </div>
    )
}

export default Subtotal
