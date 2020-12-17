<?php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    return false; // Liefere die angefragte Ressource direkt aus
} else {
    echo "Bin am start";
}
?>