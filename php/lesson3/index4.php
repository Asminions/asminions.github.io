<?php
//4. Объявить массив, индексами которого являются буквы русского языка,
//а значениями – соответствующие латинские буквосочетания
//(‘а’=> ’a’, ‘б’ => ‘b’, ‘в’ => ‘v’, ‘г’ => ‘g’, …, ‘э’ => ‘e’, ‘ю’ => ‘yu’, ‘я’ => ‘ya’).
echo "<h1>Задание №4 </h1> ";
/**
 * Функция транслитерации алфавита
 * @param $str, строка которую траслитерируем
 */
function translit($str){
    $alfabet = [
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e',
        'ё' => 'yo', 'ж' => 'j', 'з' => 'z', 'и' => 'i', 'й' => 'i', 'к' => 'k',
        'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r',
        'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c',
        'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ъ' => '\'\'', 'ы' => 'y', 'ь' => '\'',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya'
    ];

    $word = strtr($str, $alfabet);
    echo "$word <br>";
};
translit("съезжать пора на ибицу");
translit("а потом в другие города");
// с гуглом еле как решил.