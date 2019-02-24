<?php
require_once __DIR__ . '/../config/config.php';
$title = "Задача 4";
$taskTitles = "Для тебя просто удачный день, чтобы жамкнуть по картинке";
$img = [
    "img/1.jpg",
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg'
];
echo '<div class="box-p">';
echo "$taskTitles </div>" ;
echo '<div class="box-img">';
foreach ($img as $el) {
    if (stripos($el, '.jpg')) {
        echo '<a href="'.$el.'">';
        print_r('<img src="' . $el . '" ' . "target=_blank" . ' width="200" hegiht="200" />');
        echo "</a>";
    }
};
echo "</div>"
//echo render(TEMPLATES_DIR . 'index.tpl', [
//	'title' => 'Заголовок супер длинный',
//	'h1' => 'Привет, жестокий мир!',
//	'content' => 'Какая-то инфа'
//]);
?>
<head>
<meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="css/style.css">
</head>
<script>
    function inNewWindow(block) {
        block.on('click', 'a:not([href^="#"])', function (e) {
            e.preventDefault();
            window.open(e.target.href, '_blank');
        })
    }
</script>


