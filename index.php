<?php

require_once './vendor/autoload.php';

$version = "2.0.0";

use Symfony\Component\Yaml\Parser;

$yaml = new Parser();
$cheatsheet = $yaml->parse(file_get_contents('cheatsheet.yml'));

\Dumper::dump($cheatsheet);

$loader = new Twig_Loader_Filesystem('./view');
$twig = new Twig_Environment($loader, array(
/*    'cache' => './cache', */
));

echo $twig->render('index.twig', array(
    'title' => "Bolt Cheatsheet",
    'cheatsheet' => $cheatsheet,
    'version' => $version
));



