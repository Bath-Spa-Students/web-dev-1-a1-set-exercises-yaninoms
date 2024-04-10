// Add event listener to execute code when window is fully loaded
window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll(".board div");
// the function 

// an iteration for each element in the board array using forEach
    board.forEach ((box,index) => {
        // adding this click event
        box.addEventListener("click", function() {
            sounds[index].currentTime = 0; // reset playback
            sounds[index].play();// to play the associated sound
        })
    })
})