const cards = document.querySelectorAll(".card-atracao");
cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        card.style.transform = "scale(1.08)";
        card.style.transition = "0.3s ease";
        card.style.zIndex = "10";
        card.style.boxShadow = "0 15px 35px rgba(236, 72, 153, 0.5)";

    });

    card.addEventListener("mouseleave", function() {

        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";

    });

});


