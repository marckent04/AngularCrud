<?php

require 'database.php';

$users = $db->prepare('SELECT * FROM users');
$users->execute([]);
$users = $users->fetchAll();

echo json_encode($users);

