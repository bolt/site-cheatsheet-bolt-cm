<?php

require_once './vendor/autoload.php';

$version = "2.2.11";

use Symfony\Component\Yaml\Parser;

$yaml = new Parser();
$cheatsheet = $yaml->parse(file_get_contents('cheatsheet.yml'));

$loader = new Twig_Loader_Filesystem('./view');
$twig = new Twig_Environment($loader, array(
  'cache' => './cache', 
));

// Add Dumper function to twig. 
$dumper = new Twig_SimpleFunction(
    'dump', 
    function ($var) { return \Dumper::dump($var, DUMPER_CAPTURE); }, 
    array('is_safe' => array('html')
));
$twig->addFunction($dumper);


// Add markdown to twig. 
$markdown = new Twig_SimpleFilter(
    'markdown', 
    function ($content) { return \ParsedownExtra::instance()->text($content); }, 
    array('is_safe' => array('html')
));
$twig->addFilter($markdown);

// Add slug filter to twig. 
$slug = new Twig_SimpleFilter(
    'slug', 
    function ($name) { return \URLify::filter($name); }, 
    array('is_safe' => array('html')
));
$twig->addFilter($slug);


echo $twig->render('index.twig', array(
    'title' => "Bolt Cheatsheet",
    'cheatsheet' => $cheatsheet,
    'version' => $version
));



