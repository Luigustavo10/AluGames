function alterarStatus(id) {
    let alugar = document.getElementById(`game-${id}`);
    let imagem = alugar.querySelector('.dashboard__item__img')
    let botao = alugar.querySelector('.dashboard__item__button')
    let nomeJogo = alugar.querySelector('.dashboard__item__name');
     

    if(imagem.classList.contains("dashboard__item__img--rented")){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = 'Alugar'
        }
      
    }else{
       
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = 'Devolver'
        
    }

    



    
}

