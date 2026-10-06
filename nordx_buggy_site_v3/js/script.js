document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       REVEAL ANIMATION
    ========================= */

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });


    /* =========================
       FAQ
    ========================= */

    document.querySelectorAll('.faq-q').forEach(button => {

        button.addEventListener('click', () => {

            const answer = button.nextElementSibling;
            const isOpen = answer.style.maxHeight;

            // Закрываем все ответы
            document.querySelectorAll('.faq-a').forEach(item => {
                item.style.maxHeight = null;
            });

            // Сбрасываем все иконки
            document.querySelectorAll('.faq-q span').forEach(icon => {
                icon.textContent = '+';
            });

            // Открываем выбранный ответ
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                button.querySelector('span').textContent = '−';
            }

        });

    });


    /* =========================
       CONSULTATION MODAL
    ========================= */

    const modal = document.getElementById('consultModal');
    const form = document.getElementById('consultForm');
    const success = document.getElementById('formSuccess');


    // Открытие модального окна

    function openConsultModal() {

        if (!modal) return;

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

    }


    // Закрытие модального окна

    function closeConsultModal() {

        if (!modal) return;

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

    }


    // Все кнопки консультации

    document.querySelectorAll('.js-consult-open').forEach(button => {

        button.addEventListener('click', event => {

            event.preventDefault();

            openConsultModal();

        });

    });


    // Закрытие по кнопке и overlay

    document.querySelectorAll('[data-modal-close]').forEach(button => {

        button.addEventListener('click', () => {
            closeConsultModal();
        });

    });


    // Закрытие по Escape

    document.addEventListener('keydown', event => {

        if (
            event.key === 'Escape' &&
            modal &&
            modal.classList.contains('is-open')
        ) {
            closeConsultModal();
        }

    });


    /* =========================
       FORM
    ========================= */

    if (form) {

        form.addEventListener('submit', event => {

            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            form.style.display = 'none';

            if (success) {
                success.classList.add('is-visible');
            }

        });

    }

});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu nav a');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    });
});