import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Employees from "@/components/ContactPage/Employees";
import ContactForm from "@/components/ContactPage/ContactForm";

export const metadata = {
	title: "Kontakt",
	description: "TODO SEO",
};

export default function Kontakt() {
	return (
		<>
			<ScrollUp />
			<Container>
				<h1 className="text-zelena my-10">Kontakt</h1>
				<div className="my-10">
					<p>Zelené stavění PS s.r.o.</p>
					<p>Panská 212, Tehov, 251 01</p>
					<p>IČ: 05749565</p>
					<p>DIČ: CZ05749565</p>
				</div>
				<Employees />
				<h2 className="text-zelena mt-10 mb-5">Napište nám</h2>
				<div className="grid grid-cols-2 gap-8 mb-20">
					<ContactForm />
					<div className="h-full border-2 rounded-3xl border-neutral-200">
						<iframe
							width="100%"
							height="100%"
							className="rounded-3xl"
							loading="lazy"
							allowFullScreen
							src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRVGxxwuJC0cRLZls-GrzDTI&zoom=15&key=${process.env.GOOGLE_API}`}
						></iframe>
					</div>
				</div>
			</Container>
		</>
	);
}
