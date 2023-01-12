import './featuredProducts.scss';
import Card from './../Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

/*     const data = [
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
        }
    ]; */

    /* const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_API_URL+ `/products?populate=*&[filters][type][$eq]=${type}`, {
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    }
                });
                console.log(data);
                setData(res.data.data)
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    console.log(data); */
    
const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);


    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium aliquid hic qui quisquam, et minima iusto, eius totam alias nesciunt, repellendus ab maxime? Repellat molestiae ab commodi voluptatem necessitatibus.</p>
            </div>
            <div className="bottom">
                {error 
                ? "Something went wrong!" 
                : 
                (loading 
                ? "loading" 
                : data.map(item => (
                    <Card item={item} key={item.id} />
                )))}
            </div>
        </div>
    )
}
export default FeaturedProducts;