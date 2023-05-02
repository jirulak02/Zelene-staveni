import ScrollUp from "@/components/layout/ScrollUp";
import Cenik from "@/components/ServicesPage/BlowerPage/Cenik";
import Explanation from "@/components/ServicesPage/BlowerPage/Explanation";
import Netesnost from "@/components/ServicesPage/BlowerPage/Netesnost";
import Potrebujeme from "@/components/ServicesPage/BlowerPage/Potrebujeme";
import Showcase from "@/components/ServicesPage/BlowerPage/Showcase";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Blower Door test",
	description: "TODO SEO",
};

export default function BlowerDoor() {
	return (
		<>
			<ScrollUp />
			<ServicesImage name="Blower Door test" />
			<Explanation />
			<Potrebujeme />
			<Showcase />
			<Netesnost />
			<Cenik />
		</>
	);
}
