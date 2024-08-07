document.addEventListener('DOMContentLoaded', function() {
    const leaderboard = [
        { name: 'markury singols', points: 36, image: 'verde.png' },
        { name: 'iphone rosso', points: 19, image: 'verde.png' },
        { name: 'mela melinda', points: 15, image: 'verde.png' },
        { name: 'polettame xxx', points: 15, image: 'rosso.png' },
        { name: 'ovetto kinder', points: 14, image: 'rosso.png' },
        { name: 'la lazzarinihh', points: 7, image: 'verde.png' },
        { name: 'diabete man', points: 5, image: 'verde.png' },
        { name: 'sara la rue', points:3, image: 'rosso.png' },
        { name: 'greg', points:3, image: 'rosso.png' },
        { name: 'jenny panytANO', points: 2, image: 'verde.png' },
        { name: 'maron', points: 1, image: 'rosso.png' },
        { name: 'ale lacoste', points: 1, image: 'rosso.png' },
        { name: 'pasqua', points: 1, image: 'rosso.png' },
    ];

    const ul = document.getElementById('leaderboard');

   
    leaderboard.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.animationDelay = `${index * 0.2}s`; // Ritardo progressivo
        li.innerHTML = `
            <div class="name"><strong>${index + 1}. ${item.name}</strong></div>
            <img src="${item.image}" alt="${item.name}" class="image">
            <div class="points">${item.points} pd</div>
        `;
        ul.appendChild(li);
    });
});


