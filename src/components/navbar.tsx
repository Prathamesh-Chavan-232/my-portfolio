import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
		<div className="nav">
			<div className="logo"></div>
			<div className="title">Prathamesh Chavan</div>
			<ul>
				<li>
					<Link to="/work">Work</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};
