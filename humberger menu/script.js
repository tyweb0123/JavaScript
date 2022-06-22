var $btnIcon = $('#btn i');    // jQueryのオブジェクトだと判別しやすくするため変数名の頭に$をつけることがよくある。必須ではない


$('#btn').on('click', function () {

    $('body').toggleClass('open') //btnを押すたびクラスopenを付けたり取ったりする

    //  console.log($('body').hasClass('open')) //openのクラスを持っているかブーリアンでチェックする

    if ($('body').hasClass('open')) {

        $btnIcon.removeClass('ri-menu-line')
            .addClass('ri-close-line')   //クラスopenが付いていたらiタグのクラスを弄る

    } else {
        $btnIcon.removeClass('ri-close-line')
            .addClass('ri-menu-line')   //✗ボタンから戻すために逆の記述もつける

    }

})

