function isMobile() {
    return window.innerWidth < 768; // Defina o valor desejado para o ponto de corte de largura
}

var crc = document.getElementById("crc");
var cre = document.getElementById("cre");
var cve = document.getElementById("cve");

var original_crc = crc.innerHTML;
var original_cre = cre.innerHTML;
var original_cve = cve.innerHTML;

var original_crc_altura = cve.style.height;
var original_cre_altura = crc.style.height;
var original_cve_altura = cre.style.height;

var original_flex_crc = crc.style.flex;
var original_flex_cre = cre.style.flex;

var original_css_crc = crc.style;
var original_css_cre = cre.style;

var novo_html_crc = '<ul><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://www.instagram.com/_robolab/" target="_blank">Instagram: @_robolab</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="mailto:robolab.ltda@gmail.com" target="_blank">Email: robolab.ltda@gmail.com</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://wa.me/557991556000" target="_blank">Contato: +55 (79) 991556000</a></li><li><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/Elemento%20-%206.svg"><a href="https://www.google.com/maps/place/R.+Comendador+Manoel+Gon%C3%A7alves,+6+-+Grageru,+Aracaju+-+SE,+49027-050/@-10.944681,-37.0668118,20.5z/data=!4m6!3m5!1s0x71ab3c363c545cb:0xbb1e5de4816f2612!8m2!3d-10.9446513!4d-37.0667206!16s%2Fg%2F11hbgjyk0s?entry=ttu" target="_blank">localização: R. Comendador Manoel Gonçalves, 06 - Grageru, Aracaju - SE, 49027-050</a></li></ul><div class="contato"><p>Entrar em contato</p></div>';
var novo_html_cve = '<div class="texto_cve"><p>Treinamos alunos de <u>10 a 14 anos</u> para construir e programar robos destinados a competições</p><p>Nossa metodologia alia o conhecimento tecnico com a <u>mentalidade esportiva</u>.</p><p>A robótica, conhecida como um <u>esporte para a mente</u>, representa uma abordagem inovadora para o desenvolvimento <u>cognitivo e técnico</u> das crianças. Ao contrário dos esportes convencionais, a robótica engloba uma combinação única de habilidades <u>intelectuais e práticas</u>, transformando o aprendizado em uma emocionante jornada de descobertas.</p></div><div class="imagens"><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/clube%20de%20robotica.svg" style="height: 23px;"><img src="/imgs/svg/menos.svg" style="height: 23px;"></div>';
var novo_html_cre = '<div class="texto_cre"><p>O Competition- Based Learning (CBL) é uma abordagem de ensino que promove a <b>competição</b> como estímulo para <b>maximar a aprendizagem</b> de um grupo de alunos. O CBL é a metodologia base do treinamento ROBOLAB.</p><p>Treinar robótica como um <b>esporte</b> oferece uma série de vantagens notáveis. Em primeiro lugar, promove o <b>pensamento crítico</b> e a <b>resolução de problemas</b>, pois os participantes enfrentam desafios complexos que exigem criatividade e raciocínio lógico para encontrar <b>soluções eficientes</b>. Além disso, a colaboração é essencial, incentivando a comunicação e o trabalho em equipe, habilidades cruciais não apenas na robótica, mas em diversas áreas da <b>vida</b>.</p></div><div class="imagens"><img src="https://raw.githubusercontent.com/ONiltonLinhares/robolab/main/imgs/svg/esporte%20para%20mente.svg" style="height: 35px;"></div>';

// Atualiza a função toggleSize para incluir o ajuste do Flexbox
function toggleSize() {
    
    // Checa o status atual baseado no data attribute
    var estaAtivado = crc.getAttribute('data-toggled') === 'true';
    
    // Alterna o status
    estaAtivado = !estaAtivado;
    
    // Define o novo status no data attribute
    crc.setAttribute('data-toggled', estaAtivado.toString());
    
    // Chama a função de ajuste do Flexbox com o novo status
    ajustarFlexbox(estaAtivado);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function abrecrc() {
    cre.innerHTML = "";
    setTimeout(function() {
        crc.innerHTML = novo_html_crc;
        crc.style.fontFamily = 'AeionMono', 'Regular';
    }, 500);

    setTimeout(function() {
        cre.style.transition = 'all 1s ease';
        crc.style.transition = 'flex-grow 1s ease';

        cre.style.flex = '0 0 0%';
        cre.style.maxWidth = '50%';
        crc.style.flexGrow = '1';
    }, 100);
}

function fechacrc() {
    if (isMobile()) {
        crc.innerHTML = original_crc;
        crc.style.fontFamily = "FamiljenGrotesk-bold";
        setTimeout(function() {
            cre.innerHTML = original_cre;
        }, 620);
    } else {
        setTimeout(function() {
            cre.innerHTML = original_cre;
            crc.innerHTML = original_crc;
            crc.style.fontFamily = "FamiljenGrotesk-bold";
        }, 300);
    }

    setTimeout(function() {
        crc.style.transition = 'all 1s ease';
        cre.style.transition = 'flex-grow 1s ease';

        crc.style.flex = original_flex_crc;
        cre.style.flex = original_flex_cre;
    }, 100);

    setTimeout(function() {
        crc.style = original_css_crc;
        cre.style = original_css_cre;
    }, 1050);
}

function abrecve() {
    crc.innerHTML = "";
    cre.innerHTML = "";
    cve.innerHTML = novo_html_cve;
    if (isMobile()) {
        cve.style.height = "64vh";
    } else {
        cve.style.height = "30vw";
    }
    cre.style.height = "5vw";
    crc.style.height = "5vw";
}

function fechacve() {
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
}

function abrecre() {
    setTimeout(function() {
        cve.innerHTML = "";
    }, 300);
    setTimeout(function() {
        crc.innerHTML = "";
    }, 800);
    setTimeout(function() {
        cre.innerHTML = novo_html_cre;
    }, 1100);

    if (isMobile()) {
        cre.style.height = "64vh";
        crc.style.height = "64vh";
    } else {
        cre.style.height = "32vw";
        crc.style.height = "32vw";
    }
    cve.style.height = "3vw";

    setTimeout(function() {
        crc.style.transition = 'all 1s ease';
        cre.style.transition = 'flex-grow 1s ease';

        crc.style.flex = '0 0 0%';
        crc.style.maxWidth = '50%';
        cre.style.flexGrow = '1';
    }, 850);
}

function fechacre() {
    crc.style.height = original_crc_altura;
    cre.style.height = original_cre_altura;
    setTimeout(function() {
        cve.style.height = original_cve_altura;
    }, 30);

    setTimeout(function() {
        cve.innerHTML = original_cve;
    }, 60);
    
    setTimeout(function() {
        crc.innerHTML = original_crc;
    }, 1400);
    setTimeout(function() {
        cre.innerHTML = original_cre;
    }, 250);

    setTimeout(function() {
        crc.style.transition = 'all 1s ease';
        cre.style.transition = 'flex-grow 1s ease';

        crc.style.flex = original_flex_crc;
        cre.style.flex = original_flex_cre;
    }, 800);

    setTimeout(function() {
        crc.style = original_css_crc;
        cre.style = original_css_cre;
    }, 1600);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('crc').addEventListener('click', toggleSize);
document.getElementById('li_contato').addEventListener('click', toggleSize);

document.addEventListener("DOMContentLoaded", function() {
 
    var listButton = document.getElementById("li_contato");
 
    var estilosAlterados = false;

    function toggleContent() {
        
        if (cve.innerHTML.trim() == novo_html_cve ){
            fechacve();
            setTimeout(function() {
                toggleContent();
            }, 830);
            return 0;
        }
        if (cre.innerHTML.trim() == novo_html_cre ){
            cve.style.transition = "height 1s ease";
            crc.style.transition = "height 1s ease";
            cre.style.transition = "height 1s ease";
            fechacre();
            setTimeout(function() {
                toggleContent();
            }, 1500);
            return 0;
        }

        cre.classList.toggle("alterado", !estilosAlterados);
    
        // Executa a ação relacionada ao innerHTML
        if (cre.innerHTML.trim() === "") {
            fechacrc();
        } else {
            abrecrc();
        }
    
        estilosAlterados = !estilosAlterados;
    }
    
    crc.addEventListener("click", toggleContent);
    listButton.addEventListener("click", toggleContent);

    crc.addEventListener("click", ajustecve());
    listButton.addEventListener("click", ajustecve());
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function() {

    var listButton = document.getElementById("li_treinamento");

    var estilosAlterados = false;

    function ajustecve() {
        if (crc.innerHTML.trim() == novo_html_crc ){
            fechacrc();
            setTimeout(function() {
                ajustecve();
            }, 1100);
            return 0;
        }
        if (cre.innerHTML.trim() == novo_html_cre ){
            cve.style.transition = "height 1s ease";
            crc.style.transition = "height 1s ease";
            cre.style.transition = "height 1s ease";
            fechacre();
            setTimeout(function() {
                ajustecve();
            }, 1600);
            return 0;
        }
        crc.classList.toggle("alterado", !estilosAlterados);

        // Adiciona uma transição suave para as mudanças de altura
        cve.style.transition = "height 1s ease";
        crc.style.transition = "height 1s ease";
        cre.style.transition = "height 1s ease";

        // Executa a ação relacionada ao innerHTML
        if (crc.innerHTML.trim() === "") {
            fechacve();
        } else {
            abrecve();
        }
        estilosAlterados = !estilosAlterados;
    }

    cve.addEventListener("click", ajustecve);
    listButton.addEventListener("click", ajustecve);
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function() {

    var listButton = document.getElementById("li_sobre");

    function ajustecve() {
        if (crc.innerHTML.trim() == novo_html_crc ){
            fechacrc();
            setTimeout(function() {
                ajustecve();
            }, 1100);
            return 0;
        }

        if (cve.innerHTML.trim() == novo_html_cve ){
            fechacve();
            setTimeout(function() {
                ajustecve();
            }, 310);
            return 0;
        }

        // Adiciona uma transição suave para as mudanças de altura
        cve.style.transition = "height 1s ease";
        crc.style.transition = "height 1s ease";
        cre.style.transition = "height 1s ease";

        // Executa a ação relacionada ao innerHTML
        if (crc.innerHTML.trim() === "") {
            fechacre();
        } else {
            abrecre();
        }
    }

    cre.addEventListener("click", ajustecve);
    listButton.addEventListener("click", ajustecve);
});
