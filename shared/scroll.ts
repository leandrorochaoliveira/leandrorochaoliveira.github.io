export type ScrollProps = {
  linkref: string
  event?: any
}

function calcularMarginMenu() {
  return window.innerWidth > 1024 ? 140 : 80
}


export function scrollToElement(linkref: string,event: any) {
  if(event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

    const domElement = document.querySelector<HTMLElement>(linkref);

    if(domElement) {
      window.scroll({
        top: domElement.offsetTop - calcularMarginMenu(),
        behavior: "smooth"
      });
    }
}
