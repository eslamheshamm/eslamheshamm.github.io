import React from "react";
import Seo from "../components/seo";
import Layouts from "../components/layouts";
import FormInputs from "../components/form";

const ContactPage = () => {
	return (
		<>
			<Seo title="Contact me" />
			<Layouts>
				<section className="w-11/12  mx-auto mt-44 overflow-y-hidden">
					<article className=" lg:w-9/12 xl:w-7/12">
						<h1 className="text-3xl sm:5xl md:text-6xl font-bold">
							Let’s work together?
						</h1>
						<p className=" mt-8 mb-12  opacity-30 ">
							Looking For Collaborator? don't hesitate to connect.
						</p>
						<FormInputs />
					</article>
				</section>{" "}
			</Layouts>
		</>
	);
};

export default ContactPage;
