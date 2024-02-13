import { component$, type Signal } from "@builder.io/qwik";

export const Info = component$((props: { count: Signal<number> }) => {
    return <div>The button has been clicked {props.count.value} times.</div>;
});