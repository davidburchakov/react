const section = document.querySelector('.projects');
const containers = document.querySelectorAll('.projects-container'); // Select all containers

// Loop through each container
containers.forEach((container) => {
    const card = container.querySelector('.projects-card');
    const info = card.querySelector('.info');
    const img = card.querySelector('.img-card');
    const circle = img.querySelector('.circle');
    const imgSelft = img.querySelector('img');

    const sectionHeight = section.clientHeight;


    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }

    container.addEventListener("mousemove", (e) => {
        let xAxis = (container.offsetWidth / 2 - e.pageX + container.getBoundingClientRect().left) / 20;
        let yAxis = (container.offsetHeight / 2 - e.pageY + getOffset(container).top) / 30;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', (e) =>{
        card.style.transition = 'none';
        info.style.transform = 'translateZ(100px)';
        circle.style.transform = 'translateX(-25px)';
        img.style.transform = 'translateZ(100px)';
        imgSelft.style.transform = 'rotateZ(-15deg)';

        // container.style.transform = 'translateY(-50px)';
    });

    container.addEventListener('mouseleave', (e) =>{
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        info.style.transform = 'translateZ(0px)';
        circle.style.transform = 'translateX(0px)';
        img.style.transform = 'translateZ(0px)';
        imgSelft.style.transform = 'translateZ(0px)';
        
        // container.style.transform = 'translateY(0px)';
    });
});
