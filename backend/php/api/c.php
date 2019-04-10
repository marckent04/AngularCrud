<?php
require './database.php';



$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $postdata = json_decode($postdata);
    $name = $postdata->name;
    $fname = $postdata->firstname;
    $birth = $postdata->birth;
    $gender = $postdata->gender;
    $com = $postdata->commune;
    $insert = $db->prepare('INSERT INTO users (name, firstname, birth, gender, commune) VALUES (?, ?, ?, ?, ?)');
    $insert->execute([$name, $fname, $birth, $gender, $com]);


    echo json_encode($postdata);
}
