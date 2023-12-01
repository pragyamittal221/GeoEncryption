<?php
function insertGeolockedDocument($sender, $receiver, $file, $encKey, $address, $boundaries) {
    global $conn;

    $stmt = $conn->prepare("INSERT INTO geolocked_documents (sender, receiver, file, enc_key, address, boundaries) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $sender, $receiver, $file, $encKey, $address, $boundaries);
    $stmt->execute();
    $stmt->close();
}

function updateDocumentStatus($documentId) {
    global $conn;

    $stmt = $conn->prepare("UPDATE geolocked_documents SET seen = 'Y' WHERE id = ?");
    $stmt->bind_param("i", $documentId);
    $stmt->execute();
    $stmt->close();
}

function getGeolockedDocumentsForReceiver($receiver) {
    global $conn;

    $stmt = $conn->prepare("SELECT * FROM geolocked_documents WHERE receiver = ?");
    $stmt->bind_param("s", $receiver);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    return $result->fetch_all(MYSQLI_ASSOC);
}
?>
