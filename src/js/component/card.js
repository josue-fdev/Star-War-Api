import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	function favoritos(nombre) {
		let existe = store.favorites.find(el => el === nombre);

		if (existe != undefined) {
			return true;
		}
	}

	return (
		<div className="card m-2">
			<img
				className="card-img-top"
				src="https://th.bing.com/th/id/OIF.BumZfIAOocJaTX1vxLjWow?pid=ImgDet&rs=1"
				alt="imagen"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">
					{props.var1}
					<br />
					{props.var2}
					<br />
					{props.var3}
				</p>
				<div className="d-flex flex-row justify-content-between">
					<Link to={"/info/" + props.nombre}>
						<span className="btn btn-outline-dark" href="#" role="button">
							Learn more
						</span>
					</Link>
					{store.favorites.length == 0 ? (
						<i
							className="far fa-heart fa-2x"
							onClick={() => {
								actions.addFavorites(props.nombre);
							}}
						/>
					) : favoritos(props.nombre) ? (
						<i
							className="fas fa-heart fa-2x"
							onClick={() => {
								actions.deleteFav(props.nombre);
							}}
						/>
					) : (
						<i
							className="far fa-heart fa-2x"
							onClick={() => {
								actions.addFavorites(props.nombre);
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	nombre: PropTypes.string,
	var1: PropTypes.any,
	var2: PropTypes.any,
	var3: PropTypes.any
};
