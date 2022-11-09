import { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoritePost from './FavoritePost';
const FavoriteContent = (props) => {
    const { posts, handlePostDetail, handleFavorite, handleLike } = props

    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 5 }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '95%', height: "30%",
                padding: 16,
                borderBottom: '1px solid rgb(223,223,223)',
            }}>
                <div style={{ display: 'flex', fontSize: 16 }}>
                    <Link to="/">
                        <div style={{ padding: '0 16px', cursor: 'pointer' }}>全部</div>
                    </Link>
                    <Link to="/favoriteContent">
                        <div style={{ padding: '0 16px', cursor: 'pointer' }}>收藏</div>
                    </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                </div>
            </div>
            <div>
                <div>
                    {/* <img src={image5} alt="" style={{ width: '100%', height: '50%' }} /> */}
                </div>
            </div>
            <div>
                {posts.map((post) => {
                    return <FavoritePost key={post.id} post={post}
                        handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                })}
            </div>
        </div >
    )
}
export default FavoriteContent;