<?php
 
 include 'conexao.php';

$nome = $_POST['nome'];
$idade = $_POST['idade'];
$peso = $_POST['peso'];
$altura = $_POST['altura'];
$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = mysqli_query($conexao,"insert into paciente (nomePaciente, idade, peso, altura, emailPaciente, senha) 

values ('$nome',$idade,$peso,$altura, '$email', '$senha')");

if($sql){

    echo "<script>
        alert('Cadastrado com Sucesso')
        location.href='index.php'
    </script>";

}else{
    echo "<script>
    alert('Erro ao cadastrar')
    location.href='index.php'
</script>";

}



?>



