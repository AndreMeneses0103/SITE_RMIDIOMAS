const parametro = new URLSearchParams(window.location.search)

function confirma(){
    window.location = "http://localhost:3000/create?usuario=" + parametro.get("usuario")
}

function back(){
    window.location = "http://localhost:3000"
}