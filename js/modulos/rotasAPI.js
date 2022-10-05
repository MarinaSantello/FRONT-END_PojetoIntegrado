'use strict'

const apiCursos = async() => {
    const urlAPIcursos = 'https://frabjous-empanada-e70191.netlify.app/.netlify/functions/api/cursos'

    const response = await fetch(urlAPIcursos)
    const listaCursos = await response.json()

    return listaCursos
}

const apiAlunosCurso = async(filtro) => {
    const sigla = filtro
    const urlAPIalunosCurso = `https://frabjous-empanada-e70191.netlify.app/.netlify/functions/api/alunos/?filtroSigla=${sigla}`

    const response = await fetch(urlAPIalunosCurso)
    const listaAlunosCurso = await response.json()

    return listaAlunosCurso
}

const apiAlunos = async(filtroSigla, anoConclusao,filtroStatus) => {
    const sigla = filtroSigla.toUpperCase()
    const ano = anoConclusao
    const status = filtroStatus.toUpperCase()
    const urlAPIalunos = `https://frabjous-empanada-e70191.netlify.app/.netlify/functions/api/alunosGeral/?filtroSigla=${sigla}&anoConclusao=${ano}&filtroStatus=${status}`

    const response = await fetch(urlAPIalunos)
    const listaAlunos = await response.json()

    return listaAlunos
}

const apiAlunosCursoStatus = async(filtroSigla, filtroStatus) => {
    const sigla = filtroSigla.toUpperCase()
    const status = filtroStatus
    const urlAPIalunosCursoStatus = `https://frabjous-empanada-e70191.netlify.app/.netlify/functions/api/alunosCursoStatus/?filtroSigla=${sigla}&filtroStatus=${status}`

    const response = await fetch(urlAPIalunosCursoStatus)
    const listaAlunosCursoStatus = await response.json()

    return listaAlunosCursoStatus
}

const apiAlunosCursoConclusao = async(filtroSigla, anoConclusao) => {
    const sigla = filtroSigla.toUpperCase()
    const ano = anoConclusao
    const urlAPIalunosCursoConclusao = `https://frabjous-empanada-e70191.netlify.app/.netlify/functions/api/alunosConclusao/?filtroAno=${ano}&filtroCurso=${sigla}`

    const response = await fetch(urlAPIalunosCursoConclusao)
    const listaAlunosCursoConclusao = await response.json()

    return listaAlunosCursoConclusao
}

const apiDiciplinasAluno = async(filtro) => {
    const matricula = filtro
    const urlAPIdiciplinasAlunos = `https://frabjous-empanada-e70191.netlify.app/.netlify/functions/api/diciplinaAluno?filtro=${matricula}`

    const response = await fetch(urlAPIdiciplinasAlunos)
    const listaDiciplinasAluno = await response.json()

    return listaDiciplinasAluno
}

export {
    apiCursos,
    apiAlunosCurso,
    apiAlunos,
    apiAlunosCursoConclusao,
    apiAlunosCursoStatus,
    apiDiciplinasAluno
}
