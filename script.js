document.addEventListener('DOMContentLoaded', function() {
    const leaderboard = [
        { name: 'markury singols', points: 16, image: 'verde.png' },
        { name: 'mela melinda', points: 13, image: 'verde.png' },
        { name: 'ovetto kinder', points: 12, image: 'verde.png' },
        { name: 'polettame xxx', points: 11, image: 'rosso.png' },
        { name: 'iphone rosso', points: 11, image: 'rosso.png' },
        { name: 'diabete man', points: 4, image: 'verde.png' },
        { name: 'la lazzarinihh', points: 4, image: 'rosso.png' },
        { name: 'greg', points:3, image: 'rosso.png' },
        { name: 'pasqua', points: 1, image: 'verde.png' },
        
    ];

    const ul = document.getElementById('leaderboard');

    leaderboard.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="name"><strong>${index + 1}. ${item.name}</strong></div>
            <img src="${item.image}" alt="${item.name}" class="image">
            <div class="points">${item.points} pd</div>
        `;
        ul.appendChild(li);
    });
});
