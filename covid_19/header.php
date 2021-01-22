<!doctype html>
<html lang="en">
    <head>
        <title>COVID-19</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/style.css?q=1">
    </head>
    <body>
        <nav class="navbar navbar-expand-sm navbar-dark bg-danger fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.php">COVID-19</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item <?php echo ($page == 'home' || empty($page) ? 'active' : '') ?>">
                            <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item <?php echo ($page == 'apa_itu_covid' ? 'active' : '') ?>">
                            <a class="nav-link" href="apa_itu_covid.php">Apa itu Covid-19?</a>
                        </li>
                        <li class="nav-item <?php echo ($page == 'gejala' ? 'active' : '') ?>">
                            <a class="nav-link" href="gejala.php">Gejala Covid-19</a>
                        </li>
                        <li class="nav-item <?php echo ($page == 'pencegahan' ? 'active' : '') ?>">
                            <a class="nav-link" href="pencegahan.php">Pencegahan</a>
                        </li>
                        <li class="nav-item <?php echo ($page == 'pola_hidup' ? 'active' : '') ?>">
                            <a class="nav-link" href="pola_hidup.php">Pola Hidup Sehat saat Pandemi</a>
                        </li>
                        <li class="nav-item <?php echo ($page == 'faq' ? 'active' : '') ?>">
                            <a class="nav-link" href="faq.php">FAQ seputar COVID-19</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>