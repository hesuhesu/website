while (true){
    var name = prompt("이름을 입력하세요.");

    if (name == "admin"){
        break;
    }
    else {
        alert("다시 입력하세요.");
    }
}
document.write("<b><big>" + name + "</big></b>님, 환영합니다.");
