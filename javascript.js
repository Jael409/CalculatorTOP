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
            if (screen.textContent.length === 1 || screen.textContent === "WHAT ARE YOU DOING?") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "WHAT ARE YOU DOING?";
            }
            return;
        }
        
        if (screen.textContent === "0" || screen.textContent === "WHAT ARE YOU DOING?") {
            screen.textContent = buttonPress;
         } else {
             screen.textContent += buttonPress;
            }
    })

})