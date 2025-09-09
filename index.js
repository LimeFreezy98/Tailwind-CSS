// glow function 

function addGlowEffect(button, defaultColors, hoverColors) {
    const baseClasses = button.className;


     button.className = `${baseClasses} ${defaultColors}`;

     button.addEventListener("mouseenter", () => {
        button.className = `${baseClasses} ${hoverColors}`;
       
    });

    button.addEventListener("mouseleave", () => {
        button.className = `${baseClasses} ${defaultColors}`;
        
    })
}

    // hover buttons
    document.addEventListener("DOMContentLoaded", () => {
        const signInBtn = document.getElementById("signInBtn");
        const getStartedBtn = document.getElementById("getStartedBtn");

//    glow effect 

  
if (signInBtn) {
    addGlowEffect(
        signInBtn,
        "bg-gradient-to-r from-red-600 to-pink-500",
        "bg-gradient-to-r from-purple-500 to-yellow-400 shadow-lg shadow-yellow-400/50"
    );
}

if (getStartedBtn) {
    addGlowEffect(
        getStartedBtn,
        "bg-gradient-to-r from-red-600 to-pink-500",
        "bg-gradient-to-r from-green-400 to-blue-500 shadow-lg shadow-blue-500/50"
    );
}
});

