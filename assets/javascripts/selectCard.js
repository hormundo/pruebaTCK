export function selectCard() {
    document.addEventListener('click', e => {
        document.querySelectorAll(".regimen-card").forEach(e => {
            e.classList.remove("regimen-card--selected");
        });

        let cardElement = e.target.closest(".regimen-card");

        if(cardElement) {
            cardElement.classList.add("regimen-card--selected");
        }
    })
}