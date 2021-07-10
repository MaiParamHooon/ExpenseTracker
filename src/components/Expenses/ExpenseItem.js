import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
// import { useState } from "react";

const ExpenseItem = (props) => {
	// const [title, setTitle] = useState(props.title);

	// // let title = props.title;

	// const clickHandler = () => {
	// 	// title = "Updated";
	// 	setTitle("Updated");
	// };

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
				{/* <button onClick={clickHandler}>Change title</button> */}
			</Card>
		</li>
	);
};

export default ExpenseItem;
