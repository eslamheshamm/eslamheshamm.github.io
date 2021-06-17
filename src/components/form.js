import React from "react";
import { useForm } from "react-hook-form";
function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

const FormInputs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [succes, setSucces] = React.useState(false);
	const [disable, setDisable] = React.useState(false);

	const onSubmit = (data, e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...data,
			}),
		})
			.then((res) => {
				console.log(res);
				setSucces(true);
				setDisable(true);
			})
			.catch((error) => alert(error));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col"
			autoComplete="off"
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			netlify
		>
			<input type="hidden" name="form-name" value="contact" />
			<p className="hidden">
				<label>
					Don’t fill this out if you’re human: <input name="bot-field" />
				</label>
			</p>
			<label className="mb-5 w-full">
				<input
					name="name"
					type="text"
					placeholder="name"
					{...register("name", { required: true })}
					className="py-8 px-6 border  focus:outline-none block w-full"
				/>
				{errors.name && <span>Please Enter Your Name</span>}
			</label>
			<label className="mb-5 w-full">
				<input
					name="email"
					type="email"
					placeholder="email"
					{...register("email", {
						required: "Please Enter Your Email",
					})}
					className="py-8 px-6 border  focus:outline-none block w-full"
				/>
				{errors.email && <span>{errors.email.message}</span>}
			</label>

			<label className="mb-5 w-full">
				<input
					name="phone number"
					type="text"
					placeholder="phone number"
					{...register("phoneNumber", {
						required: false,
						pattern: {
							value: /[0-9]{9}/,
							message: "Only numbers",
						},
					})}
					className="py-8 px-6 border    focus:outline-none block w-full"
				/>
				{errors.phoneNumber && (
					<span className="self-end my-2">{errors.phoneNumber.message}</span>
				)}
			</label>

			{succes && <p className="font-bold my-2">Thank You!</p>}

			<button
				type="submit"
				className={
					disable
						? "self-end p-6 pl-24 pr-20     font-bold  text-lg opacity-50  cursor-not-allowed"
						: "self-end py-8 pl-24 pr-20     font-bold bg-black dark:bg-gray-300 bg-opacity-10 text-[#595959] text-lg"
				}
				disabled={disable}
			>
				Send
			</button>
		</form>
	);
};
export default FormInputs;
