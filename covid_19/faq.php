<?php 
$page = 'faq';
include "header.php";
$data_faq = [
    [
        "title" => "Bagaimana cara COVID-19 menyebar?",
        "description" => "Orang dapat tertular COVID-19 dari orang lain yang terinfeksi virus ini. COVID-19 dapat menyebar terutama dari orang ke orang melalui percikan-percikan dari hidung atau mulut yang keluar saat orang yang terinfeksi COVID-19 batuk, bersin atau berbicara. Percikan-percikan ini relatif berat, perjalanannya tidak jauh dan jatuh ke tanah dengan cepat. Orang dapat terinfeksi COVID-19 jika menghirup percikan orang yang terinfeksi virus ini.
        <br><br>
        Oleh karena itu, penting bagi kita untuk menjaga jarak minimal 1 meter dari orang lain. Percikan-percikan ini dapat menempel di benda dan permukaan lainnya di sekitar orang seperti meja, gagang pintu, dan pegangan tangan. Orang dapat terinfeksi dengan menyentuh benda atau permukaan tersebut, kemudian menyentuh mata, hidung, atau mulut mereka. Inilah sebabnya penting untuk mencuci tangan secara teratur dengan sabun dan air bersih mengalir, atau membersihkannya dengan cairan antiseptik berbahan dasar alkohol.
        <br><br>
        WHO terus mengkaji perkembangan penelitian tentang cara penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.
        <br><br>
        sumber: WHO",
    ],
    [
        "title" => "Apakah sudah ada vaksin untuk COVID-19?",
        "description" => "Sampai terhitung 3 November 2020, belum tersedia vaksin untuk COVID-19. Namun memang banyak vaksin potensial yang sedang dikembangkan terkait keamanan dan efektivitasnya.",
    ],
    [
        "title" => "Di mana saya bisa diuji untuk COVID-19?",
        "description" => "Proses dan lokasi pengujian bervariasi dari satu tempat ke tempat lain. Hubungi departemen negara bagian, lokal, atau teritorial Anda untuk informasi lebih lanjut, atau hubungi penyedia medis. Departemen kesehatan masyarakat negara bagian dan lokal telah menerima tes dari CDC sementara penyedia medis mendapatkan tes yang dikembangkan oleh produsen komersial. Sementara persediaan tes ini meningkat, mungkin masih sulit untuk menemukan tempat untuk diuji.",
    ],
    [
        "title" => "Apakah vaksin COVID-19 adalah obat?",
        "description" => "Vaksin bukanlah obat. Vaksin mendorong pembentukan kekebalan spesifik pada penyakit COVID-19 agar terhindar dari tertular ataupun kemungkinan sakit berat.
        <br><br>
        Selama vaksin yang aman dan efektif belum ditemukan, upaya perlindungan yang bisa kita lakukan adalah disiplin 3M: Memakai masker dengan benar, Menjaga jarak dan jauhi kerumunan, serta mencuci tangan pakai air mengalir dan sabun.",
    ],
    [
        "title" => "Apakah penyemprotan cairan disinfektan dapat melindungi saya dari virus corona?",
        "description" => "Cairan disinfektan bisa membersihkan virus pada permukaan benda-benda dan BUKAN pada tubuh atau baju dan TIDAK AKAN melindungi Anda dari virus jika berkontak erat dengan orang sakit. Virus berpindah melalui percikan batuk/bersin orang sakit yang kemudian terhirup orang lain atau menempel di permukaan benda yang kemudian disentuh lalu masuk melalui mata, hidung atau mulut orang lain. Cairan disinfektan dapat membersihkan virus yang menempel di permukaan benda seperti meja, gagang pintu atau saklar lampu yang kerap disentuh orang. Membersihkan permukaan benda-benda itu sangat penting bila Anda melakukan isolasi diri di rumah dan untuk menggunakan cairan disinfektan, pastikan Anda sudah membaca petunjuk di label produk. Pemakaian cairan disinfektan secara langsung ke tubuh dapat membahayakan diri Anda.",
    ],
    [
        "title" => "Bisakah virus COVID-19 menular di daerah yang beriklim panas dan lembab?",
        "description" => "Dari bukti yang ada sejauh ini, virus COVID-19 bisa menular di SEMUA AREA, termasuk daerah yang cuaca panas dan lembab. Terlepas dari iklimnya, lakukan tindakan perlindungan jika Anda tinggal, atau bepergian ke area yang melaporkan COVID-19. Cara terbaik untuk melindungi diri Anda dari COVID-19 adalah dengan sering-sering membersihkan tangan. Dengan melakukan ini, Anda menghilangkan virus yang mungkin ada di tangan Anda dan menghindari infeksi yang dapat terjadi saat menyentuh mata, mulut, dan hidung Anda.",
    ],
];
?>

<div class="container container-main" id="faq-page">
    <div class="jumbotron">
        <p class="lead">FAQ seputar</p>
        <h1><strong>COVID-19</strong></h1>
        <hr class="my-4">
        <div id="accordion">
            <?php foreach($data_faq as $index => $data): ?>
            <div class="card">
                <div class="card-header" id="heading-<?php echo $index; ?>">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-<?php echo $index; ?>" aria-expanded="true" aria-controls="collapse-<?php echo $index; ?>">
                    <?php echo  $data['title'] ?>
                    </button>
                </h5>
                </div>

                <div id="collapse-<?php echo $index; ?>" class="collapse" aria-labelledby="heading-<?php echo $index; ?>" data-parent="#accordion">
                <div class="card-body">
                <?php echo  $data['description'] ?>
                </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<?php include "footer.php" ?>