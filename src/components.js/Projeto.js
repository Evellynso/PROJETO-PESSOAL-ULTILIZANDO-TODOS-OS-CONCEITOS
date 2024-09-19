class Projeto {
    constructor(titulo, descricao) {
        this.titulo = titulo
        this.descricao = descricao
    }

    exibirProjeto() {
        return `<div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>`
    }
}