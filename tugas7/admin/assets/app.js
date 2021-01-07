$(document).ready(function(){
    $('.datatable').DataTable({
        responsive: true
    });

    $('[buat-data]').on('click', function(){
        swal("Data berhasil disimpan", "", "success");
    });

    $('[update-data]').on('click', function(){
        swal("Data berhasil diupdate", "", "success");
    });

    $('[hapus-data]').on('click', function(){
      var el = $(this);
        swal({
            title: "Apakah anda yakin akan menghapus data tersebut ?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Data Berhasil dihapus.", {
                icon: "success",
              });
              el.parents('tr').remove();
            }
          });
    });

    $('[data-judul]').on('click', function(){
        $('#judul').val($(this).attr('data-judul'))
    })

    $('[user-edit]').on('click', function(){
        $('#edit-nama').val($(this).attr('data-nama'));
        $('#edit-role').val($(this).attr('data-role'));
    })
});