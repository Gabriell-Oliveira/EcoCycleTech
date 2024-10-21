// script.js

// Slider (Swiper.js)
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Animações (AOS.js)
AOS.init();

// Consumo de API para a seção "Serviços"
fetch('https://api.exemplo.com/reciclagem-servicos')
    .then(response => response.json())
    .then(data => {
        const servicosList = document.getElementById('servicos-list');
        data.servicos.forEach(servico => {
            const card = document.createElement('div');
            card.classList.add('col-md-4');
            card.innerHTML = `
                <div class="card border-success">
                    <div class="card-body">
                        <h5 class="card-title text-success">${servico.nome}</h5>
                        <p class="card-text">${servico.descricao}</p>
                    </div>
                </div>
            `;
            servicosList.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os serviços:', error);
    });

    // Dados dos serviços da EcoCycleTech
const servicosData = [
    {
        nome: "Máquinas de Reciclagem Inteligentes",
        descricao: "Equipamentos que utilizam IA para separar materiais recicláveis de forma eficiente e precisa."
    },
    {
        nome: "Consultoria em Reciclagem",
        descricao: "Análise personalizada das operações da sua empresa e recomendações para implementar práticas de reciclagem eficazes."
    },
    {
        nome: "Treinamento e Capacitação",
        descricao: "Programas de formação para equipes sobre melhores práticas de reciclagem e gestão de resíduos."
    },
    {
        nome: "Monitoramento e Relatórios",
        descricao: "Ferramentas para acompanhar a eficiência da reciclagem e fornecer relatórios detalhados sobre o desempenho."
    }
];

// Função para exibir os serviços na página
function mostrarServicos() {
    const servicosList = document.getElementById('servicos-list');
    
    servicosData.forEach(servico => {
        // Criando os cards para cada serviço
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'col-lg-4', 'mb-4');
        
        card.innerHTML = `
            <div class="card border-success">
                <div class="card-body">
                    <h5 class="card-title text-success">${servico.nome}</h5>
                    <p class="card-text">${servico.descricao}</p>
                </div>
            </div>
        `;
        
        // Adicionando o card ao container
        servicosList.appendChild(card);
    });
}

// Chamar a função para exibir os serviços ao carregar a página
document.addEventListener('DOMContentLoaded', mostrarServicos);

// Validação do Formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha todos os campos obrigatórios.');
    }
    this.classList.add('was-validated');
});
