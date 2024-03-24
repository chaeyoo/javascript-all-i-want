const app = createEl({
    tagName: "div",
    parent: document.body
});
app.style.cssText = `width: 700px;
height: 250px;
background-color: rgb(100, 100, 100);
`

const wrapper = createEl({
    tagName: "div",
    parent: app
})
wrapper.style.cssText = `
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
`;

const [prevButton, nextButton] = createEl({
    tagName: 'button',
    parent: wrapper,
    count: 2
});

prevButton.style.cssText = `
    position: absolute;
    z-index:1;
    border: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background-color: transparent;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 100%);
    filter: drop-shadow(3px 5px 2px rgba(0 0 0 / 0.7));
`

nextButton.style.cssText = `
    position: absolute;
    z-index:1;
    border: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background-color: transparent;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 100%);
    filter: drop-shadow(3px 5px 2px rgba(0 0 0 / 0.7));
`
nextButton.style.background = `linear-gradient(270deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 100%)`;

function createEl({ tagName, properties, parent, children, cnt = 1 }) {
    const create = () => {
        const el = document.createElement(tagName);
        Object.assign(el, properties); // 앞의 obj에 뒤 obj를 merge
        parent?.appendChild(el);
        children?.map(child => {
            child.parent = el;
            createEl(child);
        });
        return el;
    }

    if (cnt > 1) {
        const result = [];
        for (let i = 0; i < cnt; ++i) {
            result.push(create());
        }
        return result;
    } else {
        return create();
    }
}