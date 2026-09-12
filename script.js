function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("message").innerText =
            "Please enter username and password.";
    } 
    else {
        document.getElementById("message").innerText =
            "Login successful! ✅";
    }
}
