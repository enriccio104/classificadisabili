document.addEventListener('DOMContentLoaded', function() {
    const leaderboard = [
        { name: 'markury singols', points: 16, image: 'verde.png' },
        { name: 'polettame xxx', points: 11, image: 'verde.png' },
        { name: 'iphone rosso', points: 11, image: 'rosso.png' },
        { name: 'ovetto kinder', points: 9, image: 'verde.png' },
        { name: 'greg', points:3, image: 'verde.png' },
        { name: 'diabete man', points: 2, image: 'rosso.png' }
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
