var listA = {}
        var listG = {}
        var rowCounter = 0; // 행 카운터 변수
        var userListDiv = document.getElementById("member_list");
        userListDiv.innerHTML = ""; // 기존 내용 초기화
        var userGListDiv = document.getElementById("gangE_list");
        userGListDiv.innerHTML = ""; // 기존 내용 초기화

        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            
            if (username === "admin" && password === "admin") {
                // 관리자 로그인 처리
                alert("관리자로 로그인되었습니다.");
                document.getElementById("adminSection").style.display = "block";
                document.getElementById("userSection").style.display = "none";
                document.getElementById("adminLogoutButton").style.display = "block";
                document.getElementById("loglog").style.display = "none";
                slideLoginForm();

                userListDiv.innerHTML = ""; // 기존 내용 초기화
                for (var key in listA) {
                    var userItem = document.createElement("p");
                    userItem.textContent = "아이디 : " + key + " / 비밀번호 : " + listA[key].password;
                    userListDiv.appendChild(userItem);
                }
                userGListDiv.innerHTML = "";
                for (var key in listG) {
                    var userGItem = document.createElement("div");
                    var info = document.createElement("p");
                    info.textContent = "강의명: " + key + " / 강의번호: " + listG[key].Gnum + " / 수강인원: " + listG[key].participants;
                    userGItem.appendChild(info);
                    if (document.getElementById("adminSection").style.display === "block") {
                        var deleteButton = document.createElement("button");
                        deleteButton.textContent = "삭제";
                        deleteButton.dataset.gname = key;
                        deleteButton.addEventListener("click", function() {
                            var gname = this.dataset.gname;
                            delete listG[gname];
                            this.parentNode.remove();
                            for (var key in listA){
                                for (var key2 in listA[key].courses){
                                    if (listA[key].courses[key2] == gname){
                                        listA[key].courses.splice(key2, 1);
                                    }
                                }
                            }
                        });
                        userGItem.appendChild(deleteButton);
                    } else {
                        var enrollButton = document.createElement("button");
                        enrollButton.textContent = "수강신청";
                        enrollButton.dataset.gname = key;
                        enrollButton.addEventListener("click", function() {
                            var gname = this.dataset.gname;
                            listG[gname].participants++;
                            info.textContent = "강의명: " + gname + " / 강의번호: " + listG[gname].Gnum + " / 수강인원: " + listG[gname].participants;
                        });
                        userGItem.appendChild(enrollButton);
                    }
                    userGListDiv.appendChild(userGItem);
                }
            } 
            else if (username == "" || password == ""){
                alert("공백 없이 똑바로 입력하세요.");
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
            }
            else if ((username in listA)){
                if (listA[username].password == password){
                    // 일반 사용자 로그인 처리
                    alert("사용자로 로그인되었습니다.");
                    document.getElementById("adminSection").style.display = "none";
                    document.getElementById("userSection").style.display = "block";
                    document.getElementById("userLogoutButton").style.display = "block";
                    document.getElementById("loglog").style.display = "none";
                    slideLoginForm();

                    user_willbe_list.innerHTML = "";
                    for (var key in listG) {
                        var userItem = document.createElement("p");
                        userItem.textContent = "강의 : " + key + " / 강의번호 : " + listG[key].Gnum + " / 수강인원 : "+listG[key].participants;
                        user_willbe_list.appendChild(userItem);
                    }
                    document.getElementById("Gname2").value = "";
                    document.getElementById("Gnum2").value = "";
                    user_doing_list.innerHTML = "";
                    for(var key in listA[username].courses){
                        var userItem = document.createElement("p");
                        userItem.textContent = "강의 : " + listA[username].courses[key];
                        user_doing_list.appendChild(userItem);
                    }
                }
                else {
                    alert("비밀번호가 틀렸습니다.");
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";
                }
            }
            else {
                alert("없는 회원입니다. 회원가입 해주세요!!");
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
            }
        }
        function create_id(){
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            const regex_id = /^[a-zA-Z0-9]{8,24}$/
            const regex_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{9,24}$/; 

            if (username == "" || password == ""){
                alert("공백 없이 똑바로 입력하세요.");
            }
            else if ((username in listA)){
                alert("이미 존재하는 아이디입니다!!");
            }
            else if (regex_id.test(username) && regex_pw.test(password)){
                alert("가입을 환영합니다!!");
                var user = {
                    username: username,
                    password: password,
                    courses: [] // 수강 신청 내용을 저장하는 배열
                };
                listA[username] = user;
            }
            else {
                alert("아이디 혹은 형식의 형태가 맞지 않습니다..");
                alert("아이디는 영어와 숫자만으로 가능하고\n 비밀번호는 영어, 숫자, 특수문자 1개가 포함된 9~24자리 값을 입력해주세요.");     
            }
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }
        function delete_id(){
            var del_username = document.getElementById("del_username").value;

            for(var key in listA[del_username].courses){
                listG[listA[del_username].courses[key]].participants--;
            }
            var count = 0;
            for (var key in listA){
                if (listA[key].username == del_username){
                    delete listA[key];
                    count++;
                    alert("회원이 삭제되었습니다..");
                    break;
                }
            }
            if (count == 0){
                alert("해당 인원은 원래 없습니다..");
            }
            userListDiv.innerHTML = ""; // 기존 내용 초기화
                for (var key in listA) {
                    var userItem = document.createElement("p");
                    userItem.textContent = "아이디 : " + key + " / 비밀번호 : " + listA[key].password;
                    userListDiv.appendChild(userItem);
            }
            userGListDiv.innerHTML = "";
                for (var key in listG) {
                    var userGItem = document.createElement("div");
                    var info = document.createElement("p");
                    info.textContent = "강의명: " + key + " / 강의번호: " + listG[key].Gnum + " / 수강인원: " + listG[key].participants;
                    userGItem.appendChild(info);

                    if (document.getElementById("adminSection").style.display === "block") {
                        var deleteButton = document.createElement("button");
                        deleteButton.textContent = "삭제";
                        deleteButton.dataset.gname = key;
                        deleteButton.addEventListener("click", function() {
                            var gname = this.dataset.gname;
                            delete listG[gname];
                            this.parentNode.remove();
                            for (var key in listA){
                                for (var key2 in listA[key].courses){
                                    if (listA[key].courses[key2] == gname){
                                        listA[key].courses.splice(key2, 1);
                                    }
                                }
                            }
                        });
                        userGItem.appendChild(deleteButton);
                    } else {
                        var enrollButton = document.createElement("button");
                        enrollButton.textContent = "수강신청";
                        enrollButton.dataset.gname = key;
                        enrollButton.addEventListener("click", function() {
                            var gname = this.dataset.gname;
                            listG[gname].participants++;
                            info.textContent = "강의명: " + gname + " / 강의번호: " + listG[gname].Gnum + " / 수강인원: " + listG[gname].participants;
                        });
                        userGItem.appendChild(enrollButton);
                    }
                    userGListDiv.appendChild(userGItem);
                }
            document.getElementById("del_username").value = "";
        }

        function add_gangE() {
            var Gname = document.getElementById("Gname").value;
            var Gnum = document.getElementById("Gnum").value;
            var username = document.getElementById("username").value;

            var check = 0;
            for (var key in listG) {
                if (listG[key].Gnum == Gnum){
                    check++;
                    break;
                }
            }

            const regex_Gname = /[`~!@#$%^&*|\\\'\";:\/?]/; 
            const regex_Gnum = /(^[A-Z]{3}-\d{3}$)/; 
            if (Gname == "" || Gnum == "") {
                alert("공백 없이 똑바로 입력하세요.");
            } 
            else if (Gname in listG) {
                alert("이미 존재하는 강의입니다!!");
            }
            else if (check == 1){
                alert("이미 존재하는 번호입니다!!");
            }
            else if (!regex_Gname.test(Gname) && regex_Gnum.test(Gnum) && (check == 0)){
                listG[Gname] = {
                    Gnum: Gnum,
                    participants: 0
                };
                alert("강의명: " + Gname + " / 강의번호: " + Gnum + " [추가완료]");

                // 기존 내용 초기화
                userGListDiv.innerHTML = "";

                for (var key in listG) {
                    var userGItem = document.createElement("div");

                    var info = document.createElement("p");
                    info.textContent = "강의명: " + key + " / 강의번호: " + listG[key].Gnum + " / 수강인원: " + listG[key].participants;
                    userGItem.appendChild(info);

                    if (document.getElementById("adminSection").style.display === "block") {
                        var deleteButton = document.createElement("button");
                        deleteButton.textContent = "삭제";
                        deleteButton.dataset.gname = key;
                        deleteButton.addEventListener("click", function() {
                            var gname = this.dataset.gname;
                            delete listG[gname];
                            this.parentNode.remove();

                            for (var key in listA){
                                for (var key2 in listA[key].courses){
                                    if (listA[key].courses[key2] == gname){
                                        listA[key].courses.splice(key2, 1);
                                    }
                                }
                            }
                        });
                        userGItem.appendChild(deleteButton);
                    } else {
                        var enrollButton = document.createElement("button");
                        enrollButton.textContent = "수강신청";
                        enrollButton.dataset.gname = key;
                        enrollButton.addEventListener("click", function() {
                            var gname = this.dataset.gname;
                            listG[gname].participants++;
                            info.textContent = "강의명: " + gname + " / 강의번호: " + listG[gname].Gnum + " / 수강인원: " + listG[gname].participants;
                        });
                        userGItem.appendChild(enrollButton);
                    }

                    userGListDiv.appendChild(userGItem);
                }
            }
            else {
                alert("표현식이 올바르지 않습니다. 다시 입력해주세요");
            }
            document.getElementById("Gname").value = "";
            document.getElementById("Gnum").value = "";
        }

        function add_gangE2() {
            var Gname2 = document.getElementById("Gname2").value;
            var Gnum2 = document.getElementById("Gnum2").value;
            var username = document.getElementById("username").value;
            if (Gname2 == "" || Gnum2 == "") {
                alert("공백 없이 똑바로 입력하세요.");
            } 
            else if ((Gname2 in listG) && (listG[Gname2].Gnum == Gnum2)) {
                
                var check = 0;
                var count = 1;
                for(var key in listA[username].courses){
                    
                    if (count == 7){
                        check--;
                        break;
                    }
                    if (listA[username].courses[key] == Gname2){
                        check++;
                        break;
                    }
                    count++;
                }
                if (check == 0){
                    alert("강의 담기에 성공했습니다!!");
                    console.log(listA);
                    listG[Gname2].participants++; // 수강인원 증가
                    listA[username].courses.push(Gname2);

                    user_willbe_list.innerHTML = "";
                    for (var key in listG) {
                        var userItem = document.createElement("p");
                        userItem.textContent = "강의 : " + key + " / 강의번호 : " + listG[key].Gnum + " / 수강인원 : "+listG[key].participants;
                        user_willbe_list.appendChild(userItem);
                    }    
                    user_doing_list.innerHTML = "";
                    for(var key in listA[username].courses){
                        var userItem = document.createElement("p");
                        userItem.textContent = "강의 : " + listA[username].courses[key];
                        user_doing_list.appendChild(userItem);
                    }
                    document.getElementById("Gname2").value = "";
                    document.getElementById("Gnum2").value = "";
                }
                else if (check == 1){
                    alert("이미 있는 강의입니다.");
                }
                else if (check == -1){
                    alert("수강 한도 초과입니다.");
                }
                document.getElementById("Gname2").value = "";
                document.getElementById("Gnum2").value = "";
            } 
            else {
                alert("없는 강의 혹은 맞지 않는 강의번호입니다.");
            }
        }

        function slideLoginForm() {
            var form = document.querySelector("#loginForm");
            if (form.style.display === "none") {
                form.style.display = "block";
            } else {
                form.style.display = "none";
            }
        }
        function delete_gangE(){
            var Gname3 = document.getElementById("Gname3").value;
            var username = document.getElementById("username").value;

            var check = 0;
            for(var key in listA[username].courses){
                if(listA[username].courses[key] == Gname3)  {
                    listA[username].courses.splice(key, 1);
                    listG[Gname3].participants--;
                    check++;
                    alert("수강 정정 완료!!");
                    break;
                }
            }
            user_willbe_list.innerHTML = "";
            for (var key in listG) {
                var userItem = document.createElement("p");
                userItem.textContent = "강의 : " + key + " / 강의번호 : " + listG[key].Gnum + " / 수강인원 : "+listG[key].participants;
                user_willbe_list.appendChild(userItem);
            }
            user_doing_list.innerHTML = "";
            for(var key in listA[username].courses){
                var userItem = document.createElement("p");
                userItem.textContent = "강의 : " + listA[username].courses[key];
                user_doing_list.appendChild(userItem);
            }
            if (check == 0){
                alert("수강 신청하지 않은 강의입니다. 다시 입력하세요.");
            }
            document.getElementById("Gname3").value = "";
        }
        function search_inf(){
            var search_id = document.getElementById("search_id").value;
            member_sugans.innerHTML = "";
            for(var key in listA[search_id].courses){
                var userItem = document.createElement("p");
                userItem.textContent = "강의 : " + listA[search_id].courses[key];
                member_sugans.appendChild(userItem);
            }
            document.getElementById("search_id").value = "";
        }
        function logout() {
            var Gname = document.getElementById("Gname").value;
            var Gnum = document.getElementById("Gnum").value;
            var Gname2 = document.getElementById("Gname2").value;
            var Gnum2 = document.getElementById("Gnum2").value;
            document.getElementById("adminSection").style.display = "none";
            document.getElementById("userSection").style.display = "none";
            document.getElementById("adminLogoutButton").style.display = "none";
            document.getElementById("userLogoutButton").style.display = "none";
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("loginForm").reset();
            document.getElementById("loglog").style.display = "block";
            alert("로그아웃 합니다!!");

            member_sugans.innerHTML = "";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("search_id").value = "";
            document.getElementById("Gname").value = "";
            document.getElementById("Gnum").value = "";
            document.getElementById("Gname2").value = "";
            document.getElementById("Gnum2").value = "";
            slideLoginForm();
        }