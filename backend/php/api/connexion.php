<?php

require 'database.php';

$mail = $_GET['mail'];

$query = $db->prepare('SELECT * FROM users WHERE mail = ?');


$query->execute([$mail]);

$infos = $query->fetch();

// echo json_encode($results);
echo json_encode($infos);