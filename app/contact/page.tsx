import LinkButton from "@/components/LinkButton";
import { Linkedin, GitHub, Mail } from "react-feather";

export default function Contact() {
	return (
		<div className="max-w-6xl w-full m-auto px-8 py-12 md:py-24">
			<h1 className="font-bold text-4xl md:text-5xl">Get in touch with me</h1>
			<p className="my-4">did this beautiful website win you over?</p>
			<div className="my-8 grid gap-8 grid-cols-4 w-fit">
				<LinkButton
					href="https://github.com/mehekj"
					icon={<GitHub className="inline mr-1" width={18} />}
				>
					GitHub
				</LinkButton>
				<LinkButton
					href="https://www.linkedin.com/in/mehek-jethani"
					icon={<Linkedin className="inline mr-1" width={18} />}
				>
					LinkedIn
				</LinkButton>
				<LinkButton
					href="mailto:mehekj2020@gmail.com"
					icon={<Mail className="inline mr-1" width={18} />}
				>
					Email
				</LinkButton>
			</div>
		</div>
	);
}
