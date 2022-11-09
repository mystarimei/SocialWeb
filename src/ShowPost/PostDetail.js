import { Modal } from 'antd';
import girl from '../image/sex1.png'
import boy from '../image/sex2.png'
import image6 from '../image/image6.png'
import likeimg from '../image/like.png'
import unlikeimg from '../image/unlike.png'
import favorite1 from '../image/favorite1.png'
import unfavorite from '../image/favorite2.png'
import PostMessage from './PostMessage';
const PostDetail = (props) => {
    const { visable, handleCancel, handleFavorite, handleLike, handlePostDetail: { id, name, sex, type, title, desc, like, likecount, favorite, date, msg, photo } } = props;
    return (
        <Modal title={null} open={visable} footer={null} onCancel={handleCancel} width='728px'
            style={{ left: 100, top: 70, margin: 'auto' }}>
            <div style={{ borderRadius: 4, minHeight: '100%', background: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ paddingTop: 24 }} />
                <div style={{ display: 'flex', alignItems: 'center', padding: '12px 60px', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'inherit', minWidth: 0 }}>
                        <div style={{ paddingRight: 8 }}>
                            <img src={sex === 'girl' ? girl : boy} style={{ width: 30, height: 25, paddingRight: 5 }} alt="" />
                        </div>
                        <div>
                            {name}
                        </div>
                    </div>
                </div>
                <div style={{ paddingBottom: 6 }} />
                <div style={{ padding: '0 60px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', fontSize: 14, alignItems: 'center', marginTop: 12, padding: '0 60px 20px' }}>
                    <div style={{ color: '#3397cf', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {/* <Link to="/emotionContent">{type}</Link> */}
                        {type}
                    </div>
                    <div style={{ color: 'rgba(0,0,0,0.35)', padding: '0 0.5em', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {date}
                    </div>
                </div>
                <div style={{ padding: '0 60px' }}>
                    <div style={{ fontSize: 16, lineHeight: '28px', color: 'rgba(0,0,0,0.75' }}>
                        <div style={{ whiteSpace: 'break-spaces', wordBreak: 'break-word' }}>
                            <span style={{ whiteSpace: 'break-spaces', wordBreak: 'break-word' }}>
                                {desc}
                            </span>
                            <div style={{ margin: '10px 0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{
                                        boxSizing: 'border-box',
                                        display: 'inline-block',
                                        overflow: 'hidden',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: '0px',
                                        margin: '0px',
                                        padding: '0px',
                                        position: 'relative',
                                    }}>
                                        <img src={photo} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '0 60px', paddingBottom: 10, }}>
                    <div style={{ padding: '6px 0', color: 'rgba(0,0,0,0.5', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span>
                                    <img src={image6} alt="" style={{ width: 16, heigth: 16 }} />
                                </span>
                                <div style={{ paddingLeft: 6 }}>{likecount}</div>
                            </div>
                            ・留言 {msg.length}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', }}>
                                <div>
                                    <button onClick={() => handleLike(id)} style={{ border: 'none', background: 'white', widht: 40, height: 24, cursor: 'pointer' }}>
                                        <img src={like ? likeimg : unlikeimg} alt="" style={{ widht: 40, height: 24 }} />
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => handleFavorite(id)} style={{ border: 'none', background: 'white', widht: 40, height: 24, cursor: 'pointer' }}>
                                        <img src={favorite ? unfavorite : favorite1} alt="" style={{ widht: 40, height: 24 }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '40px 0', paddingTop: 20, background: 'rgb(245,245,245)' }}>
                    <div style={{ padding: '0 60px', }}>
                        <div style={{ fontWeight: 600, fontSize: '18px', lineHeight: '22px', color: 'rgba(0,0,0,0.5', paddingBottom: 4 }}>
                            共{msg.length}則留言
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid rgb(223, 223, 223)' }} />
                    <div>
                        {msg.map((msg) => {
                            return <PostMessage key={msg.id} msg={msg} />
                        })}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default PostDetail;