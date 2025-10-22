// permet de dire à Next.js que ce composant doit être rendu côté client c'est à dire dans le navigateur et non pas côté serveur
"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function RestaurantCard({ restaurant }) {
	const [like, setLike] = useState(false);
	const toggleLike = () => {
		setLike(!like);
	}
  return (
    <div className="restaurantCard">
	 <img src={restaurant.img} alt={restaurant.name} className="imageCard" />
	 <div className="restaurantInfo">
	   <h4 className="restaurantCardName">{restaurant.name}</h4>
	   <p className="restaurantPlace">{restaurant.place}</p>
	   {/* <p className="restaurantRating">Rating: {restaurant.rating}</p> */}
	   <div className="cardHeartIcon" onClick={toggleLike}>
			 <FontAwesomeIcon 
			 icon={like ? faHeartSolid : faHeartRegular}
			 style={{
			  color: like ? '#FF79DA' : 'black',
			 }} />
		</div>

	 </div>
    </div>
  );      
}