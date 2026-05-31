//const forms
const formMenu = {
    perfil: () => document.getElementById('sectionPerfil'),
    social: () => document.getElementById('sectionSocial'),
    estudos: () => document.getElementById('sectionEstudos'),
    filmes: () => document.getElementById('sectionFilmes'),
    series: () => document.getElementById('sectionSeries'),
    animes: () => document.getElementById('sectionAnimes')
}


//function menu
function clickNavMenu(conteudo){
    switch(conteudo){
        case'perfil':
        formMenu.perfil().style.display='block'
        formMenu.estudos().style.display='none'
        formMenu.filmes().style.display='none'
        formMenu.series().style.display='none'
        formMenu.animes().style.display='none'
        break


        case'estudo':
        formMenu.perfil().style.display='none'
        formMenu.estudos().style.display='block'
        formMenu.filmes().style.display='none'
        formMenu.series().style.display='none'
        formMenu.animes().style.display='none'
        break


        case'filme':
        formMenu.perfil().style.display='none'
        formMenu.estudos().style.display='none'
        formMenu.filmes().style.display='block'
        formMenu.series().style.display='none'
        formMenu.animes().style.display='none'
        break


        case'serie':
        formMenu.perfil().style.display='none'
        formMenu.estudos().style.display='none'
        formMenu.filmes().style.display='none'
        formMenu.series().style.display='block'
        formMenu.animes().style.display='none'
        break


        case'anime':
        formMenu.perfil().style.display='none'
        formMenu.estudos().style.display='none'
        formMenu.filmes().style.display='none'
        formMenu.series().style.display='none'
        formMenu.animes().style.display='block'
        break
    }
}