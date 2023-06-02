import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataPocasi } from "@/components/data/SluzbyStrechy";

export default function Cukr() {
	return (
		<Container className="my-20">
			<h3 className="my-5 text-center text-hneda">
				"Nejsme z cukru. Děláme tak, jak je potřeba."
			</h3>
			<div className="grid grid-cols-auto gap-2">
				{dataPocasi.map((item) => (
					<div
						key={item.id}
						className="flex flex-col items-center space-y-3 text-center"
					>
						<Image
							style={{ width: "400px" }}
							alt="Ukázka toho jak nás žádné počasí nezastaví"
							width="800"
							height="500"
							src={item.url}
						/>
						<h4 className="text-zelena">{item.name}</h4>
					</div>
				))}
			</div>
		</Container>
	);
}