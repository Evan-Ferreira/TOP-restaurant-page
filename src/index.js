import './styles.css';

class Home {
    constructor() {
        this.render();
    }

    render() {
        if (document.querySelector('.content-box')) {
            document.querySelector('.content-box').remove();
        }
        const container = document.createElement('div');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        container.classList.add('content-box-home');
        container.classList.add('content-box');
        title.textContent = 'Welcome to my recipe page!';
        description.textContent = 'I love making recipes yum yum';
        container.appendChild(title);
        container.appendChild(description);
        const mainCont = document.querySelector('.main-cont');
        mainCont.appendChild(container);
    }
}

class Menu {
    constructor() {
        this.render();
    }

    render() {
        if (document.querySelector('.content-box')) {
            document.querySelector('.content-box').remove();
        }
        const container = document.createElement('div');
        const title = document.createElement('h2');
        const ingredients = document.createElement('ul');
        const step1 = document.createElement('li');
        const step2 = document.createElement('li');
        const step3 = document.createElement('li');
        const description = document.createElement('p');
        container.classList.add('content-box-menu');
        container.classList.add('content-box');
        title.textContent = 'Lasagna';
        description.textContent = "shoutout hussein's mom";
        step1.textContent = 'lamb';
        step2.textContent = 'curry sauce';
        step3.textContent = 'rice';
        const listChildren = [step1, step2, step3];
        const divChildren = [title, ingredients, description];
        for (let child of divChildren) {
            container.appendChild(child);
        }
        for (let child of listChildren) {
            ingredients.appendChild(child);
        }
        const mainCont = document.querySelector('.main-cont');
        mainCont.appendChild(container);
    }
}

class About {
    constructor() {
        this.render();
    }

    render() {
        if (document.querySelector('.content-box')) {
            document.querySelector('.content-box').remove();
        }
        const container = document.createElement('div');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        container.classList.add('content-box-about');
        container.classList.add('content-box');
        title.textContent = 'Hi my name is Evan';
        description.textContent = 'I hate cooking';
        container.appendChild(title);
        container.appendChild(description);
        const mainCont = document.querySelector('.main-cont');
        mainCont.appendChild(container);
    }
}

const buttons = (function () {
    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const aboutBtn = document.querySelector('.about-btn');
    homeBtn.addEventListener('click', () => {
        const home = new Home();
        home.render();
        console.log('penis');
    });
    menuBtn.addEventListener('click', () => {
        const menu = new Menu();
        menu.render();
    });
    aboutBtn.addEventListener('click', () => {
        const about = new About();
        about.render();
    });
})();

buttons;
