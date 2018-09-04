$(document).ready(function(){
            $('#pdf').click(function(){
                alert('PDF gerado')
                let doc = new jsPDF()
                let nome = $('#nome').val()
                let email = $('#email').val()
                let endereco = $('#endereco').val()
                let cpf = $('#cpf').val()
                let telefone = $('#telefone').val()

                let a_nome = $('#a_nome').val()
                let raca = $('#raca').val()
                let a_data = $('#a_data').val()
                let carterinha = $('#carterinha').val()
                let porte = $('#porte').val()

                doc.text("Certificado de adoção" ,80,20)
                doc.text("Dados de Cadastro do Doador"  ,70,40)
                doc.text("Nome: " + nome,10,50)
                doc.text("Email: " + email,10,60)
                doc.text("Endereco: " + endereco,10,70)
                doc.text("CPF: " + cpf,10,80)
                doc.text("Telefone: " + telefone,10,90)

                doc.text("Dados de Cadastro do Animal"  ,70,110)
                doc.text("Nome: " + a_nome,10,120)
                doc.text("Raça: " + raca,10,130)
                doc.text("Data de Nascimento: " + a_data,10,140)
                doc.text("Carteira de Vacinação: " + carterinha,10,150)
                doc.text("Porte: " + porte,10,160)

                doc.save('certificado.pdf')
            })
        });

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
