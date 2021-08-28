<?php

require "class/animal.php";
require "class/frog.php";
require "class/ape.php";

$sheep = new Animal("shaun");

echo $sheep->name; // "shaun"
echo "<br>";
echo $sheep->legs; // 2
echo $sheep->cold_blooded; // false

// NB: Boleh juga menggunakan method get (get_name(), get_legs(), get_cold_blooded())
// Frog
echo "<br><br>";
$kodok = new Frog("buduk");
$kodok->jump(); // "hop hop"

// Ape
echo "<br><br>";
$sungokong = new Ape("kera sakti");
$sungokong->yell() // "Auooo"

?>