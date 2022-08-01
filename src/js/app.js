let count = 0;

//select value and buttons

import { value, btns } from "./dom-loader.js";
import '../css/main.css';
import '../css/style.css';


btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count = 0;
        }
        //change value color:
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

        value.innerHTML = count;

    })
});