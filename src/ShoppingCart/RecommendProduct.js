import ProductDetail from '../ProductDetail'
import { useState } from 'react';
const RecommendProduct = (props) => {
    const { recommendProduct: { id, sellername, name, desc, price, img, flashtime }, handleProductDetail, handleAddToCart } = props
    const [showModal, setShowModal] = useState(false);
    const handleOpenPostModel = (e) => {
        setShowModal(true);
    }
    const handleCancel = () => {
        setShowModal(false);
    }

    return (
        <div style={{ width: 200, height: '80%', padding: '12px 12px 6px', margin: 10, border: '1px solid #E88692', borderRadius: 10, }}>
            <ProductDetail visable={showModal} handleCancel={handleCancel} handleProductDetail={handleProductDetail(id)} handleAddToCart={handleAddToCart} />
            <a href="#" onClick={handleOpenPostModel} style={{ color: '#3397cf', textDecoration: 'none', backgroundColor: 'transparent', }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 15 }}>
                    <div style={{ inset: 0, height: '100%', width: '100%' }}>
                        <span >
                            <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
                        </span>
                    </div>
                </div>
                <h3 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</h3>
                <div style={{ display: 'inline-block', fontWeight: 500, fontSize: 16, lineHeight: '0px' }}>
                    ${price}
                </div>
            </a>
        </div>
    )
}
export default RecommendProduct;