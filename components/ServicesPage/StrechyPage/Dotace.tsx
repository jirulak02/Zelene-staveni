import Image from "next/image";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Dotace() {
	return (
		<Container className="my-20">
			<div className="grid grid-cols-2 gap-2">
				<div className="space-y-5">
					<h3 className="text-hneda">Dotace na zelené střechy</h3>
					<p>
						Od ledna 2017 je možno žádat o dotaci na realizaci
						zelené střechy, kterou Vám rádi vyřídíme.
					</p>
					<p>
						Dotace činí 700-1000 Kč/m² zelené střechy a více se
						dozvíte na stránkách{" "}
						<a
							className="text-zelena border-b border-neutral-100 hover:border-zelena"
							href="http://www.novazelenausporam.cz/"
							target="_blank"
						>
							Nová zelená úsporám
						</a>
						. Cena zelené střechy tedy nemusí být vysoká. Maximální
						výše dotace je 100 000 Kč.
					</p>
					<div className="flex">
						<Button href="/sluzby/dotace">ZJISTIT VÍCE</Button>
					</div>
				</div>
				<Image
					style={{ width: "400px" }}
					className="m-auto"
					alt="Logo programu Nová zelená úsporám"
					width="800"
					height="400"
					src="https://uploadthing.com/f/d2e86f21-10f0-478b-bc11-861adcaa8604_nzu.png"
				/>
			</div>
		</Container>
	);
}
