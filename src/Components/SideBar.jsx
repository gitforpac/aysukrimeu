import React from 'react';

const SideBar = () => {
	return(
		<div className="col side-bar">
			<div className="side-bar-content">
				<h3>Ayskrim</h3>
				<h6><blockquote className="font-ls-gray">"Fake it til you make it"</blockquote></h6>
				<ul className="menu">
					<li><a href="#">Projects</a></li>
					<li><a href="#">Poem</a></li>
					<li><a href="#">About</a></li>
				</ul>
				<ul className="socials">
					<li><a href="#"><i className="fab fa-twitter-square icon-size"></i></a></li>
					<li><a href="#"><i className="fab fa-tumblr-square icon-size"></i></a></li>
					<li><a href="#"><i className="fab fa-github-square icon-size"></i></a></li>
					<li><a href="#"><i className="fab fa-twitch icon-size"></i></a></li>
				</ul>
			</div>
		</div>
	);
}

export default SideBar;

