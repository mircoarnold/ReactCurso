import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
    const EstiloCarrito = {
        color: "tomato",
        fontSize: "12px"
    }
    return(
        <div>
            <FontAwesomeIcon style = {EstiloCarrito} icon={faCartShopping} />
            <span>10</span>
        </div>
    )
}

export default CartWidgetComponent;