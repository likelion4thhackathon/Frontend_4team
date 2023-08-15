$(document).ready(function() {
    // topBar 스타일 및 라디오 버튼 이벤트 처리
    function createButton() {
        $('.topBar').css({
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '10%',
            marginTop: '2%',
        });

        // 클릭한 라디오 버튼에 따라 페이지 이동 처리
        function navigateToPage(selectedOption) {
            if (selectedOption === 0) {
                window.location.href = 'login.html';
            } else if (selectedOption === 1) {
                window.location.href = 'index2.html';
            } else if (selectedOption === 2) {
                window.location.href = 'select(tutorial).html';
            }
        }

        // 라디오 버튼에 클릭 이벤트 리스너 추가
        $('input[type="radio"]').on('click', function() {
            let selectedOption = $(this).index('input[type="radio"]');
            navigateToPage(selectedOption);
        });
    }

    createButton();
});

    

    // 팝업창 열기
    function openPopup(popupId) {
            $("#" + popupId).fadeIn();
            $("#popupBackground").fadeIn();
        }

    // 팝업창 닫기
    function closePopup(popupId) {
        $("#" + popupId).fadeOut();
        $("#popupBackground").fadeOut();
    }

    // 페이지 이동
    function navigateToSelectPage(mode) {
        if (mode === 'basic') {
            window.location.href = 'select(basic).html';
        } else if (mode === 'tutorial') {
            window.location.href = 'select(tutorial).html';
        }
    }



        $(document).ready(function() {
            $(".mymoney").on("input", function() {
                let inputValue = $(this).val();
                let numericValue = inputValue;
                
                if (numericValue === "") {
                    numericValue = ""; // 값이 없을 경우 0으로 초기화
                }
                
                // 백만원 단위 초과 입력 방지
                if (parseInt(numericValue) > 5000000) {
                    numericValue = "5000000";
                }
                
                $(this).val(numericValue);
            });
        });
    

        $(document).ready(function() {
            $("#accountNumber").on("input", function() {
                let inputVal = $(this).val();
                inputVal = inputVal.replace(/[^0-9]/g, ''); // 숫자만 남기기
                
                if (inputVal.length > 10) {
                    inputVal = inputVal.substring(0, 10);
                }
        
                $(this).val(inputVal);
            });
        });

        $(document).ready(function() {
            $("#age").on("input", function() {
                let inputVal = $(this).val();
                
                // 숫자 이외의 입력은 제거
                inputVal = inputVal.replace(/[^0-9]/g, '');
        
                // 최대 3자리까지만 유지
                if (inputVal.length > 3) {
                    inputVal = inputVal.substring(0, 3);
                }
        
                $(this).val(inputVal);
            });
        });
        
        
    

        $(document).ready(function() {
            $("#button1").click(function(event) {
                event.preventDefault();
                
                let allFieldsFilled = true;
                $(".require").each(function() {
                    if ($(this).val().trim() === "") {
                        allFieldsFilled = false;
                        return false; 
                    }
                });
                
                if (allFieldsFilled) {
                    window.location.href = "index2.html";
                } else {
                    alert("필수 항목을 모두 입력해주세요.");
                }
            });
        });

        $(document).ready(function() {
                $("#userForm").submit(function(event) {
                    event.preventDefault();

                    let username = $("#username").val();
                    let age = $("#age").val();
                    let accountNumber = $("#accountNumber").val();
                    let accountBalance = $("#accountBalance").val();

                    $.ajax({
                        url: "http://127.0.0.1:8000/api/posts/", // 백엔드 API 주소
                        type: "POST",
                        data: {
                            username: username,
                            age: age,
                            accountNumber: accountNumber,
                            accountBalance: accountBalance
                        },
                        success: function(response) {
                            // 서버 응답에 대한 처리
                            console.log(response);
                            window.location.href = 'index2.html'
                        },
                        error: function(error) {
                            console.error("Error:", error);
                        }
                    });
                });
            });