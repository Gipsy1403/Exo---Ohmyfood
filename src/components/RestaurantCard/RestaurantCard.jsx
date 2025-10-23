// permet de dire à Next.js que ce composant doit être rendu côté client c'est à dire dans le navigateur et non pas côté serveur
"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';


export default function RestaurantCard({ restaurant, slug }) {
	const [like, setLike] = useState(false);
	const toggleLike = () => {
		setLike(!like);
	}
  return (
	<Link href={`/restaurant/${restaurant.slug}`}>
		<div className="restaurantCard">
			<img src={restaurant.image} alt={restaurant.name} className="imageCard" />
			<div className="restaurantInfo">
			<h4 className="restaurantCardName">{restaurant.name}</h4>
			<p className="restaurantPlace">{restaurant.location}</p>
			<div className="cardHeartIcon" onClick={toggleLike}>
					<FontAwesomeIcon 
					icon={like ? faHeartSolid : faHeartRegular}
					style={{
					color: like ? '#FF79DA' : 'black',
					}} />
				</div>
			</div>
		</div>
    </Link>
  );      
}