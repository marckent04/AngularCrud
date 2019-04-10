<?php

require 'database.php';

    $idUser = $_GET['id'];

    $req = $db->prepare('SELECT * FROM users WHERE id = ?');
    $req->execute([$idUser]);
    $infos = $req->fetch();

    echo json_encode($infos);
