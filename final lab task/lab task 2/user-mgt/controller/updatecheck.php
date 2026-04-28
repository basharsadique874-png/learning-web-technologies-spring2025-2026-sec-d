<?php
session_start();

if (isset($_POST['submit'])) {

    $id = $_POST['id'];
    $username = $_POST['username'];

    if (isset($_SESSION['users'])) {

        $users = $_SESSION['users'];

        foreach ($users as $key => $u) {
            if ($u['id'] == $id) {
                $users[$key]['username'] = $username;
            }
        }

        $_SESSION['users'] = $users;
    }

    header("Location: ../view/user_list.php");
    exit();
}
else {
    echo "Invalid Request!";
}
?>