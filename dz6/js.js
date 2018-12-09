"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 * @property {string} settings.openedErrorImgSrc Путь до картинки заглушки
 * @property {string} settings.openedImagePreviewsBtnClass Класс для предыдущей картинки
 * @property {string} settings.openedImageNextBtnClass Класс для следующей картинки
 * @property {string} settings.openedImageScrollBtnSrc Путь до картинки "scroll" - прокрутка.
 */
const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImagePreviewsBtnClass: 'galleryWrapper__previews',
        openedImageNextBtnClass: 'galleryWrapper__next',
        openedImageScrollBtnSrc: 'images/gallery/scroll.png',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
        openedErrorImgSrc: 'images/gallery/error.png',
    },

    /**
     * Инициализирует галерею, ставит обработчик события.
     * @param {Object} userSettings Объект настроек для галереи.
     */
    init(userSettings = {}) {
        // Записываем настройки, которые передал пользователь в наши настройки.
        Object.assign(this.settings, userSettings);

        // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
        // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
        // gallery и передадим туда событие MouseEvent, которое случилось.
        document
            .querySelector(this.settings.previewSelector)
            .addEventListener('click', event => this.containerClickHandler(event));
    },

    /**
     * Обработчик события клика для открытия картинки.
     * @param {MouseEvent} event Событие клики мышью.
     * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
     */
    containerClickHandler(event) {
        // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
        if (event.target.tagName !== 'IMG') {
            return;
        }
        // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут).
        this.openImage(event.target.dataset.full_image_url);
        this.currentImage = event.target;
    },

    /**
     * Открывает картинку.
     * @param {string} src Ссылка на картинку, которую надо открыть.
     */
    openImage(src) {
        // Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src.
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },

    /**
     * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
     * @returns {Element}
     */
    getScreenContainer() {
        // Получаем контейнер для открытой картинки.
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        // Если контейнер для открытой картинки существует - возвращаем его.
        if (galleryWrapperElement) {
            return galleryWrapperElement;
        }

        // Возвращаем полученный из метода createScreenContainer контейнер.
        return this.createScreenContainer();
    },

    /**
     * Создает контейнер для открытой картинки.
     * @returns {HTMLElement}
     */
    createScreenContainer() {
        // Создаем сам контейнер-обертку и ставим ему класс.
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        image.addEventListener('error', () => {
            image.src = this.settings.openedErrorImgSrc
        });
        galleryWrapperElement.appendChild(image);

        // Создаем картинку для кнопки предыдущая картинка, ставим класс, src и добавляем ее в контейнер-обертку.
        const previewsImageElement = new Image();
        previewsImageElement.classList.add(this.settings.openedImagePreviewsBtnClass);
        previewsImageElement.src = this.settings.openedImageScrollBtnSrc;
        previewsImageElement.addEventListener('click', () => this.previewsImage());
        galleryWrapperElement.appendChild(previewsImageElement);

        // Создаем картинку для кнопки следующая картинка, ставим класс, src и добавляем ее в контейнер-обертку.
        const nextImageElement = new Image();
        nextImageElement.classList.add(this.settings.openedImageNextBtnClass);
        nextImageElement.src = this.settings.openedImageScrollBtnSrc;
        nextImageElement.addEventListener('click', () => this.nextImage());
        galleryWrapperElement.appendChild(nextImageElement);

        // Добавляем контейнер-обертку в тег body.
        document.body.appendChild(galleryWrapperElement);

        // Возвращаем добавленный в body элемент, наш контейнер-обертку.
        return galleryWrapperElement;


    },

    /**
     * Закрывает (удаляет) контейнер для открытой картинки.
     */
    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },

    /**
     * Переключает картинку в право
     */
    nextImage() {
        this.currentImage = this.currentImage.nextElementSibling;
        if (this.currentImage === null) {
            this.currentImage = document.querySelector(this.settings.previewSelector).firstElementChild;
        }
        this.openImage(this.currentImage.dataset.full_image_url)
    },

    /**
     * Переключает картинку влево
     */
    previewsImage() {
        this.currentImage = this.currentImage.previousElementSibling;
        if (this.currentImage === null) {
            this.currentImage = document.querySelector(this.settings.previewSelector).lastElementChild;
        }
        this.openImage(this.currentImage.dataset.full_image_url)
    },
};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});