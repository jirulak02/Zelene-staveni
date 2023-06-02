"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";
import { messages } from "@/components/data/SluzbyStrechy";

export default function OurServices() {
    const [message, setMessage] = useState(messages[0].name);
    const [clicked, setClicked] = useState("Nezávazná konzultace");

    function messageHandler(event: React.MouseEvent<HTMLButtonElement>) {
        const target = event.target as HTMLInputElement;
        const newMessage = target.name;
        const innerHTML = target.innerHTML;

        setClicked(innerHTML);
        setMessage(newMessage);
    }

    return (
        <Container className="bg-bezova py-20">
            <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="text-zelena">Naše služby</h2>
                <div className="w-full">
                    <div>
                        {messages.map((button) => (
                            <button
                                key={button.title}
                                name={button.name}
                                onClick={messageHandler}
                                className={`px-3 py-2 font-semibold text-hneda hover:text-neutral-800 ${
                                    clicked === button.title
                                        ? "border-2 border-b-0 border-zelena bg-neutral-100 text-neutral-800"
                                        : ""
                                }`}
                            >
                                {button.title}
                            </button>
                        ))}
                    </div>
                    <div className="-mt-0.5 w-full border-2 border-zelena bg-neutral-100 px-6 py-4 text-left">
                        {message}
                    </div>
                </div>
                <p className="max-w-xl">
                    Pošlete nám výkres střechy, lokalitu a Vaši představu.
                    Obratem Vám vypracujeme nabídku. Věříme, že spolu dojdeme k
                    řešení, které Vás uspokojí nejen esteticky, ale i finančně.
                </p>
                <p>
                    Dodržujeme{" "}
                    <a
                        className="border-b border-bezova text-zelena hover:border-zelena"
                        href="https://www.zelenestaveni.cz/wp-content/uploads/2021/02/Zelene-strechy_standardy.pdf"
                        target="_blank"
                    >
                        standardy Zelených střech
                    </a>
                    .
                </p>
            </div>
        </Container>
    );
}