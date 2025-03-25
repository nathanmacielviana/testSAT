// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById('menu-slide');
    const hamburger = document.getElementById('menu-hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
}

// Função para fechar o menu ao selecionar uma opção
function closeMenu() {
    const menu = document.getElementById('menu-slide');
    const hamburger = document.getElementById('menu-hamburger');
    menu.classList.remove('active');
    hamburger.classList.remove('open');
}


window.addEventListener('scroll', function() {
  const navSaturn = document.getElementById('nav-saturn');
  const h1 = document.querySelector('#nav-saturn h1');
  const p = document.querySelector('#nav-saturn p');
  const btn = document.querySelector('#nav-saturn #btn-principal');
  const spans = document.querySelectorAll('span');
  const h1After = document.querySelector('h1::after');
  
  // Verificar se o elemento está visível na tela
  if (isElementInViewport(navSaturn)) {
    navSaturn.classList.add('show');
  }

  if (isElementInViewport(h1)) {
    h1.classList.add('show');
  }

  if (isElementInViewport(p)) {
    p.classList.add('show');
  }

  if (isElementInViewport(btn)) {
    btn.classList.add('show');
  }

  spans.forEach(span => {
    if (isElementInViewport(span)) {
      span.classList.add('show');
    }
  });


  //simulaçao de envio {acho que sera necessario usar node ou ajax para esse formulario}

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
});




document.getElementById('fale-consoco').addEventListener('submit', function(event) {
    event.preventDefault();
  
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const description = document.getElementById('description').value;
  
   
    const formResponse = document.getElementById('form-response');
    
  
    if (!name || !email || !description) {
      formResponse.innerHTML = '<p style="color: red;">Todos os campos são obrigatórios!</p>';
      return; 
    }
  
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formResponse.innerHTML = '<p style="color: red;">Por favor, insira um e-mail válido!</p>';
      return;
    }
  
   
    setTimeout(() => {
      formResponse.innerHTML = '<p style="color: green;">Obrigado pelo seu envio! Entraremos em contato em breve.</p>';
      document.getElementById('fale-consoco').reset(); 
    }, 1000); 
  });
  


  // Função para adicionar a classe de animação quando o elemento estiver visível
function animateOnScroll() {
  
    const elements = document.querySelectorAll('.animate');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.5 
    });
  
    elements.forEach(element => {
      observer.observe(element); 
    });
  }
  

  window.addEventListener('DOMContentLoaded', animateOnScroll);
  
  const style = document.createElement('style');
  style.textContent = `
    .animate {
      opacity: 0;
      transform: translateY(30px); /* Altere conforme a animação desejada */
      transition: all 1s ease-out;
    }
    .animate.visible {
      opacity: 1;
      transform: translateY(0); /* Animação final */
    }
  `;
  document.head.append(style);
  
  