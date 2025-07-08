function ProductCard({ name, price, isLiked, onLikeToggle }) {
  return (
    <div className="center product-card">
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={onLikeToggle}>{isLiked ? "❤️ Liked" : "🤍 Like"}</button>
    </div>
  );
}

export default ProductCard;