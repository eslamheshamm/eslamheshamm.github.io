import React from "react";

import Seo from "../components/seo";
import Layouts from "../components/layouts";
const AboutMe = () => {
	return (
		<>
			<Seo title="About Me" />
			<Layouts>
				<section className="w-11/12 mx-auto mt-44">
					<h2 className="text-2xl uppercase text-center font-bold">
						I'm that guy who you'd like to hear some of his stories.
					</h2>
				</section>
			</Layouts>{" "}
		</>
	);
};

export default AboutMe;
