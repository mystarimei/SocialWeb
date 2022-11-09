import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = (props) => {
    const { handleQuantityAdd, handleQuantitySubtract, handleClear, carts } = props
    return (
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
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <h1 style={{ padding: '34px 0 10px', borderBottom: '1px solid rgb(200,200,200)' }}>
                    購物車
                </h1>
                {carts.map(cart => {
                    return <ShoppingCartItem
                        key={cart.id}
                        cart={cart}
                        handleQuantityAdd={handleQuantityAdd}
                        handleQuantitySubtract={handleQuantitySubtract} />
                })}
                <div style={{ borderBottom: '1px solid rgb(200,200,200)' }} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: 10 }}>
                <div>
                    <span style={{ fontWeight: 600, fontSize: 18, }}>總金額：</span>
                    <span style={{ marginRight: 10, color: '#F97373', fontWeight: 500, fontSize: 24, lineHeight: '40px' }}>
                        <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '25px' }}>
                            $
                        </span>
                        {carts.reduce((a, { price, qty }) => a + price * qty, 0)}
                    </span>
                </div>
                <div>
                    <span><button style={{ width: 100, height: 35, background: 'grey', color: 'white', borderColor: 'transparent', borderRadius: '5px' }} onClick={() => handleClear()} >清除購物車</button></span>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;