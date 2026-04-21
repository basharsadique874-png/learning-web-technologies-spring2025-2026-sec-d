<?php

$user = $_POST["username"];
$pass = $_POST["password"];

echo "<h2>Result</h2>";

// -------- Username --------
if ($user == "") {
    echo "Username required<br>";
}
elseif (strlen($user) < 2) {
    echo "Username must be at least 2 characters<br>";
}
else {
    for ($i = 0; $i < strlen($user); $i++) {
        $ch = $user[$i];

        if (
            !($ch >= 'a' && $ch <= 'z') &&
            !($ch >= 'A' && $ch <= 'Z') &&
            !($ch >= '0' && $ch <= '9') &&
            $ch != '.' && $ch != '-' && $ch != '_'
        ) {
            echo "Invalid character in username<br>";
            break;
        }
    }
}

if ($pass == "") {
    echo "Password required<br>";
}
elseif (strlen($pass) < 8) {
    echo "Password must be at least 8 characters<br>";
}
else {
    if (
        strpos($pass, "@") === false &&
        strpos($pass, "#") === false &&
        strpos($pass, "$") === false &&
        strpos($pass, "%") === false
    ) {
        echo "Password must contain @ # $ %<br>";
    } else {
        echo "Login Successful ";
    }
}

?>