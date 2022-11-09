import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const ShoppingCartItem = (props) => {
    const { cart: { id, sellername, name, qty, price, img, }, handleQuantityAdd, handleQuantitySubtract } = props;
    return (
        <div style={{ border: '1px solid rgb(223,223,223)', borderRadius: 10, margin: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0 30px' }}>
                <div style={{ margin: 10 }}>
                    <div style={{ height: 'auto', widht: '100%', padding: '12px 0 0 ' }}>
                        {sellername}
                    </div>
                </div>
                <div style={{ display: 'grid', width: '100%' }}>
                    <div style={{ overflow: 'hidden', width: '100%', }}>
                        <div style={{ display: 'flex', width: '100%', padding: '16px,0px,18px' }}>
                            <div style={{ position: 'relative', width: 62, height: 62, borderRaidus: 12, marginRight: 16 }}>
                                <img src={img} style={{ width: 62, height: 62, }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', minWidth: 0 }}>
                                <h3 style={{ fontWeight: 500, fontSize: 16, lineHeight: '22px', marginBottom: 6 }}>{name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <div style={{ flex: '1 1 0%', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: 10, color: '#F97373', fontWeight: 500, fontSize: 28, lineHeight: '40px' }}>
                                            <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '25px' }}>
                                                $
                                            </span>
                                            {price}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', }}>
                                        <button onClick={() => handleQuantitySubtract(id)} style={{ width: 40, height: 40, border: 'none', background: 'transparent ', cursor: 'pointer' }}><MinusOutlined style={{ fontSize: 20 }} /></button>
                                        <div style={{ fontSize: 20, margin: '0 10px' }}>{qty}</div>
                                        <button onClick={() => handleQuantityAdd(id)} style={{ width: 40, height: 40, border: 'none', background: 'transparent ', cursor: 'pointer' }}><PlusOutlined style={{ fontSize: 20 }} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ShoppingCartItem;