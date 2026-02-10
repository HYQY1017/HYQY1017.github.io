const gameData = [
    {
        id: 1,
        title: "欢欢游戏",
        desc: "想和欢欢交互吗？快！",
        link: "game/huanhuan/",
        emoji: "👧"
    },
    {
        id: 2,
        title: "艾尔登法环",
        desc: "《艾尔登法环》是黑暗幻想风格的动作角色扮演游戏，挑战广阔的开放世界。",
        link: "https://www.eldenring.com",
        emoji: "⚔️"
    },
    {
        id: 3,
        title: "星露谷物语",
        desc: "《星露谷物语》是农场模拟经营游戏，经营农场、交友、体验乡村生活。",
        link: "https://www.stardewvalley.net",
        emoji: "🌾"
    },
    {
        id: 4,
        title: "文明6",
        desc: "《文明6》是回合制策略游戏，带领文明从石器时代发展到太空时代。",
        link: "https://civilization.com",
        emoji: "🏛️"
    },
    {
        id: 5,
        title: "英雄联盟",
        desc: "《英雄联盟》是5v5多人在线战术竞技游戏，团队配合赢下胜利。",
        link: "https://leagueoflegends.com",
        emoji: "🎮"
    },
    {
        id: 6,
        title: "我的世界",
        desc: "《我的世界》是沙盒游戏，自由建造与探索方块世界。",
        link: "https://www.minecraft.net",
        emoji: "🧱"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const gameListElement = document.getElementById('gameList');
    const searchInput = document.getElementById('searchInput');
    
    renderGameList(gameData);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const filteredGames = gameData.filter(game =>
            game.title.toLowerCase().includes(searchTerm)
        );
        renderGameList(filteredGames);
    });

    function renderGameList(games) {
        gameListElement.innerHTML = '';
        
        if (games.length === 0) {
            gameListElement.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-search text-4xl text-gray-500 mb-4"></i>
                    <p class="text-gray-400">未找到匹配的游戏</p>
                </div>
            `;
            return;
        }
        
        games.forEach(game => {
            const gameCard = document.createElement('a');
            gameCard.href = game.link;
            gameCard.target = "_blank";
            gameCard.className = 'bg-github-card border border-github-border rounded-md overflow-hidden game-card-hover';
            gameCard.innerHTML = `
                <div class="emoji-cover">${game.emoji}</div>
                <div class="p-4">
                    <h3 class="text-lg font-bold text-white mb-2">${game.title}</h3>
                    <p class="text-gray-300 text-sm">${game.desc.substring(0, 60)}...</p>
                </div>
            `;
            gameListElement.appendChild(gameCard);
        });
    }
});
