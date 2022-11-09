import { Modal } from "antd";
import image24 from './image/ShoppingCart/image24.png'
const ProductDetail = (props) => {
    const { visable, handleCancel, handleAddToCart, handleProductDetail: { id, sellername, name, desc, price, img, flashtime } } = props
    const flashtext = flashtime <= 0 ? '已停售' : '加入購物車';
    return (
        <Modal title={null} open={visable} footer={null} onCancel={handleCancel} width='728px'
            style={{ left: 100, top: 70, margin: 'auto' }}>
            <div style={{ borderRadius: 4, minHeight: '100%', width: '100%', background: 'white', display: 'flex', flexDirection: 'column' }}></div>
            <div style={{ position: 'sticky', top: 0, background: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '12px 60px', minWidht: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                        <div style={{ paddingRight: 8 }}>
                            <div style={{ borderRadius: '50%', overflow: 'hidden', display: 'flex' }}>
                                <img src={image24} style={{ width: 35, height: 35 }} />
                            </div>
                        </div>
                        <div style={{ flex: '1 1 0%', minWidth: 0, overflow: 'hidden' }}>
                            <div style={{ fontWeight: 1000, fontSize: 14, lineHeight: '20px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: 'black' }}>
                                {sellername}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ padding: '0 60px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ overflow: 'hidden', flex: '1 1 0%', }}>
                        <h1 style={{ fontWeight: 500, fontSize: 28, lineHeight: '40px', overflowWrap: 'break-word' }}>{name}</h1>
                    </div>
                </div>
                <div style={{ fontSize: 16, lineHeight: '24px', color: 'rgba(0,0,0,0.75)' }}>
                    <div style={{ whiteSpace: 'break-spaces', wordBreak: 'break-word' }}>
                        <span style={{ whiteSpace: 'break-spaces', wordBreak: 'break-word' }}>
                            {desc}
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', width: '100%', height: 300, justifyContent: 'center', marginTop: 15 }}>
                    <div style={{ position: 'relative', }}>
                        <img src={img} style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', widht: '100%', minHeight: 52, border: '1px solid rgb(223,223,223)', borderRadius: 10, padding: '10px' }}>
                    <span style={{ marginRight: 10, color: '#F97373', fontWeight: 500, fontSize: 28, lineHeight: '40px' }}>
                        <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '25px' }}>
                            $
                        </span>
                        {price}
                    </span>
                    <button
                        disabled={flashtime <= 0 ? true : false}
                        onClick={() => handleAddToCart(id)}
                        style={flashtime <= 0 ? { background: 'grey', border: 'none', borderRadius: 10, padding: '5px 14px 5px 14px', color: 'white', fontSize: 16, cursor: 'pointer' } : { background: '#f97373', border: 'none', borderRadius: 10, padding: '5px 14px 5px 14px', color: 'white', fontSize: 16, cursor: 'pointer' }}
                    >
                        {flashtext}
                    </button>
                </div>
            </div>
        </Modal>
    )
}
export default ProductDetail;