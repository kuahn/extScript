(function($) {
    $( document ).ready(function() {
        $('.leftbrand').hover(
            function() {
                var title = $(this).parent('a').attr('title')
                ,	hoverTitle;

                console.log('title' + title);

                switch (title) {
                    case "PRINCE TOP" :
                        hoverTitle = "���� ����";
                        break;
                    case "PRINCE BOTTOM" :
                        hoverTitle = "���� ����";
                        break;
                    case "PRINCESS TOP" :
                        hoverTitle = "���� ����";
                        break;
                    case "PRINCESS BOTTOM" :
                        hoverTitle = "���� ����";
                        break;
                    case "PRINCESS OPS" :
                        hoverTitle = "���� ���ǽ�";
                        break;
                    case "SET" :
                        hoverTitle = "������";
                        break;
                    case "CAP" :
                        hoverTitle = "����";
                        break;
                    case "SHOES" :
                        hoverTitle = "�Ź�";
                        break;
                    case "ACC" :
                        hoverTitle = "�Ǽ��縮";
                        break;
                }

                console.log('hoverTitle' + hoverTitle);

                $(this).text(hoverTitle);
            },
            function() {
                $(this).text($(this).parent('a').attr('title'));
            }
        );
    });	
}(jQuery));
