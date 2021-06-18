import React from "react";
import FormInputs from "../form";
const ContactMe = React.forwardRef((props, ref) => (
	<section className="w-11/12 md:w-10/12 mx-auto pb-44" {...props} ref={ref}>
		<article className=" lg:w-9/12 xl:w-7/12">
			<h1 className="text-3xl sm:5xl md:text-6xl font-bold">
				Let’s work together?
			</h1>
			<p className=" mt-8 mb-12  opacity-30 ">
				Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et.
				Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue
				sed.
			</p>
			<FormInputs />
		</article>
	</section>
));

export default ContactMe;
