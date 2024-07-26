let permissão = 1

switch(permissão){
    case 1:
        console.log("Sua permissão é", ${comum})
        break; 
    case 2:
        console.log("Sua permissão é de", ${gerente})
        break;
    case 3:
        console.log("Sua permissão é de", ${diretor})
        break;

        default:
        console.log("Você não tem perfil de acesso")
        break;
}