
var checkBox = document.getElementById("checkBox");
var deleted = document.getElementById("delete");
// var user = localStorage.setItem("userName",userName);
// var userHobby = localStorage.setItem("hobby",hobby);
// var check = localStorage.setItem("checkBox",checkBox);
//记住信息
checkBox.onclick = function () {
    const userName = document.getElementById("username").value;
    const hobby = document.getElementById("hobby").value;
    if ( checkBox.checked ) {
        localStorage.setItem("userName",userName);
        localStorage.setItem("hobby",hobby);
        const user = localStorage.getItem("userName");
        const hobbys = localStorage.getItem("hobby");
        text.innerText = "用户姓名：" + user + " " + "用户爱好：" + hobbys;
    }else {
        alert("信息将不会保存！");
    }
}

//清除记录
var text = document.getElementById("container-text");
deleted.onclick = function () {
    if ( deleted.checked ) {
        localStorage.removeItem("userName");
        localStorage.removeItem("hobby");
        text.innerText = "用户信息已经删除";
    }else {
       text.innerText = "请重新输入信息";
    }
}