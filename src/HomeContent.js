import LeftSide from "./LeftSide";
import CenterSide from "./ShowPost/CenterSide";
import RightSide from "./RightSide";
import { Route, Switch } from "react-router-dom";
import EmotinoContent from "./ShowPost/EmotionContent";
import MemeContent from "./ShowPost/MemeContent";
import MoodContent from "./ShowPost/MoodContent";
import SearchContent from "./SearchContent";
import FavoriteContent from "./ShowPost/FavoriteContent";
import ShoppingContent from "./ShoppingCart/ShoppingContent";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const HomeContent = (props) => {
    const { posts, products, carts, queryPosts, searchItems, handleFavorite, handleLike, handleAddToCart, handleQuantityAdd, handleQuantitySubtract, handleClear } = props
    const filterPosts = (typePosts) => {
        return (
            posts.filter((post) => post.type === typePosts)
        )
    }
    const favoritePosts = posts.filter((post) => post.favorite === true);

    const handlePostDetail = (id) => {
        return posts.find((post) => post.id === id)
    }



    return (
        <div style={{ display: 'grid', gridTemplateColumns: '30% 50% 20%', maxWidth: '1200px', margin: 'auto', padding: '20px 20px 0 0' }}>
            <LeftSide />
            <Switch>
                <Route path="/" exact>
                    <CenterSide posts={posts} handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                </Route>
                <Route path="/favoriteContent">
                    <FavoriteContent posts={favoritePosts} handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                </Route>
                <Route path="/shoppingContent">
                    <ShoppingContent products={products} handleAddToCart={handleAddToCart} />
                </Route>
                <Route path="/shoppingCart">
                    <ShoppingCart carts={carts} handleQuantityAdd={handleQuantityAdd} handleQuantitySubtract={handleQuantitySubtract} handleClear={handleClear} />
                </Route>
                <Route path="/emotionContent" >
                    <EmotinoContent posts={filterPosts("感情")} handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                </Route>
                <Route path="/memeContent">
                    <MemeContent posts={filterPosts("梗圖")} handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                </Route>
                <Route path="/moodContent" >
                    <MoodContent posts={filterPosts("心情")} handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                </Route>
                <Route path="/searchContent" >
                    <SearchContent queryPosts={queryPosts} handlePostDetail={handlePostDetail} handleFavorite={handleFavorite} handleLike={handleLike} />
                </Route>
            </Switch>
            <RightSide />
        </div>
    )
}

export default HomeContent;