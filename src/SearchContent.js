import SearchPost from './SearchPost';
const SearchContent = (props) => {
    const { queryPosts, handlePostDetail, handleFavorite, handleLike } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 5 }}>
            {queryPosts.map(queryPost => {
                return <SearchPost key={queryPost.id} queryPost={queryPost}
                    handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
            })}
        </div>
    )
}
export default SearchContent;