import React from "react";
import { useForm } from "react-hook-form";
import { useFormspark } from "@formspark/use-formspark";
import classNames from "classnames";

const FormInputs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [succes, setSucces] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [submit] = useFormspark({
		formId: "4FkSwaPc",
	});
	const onSubmit = async (data, e) => {
		e.preventDefault();
		await submit({ ...data })
			.then(() => {
				setSucces(true);
			})
			.catch((error) => setError(error));
	};
	const InputStyles =
		"py-8 px-6 border-2 dark:focus:border-[#3D3D3D] dark:border-[#222222] dark:bg-[#1D1D1D]  focus:outline-none block w-full";
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col"
			autoComplete="off"
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			netlify="true"
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
					className={InputStyles}
				/>
				{errors.name && <span>Please Enter Your Name</span>}
			</label>
			<label className="mb-5 w-full ">
				<input
					name="email"
					type="email"
					placeholder="email"
					{...register("email", {
						required: "Please Enter Your Email",
					})}
					className={InputStyles}
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
					className={InputStyles}
				/>
				{errors.phoneNumber && (
					<span className="self-end my-2">{errors.phoneNumber.message}</span>
				)}
			</label>

			{succes && <p className="font-bold my-2">Thank You!</p>}
			{error && (
				<p className="font-bold my-2">Sorry something wrong happened.</p>
			)}
			<button
				type="submit"
				className={classNames(
					"self-end py-6 px-20 font-bold  text-lg text-black dark:text-white dark:bg-[#242424] bg-black  bg-opacity-10",
					succes && "cursor-not-allowed animate-none"
				)}
				disabled={succes}
			>
				Send
			</button>
		</form>
	);
};
export default FormInputs;
