export function createCafeContainer() {
    const cafe = document.createElement('div');
    cafe.classList.add('cafe');

    const container = document.createElement('div');
    container.classList.add('container');
    cafe.appendChild(container);

    return { cafe, container }
}