<?php
// --- Configuration for API Access ---
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }

// --- Database Configuration ---
$db_host = "localhost";
$db_name = "coffee_shop_db";
$db_user = "root";
$db_pass = "";

$response = ["success" => false, "message" => "An unknown error occurred."];

try {
    // Connect to the database
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get JSON input from React Frontend
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->email) || empty($data->password)) {
        http_response_code(400);
        throw new Exception("Email and password are required.", 400);
    }
    
    $email = $data->email;
    $password = $data->password;
    $role = 'user'; // Assign default role as 'user'

    // Check if email already exists (Prevents duplicate entries)
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    if ($stmt->fetchColumn() > 0) {
        throw new Exception("This email is already registered.", 409);
    }

    // Insert new user into the database
    $stmt = $pdo->prepare("INSERT INTO users (email, password, role) VALUES (:email, :password, :role)");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':role', $role);
    $stmt->execute();

    $response = [
        "success" => true,
        "message" => "Registration successful. You can now log in."
    ];
    http_response_code(201); // 201 Created

} catch (PDOException $e) {
    $response["message"] = "Database error during registration.";
    http_response_code(500);
} catch (Exception $e) {
    $response["message"] = $e->getMessage();
    http_response_code($e->getCode() ?: 500);
}

echo json_encode($response);
?>
