import { useState } from 'react';
import HomePost from './HomePost';
import { Link } from 'react-router-dom';

// import image5 from './image/image5.png'
const CenterSide = (props) => {
    const { posts, handlePostDetail, handleFavorite, handleLike } = props
    const [select, setSelect] = useState('Hot');
    const handleChange = (e) => {
        setSelect(e.target.value);
    }

    const postsSort = (sortType) => {
        if (sortType === 'Hot') {
            return posts.sort((a, b) => {
                return b.likecount - a.likecount;
            })
        }
        if (sortType === 'Recent') {
            return posts.sort((a, b) => new Date(...b.date.split('/').reverse()) - new Date(...a.date.split('/').reverse()));
        }
    }
    postsSort(select)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: "30%", padding: '16px', borderBottom: '1px solid rgb(223,223,223)', }}>
                <div style={{ display: 'flex', fontSize: 16 }}>
                    <Link to="/">
                        <div style={{ padding: '0 16px', cursor: 'pointer' }}>全部</div>
                    </Link>
                    <Link to="/favoriteContent">
                        <div style={{ padding: '0 16px', cursor: 'pointer' }}>收藏</div>
                    </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    文章排序依
                    <select
                        value={select}
                        onChange={handleChange}
                        style={{ width: 65, height: 30, background: '#E3E3E3', borderRadius: 5, borderColor: 'transparent', padding: 5, margin: 5 }}
                    >
                        <option value="Hot">熱門</option>
                        <option value="Recent">最近</option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    {/* <img src={image5} alt="" style={{ width: '100%', height: '50%' }} /> */}
                </div>
            </div>
            <div>
                {posts.map((post) => {
                    return <HomePost key={post.id} post={post}
                        handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                })}
            </div>
        </div >
    )
}

export default CenterSide;