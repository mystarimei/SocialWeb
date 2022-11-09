import image13 from '../image/image13.png'
import image14 from '../image/Carousel/image14.png'
import image15 from '../image/Carousel/image15.png'
import image16 from '../image/Carousel/image16.png'
import image17 from '../image/Carousel/image17.png'
import { Carousel } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import LimitPorduct from './LimitPorduct'
import RecommendProduct from './RecommendProduct'
import { Link } from 'react-router-dom'

const ShoppingContent = (props) => {
    const { products, handleAddToCart } = props
    const limitProducts = products.filter(product => product.limit === true);
    const recommendProducts = products.filter(product => product.limit === false);
    const handleProductDetail = (id) => {
        return products.find((product) => product.id === id)
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: 'rgb(255,255,255)',
                borderRadius: 5,
                position: 'sticky',
                top: 48, padding: '20px 60px 10px',
                borderBottom: '1px solid rgba(0,0,0,0.15)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, width: '100%', borderBottom: '1px solid rgb(223,223,223)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', borderRadius: '50%', flexShrink: 0, overflow: 'hidden' }}>
                            <img src={image13} alt="" style={{ width: 40, height: 40, borderRadius: '50%', background: '#EBE2DF' }} />
                        </div>
                        <div>
                            <h1 style={{ marginLeft: 10, marginTop: 15, fontWeight: 500, fontSize: 30 }}>好物研究社</h1>
                        </div>
                    </div>
                    <Link to="/shoppingCart" style={{ color: 'black' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div>
                                <ShoppingCartOutlined style={{ fontSize: 24 }} />
                            </div>
                            <div>
                                購物車
                            </div>
                        </div>
                    </Link>
                </div>
                <div style={{ height: 250, width: '100%' }}>
                    <Carousel autoplay effect='fade' style={{ height: 200, marginTop: 15 }}>
                        <div>
                            <img src={image14} alt='' style={{ height: 200, width: '100%' }} />
                        </div>
                        <div>
                            <img src={image15} alt='' style={{ height: 200, width: '100%' }} />
                        </div>
                        <div>
                            <img src={image16} alt='' style={{ height: 200, width: '100%' }} />
                        </div>
                        <div>
                            <img src={image17} alt='' style={{ height: 200, width: '100%' }} />
                        </div>
                    </Carousel>
                </div>
                <div style={{ width: '100%', height: '310px', background: '#E88692', opacity: 0.85, borderRadius: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {limitProducts.map(limitProduct => {
                            return <LimitPorduct key={limitProduct.id} limitProduct={limitProduct}
                                handleProductDetail={handleProductDetail} handleAddToCart={handleAddToCart} />
                        })}
                    </div>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgb(200,200,200)', marginTop: 10, marginBottom: 10 }} />
                <div style={{ width: '100%', height: '600px', background: 'rgb(233,233,233)', opacity: 0.85, borderRadius: 12 }}>
                    <div style={{ padding: '20px 24px 10px', fontSize: 18, fontWeight: 'bold' }}>推薦產品</div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        {recommendProducts.map(recommendProduct => {
                            return <RecommendProduct key={recommendProduct.id} recommendProduct={recommendProduct}
                                handleProductDetail={handleProductDetail} handleAddToCart={handleAddToCart} />
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ShoppingContent;