function verificar() {

    var nome = document.getElementById('txtn').value
    var email = document.getElementById('txte').value
    var nomeCom = document.getElementById('txtf').value
    var qtd = parseInt(document.getElementById('txtq').value)
    var res = document.getElementById('res')
  
    var nomeCli = []
    var emailCli = []
    var nomeFood = []
    var qtdP = []
    var valor = 0
  
  
    if(nome.length == 0 || email.length == 0 || nomeCom.length == 0 || qtd.length == 0) {
        res.innerHTML = `Erro tente novamente`
      } else {
        nomeCli.push(nome)
        emailCli.push(email)
        nomeFood.push(nomeCom)
        qtdP.push(qtd)
        /*parte do sorvete*/
      } if(nomeFood == 'Chocolate') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Baunilha') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Flocos') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'laranja') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Morango') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Coco') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Creme') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
    } else if(nomeFood == 'Doce de leite') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
    } else if(nomeFood == 'Limão') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
    
    } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
      }
    
     /*parte final*/

      /*parte do bolo*/
    } if(nomeFood == 'Chocolate') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Doce de leite') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Morango') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Chocolate branco') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Chocolate com morango') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'bolo de limão') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Brigádeiro') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
    } else if(nomeFood == 'Bolo de cenoura') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
    } else if(nomeFood == 'Bolo de fubá') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
    
    } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
    }
    
    /*parte final*/

    /*parte do doce*/
     if(nomeFood == 'Brigadeiro') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'Amendoim') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
  } else if(nomeFood == 'beijinho') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'Doce de leite') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'leite em po') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
 
    } else {
    res.innerHTML = `Não temos esse produto no momento. Tente novamente`
    }

/*parte final do doce*/

    
    
  
  