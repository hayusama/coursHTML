<?php
if($_GET["test"]==8){
$computedString = 'Bonjour, Julien !';
$array = ['userName' => "Julien", 'computedString' => $computedString];
echo json_encode($array);
}

if($_GET["test"]==9){
    $computedString = 'Bonjour, pierre !';
    $array = ['userName' => "pierre", 'computedString' => $computedString];
    echo json_encode($array);
    }