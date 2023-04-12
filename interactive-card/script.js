    document.getElementById("info-name").oninput = () => {
        document.querySelector(".card-name").innerText = document.getElementById("info-name").value;
    }

