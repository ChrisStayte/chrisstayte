<?php

    $weather = '';
    $error = '';

    if (isset($_GET['city'])) {
        if ($_GET['city']) {
            $city = str_replace(' ', '', $_GET['city']);
        
            $file_headers = @get_headers("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");
        
            if ($file_headers[0] == "HTTP/1.1 404 Not Found") {
                $error = "That city could not be found.";
            } else {
            
                $forecastPage = file_get_contents("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");
            
                $pageArray = explode('3 Day Weather Forecast Summary:</b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">', $forecastPage);
            
                if (sizeof($pageArray) > 1) {
                    $secondPageArray = explode('</span></span></span>', $pageArray[1]);
                
                if (sizeof($pageArray) > 1) {
                    $weather = $secondPageArray[0];
                    } else {
                    $error = "That city could not be found.";
                }
                
                } else {
                    $error = "That city could not be found.";
                }
            }
        }
    }

?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <!-- Required meta tags always come first -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Weather Scraper</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">

        <!-- Custom Styles -->
        <link rel='stylesheet' type='text/css' href='css/styles.css'>
    </head>

    <body>
        <div class='container'>
            <h1>What's the weather?</h1>
            <form>
                <div class="form-group">
                    <label class='lead' for="city">Enter the name of a city...</label>
                    <input type="text" class="form-control" id="city" aria-describedby="city" placeholder="eg. London, Tokoyo" name="city" value="<?php if(isset($_GET['city'])) {echo $_GET['city'];} ?>">
                    <small id="emailHelp" class="form-text">Weather From Weather-Forecast.com</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div id='weather'>
                <?php
            if ($weather) {
                echo '<div class="alert alert-success" role="alert"><strong></strong>'.$weather.'</div>';
            } else if ($error) {
                echo '<div class="alert alert-danger" role="alert"><strong></strong>'.$error.'</div>';
            }
            ?>
            </div>
        </div>
        <!-- jQuery first, then Tether, then Bootstrap JS. -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>
    </body>

    </html>