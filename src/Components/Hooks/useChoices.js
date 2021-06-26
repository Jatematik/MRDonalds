import { useState } from "react";

export function useChoices() {

    // const readyChoise = openItem.choices ? openItem.choices : [];

    const [choice, setChoice] = useState();

    function changeChoices(item){
        setChoice(item);
    }

    return {choice, changeChoices};
}