function isMobile() {
    return window.innerWidth < 768; // Defina o valor desejado para o ponto de corte de largura
}

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

// O resto da função toggleSize permanece igual, assim como o event listener

// Atualiza a função toggleSize para incluir o ajuste do Flexbox
function toggleSize() {
    var crc = document.getElementById('crc');
    
    // Checa o status atual baseado no data attribute
    var estaAtivado = crc.getAttribute('data-toggled') === 'true';
    
    // Alterna o status
    estaAtivado = !estaAtivado;
    
    // Define o novo status no data attribute
    crc.setAttribute('data-toggled', estaAtivado.toString());
    
    // Chama a função de ajuste do Flexbox com o novo status
    ajustarFlexbox(estaAtivado);
}

// Não esquece de adicionar o 'listener' do evento né!
document.getElementById('crc').addEventListener('click', toggleSize);
document.getElementById('li_contato').addEventListener('click', toggleSize);

document.addEventListener("DOMContentLoaded", function() {
 
    var toggleButton = document.getElementById("crc");
    var contentContainer = document.getElementById("cre");
    var listButton = document.getElementById("li_contato");
 
    var estilosAlterados = false;

    var original_crc = toggleButton.innerHTML
    var original_cre = contentContainer.innerHTML


    toggleButton.addEventListener("click", function() {

        contentContainer.classList.toggle("alterado", !estilosAlterados);

        // Executa a ação relacionada ao innerHTML
        if (contentContainer.innerHTML.trim() === "") {

            if (isMobile()) {
                setTimeout(function() {
                    toggleButton.innerHTML = original_crc;
                }, 300);
                setTimeout(function() {
                    contentContainer.innerHTML = original_cre;
                }, 620);
            } else {
                setTimeout(function() {
                    contentContainer.innerHTML = original_cre;
                    toggleButton.innerHTML = original_crc;
                }, 300);
            }
        } else {
            contentContainer.innerHTML = "";
            setTimeout(function() {
                toggleButton.innerHTML = '<ul><li><a href="https://www.instagram.com/_robolab/" target="_blank">intagram: @_robolab</a></li><li><a href="mailto:robolab.ltda@gmail.com" target="_blank">email: robolab.ltda@gmail.com</a></li><li><a href="https://wa.me/557991556000" target="_blank">Contato: (55) 79 991556000</a></li><li><a href="https://www.google.com/maps/place/R.+Comendador+Manoel+Gon%C3%A7alves,+6+-+Grageru,+Aracaju+-+SE,+49027-050/@-10.944681,-37.0668118,20.5z/data=!4m6!3m5!1s0x71ab3c363c545cb:0xbb1e5de4816f2612!8m2!3d-10.9446513!4d-37.0667206!16s%2Fg%2F11hbgjyk0s?entry=ttu" target="_blank">localização: R. Comendador Manoel Gonçalves, 06 - Grageru, Aracaju - SE, 49027-050</a></li></ul><div class="contato"><p>Entrar em contato</p></div>';
            }, 300);
        }

        estilosAlterados = !estilosAlterados;
    });

    listButton.addEventListener("click", function() {

        contentContainer.classList.toggle("alterado", !estilosAlterados);

        // Executa a ação relacionada ao innerHTML
        if (contentContainer.innerHTML.trim() === "") {
            setTimeout(function() {
                contentContainer.innerHTML = original_cre;
                toggleButton.innerHTML = original_crc;
            }, 300);
        } else {
            
            contentContainer.innerHTML = "";
            setTimeout(function() {
                toggleButton.innerHTML = '<ul><li><a href="https://www.instagram.com/_robolab/" target="_blank">intagram: @_robolab</a></li><li><a href="mailto:robolab.ltda@gmail.com" target="_blank">email: robolab.ltda@gmail.com</a></li><li><a href="https://wa.me/557991556000" target="_blank">Contato: (55) 79 991556000</a></li><li><a href="https://www.google.com/maps/place/R.+Comendador+Manoel+Gon%C3%A7alves,+6+-+Grageru,+Aracaju+-+SE,+49027-050/@-10.944681,-37.0668118,20.5z/data=!4m6!3m5!1s0x71ab3c363c545cb:0xbb1e5de4816f2612!8m2!3d-10.9446513!4d-37.0667206!16s%2Fg%2F11hbgjyk0s?entry=ttu" target="_blank">localização: R. Comendador Manoel Gonçalves, 06 - Grageru, Aracaju - SE, 49027-050</a></li></ul><div class="contato"><p>Entrar em contato</p></div>';
            }, 300);
        }

        estilosAlterados = !estilosAlterados;
    });
});
