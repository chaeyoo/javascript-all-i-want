
export default function makeCarousel() {


    const iconPrev = `<div style="width: 40px; height: 20px; background-color: red; cursor: pointer">이전</div>`;

    const iconNext = `<div style="width: 40px; height: 20px; background-color: red; cursor: pointer">다음</div>`


    const wrapper = createEl({
        tagName: 'div',
    });
    wrapper.style.cssText = `
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden
`;


    const itemContainer = createEl({
        tagName: 'div',
        parent: wrapper,
    });

    itemContainer.style.cssText = `
    display: flex;
    transform: translateX(-400px);
`;
    addBtns();

    addImgItem(itemContainer, './images/01.jpg');
    addImgItem(itemContainer, './images/02.jpg');
    addImgItem(itemContainer, './images/03.jpg');
    addImgItem(itemContainer, './images/04.jpg');
    addImgItem(itemContainer, './images/05.jpg');


    function handleSlide(next = true) {
        itemContainer.style.transitionDuration = '0.5s';
        itemContainer.style.transform = `translateX(${next ? -800 : 0}px)`;
        itemContainer.ontransitionend = () => {
            itemContainer.style.removeProperty('transition-duration');
            itemContainer.style.transform = 'translateX(-400px)';
            next ? itemContainer.appendChild(itemContainer.firstChild)
                : itemContainer.prepend(itemContainer.lastChild);
        }
    }


    function addBtns() {

        const [prevBtn, nextBtn] = createEl({
            tagName: 'button',
            parent: wrapper,
            cnt: 2,
        });

        prevBtn.style.cssText = `
    position: absolute;
    z-index: 1;
    border: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background-color: transparent;
    filter: drop-shadow(3px 5px 2px rgba(0 0 0 / 0.7));
`;

        nextBtn.style.cssText = prevBtn.style.cssText;


        prevBtn.style.left = '0px';
        nextBtn.style.right = '0px';


        prevBtn.innerHTML = iconPrev;
        nextBtn.innerHTML = iconNext;

        nextBtn.onclick = () => {
            handleSlide(true);
        }

        prevBtn.onclick = () => {
            handleSlide(false);
        }
    }
    function addImgItem(parent, src, cationText = 'Caption Text') {
        const container = createEl({
            tagName: 'div',
            parent,
        });

        container.style.cssText = `
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `;

        const image = createEl({
            tagName: 'img',
            parent: container,
            properties: { src }
        });

        image.style.cssText = `
        width: 100%;
        height: 100%;

        }
    `;

        const caption = createEl({
            tagName: 'span',
            properties: { innerText: cationText },
            parent: container,
        });

        caption.style.cssText = `
        color: white;
        font-weight: bold;
        position: absolute;
        filter: drop-shadow(3px 3px 30px rgba(0 0 0 / 0.5));
    `;

        return container;
    }
    return wrapper;
}

export function createEl({ tagName, properties, parent, children, cnt = 1 }) {
    const create = () => {
        const el = document.createElement(tagName);
        Object.assign(el, properties);
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