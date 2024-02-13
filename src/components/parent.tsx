import { component$, useSignal } from "@builder.io/qwik";
import { CounterJason } from "./counter-jason";
import { Info } from "./info";

export const Wrapper = component$(() => {
    const counter = useSignal(0);

    return (
        <>
            <CounterJason count={counter} />

            <h2>Info Section</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti id incidunt assumenda libero commodi, iste repellendus ut ab architecto culpa omnis iure sed veniam similique cumque est! Facilis, neque?</p>
            <Info count={counter} />
        </>
    );
});