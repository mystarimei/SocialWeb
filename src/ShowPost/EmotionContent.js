import EmotionPost from './EmotionPost';
import image3 from '../image/image3.png'
const EmotinoContent = (props) => {
    const { posts, handlePostDetail, handleFavorite, handleLike } = props;
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: 'rgb(255,255,255)',
                position: 'sticky',
                top: 48, padding: '20px 60px 10px',
                borderBottom: '1px solid rgba(0,0,0,0.15)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', height: 60, padding: 0, width: '100%' }}>
                    <div style={{ display: 'flex', borderRadius: '50%', flexShrink: 0, overflow: 'hidden' }}>
                        <img src={image3} alt="" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                    </div>
                    <h1 style={{ marginLeft: 10, marginTop: 15, fontWeight: 500, fontSize: 30 }}>感情</h1>
                </div>
            </div>
            <div style={{ background: 'white' }}>
                {posts.map((post) => {
                    return <EmotionPost key={post.id} post={post}
                        handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                })}
            </div>
        </div>
    )
}
export default EmotinoContent;