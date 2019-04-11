<?php
class Verify
{

    public static function input($data)
    {
        $data = htmlspecialchars($data);
        $data = htmlentities($data);
        $data = trim($data);
        $data = strip_tags($data);

        return $data;
    }

    public static function user($mail, $db)
    {
        require_once 'model/database.php';

        $result = $db->prepare('SELECT * FROM users WHERE mail = ?');
        $result->execute([$mail]);
        $result = $result->fetch();
        Database::disconnect();

        if(empty($result)) {
            return 'rien';
        }
        else {
            return $result['mail'];
        }
    }

    public static function code($code, $db) {
        $verif = $db->prepare('SELECT * FROM retraits WHERE codeRetrait = ?');
        $verif->execute([$code]);
        $results = $verif->fetch();
        if($results) {
            return true;
        } else {
            return false;
        }
    }

    public static function voucher($code, $db) {
        $verif = $db->prepare('SELECT * FROM vouchers WHERE code = ?');
        $verif->execute([$code]);
        $results = $verif->fetch();
        if($results) {
            return true;
        } else {
            return false;
        }
    }
}
