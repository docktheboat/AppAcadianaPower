<?php
// Initialize the session
session_start();

// Check if the user is logged in, otherwise redirect to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}

// Include config file
require_once "config.php";

// Define variables and initialize with empty values
$new_zip = $confirm_zip = "";
$new_zip_err = $confirm_zip_err = "";

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){

    // Validate new zip
    if(empty(trim($_POST["new_zip"]))){
        $new_zip_err = "Please enter the new Zip Code.";
    }
    elseif(!preg_match('/[7][0-1]\d{3}\b/', trim($_POST["new_zip"]))) {
        $new_zip_err = "Please enter a Louisiana 5 digit zip code";
    }
    else{
        $new_zip = trim($_POST["new_zip"]);
    }

    // Validate confirm Zip
        if (empty(trim($_POST["confirm_zip"]))) {
            $confirm_zip_err = "Please confirm the Zip Code.";
        }
        elseif(!preg_match('/[7][0-1]\d{3}\b/', trim($_POST["confirm_zip"]))) {
            $new_zip_err = "Please enter a Louisiana 5 digit zip code";
        }
        else {
            $confirm_zip = trim($_POST["confirm_zip"]);
            if (empty($new_zip_err) && ($new_zip != $confirm_zip)) {
                $confirm_zip_err = "Zip Codes did not match.";
            }
            else{
                $confirm_zip = trim($_POST["new_zip"]);
            }
        }


    // Check input errors before updating the database
    if(empty($new_zip_err) && empty($confirm_zip_err)) {
        // Prepare an update statement
        $sql = "UPDATE users SET zip = ? WHERE id = ?";
        $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($stmt = mysqli_prepare($link, $sql)) {
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "si", $param_zip, $param_id);

            // Set parameters

            $param_zip = trim($_POST["zip"]);
            $param_id = $_SESSION["id"];

            if (mysqli_stmt_execute($stmt)) {
                // Zip updated successfully, and redirect to welcome page
                header("location: welcome.php");
                exit();
            }
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }
            // Close statement
            mysqli_stmt_close($stmt);
    }

    // Close connection
    mysqli_close($link);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reset Zip Code</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body{ font: 14px sans-serif; }
        .wrapper{ width: 360px; padding: 20px; }
    </style>
</head>
<body>
<div class="wrapper">
    <h2>Reset Zip Code</h2>
    <p>Please fill out this form to reset your Zip Code.</p>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <div class="form-group">
            <label>New Zip Code</label>
            <input type="text" name="new_zip" class="form-control <?php echo (!empty($new_zip_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $new_zip; ?>">
            <span class="invalid-feedback"><?php echo $new_zip_err; ?></span>
        </div>
        <div class="form-group">
            <label>Confirm Zip Code</label>
            <input type="text" name="confirm_zip" class="form-control <?php echo (!empty($confirm_zip_err)) ? 'is-invalid' : ''; ?>">
            <span class="invalid-feedback"><?php echo $confirm_zip_err; ?></span>
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Submit">
            <a class="btn btn-link ml-2" href="welcome.php">Cancel</a>
        </div>
    </form>
</div>
</body>
</html>