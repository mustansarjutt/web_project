<?php
include('contact-form.html');
$servername = "localhost";
$username = "id21196741_mustansarjuttpotfolio";
$password = "ChZohaib@518688.";
$database = "id21196741_contact_me";

$conn = mysqli_connect($servername, $username, $password, $database);

if(!$conn){
    die("Error");
}
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $number = $_POST["contact_number"];
    $email = $_POST["email"];
    $country = $_POST["country"];
    $note = $_POST["note"];
    $sql = "INSERT INTO form_data (
        `name`,
        `contact_number`,
        `email`,
        `country`,
        `note`
    ) VALUE (
        '$name',
        '$number',
        '$email',
        '$country',
        '$note'
    )";
    $result = mysqli_query($conn, $sql);
    if(!$result){
        echo "Error " . mysqli_error($conn); 
    }
    else{
        echo '<script>
        alert("Your Form is submitted. We will contact you soon.");
        </script>';
    }
}
?>