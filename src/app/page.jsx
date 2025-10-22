import Image from "next/image";
import styles from "./page.module.css";
import Steps from "@/components/Steps/Steps";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
// import { useState } from "react";



export default function Home() {
	  const restaurants = [
    {
      img: "/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
      name: "La palette du goût",
      place: "Ménilmontant",
    },
    {
      img: "/images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg",
      name: "La note enchantée",
      place: "Charonne",
    },
    {
      img: "/images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg",
      name: "À la française",
      place: "Cité Rouge",
    },
    {
      img: "/images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg",
      name: "Le délice des sens",
      place: "Folie-Méricourt",
    },
  ];
  	// const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
  return (
    <>
      <div className={styles.location}>
        <Image src="/icons/location.svg" alt="" width={16} height={16} />
        <span>Paris, Belleville</span>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Réservez le menu qui vous convient</h1>
          <p>Découvrez des restaurants d'exception, sélectionnés par nos soins.</p>
          <button className={styles.cta}>Explorer nos restaurants</button>
        </div>
      </section>

      <Steps />

      <section className={styles.restaurants}>
        <div className={styles.restaurantsContent}>
          <h2>Restaurants</h2>
          <div className={styles.restaurantGrid}>
			{restaurants.map((restaurant, index) => (
			  <RestaurantCard key={index} restaurant={restaurant} />
			))}
            {/* <RestaurantCard
		    restaurant={{
			img:"/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
			name: "La palette du goût",
			place:"Ménilmontant"}}/> */}
		</div>
        </div>
      </section>
    </>
  );
}
