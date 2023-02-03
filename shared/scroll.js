export function scrollToElement(event, element) {
  try {
    event.preventDefault();

    let margin = window.innerWidth > 1024 ? 140 : 80

    window.scroll({
      top: document.querySelector(element).offsetTop - margin,
      behavior: "smooth"
    });
  } catch (error) {
    
  }

}
