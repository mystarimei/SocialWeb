import image6 from '../image/image6.png'
import girl from '../image/sex1.png'
import boy from '../image/sex2.png'
import message from '../image/message.png'
import favorite1 from '../image/favorite1.png'
import unfavorite from '../image/favorite2.png'
import { useState } from 'react'
import PostDetail from './PostDetail'
const EmotionPost = (props) => {
    const { post: { id, sex, type, name, title, desc, likecount, favorite, msg }, handlePostDetail, handleFavorite, handleLike } = props
    const [showModal, setShowModal] = useState(false);
    const handleOpenPostModel = (e) => {
        setShowModal(true);

    }
    const handleCancel = () => {
        setShowModal(false);
    }
    return (
        <div>
            <PostDetail visable={showModal} handleCancel={handleCancel} handlePostDetail={handlePostDetail(id)} handleFavorite={handleFavorite} handleLike={handleLike} />
            <a href='#' onClick={handleOpenPostModel} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{
                    margin: '0 60px',
                    borderBottom: '1px solid rgb(223,223,223)',
                    position: 'relative',
                    padding: '20px 0',
                    gridTemplate: `
                    "header header" auto
                    ". ." 12px
                    "title thumb" auto
                    ". thumb" 4px
                    "main thumb" auto
                    ". thumb" 16px
                    "footer thumb" auto / 1fr auto`,
                    cursor: 'pointer',
                }}>
                    <div style={{ fontSize: 14, gridArea: 'header/header/header/header' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
                            <div>
                                <div><img src={sex === 'girl' ? girl : boy} style={{ width: 30, height: 25, paddingRight: 5 }} alt="" /></div>
                            </div>
                            <div>
                                {name}
                            </div>
                        </div>
                        <h2 style={{
                            gridArea: 'title/title/title/title',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        }}>
                            <div style={{ fontSize: 18, }}>
                                {title}
                            </div>
                        </h2>
                        <div style={{ gridArea: 'main/main/main/main', overflow: 'hidden' }}>
                            <div style={{ fontWight: 400, fontSize: 14, lineheight: 20, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                {desc}
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingTop: 5, gridArea: 'footer/footer/footer/footer' }}>
                            <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', opacity: 0.75 }}>
                                        <img src={image6} alt="" style={{ width: 16, heigth: 16 }} />
                                    </div>
                                    <div style={{ paddingLeft: 6 }}>
                                        {likecount}
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', opacity: 0.75 }}>
                                        <img src={message} alt="" style={{ width: 16, height: 16 }} />
                                    </div>
                                    <span>
                                        {msg.length}
                                    </span>
                                </div>
                            </div>
                            <div style={{ display: 'block', position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: 16, height: 16, }}>
                                        <img src={favorite ? unfavorite : favorite1} alt="" style={{ width: 16, height: 16, verticalAlign: 'baseline' }} />
                                    </div>
                                    <div style={{ color: 'rgba(0,0,0,0.35)' }}>
                                        收藏
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default EmotionPost;