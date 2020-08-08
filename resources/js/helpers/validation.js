// import noty from 'noty';
const validaCamposFormulario = ($campos, exibirNoty = true) => {
    //Função auxiliar para validação de radios
    const validaRadioButton = campo => {
      // Inicializando variável de controle
      let validado = false
  
      // Recupera o nome do radio de seleção obrigatória
      let nomeCampo = campo.attr('name')
      let input = $('input[name="' + nomeCampo + '"]')
  
      // Remove a cor de campo inválido
      input.parent().removeClass('radioInvalido')
  
      //Se o status foi marcado ou o campo é invisível, passou na validação
      if (input.is(':checked') || !input.is(':visible')) {
        validado = true
      }
  
      // Se o campo não for válido, adiciona a classe de campo inválido no elemento que encapsula o input radio
      if (!validado) input.parent().addClass('radioInvalido')
  
      return validado
    }
  
    //Função auxiliar para notificar o usuário do preenchimento obrigatório
    //e para focar a visualização no primeiro campo que não foi preenchido
    const handleValidation = (scrollTop = false, elemento = 'body') => {
      new Noty({
        text: 'Preencha todos os campos obrigatórios',
        type: 'error',
        timeout: 4000
      }).show()
  
      if (scrollTop === true) {
        $('html, body').animate(
          {
            scrollTop: $(elemento).offset().top - 30
          },
          1200
        )
      }
    }
    //Inicializando variável de controle
    let vazio = 0
    let validado = false
    const camposInvalidos = []
    //Nomeando funções para remoção das classes de campo inválido
    const removeRadioInvalido = campo => {
      $(campo).on('change', ({ currentTarget }) => {
        if (currentTarget.checked) {
          // Recupera o nome do radio de seleção obrigatória
          const nomeCampo = $(currentTarget).attr('name')
          const input = $('input[name="' + nomeCampo + '"]')
  
          // Remove a cor de campo inválido
          input.parent().removeClass('radioInvalido')
        }
      })
    }
    const removeCampoInvalido = campo => {
      $(campo).on('change', ({ currentTarget }) => {
        if (currentTarget.value) {
          $(campo).removeClass('campoInvalido')
        }
      })
    }
  
    //Verificando se existem campos para serem validados
    if ($campos.length > 0) {
      $campos.each(function() {
        // Remove a classe de campo inválido de cada campo, para limpar caso ela tenha sido inserida em validação anterior
        $(this).removeClass('campoInvalido')
  
        // Se o campo for do tipo radio, faz a validação específica
        if ($(this).is(':radio')) {
          let radioValido = validaRadioButton($(this))
          //se não foi validado, aumentamos o vazio
          if (!radioValido) {
            camposInvalidos.push(this)
            vazio++
            removeRadioInvalido(this)
          }
        }
        // Se não faz a validação genérica, caso o campo esteja habilitado
        else if (
          !$(this).is(':disabled') &&
          !$(this).is('[readonly]') &&
          $(this).is(':visible')
        ) {
          //Verifica se existe informação no campo informado
          let verificaCampo = $(this)
            .val()
            .trim().length
          // Adiciona a classe de campo inválido, caso o campo seja selectize
          const isSelectize = campo =>
            $(campo)
              .attr('class')
              .indexOf('selectize') !== -1
          if (isSelectize(this)) {
            verificaCampo = $(this)
              .siblings('select')
              .val()
          }
          //Se o campo está vazio
          if (!verificaCampo || verificaCampo === 0) {
            // Adiciona a classe de campo inválido e incrementa vazio
            if (isSelectize(this)) {
              $(this)
                .find('.selectize-input')
                .addClass('campoInvalido')
            } else {
              $(this).addClass('campoInvalido')
            }
            camposInvalidos.push(this)
            vazio++
            removeCampoInvalido(this)
          }
        }
      })
    }
  
    //Se não tiver campos vazios, passa na validação
    if (vazio === 0) {
      validado = true
    }
  
    // Se os campos não forem válidos e a opção para exibir noty for verdadeira
    if (!validado && exibirNoty) handleValidation(true, camposInvalidos[0])
  
    return validado
  }
  
  export { validaCamposFormulario }
  