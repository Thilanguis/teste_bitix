class Index{
    constructor() {
        $(document).ready(() => {
            this.clonarFormulario()
            this.limparClones()
        })
    }

    clonarFormulario(){
        $('.numeroBeneficiarios').on('change', (e) =>{
            let numeroBeneficiarios = $('.numeroBeneficiarios').val()
 
            if(numeroBeneficiarios > 1){
                
                var i
                for(i = 1; i < numeroBeneficiarios; i++){
                    let dadosBeneficiarios = $('div[id=dadosBeneficiarios]').clone(true)
                    dadosBeneficiarios.find('input').attr('disabled', false)
                    dadosBeneficiarios.removeClass('oculto')
                    dadosBeneficiarios.removeAttr('id', 'dadosBeneficiarios')
                    dadosBeneficiarios.addClass('dadosBeneficiarios')
                    $('#beneficiarios').append(dadosBeneficiarios)
                }   
            }
        })
    }

    limparClones(){
        $('.numeroBeneficiarios').on('change', (e) => {
            let numeroBeneficiariosVazio = $('.numeroBeneficiarios').val()
            // console.log(numeroBeneficiariosVazio)

            if(!numeroBeneficiariosVazio) {
                $('.dadosBeneficiarios').remove()
            }


        })
    }
}
new Index();