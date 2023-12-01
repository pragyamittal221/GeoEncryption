<?php
// Create table if not exists
$conn->query("CREATE TABLE IF NOT EXISTS geolocked_documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(255) NOT NULL,
    receiver VARCHAR(255) NOT NULL,
    file TEXT NOT NULL,
    enc_key VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    boundaries TEXT NOT NULL,
    seen ENUM('Y','N') DEFAULT 'N' NOT NULL
)");
?>
