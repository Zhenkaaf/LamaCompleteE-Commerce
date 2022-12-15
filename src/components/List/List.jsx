import Card from '../Card/Card';
import './list.scss';


const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/2069243/pexels-photo-2069243.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/1020052/pexels-photo-1020052.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 5,
            img: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 6,
            img: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 7,
            img: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
            img2: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'long dress ho hoh oh',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ];

    return (
        <div className="list">
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}
export default List;