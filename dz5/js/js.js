"use strict";

/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
    gameContainerEl: document.getElementById('game'),

    /**
     * Метод отображения карты (игрового поля).
     */
    renderMap() {
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
        const rows = [0, '8', '7', '6', '5', '4', '3', '2', '1', 0];
        // Добавляем ячейки в строку.

        for (let row = 0; row < 10; row++) {
            // Создаем и добавляем строку.
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col = 0; col < 10; col++) {
                // Создаем и добавляем ячейку.
                const td = document.createElement('td');
                tr.appendChild(td);

                // Если строка нулевая (первая по счету), значит выводим буквы в ней.
                // Нули из массива с названиями колонок не выводим, они нам не нужны.
                if (row === 0 && cols[col] !== 0 || row === 9 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (col === 0 && rows[row] !== 0 || col === 9 && rows[row] !== 0) {
                    td.innerHTML = rows[row];
                }

                // Проверяем, надо ли покрасить ячейку, передаем строку и колонку.
                if (!this.isCellIsBlack(row, col) && (row !== 0 && col !== 0) && (row !== 9 && col !== 9)){
                    td.style.backgroundColor = 'aqua';
                }

            }
        }

    },

    /**
     * Определяет является ли ячейка черной.
     * @param {int} rowNum Номер в строке.
     * @param {int} colNum Номер в колонке.
     * @returns {boolean} true, если ячейка должна быть черной, иначе false.
     */
    isCellIsBlack(rowNum, colNum) {
        // Если будет остаток, то он даст true в условии, а если не будет, то 0 даст false в условии.
        return ((rowNum % 2 === 0 && colNum % 2 === 0) || (rowNum % 2 !== 0 && colNum % 2 !== 0));


    },
};

// Запускаем метод отображения карты.
chess.renderMap();
