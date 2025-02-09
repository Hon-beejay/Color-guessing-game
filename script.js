const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];
        let targetColor = "";
        let score = 0;
        let gameOver = false;

        function startNewGame() {
            score = 0;
            gameOver = false;
            document.getElementById("gameStatus").textContent = "";
            document.getElementById("score").textContent = "Score: 0";
            generateNewColors();
        }

        function generateNewColors() {
            targetColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            const colorBox = document.getElementById("colorBox");
            colorBox.style.backgroundColor = targetColor;
            colorBox.classList.add("animate");
            setTimeout(() => colorBox.classList.remove("animate"), 300);
            
            const buttonsContainer = document.getElementById("buttonsContainer");
            buttonsContainer.innerHTML = "";
            COLORS.forEach(color => {
                const button = document.createElement("button");
                button.className = "color-button";
                button.style.backgroundColor = color;
                button.textContent = color;
                button.setAttribute("data-testid", "colorOption");
                button.onclick = () => handleGuess(color, button);
                buttonsContainer.appendChild(button);
            });
        }

        function handleGuess(color, button) {
            if (gameOver) return;
            if (color === targetColor) {
                score++;
                document.getElementById("score").textContent = `Score: ${score}`;
                generateNewColors();
            } else {
                document.getElementById("gameStatus").textContent = `Wrong! Game Over. Final Score: ${score}`;
                gameOver = true;
                button.style.opacity = "0.5";
                button.style.transform = "scale(0.9)";
            }
        }

        document.getElementById("newGameButton").addEventListener("click", startNewGame);

        startNewGame();