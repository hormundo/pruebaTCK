export function collapsedElement() {
    document.addEventListener('click', e => {
        if(e.target.matches(".element-box h3") || e.target.matches(".element-box h3 *")) {
            e.target.closest(".element-box").classList.toggle("element-box--collapsed")
        }

        if(e.target.matches(".info-conditions") || e.target.matches(".info-conditions *")) {
            e.target.closest(".info").classList.toggle("info--collapsed")
        }
    })
}