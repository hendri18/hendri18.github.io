<?php 
$page = 'gejala';
include "header.php" ?>

<div class="container container-main">
    <div class="jumbotron">
        <p class="lead">Gejala</p>
        <h1><strong>COVID-19</strong></h1>
        <hr class="my-4">
        <p>Gejala COVID-19 yang paling umum adalah demam, kelelahan, dan batuk kering. Beberapa pasien mungkin mengalami sakit dan nyeri, hidung tersumbat, pilek, sakit tenggorokan atau diare. Gejala ini biasanya ringan dan dimulai secara bertahap. Gejala juga mungkin muncul 2-14 hari setelah terpapar.</p>
        <div class="row card-gejala">
            <div class="col-md-4 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Demam</h4>
                        <p class="card-text">ini berarti Anda merasa panas untuk disentuh di dada atau punggung (Anda tidak perlu mengukur suhu Anda). Ini adalah tanda umum dan juga mungkin muncul dalam 2-10 hari jika Anda terpengaruh.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Batuk Bersin</h4>
                        <p class="card-text">Batuk dan Bersin berhari-hari tak kunjung sembuh dan merasa lebih buruk dari biasanya.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Sesak Napas</h4>
                        <p class="card-text">Sekitar 1 dari setiap 6 orang yang terkena COVID-19 menjadi sakit parah dan mengalami kesulitan bernapas atau sesak napas.</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="lead">
            <a class="btn btn-danger btn-lg float-right" href="pencegahan.php" role="button">Cara-Cara Pencegahan Covid-19 <img src="assets/arrow.png" alt="arrow-right" class="arrow-right"></a>
        </p>
    </div>
</div>

<?php include "footer.php" ?>