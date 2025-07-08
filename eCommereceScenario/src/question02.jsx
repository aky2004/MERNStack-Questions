import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "Liked ❤️" : "Like 🤍"}
    </button>
  );
}

export default LikeButton;
