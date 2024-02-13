import { component$, type Signal } from "@builder.io/qwik";

export const CounterJason = component$((props: { count: Signal<number> }) => {
    return <button onClick$={() => props.count.value++}>CLICK ME</button>;
});