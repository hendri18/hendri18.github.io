$(document).ready(function(){
    $('.datatable').DataTable({
        responsive: true
    });

    $('[buat-data]').on('click', function(){
        swal("Data berhasil dibuat", "", "success");
    });

    $('[update-data]').on('click', function(){
        swal("Data berhasil diupdate", "", "success");
    });

    $('[hapus-data]').on('click', function(){
        swal("Data terhapus", "", "success");
    });
});