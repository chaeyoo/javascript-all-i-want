import makeCarousel, { createEl } from "./module.js";

const app = createEl({
    tagName: 'div',
    parent: document.body,
});

app.style.cssText = `
    width: 400px;
    background-color: gray;
`;

app.append(makeCarousel([
    './images/01.jpg',
    './images/02.jpg',
    './images/03.jpg',
    './images/04.jpg',
    './images/05.jpg'
], { visibleCnt: 1, captionPos: 'left' }));

app.append(makeCarousel([
    './images/01.jpg',
    './images/02.jpg',
    './images/03.jpg',
    './images/04.jpg',
    './images/05.jpg'
], { visibleCnt: 2, captionPos: 'left bottom' }));

app.append(makeCarousel([
    './images/01.jpg',
    './images/02.jpg',
    './images/03.jpg',
    './images/04.jpg',
    './images/05.jpg'
], { visibleCnt: 3, captionPos: 'right top' }));

// app.append(makeCarousel());
