import './cart.scss';


const Cart = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ];


    return (
        <div className="cart">
<h1>Products in your cart</h1>
{data?.map((item) => (
    <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
        </div>
    </div>
))}
        </div>
    )
}
export default Cart;