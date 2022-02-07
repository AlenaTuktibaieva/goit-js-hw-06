const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
});