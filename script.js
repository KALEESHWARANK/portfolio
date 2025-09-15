const texts=["Full-Stack Developer","Web Developer","Problem Solver"];
let count=0,index=0,currentText='',letter='';
(function type(){
    if(count===texts.length) count=0;
    currentText=texts[count];
    letter=currentText.slice(0,++index);
    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){
        setTimeout(()=>{index=0;count++;type();},1500);
    }else{setTimeout(type,150);}
})();

function animateSkills(){
    document.querySelectorAll('.skill').forEach(skill=>{
        const rect=skill.getBoundingClientRect();
        if(rect.top<window.innerHeight-50){
            const deg=skill.dataset.percent*3.6;
            skill.querySelector('.progress').style.transform=`rotate(${deg}deg)`;
        }
    });
}
window.addEventListener('scroll',animateSkills);
animateSkills();

document.querySelectorAll('nav ul li a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

document.getElementById('contact-form').addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you! I will contact you soon.');
    e.target.reset();
});
