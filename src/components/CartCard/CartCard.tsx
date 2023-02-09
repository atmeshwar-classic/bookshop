import type { CartItem } from '../../domain/cart/types'

type CartProps = CartItem;

export const CartCard = (props: CartProps): JSX.Element => {
  return (
   <div className='cart-card-wrapper'></div>
  );
}