import ScrollUp from "@/components/layout/ScrollUp";
import Pricing from "@/components/ServicesPage/BlowerPage/Pricing";
import Explanation from "@/components/ServicesPage/BlowerPage/Explanation";
import Detection from "@/components/ServicesPage/BlowerPage/Detection";
import WeNeed from "@/components/ServicesPage/BlowerPage/WeNeed";
import Showcase from "@/components/ServicesPage/BlowerPage/Showcase";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Blower Door test - Zelené stavění.cz",
	description:
		"BLOWER DOOR TEST. Profesionální test vzduchotěsnosti obálky budov a bytů. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function BlowerDoor() {
	return (
		<>
			<ScrollUp />
			<ServicesImage
				name="Blower Door test"
				url="https://uploadthing.com/f/609a5541-f36b-492c-9f60-1f9db2b3cce7_blowerdoor_hero.jpg"
			/>
			<Explanation />
			<WeNeed />
			<Showcase />
			<Detection />
			<Pricing />
		</>
	);
}
