while (true){
    var names = prompt("이름을 입력하세요.");

    if (names == "admin"){
        break;
    }
    else if (names == null){
        location.href = "html/again.html"
        break;
    }
    else {
        alert("다시 입력하세요.");
    }
}
document.write("<b><big>" + names + "</big></b>님, 환영합니다.");
