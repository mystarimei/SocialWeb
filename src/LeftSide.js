import { ProfileOutlined, ShopOutlined } from "@ant-design/icons";
import image3 from './image/image3.png'
import image2 from './image/image2.png'
import image4 from './image/image4.png'
import { Link } from 'react-router-dom';
const LeftSide = (props) => {
    const { searchItems } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 100 }}>
            <div style={{ display: 'flex', flexDirection: 'column', color: '#D4D4D4', padding: 10 }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#D4D4D4' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: 44, cursor: 'pointer' }}>
                        <div><ProfileOutlined style={{ fontSize: 30 }} /></div>
                        <div style={{ paddingLeft: 10, fontSize: 18 }}>所有文章</div>
                    </div>
                </Link>
                <Link to="/shoppingContent" style={{ textDecoration: 'none', color: '#D4D4D4' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: 44, cursor: 'pointer' }}>
                        <div><ShopOutlined style={{ fontSize: 30 }} /></div>
                        <div style={{ paddingLeft: 10, fontSize: 18 }}>好物研究社</div>
                    </div>
                </Link>
            </div>
            <div style={{ width: '60%', height: 5, borderTop: 'solid #9AAEB5 1px' }}></div>
            <div>
                <Link to="/emotionContent" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', padding: 10, cursor: 'pointer' }}>
                        <div><img src={image3} alt="" style={{ width: 30, height: 30, borderRadius: '50%' }} /></div>
                        <div style={{ paddingLeft: 10, fontSize: 18, color: '#EBEBEB' }}>感情</div>
                    </div>
                </Link>
                <Link to="/memeContent" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', padding: 10, cursor: 'pointer' }}>
                        <div><img src={image2} alt="" style={{ width: 30, height: 30, borderRadius: '50%' }} /></div>
                        <div style={{ paddingLeft: 10, fontSize: 18, color: '#EBEBEB' }}>梗圖</div>
                    </div>
                </Link>
                <Link to="/moodContent" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', padding: 10, cursor: 'pointer' }}>
                        <div><img src={image4} alt="" style={{ width: 30, height: 30, borderRadius: '50%' }} /></div>
                        <div style={{ paddingLeft: 10, fontSize: 18, color: '#EBEBEB' }}>心情</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LeftSide;