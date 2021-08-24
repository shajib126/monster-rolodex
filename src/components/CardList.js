import React from "react";
import Card from "./Card";

const CardList = ({ monsters }) => {
	return (
		<div className="cardList">
			{monsters.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};

export default CardList;
