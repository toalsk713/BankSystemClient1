
// 스크롤 event 처리 스크립트
$(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        console.log("맨 밑에 도착!!")
    }
});


// notification 설정
function not(){
    notif({
        // success, error, warning, info
        type: "info",
        // Default size
        width : 400,
        height : 60,
        // Default position
        position : "right", // left, center, right, bottom
        // Default autohide
        autohide : true,
        // Default msg
        msg : "",
        // Default opacity (Only Chrome, Firefox and Safari)
        opacity : 1,
        multiline: 0,
        fade: 0,
        bgcolor: "",
        color: "",
        timeout: 5000,
        // The z-index of the notification
        zindex: null,
        // The offset in pixels from the edge of the screen
        offset: 0,
        // Callback
        callback: null,
        clickable: false,
        animation: 'slide'
    });
}


// 각종 에러처리용 notification
function errorNoti(msg){
    notif({
        msg: "<b>" + msg + "</b>",
        type: "warning",
        color : "black",
        timeout: 1000
    });
}

// comment 삭제성공 notification
function deleteCommentNoti(){
    notif({
        msg: "<b>서평 삭제 성공</b>",
        type: "warning",
        color : "black",
        callback : function() {
            $(location).attr("href","bookCommentDetail.html");
        },
        timeout: 1000
    });
}

// comment 등록성공 notification
function insertCommentNoti(){
    notif({
        msg: "<b>서평 등록 성공</b>",
        type: "warning",
        color : "black",
        callback : function() {
            //$(location).attr("href","index.html");
        },
        timeout: 1000
    });
}

// logout notification
function logoutNoti(){
    notif({
        msg: "<b>로그아웃 성공</b>",
        type: "warning",
        color : "black",
        callback : function() {
            $(location).attr("href","index.html");
        },
        timeout: 1000
    });
}

// 도서 등록 성공 notification
function insertBookNoti(){
    notif({
        msg: "<b>새로운 도서 등록 성공</b>",
        type: "warning",
        color : "black",
        callback : function() {
            $(location).attr("href", "bookManage.html");
        },
        timeout: 1000
    });
}

// 도서 삭제 성공 notification
function deleteBookNoti(){
    notif({
        msg: "<b>도서 삭제 성공</b>",
        type: "warning",
        color : "black",
        timeout: 1000
    });
}

// 도서 정보수정 성공 notification
function updateBookNoti(){
    notif({
        msg: "<b>도서 정보수정 성공</b>",
        type: "warning",
        color : "black",
        timeout: 1000
    });
}

// 도서대여 성공 notification
function rentSuccessNoti(){
    notif({
        msg: "<b>도서대여 성공</b>",
        type: "warning",
        color : "black",
        timeout: 1000
    });
}

// 도서반납 성공 notificaition
function returnSuccessNoti(){
    notif({
        msg: "<b>도서반납 성공</b>",
        type: "warning",
        color : "black",
        timeout: 1000
    });
}

// 회원가입 성공 notification
function insertMemberNoti(){
    notif({
        msg: "<b>회원가입 성공</b>",
        type: "warning",
        color : "black",
        timeout: 1000
    });
}

// 로그인 성공 notification
function loginSuccessNoti(){
    notif({
        msg: "<b>로그인 성공</b>",
        type: "warning",
        color : "black",
        callback : function() {
            $(location).attr("href","index.html");
        },
        timeout: 1000
    });
}

// 로그인 실패 notification
function loginFailNoti(){
    notif({
        msg: "<b>로그인 실패</b>",
        type: "warning",
        color : "black",
        callback : function() {
            $(location).attr("href","index.html");
        },
        timeout: 1000
    });
}















