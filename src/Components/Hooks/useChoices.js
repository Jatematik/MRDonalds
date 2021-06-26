import { useState } from "react";

export function useChoices(openItem) {

    const [choice, setChoice] = useState(openItem.choice && openItem.choice);

    function changeChoices(item){
        setChoice(item);
    }

    return {choice, changeChoices};
}