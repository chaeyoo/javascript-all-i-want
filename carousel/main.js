import makeCarousel, { createEl } from "./module.js";

const app = createEl({
    tagName: 'div',
    parent: document.body,
});

app.style.cssText = `
    width: 400px;
    height: 400px;
    background-color: gray;
`;

app.append(makeCarousel());
app.append(makeCarousel());
app.append(makeCarousel());
