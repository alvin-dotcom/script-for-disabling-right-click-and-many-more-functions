const disabledKeys = ["c", "C", "x", "J", "u", "I"];
const showAlert = e => {
    e.preventDefault();
    return alert("You can't copy or view this page!");
}

document.addEventListener("contextmenu", e => {
    showAlert(e);
});

document.addEventListener("keydown", e => {
    if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === 'F12'){
        showAlert(e);
    }
});