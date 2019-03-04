<?php

require_once '../config/config.php';

echo render(TEMPLATES_DIR . 'index.tpl', [
    'title' => 'Главная',
    'h1' => 'Вас приветсствует Первый шаблонный Сайт',
    'content' => 'Я ВАС ПРИВЕТСТВУЮ'

]);





