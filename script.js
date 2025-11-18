// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.card, .card-footer');

    // Configurações do "Observer"
    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // O elemento é considerado 'visível' quando 10% dele aparecer
    };

    // A função que será chamada quando um elemento observado entrar na tela
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento (a animação só acontece 1 vez)
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Manda o observer "observar" cada um dos nossos elementos
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});