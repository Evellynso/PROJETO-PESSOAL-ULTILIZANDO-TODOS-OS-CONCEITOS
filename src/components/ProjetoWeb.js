class ProjetoWeb extends Projeto {
    constructor(titulo, descricao, ) {
        super(titulo, descricao)
    }

    exibirProjeto() {
        return `<div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>`
    }
}
