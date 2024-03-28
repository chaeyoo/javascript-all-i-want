
export default function makeCarousel(itemList, visibleCnt = 4) {


    const iconPrev = `<div style="width: 40px; height: 20px; background-color: red; cursor: pointer">이전</div>`;

    const iconNext = `<div style="width: 40px; height: 20px; background-color: red; cursor: pointer">다음</div>`

    const itemWidth = Math.trunc(400 / visibleCnt);
    const wrapper = createEl({
        tagName: 'div',
    });
    wrapper.style.cssText = `
    width: 100%;
    height: ${100 / visibleCnt}%;
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
    transform: translateX(0px);
`;
    addBtns();

    // itemList 있는 경우에는 새로 아이템 만들어서 추가
    if (itemList) {
        // itemList = [...itemList.splice(-1), ...itemList];
        itemList.forEach(item => {
            addImgItem(itemContainer, item);
        });
    } else {
        // 없을 때는 기존처럼 동작
        addImgItem(itemContainer, './images/01.jpg');
        addImgItem(itemContainer, './images/02.jpg');
        addImgItem(itemContainer, './images/03.jpg');
        addImgItem(itemContainer, './images/04.jpg');
        addImgItem(itemContainer, './images/05.jpg');
    }

    function handleSlide(next = true) {
        // const clone = next ? itemContainer.firstChild.cloneNode(true) : undefined;
        // clone && itemContainer.appendChild(clone);

        // clone 떠서 미리 배치
        if (next) {
            itemContainer.appendChild(
                itemContainer.firstChild.cloneNode(true)
            )
        } else {
            itemContainer.prepend(
                itemContainer.lastChild.cloneNode(true)
            )
            itemContainer.style.transform = `translateX(${-itemWidth}px)`
        }
        setTimeout(() => {
            handleTransitionEnd(next);
        }, 0);

    }


    function handleTransitionEnd(next) {
        itemContainer.style.transitionDuration = '0.5s';
        itemContainer.style.transform = `translateX(${next ? (- itemWidth) : 0}px)`;

        itemContainer.ontransitionend = () => {
            itemContainer.style.removeProperty('transition-duration');
            itemContainer.style.transform = `translateX(0px)`;

            next ? itemContainer.firstChild.remove()
                : itemContainer.lastChild.remove();
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
        width: ${itemWidth}px;
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