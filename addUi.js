(function($) {
    $(document).ready(function() {

        // 메뉴 title 속성에 한글 타이틀 삽입
        $('.leftbrand').each(function() {
            var title = $(this).parent('a').attr('title')
            ,	changeTitle;

            switch (title) {
                case "PRINCE TOP" :
                    changeTitle = "남자 상의";
                    break;
                case "PRINCE BOTTOM" :
                    changeTitle = "남자 하의";
                    break;
                case "PRINCESS TOP" :
                    changeTitle = "여자 상의";
                    break;
                case "PRINCESS BOTTOM" :
                    changeTitle = "여자 하의";
                    break;
                case "PRINCESS OPS" :
                    changeTitle = "여자 원피스";
                    break;
                case "SET" :
                    changeTitle = "상하의";
                    break;
                case "CAP" :
                    changeTitle = "모자";
                    break;
                case "SHOES" :
                    changeTitle = "신발";
                    break;
                case "ACC" :
                    changeTitle = "악세사리";
                    break;
            }

            $(this).parent('a').attr('title', changeTitle);
        });

        // 사이드 배너 보더와 하단 닫기 버튼 오류 수정.
        $('#MAKESHOPLY0').find('td').removeAttr('bgcolor');
        $('form[name="form1"]').find('br').remove();
        $('form[name="form1"]').find('div').css('display','inline');

        // 메뉴 롤오버
//        $('.leftbrand').hover(
//            function() {
//                var title = $(this).parent('a').attr('title')
//                ,	hoverTitle;
//
//                switch (title) {
//                    case "PRINCE TOP" :
//                        hoverTitle = "남자 상의";
//                        break;
//                    case "PRINCE BOTTOM" :
//                        hoverTitle = "남자 하의";
//                        break;
//                    case "PRINCESS TOP" :
//                        hoverTitle = "여자 상의";
//                        break;
//                    case "PRINCESS BOTTOM" :
//                        hoverTitle = "여자 하의";
//                        break;
//                    case "PRINCESS OPS" :
//                        hoverTitle = "여자 원피스";
//                        break;
//                    case "SET" :
//                        hoverTitle = "상하의";
//                        break;
//                    case "CAP" :
//                        hoverTitle = "모자";
//                        break;
//                    case "SHOES" :
//                        hoverTitle = "신발";
//                        break;
//                    case "ACC" :
//                        hoverTitle = "악세사리";
//                        break;
//                }
//
//                $(this).text(hoverTitle);
//            },
//            function() {
//                $(this).text($(this).parent('a').attr('title'));
//            }
//        );
    });	
}(jQuery));
