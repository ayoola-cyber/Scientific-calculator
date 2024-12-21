document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const button = document.querySelectorAll(".main button");
    console.log(display);
    console.log(button);
    button.forEach((btn) => {
        btn.addEventListener("click", () => {
            const data_value = btn.getAttribute("data-value");
            const data_action = btn.getAttribute("data-action");
            console.log(data_value);
            console.log(data_action);

            if(data_action === "clear"){
                display.value = "";
            }
            else if(data_action === "backspace"){
                display.value = display.value.slice(0, -1);
            } 
            else if(data_value){
                display.value += data_value;
            }
            else if(data_action === "sqrt"){
                display.value = Math.sqrt(parseFloat(display.value));
            }
            else if(data_action === "equal"){
                const input = display.value.split("x").join("*").split("÷").join("/")
                display.value = eval(input);
            }
            else if(data_action === "sine"){
                display.value = Math.sin(parseFloat(display.value)) || "error";
            }
            else if(data_action === "cosine"){
                display.value = Math.cos(parseFloat(display.value)) || "error";
            }
            else if(data_action === "tangent"){
                display.value = Math.tan(parseFloat(display.value)) || "error";
            }
            else if(data_action === "power"){
                display.value = Math.pow(parseFloat(display.value),2) || "error";
            }


        })
    })
})

