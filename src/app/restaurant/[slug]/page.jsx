import { restaurants } from "@/data/restaurants";
import MenuItem from "@/components/MenuItem/MenuItem";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import { notFound } from "next/navigation";


export default async function PageRestaurant({params}) {
	const{slug} = await params;
	const resto=restaurants.find((r)=>r.slug===slug);
	if(!resto){
		return notFound();
	}
  return (
  	<div>
		<div className="heroImage"><img src={resto.image} alt={resto.name} className="image"/></div>
		<div className="mainWrapper">
			<div className="contentWrapper">
				<RestaurantHeader name={resto.name} />
				<div className="menu">
					<section>
						<h3 className="sectionTitle">Entrées</h3>
						{resto.menu.entrées.map((item, index) => (
						<MenuItem key={index} item={item} index={index} />
						))}
					</section>
					<section>
						<h3 className="sectionTitle">Plats</h3>
						{resto.menu.plats.map((item, index) => (
						<MenuItem key={index} item={item} index={index} />
						))}
					</section>
					<section>
						<h3 className="sectionTitle">Desserts</h3>
						{resto.menu.desserts.map((item, index) => (
						<MenuItem key={index} item={item} index={index} />
						))}
					</section>
				</div>
			</div>
			<button className="orderButton">Commander</button>
		</div>
	</div>
  );
}