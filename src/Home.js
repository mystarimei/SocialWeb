import { useEffect, useState } from 'react';
import decard from './image/image1.png'
import { SearchOutlined } from "@ant-design/icons";
import HomeContent from './HomeContent';
import postData from './Data/postData'
import productData from './Data/productData';
import { Link } from 'react-router-dom';
const Home = () => {
    const [posts, setPosts] = useState(postData);
    const [products, setProducts] = useState(productData);
    const [carts, setCarts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchItems, setSearchItems] = useState([]);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const queryPosts = posts.filter((post) => post.title.includes(search));
    useEffect(() => {
        let timeId = setInterval(() => {
            setProducts(preProducts => {
                return preProducts.map(product => {
                    const flashSaleTime = product.flashtime <= 0 ? 0 : product.flashtime - 1
                    return { ...product, flashtime: flashSaleTime }
                })
            })
        }, 10000)
        return () => clearInterval(timeId);
    }, [])
    //setState為了要改變狀態，所以把一個Function傳給setState。 
    //setState要求()裡要放Function，需要回傳東西給setState，不然就會回傳一個空陣列。
    const handleLike = (id) => {
        setPosts(prePosts => {
            return prePosts.map((post) => {
                return post.id === id ? { ...post, like: !post.like, likecount: post.like ? post.likecount - 1 : post.likecount + 1 } : { ...post };
            })
        })
    }
    const handleFavorite = (id) => {
        setPosts(prePosts => {
            return prePosts.map((post) => {
                return post.id === id ? { ...post, favorite: !post.favorite } : { ...post };
            })
        })
    }

    const handleAddToCart = (id) => {
        const product = products.find(product => product.id === id);
        const findCarts = carts.findIndex(cart => cart.id === id);
        if (findCarts < 0) {
            setCarts(preCarts => {
                return [
                    {
                        ...product,
                        qty: product.qty + 1
                    },
                    ...preCarts
                ]
            })
        } else {
            setCarts(preCarts => {
                return preCarts.map((cart, index) => {
                    return findCarts === index ? { ...cart, qty: cart.qty + 1 } : { ...cart }
                })
            })
        }
    }

    const handleQuantityAdd = (id) => {
        setCarts(preCarts => {
            return preCarts.map(cart => {
                return cart.id === id ? { ...cart, qty: cart.qty + 1 } : { ...cart }
            })
        })
    }

    const handleQuantitySubtract = (id) => {
        setCarts(preCarts => {
            return preCarts.map(cart => {
                return cart.id === id ? { ...cart, qty: cart.qty - 1 } : { ...cart }
            })
        })
        setCarts(preCarts => preCarts.filter(cart => cart.qty > 0))
    }

    const handleClear = () => {
        setCarts(preCarts => {
            return []
        });
    }
    const towhere = () => {
        if (search === '') {
            return "/"
        } else {
            return "searchContent"
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', background: '#03658C' }}>
                <Link to="/">
                    <img src={decard} style={{ width: 50, height: 50 }} alt="" />
                </Link>
                <div style={{ width: 500 }}>
                    <input type="text" value={search} onChange={handleChange} style={{ width: '80%', height: 24 }} placeholder="你感興趣的文章..." />
                    <Link to={towhere()}>
                        <button style={{ background: '#048EC4', color: 'white', borderColor: 'transparent', width: 35, height: 26, cursor: 'pointer' }}><SearchOutlined /></button>
                    </Link>
                </div>
            </div>
            <div >
                <HomeContent
                    posts={posts}
                    products={products}
                    queryPosts={queryPosts}
                    carts={carts}
                    handleFavorite={handleFavorite}
                    handleAddToCart={handleAddToCart}
                    handleLike={handleLike}
                    handleQuantityAdd={handleQuantityAdd}
                    handleQuantitySubtract={handleQuantitySubtract}
                    handleClear={handleClear}
                />
            </div>
        </div>
    )
}

export default Home;