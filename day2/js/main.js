var menu_item = $(".menu_item");
var menu_list = $(".menu_item_list");
var menu_list_li = $(".menu_item_list li");
var menu_list_a = $(".menu_item_list li a");

$(".select_lang").on("click", function(e) {
    $(".select_lang").addClass("lang_act");
    $(".lang ul").removeClass("lang_act");
});

// 버블링 & 캡쳐링
document.addEventListener("click", function(e) {
    if (!e.path.includes(document.querySelector(".lang"))) {
        $(".select_lang").removeClass("lang_act");
        $(".lang ul").addClass("lang_act");
    }
});

// timeout 적용
var timeout;
$(".lang_list")
    .on("focusin", function() {
        $(".select_lang").addClass("lang_act");
        $(".lang_list").removeClass("lang_act");

        clearTimeout(timeout);
    })
    .on("focusout", function() {
        timeout = setTimeout(function() {
            $(".lang_list").addClass("lang_act");
            $(".select_lang").removeClass("lang_act");
        }, 100);
    });

// timeout 적용
var timeout2;
menu_item
    .on("mouseenter focusin", function() {
        if (
            $(this)
                .children()
                .is(":hidden")
        ) {
            $(this)
                .children(".menu_item_list")
                .slideDown(300);

            clearTimeout(timeout2);
        }
    })
    .on("mouseleave focusout", function() {
        timeout2 = setTimeout(function() {
            if (
                !$(this)
                    .children()
                    .is(":hidden")
            ) {
                $(this)
                    .children(".menu_item_list")
                    .slideUp(300);
            }
        }, 100);
    });

var menuClose;
var thisA; //this가 선택되지 않아서 만든 변수
menu_list_a
    .focusin(function() {
        clearTimeout(menuClose);
        menuClose = null;
        thisA = $(this);
    })
    .focusout(function() {
        menuClose = setTimeout(function() {
            thisA.parents(".menu_item_list").slideUp(300);
        }, 100);
    });
