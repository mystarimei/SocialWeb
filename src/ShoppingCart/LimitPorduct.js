import ProductDetail from '../ProductDetail'
import { useState } from 'react';
const LimitPorduct = (props) => {
    const { limitProduct: { id, name, price, img, flashtime }, handleProductDetail, handleAddToCart } = props
    const [showModal, setShowModal] = useState(false);
    const handleOpenPostModel = (e) => {
        setShowModal(true);
    }
    const handleCancel = () => {
        setShowModal(false);
    }

    return (
        <div style={{ width: 200, height: '80%', padding: '12px 12px 6px', margin: 10, border: '1px solid rgb(223,223,223)', borderRadius: 10, }}>
            <ProductDetail visable={showModal} handleCancel={handleCancel} handleProductDetail={handleProductDetail(id)} handleAddToCart={handleAddToCart} />
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', margin: '2px 0 6px' }}>
                <h3 style={{ fontWeight: 500, fontSize: 16, lineHeight: '22px' }}>限時特賣</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', background: 'black', alignContent: 'center', justifyContent: 'center', color: 'white', borderRadius: 4, width: 20, height: 20, lineHeight: '18px', fontWeight: 600, fontSize: '12px' }}>
                        {flashtime}
                    </div>
                    <div style={{ justifyContent: 'center' }}>
                        分
                    </div>
                </div>
            </div>
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
export default LimitPorduct;