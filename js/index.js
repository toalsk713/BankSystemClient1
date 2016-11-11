
var resultArray = [];

    function searchAllMember() {
        $.ajax({
            //url : 서버 프로그램의 url
            url : "http://localhost:7070/bank/selectAllMember",
            //dataType : 만약 jsonp방식으로 사용할꺼면 반드시 jsonp
            dataType: "jsonp",
            jsonp: "callback",
            //만약 전달할 데이터가 있으면 데이터를 넣어주어요!
            //3초만 기다릴꺼에욤!!
            timeout: 3000,
            //성공하면 호출되요
            success : function(result){

                //화면처리를 해요!!
                alert("성공");

                $("#memberAll").empty();
                for(var i=0;i<result.length;i++) {
                    var tr = $("<tr></tr>");
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);

                }
            },
                //실패하면 호출되욤
            error : function(){

                alert("서버호출이 실패했어요!!");

            }
        });



    }

    function searchMember() {


        if(event.keyCode == 13){
        var keyword = $("#memberId").val();

        $.ajax({
            //url : 서버 프로그램의 url
            url : "http://localhost:7070/bank/selectOnemember",
            //dataType : 만약 jsonp방식으로 사용할꺼면 반드시 jsonp
            dataType: "jsonp",
            jsonp: "callback",
            //만약 전달할 데이터가 있으면 데이터를 넣어주어요!
            //3초만 기다릴꺼에욤!!
            timeout: 3000,
            //성공하면 호출되요
            data :{
                keyword : keyword
            },
            success : function(result){

                //화면처리를 해요!!
                alert("회원 한명 조회 성공!");

                $("#memberAll").empty();
                $("#memberDetail").empty();
                for(var i=0;i<result.length;i++) {
                    var tr = $("<tr></tr>");
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberDetail").append(tr);

                }
            },
            //실패하면 호출되욤
            error : function(){

                alert("서버호출이 실패했어요!!");

            }
        });

        }
    }

    //입금!!!
    function inputBalance() {

        var id = $("#depositMemberId").val();
        var money = $("#depositMemberBalance").val();

        $.ajax({


            url:"http://localhost:7070/bank/deposit",
            dataType: "jsonp",
            jsonp : "callback",
            data: {
                memberId : id,
                memberBalance : money
            },
            success : function(){

                alert("입금 성공");

            },
            error : function(){

                alert("서버 호출 실패!!");

            }

        });
    }


    //출금 메소드
    function withdrawBalance() {

        var id = $("#withdrawMemberId").val();
        var money = $("#withdrawMemberBalance").val();

        $.ajax({


            url:"http://localhost:7070/bank/withdraw",
            dataType: "jsonp",
            jsonp : "callback",
            data: {
                memberId : id,
                memberBalance : money
            },
            success : function(result){
                if(result==true){
                    alert("출금 성공");
                }else{
                    alert("잔액이 부족합니다. 출금이 불가능합니다.")
                }

            },
            error : function(){

                alert("서버 호출 실패!!");

            }

        });

    }

    //이체 메소드
    function transferBalance() {

        var sendid = $("#sendMemberId").val();
        var sendrec = $("#receiveMemberBalance").val();
        var transferBalance = $("#transferBalance").val();

        $.ajax({


            url:"http://localhost:7070/bank/transfer",
            dataType: "jsonp",
            jsonp : "callback",
            data: {
                sendid : sendid,
                sendrec : sendrec,
                transferBalance : transferBalance
            },
            success : function(result){
                if(result==true){
                    alert("이체 성공");
                }else{
                    alert("이체 실패")
                }

            },
            error : function(){

                alert("서버 호출 실패!!");

            }

        });

    }

    //리스트 출력 메소드
        function checkMember() {

            var keyword = $("#checkMemberId").val();


            $.ajax({


            url:"http://localhost:7070/bank/transferTable",
            dataType: "jsonp",
            jsonp : "callback",
            data: {
                keyword : keyword,
            },
            success : function(result){

                //화면처리를 해요!!
                alert("회원 한명 조회 성공!");

                result.sort(SortByDate);

                $("#memberAll").empty();
                $("#listselect").empty();

                for(var i=0;i<result.length;i++) {
                    var tr = $("<tr></tr>");
                    var date = $("<td></td>").text(result[i].date);
                    var state = $("<td></td>").text(result[i].state);
                    var sendid = $("<td></td>").text(result[i].sendid);
                    var receiveid = $("<td></td>").text(result[i].receiveid);
                    var money = $("<td></td>").text(result[i].money);
                    var state = $("<td></td>").text(result[i].state);


                    tr.append(state);
                    tr.append(sendid);
                    tr.append(receiveid);
                    tr.append(money);
                    tr.append(date);

                    $("#listselect").append(tr);


                }

            },
            error : function(){

                alert("서버 호출 실패!!");

            }

        });

    }


function SortByDate(a, b){
    var aDate = a.date.toLowerCase();
    var bDate = b.date.toLowerCase();
    return ((aDate < bDate) ? 1 : ((aDate > bDate) ? -1 : 0));
}


/*

function sorting(){


        resultArray.sort(function(a, b){return b.date - a.date});


    // list update
    $("#listselect").remove();

    for(var i=0;i<resultArray.length;i++) {
        var tr = $("<tr></tr>");
        var date = $("<td></td>").text(resultArray.date);
        var sendrecId = $("<td></td>").text(resultArray.sendrecId);
        var checkDeWi = $("<td></td>").text(resultArray.checkDeWi);
        var inoutMoney = $("<td></td>").text(resultArray.inoutMoney);

        tr.append(date);
        tr.append(sendrecId);
        tr.append(checkDeWi);
        tr.append(inoutMoney);

        $("#listselect").append(tr);

    }
}
*/





