const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('animate',entry.isIntersecting);
    });
});

document.querySelectorAll('.animatable').forEach((el)=>{
    observer.observe(el);
});