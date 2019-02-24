<?php
//6. В имеющемся шаблоне сайта заменить статичное меню (ul – li) на генерируемое через PHP.
//Необходимо представить пункты меню как элементы массива и вывести их циклом. Подумать,
//как можно реализовать меню с вложенными подменю? Попробовать его реализовать.
echo "<h1>Задание №6 </h1> ";

$menu = [
    [
        'title' => 'Главная',
        'link' => '/',
        'children' => []
    ],
    [
        'title' => 'Новости',
        'link' => '/articles',
        'children' => [
            [
                'title' => 'Кошечки',
                'link' => '/articles/cats',
                'children' => []
            ],
            [
                'title' => 'Собачки',
                'link' => '/articles/dogs',
                'children' => [
                 [
                    'title' => 'Лайки',
                    'link' => '/articles/dogs/like',
                ],
                [
                    'title' => 'Хаски',
                    'link' => '/articles/dogs/husky',
                ]
                ],

            ],
        ]
    ],
    [
        'title' => 'Контакты',
        'link' => '/contacts',
        'children' => []
    ]
];

/**
 * @param $menu
 */
function createMenu($menu){
    echo "<ul>";
    foreach ($menu as $menuItem) {
        echo "<li>";
        echo "<a href=\"" . $menuItem['link'] . "\">";
        echo $menuItem['title'];
        echo "</a>";
        if(!empty($menuItem['children'])) {
            createMenu($menuItem['children']);
        }
        echo "</li>";
    }
    echo "</ul>";
}

createMenu($menu);