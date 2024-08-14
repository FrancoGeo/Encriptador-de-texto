const lang = {
    a: "12",
    b: "fa",
    c: "3a",
    d: "1b",
    e: "5c",
    f: "1d",
    g: "1e",
    h: "2f",
    i: "7g",
    j: "1h",
    k: "1i",
    l: "1j",
    m: "1k",
    n: "1l",
    o: "8m",
    p: "5n",
    q: "1o",
    r: "1p",
    s: "6q",
    t: "2r",
    u: "1s",
    v: "6t",
    w: "7u",
    x: "1v",
    y: "8w",
    z: "1x",
    " ": "4r"
};

function encriptar() {
    const input = document.getElementById("encriptInput").value;
    const output = document.getElementById("encriptOutput");
    const encryptedText = encripText(input);

    output.value = encryptedText;
}

function desencriptar() {
    const input = document.getElementById("encriptInput").value;
    const output = document.getElementById("encriptOutput");
    const decryptedText = descriptText(input);

    output.value = decryptedText;
}

function encripText(input) {
    let encryptedText = "";
    for (let i = 0; i < input.length; i++) {
        encryptedText += lang[input[i].toLowerCase()];
    }
    return encryptedText;
}

function descriptText(input) {
    let decryptedText = "";
    let keys = Object.keys(lang);
    let values = Object.values(lang);
    for (let i = 0; i < input.length; i += 2) {
        let pair = input.substring(i, i + 2);
        let index = values.indexOf(pair);
        if (index !== -1) {
            decryptedText += keys[index];
        }
    }
    return decryptedText;
}

function copiar() {
    let texto = document.getElementById("encriptOutput");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    document.execCommand("copy");
}
