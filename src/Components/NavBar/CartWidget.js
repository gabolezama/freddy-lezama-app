import './NavBarStyles.css';

function CartWidget(){
    return(
        <div className='cartWidget'>
            <img id='imgCart' src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-shopping-cart-ecommerce-kiranshastry-solid-kiranshastry.png"/>
            <p className='contador'>5</p>
        </div>
    )
}

export default CartWidget