const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
    let buttonPress = button.textContent;

        if (button.id === "clear") {
            screen.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (screen.textContent.length === 1) {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }
        

        if (screen.textContent === "0") {
            screen.textContent = buttonPress;
         } else {
             screen.textContent += buttonPress;
            }
    })
})