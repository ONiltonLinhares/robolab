function isMobile() {
    return window.innerWidth < 768; // Defina o valor desejado para o ponto de corte de largura
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Função para definir ou resetar o estilo do Flexbox
function ajustarFlexbox(estaAtivado) {
    var cre = document.getElementById('cre');
    var crc = document.getElementById('crc');
    
    // Adiciona uma transição suave à mudança de tamanho e estilo
    cre.style.transition = 'all 1s ease';
    crc.style.transition = 'flex-grow 1s ease';

    if (estaAtivado) {
        // Definições para quando está ativo
        cre.style.flex = '0 0 0%';
        cre.style.maxWidth = '50%';
        crc.style.flexGrow = '1';
    } else {
        // Resetando para o estado original
        cre.style.flex = ''; 
        cre.style.maxWidth = '';
        crc.style.flexGrow = '';
    }
}



// Atualiza a função toggleSize para incluir o ajuste do Flexbox
function toggleSize() {
    var crc = document.getElementById('crc');

    if(crc.innerHTML === ""){
        return 0
    }
    
    // Checa o status atual baseado no data attribute
    var estaAtivado = crc.getAttribute('data-toggled') === 'true';
    
    // Alterna o status
    estaAtivado = !estaAtivado;
    
    // Define o novo status no data attribute
    crc.setAttribute('data-toggled', estaAtivado.toString());
    
    // Chama a função de ajuste do Flexbox com o novo status
    ajustarFlexbox(estaAtivado);
}


document.getElementById('crc').addEventListener('click', toggleSize);
document.getElementById('li_contato').addEventListener('click', toggleSize);

document.addEventListener("DOMContentLoaded", function() {
 
    var toggleButton = document.getElementById("crc");
    var contentContainer = document.getElementById("cre");
    var listButton = document.getElementById("li_contato");
 
    var estilosAlterados = false;

    var original_crc = toggleButton.innerHTML
    var original_cre = contentContainer.innerHTML


    function toggleContent() {
        if(crc.innerHTML === ""){
            return 0
        }
        contentContainer.classList.toggle("alterado", !estilosAlterados);
    
        // Executa a ação relacionada ao innerHTML
        if (contentContainer.innerHTML.trim() === "") {
            if (isMobile()) {
                toggleButton.innerHTML = original_crc;
                toggleButton.style.fontFamily = "FamiljenGrotesk-bold";
                setTimeout(function() {
                    contentContainer.innerHTML = original_cre;
                }, 620);
            } else {
                setTimeout(function() {
                    contentContainer.innerHTML = original_cre;
                    toggleButton.innerHTML = original_crc;
                    toggleButton.style.fontFamily = "FamiljenGrotesk-bold";
                }, 300);
            }
        } else {
            contentContainer.innerHTML = "";
            setTimeout(function() {
                toggleButton.innerHTML = '<ul><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://www.instagram.com/_robolab/" target="_blank">Instagram: @_robolab</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="mailto:robolab.ltda@gmail.com" target="_blank">Email: robolab.ltda@gmail.com</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://wa.me/557991556000" target="_blank">Contato: +55 (79) 991556000</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://www.google.com/maps/place/R.+Comendador+Manoel+Gon%C3%A7alves,+6+-+Grageru,+Aracaju+-+SE,+49027-050/@-10.944681,-37.0668118,20.5z/data=!4m6!3m5!1s0x71ab3c363c545cb:0xbb1e5de4816f2612!8m2!3d-10.9446513!4d-37.0667206!16s%2Fg%2F11hbgjyk0s?entry=ttu" target="_blank">localização: R. Comendador Manoel Gonçalves, 06 - Grageru, Aracaju - SE, 49027-050</a></li></ul><div class="contato"><p>Entrar em contato</p></div>';
                toggleButton.style.fontFamily = 'AeionMono', 'Regular';
            }, 500);
        }
    
        estilosAlterados = !estilosAlterados;
    }
    
    toggleButton.addEventListener("click", toggleContent);
    listButton.addEventListener("click", toggleContent);

    toggleButton.addEventListener("click", ajustecve());
    listButton.addEventListener("click", ajustecve());
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function() {

    var crc = document.getElementById("crc");
    var cre = document.getElementById("cre");
    var cve = document.getElementById("cve");
    var listButton = document.getElementById("li_treinamento");

    var estilosAlterados = false;

    var original_crc = crc.innerHTML;
    var original_cre = cre.innerHTML;
    var original_cve = cve.innerHTML;

    var original_crc_altura = cve.style.height;
    var original_cre_altura = crc.style.height;
    var original_cve_altura = cre.style.height;

    function ajustecve() {
        if (crc.innerHTML.trim() == '<ul><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://www.instagram.com/_robolab/" target="_blank">Instagram: @_robolab</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="mailto:robolab.ltda@gmail.com" target="_blank">Email: robolab.ltda@gmail.com</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://wa.me/557991556000" target="_blank">Contato: +55 (79) 991556000</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://www.google.com/maps/place/R.+Comendador+Manoel+Gon%C3%A7alves,+6+-+Grageru,+Aracaju+-+SE,+49027-050/@-10.944681,-37.0668118,20.5z/data=!4m6!3m5!1s0x71ab3c363c545cb:0xbb1e5de4816f2612!8m2!3d-10.9446513!4d-37.0667206!16s%2Fg%2F11hbgjyk0s?entry=ttu" target="_blank">localização: R. Comendador Manoel Gonçalves, 06 - Grageru, Aracaju - SE, 49027-050</a></li></ul><div class="contato"><p>Entrar em contato</p></div>' ){
            return 0;
        }
        crc.classList.toggle("alterado", !estilosAlterados);

        // Adiciona uma transição suave para as mudanças de altura
        cve.style.transition = "height 1s ease";
        crc.style.transition = "height 1s ease";
        cre.style.transition = "height 1s ease";

        // Executa a ação relacionada ao innerHTML
        if (crc.innerHTML.trim() === "") {
            cve.style.height = original_cve_altura;
            setTimeout(function() {
                crc.style.height = original_crc_altura;
                cre.style.height = original_cre_altura;
            }, 40);

            cve.innerHTML = original_cve

            setTimeout(function() {
                crc.innerHTML = original_crc;
                cre.innerHTML = original_cre;
            }, 300);
        } else {
            crc.innerHTML = "";
            cre.innerHTML = "";
            cve.innerHTML = '<div class="texto_cve"><p>Treinamos alunos de <u>10 a 14 anos</u> para construir e programar robos destinados a competições</p><p>Nossa metodologia alia o conhecimento tecnico com a <u>mentalidade esportiva</u>.</p></div><div class="imagens"><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/clube%20de%20robotica.svg" style="height: 23px;"><img src="/imgs/sinal-de-menos.png" style="height: 23px;"></div>';
            if (isMobile()) {
                cve.style.height = "64vh";
            } else {
                cve.style.height = "30vw";
            }
            crc.style.height = "5vw";
            cre.style.height = "5vw";
        }
        estilosAlterados = !estilosAlterados;
    }

    cve.addEventListener("click", ajustecve);
    listButton.addEventListener("click", ajustecve);
});
