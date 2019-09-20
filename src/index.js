/**
 * 
 * @param {Boolean} always if listening onpageshow event
 */
const autoScrollTop = ({ always = true, delay = 16 } = {}) => {
    let sto, moved = false;
    const doIfOpen = () => {
        if(sto || moved) {
            return;
        }
        sto = setTimeout(() => {
            window.scrollTo(0, 0);
        }, delay);
    };
    if(always) {
        window.addEventListener('pageshow', doIfOpen);
    }
    window.addEventListener('load', doIfOpen);
    const stop = () => {
        typeof sto === 'number' && clearTimeout(sto);
        moved = true;
        window.removeEventListener('touchmove', stop);
    };
    window.addEventListener('touchmove', stop);
};

export default autoScrollTop;