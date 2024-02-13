import { component$, useSignal } from "@builder.io/qwik";

export const CounterShared = component$((props: { initialVal: number }) => {
  const counter = useSignal(props.initialVal);

  return (
    <button
        onClick$={ () => {
            counter.value++;
            document.dispatchEvent(
                new CustomEvent("counter", { detail: counter.value })
            );
        }}
    >
        {counter.value}
    </button>
  );
});