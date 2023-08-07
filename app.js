function changeTheme() {

    let body = document.body;

    if (document.body.className === 'dark') {
        document.body.className = 'red';
    } else if (document.body.className === 'red') {
        document.body.className = 'light';
    } else {
        document.body.className = 'dark';
    }
    console.log(document.body.className)
}

