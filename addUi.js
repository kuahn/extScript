(function($) {
    $(document).ready(function() {

        // �޴� title �Ӽ��� �ѱ� Ÿ��Ʋ ����
        $('.leftbrand').each(function() {
            var title = $(this).parent('a').attr('title')
            ,	changeTitle;

            switch (title) {
                case "PRINCE TOP" :
                    changeTitle = "���� ����";
                    break;
                case "PRINCE BOTTOM" :
                    changeTitle = "���� ����";
                    break;
                case "PRINCESS TOP" :
                    changeTitle = "���� ����";
                    break;
                case "PRINCESS BOTTOM" :
                    changeTitle = "���� ����";
                    break;
                case "PRINCESS OPS" :
                    changeTitle = "���� ���ǽ�";
                    break;
                case "SET" :
                    changeTitle = "������";
                    break;
                case "CAP" :
                    changeTitle = "����";
                    break;
                case "SHOES" :
                    changeTitle = "�Ź�";
                    break;
                case "ACC" :
                    changeTitle = "�Ǽ��縮";
                    break;
            }

            $(this).parent('a').attr('title', changeTitle);
        });

        // ���̵� ��� ������ �ϴ� �ݱ� ��ư ���� ����.
        $('#MAKESHOPLY0').find('td').removeAttr('bgcolor');
        $('form[name="form1"]').find('br').remove();
        $('form[name="form1"]').find('div').css('display','inline');

        // �޴� �ѿ���
//        $('.leftbrand').hover(
//            function() {
//                var title = $(this).parent('a').attr('title')
//                ,	hoverTitle;
//
//                switch (title) {
//                    case "PRINCE TOP" :
//                        hoverTitle = "���� ����";
//                        break;
//                    case "PRINCE BOTTOM" :
//                        hoverTitle = "���� ����";
//                        break;
//                    case "PRINCESS TOP" :
//                        hoverTitle = "���� ����";
//                        break;
//                    case "PRINCESS BOTTOM" :
//                        hoverTitle = "���� ����";
//                        break;
//                    case "PRINCESS OPS" :
//                        hoverTitle = "���� ���ǽ�";
//                        break;
//                    case "SET" :
//                        hoverTitle = "������";
//                        break;
//                    case "CAP" :
//                        hoverTitle = "����";
//                        break;
//                    case "SHOES" :
//                        hoverTitle = "�Ź�";
//                        break;
//                    case "ACC" :
//                        hoverTitle = "�Ǽ��縮";
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
