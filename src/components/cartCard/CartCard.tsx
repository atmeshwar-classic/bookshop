import { CartItem } from "../../domain/cart/types";
import { GrClose } from "react-icons/gr";
/* 
  We would define the structure of the props in the same file as the component.
  Since, this component has the same props as Type Book, we would assign it to it props.
*/
type CartProps = CartItem;

export const CartCard = (props: CartProps): JSX.Element => {
  const { name, description, price, onClickCross,index } = props;
  return (
    <div className="cart_card_main">
      
      <div className={name!==" "?"cart_card_sub":"cart_card_no_sub"}>
      
      </div>
      <div className="cart_card_sub_data">
        <div>
          <span>{name}</span>
          <span>{description}</span>
        </div>
        <div>
          <span>{name!==" "?`$ ${price}`:`Total $ ${price}`}</span>
        </div>
      </div>
      <div>
      {name!==" "?<button onClick={() => onClickCross(index)}><GrClose color="red"/></button>:""}
        
      </div>
    </div>
  );
};
