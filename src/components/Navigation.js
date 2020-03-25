/** @jsx jsx */
import { jsx, Flex, Styled, Container, Button } from "theme-ui";
import React from "react";
import { Link, graphql, navigate } from "gatsby";
import Img from "gatsby-image";
import Cart from "./Cart/index";

import StoreContext from "../StoreContext/index.js";

var { useContext } = React;

const Navigation = () => {
	return (
		<Flex
			sx={{
				padding: 2,
				alignItems: "baseline",
				backgroundColor: "white",
				boxShadow: 0
			}}
		>
			<Link
				sx={{
					color: "inherit",
					textDecoration: "none",
					marginRight: "auto"
				}}
				to="/"
			>
				<Styled.h4
					sx={{
						transition: props => `${props.transitions[0]}s`,
						"&:hover": {
							color: "primary",
							transition: props => `${props.transitions[0]}s`
						}
					}}
				>
					Modernist Design Books
				</Styled.h4>
			</Link>
			<Link
				sx={{
					color: "inherit",
					textDecoration: "none",
					marginRight: 1
				}}
				to="/"
			></Link>
			<Cart />
		</Flex>
	);
};

export default Navigation;
