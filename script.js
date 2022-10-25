const kits = ["crash", "kick", "snare", "tom"]
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;

    // Add images to buttons 
    btnEl.style.backgroundImage = "url(./artifacts/images/" + kit + ".png)";
    containerEl.appendChild(btnEl);

    // Add Audio to buttons 
    const audioEl = document.createElement("audio");

    // Connect Sound Files to Buttons
    audioEl.src = "./artifacts/audio/" + kit + ".mp3";
    containerEl.appendChild(audioEl);

    // Hear the associated sounds to each button 
    btnEl.addEventListener("click", () => {
        audioEl.play();
    });

    // Play sounds using the Keyboard (C, K, S, and T) 
    window.addEventListener("keydown", (event) => {
        // console.log(event.key)
        if (event.key === kit.slice(0,1)){
            audioEl.play()
            // Changes the size of the button when hit 
            btnEl.style.transform = "scale(.9)";
            // Set a timer to return the image back to normal 
            setTimeout(() => {
                btnEl.style.transform = "scale(1)"
            }, 100)
        };
    })
});