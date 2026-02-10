const gameData = [
    {
        id: 1,
        title: "欢欢游戏",
        desc: "《欢欢游戏》是一款有趣的小游戏，支持点击各类的词条，获得了独特的动画效果。",
        link: "game/huanhuan/"
    },
    {
        id: 2,
        title: "艾尔登法环",
        desc: "《艾尔登法环》是由FromSoftware开发、万代南梦宫发行的一款黑暗幻想风格的动作角色扮演游戏。",
        link: "https://www.eldenring.com"
    },
    {
        id: 3,
        title: "星露谷物语",
        desc: "《星露谷物语》是一款由ConcernedApe开发的农场模拟经营游戏，玩家可以经营农场、交友、结婚。",
        link: "https://www.stardewvalley.net"
    },
    {
        id: 4,
        title: "文明6",
        desc: "《文明6》是由Firaxis Games开发的回合制策略游戏，带领文明从石器时代发展到太空时代。",
        link: "https://civilization.com"
    },
    {
        id: 5,
        title: "英雄联盟",
        desc: "《英雄联盟》是由Riot Games开发的多人在线战术竞技游戏，5v5团队对战。",
        link: "https://leagueoflegends.com"
    },
    {
        id: 6,
        title: "我的世界",
        desc: "《我的世界》是由Mojang Studios开发的沙盒游戏，自由建造与探索世界。",
        link: "https://www.minecraft.net"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const gameListElement = document.getElementById('gameList');
    const searchInput = document.getElementById('searchInput');
    const gameModal = document.getElementById('gameModal');
    const closeModal = document.getElementById('closeModal');
    
    renderGameList(gameData);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const filteredGames = gameData.filter(game =>
            game.title.toLowerCase().includes(searchTerm)
        );
        renderGameList(filteredGames);
    });
    
    closeModal.addEventListener('click', function() {
        gameModal.classList.add('hidden');
    });
    
    gameModal.addEventListener('click', function(e) {
        if (e.target === gameModal) {
            gameModal.classList.add('hidden');
        }
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
            const gameCard = document.createElement('div');
            gameCard.className = 'bg-github-card border border-github-border rounded-md overflow-hidden game-card-hover p-5';
            gameCard.innerHTML = `
                <h3 class="text-lg font-bold text-white mb-2">${game.title}</h3>
                <p class="text-gray-300 text-sm mb-4">${game.desc.substring(0, 60)}...</p>
                <button class="view-details w-full bg-github-border hover:bg-github-primary transition-colors text-white py-1 rounded-md text-sm" data-id="${game.id}">
                    查看详情
                </button>
            `;
            gameListElement.appendChild(gameCard);
            
            gameCard.querySelector('.view-details').addEventListener('click', function() {
                showGameDetails(game.id);
            });
        });
    }

    function showGameDetails(gameId) {
        const game = gameData.find(g => g.id === gameId);
        if (!game) return;
        
        document.getElementById('modalTitle').textContent = game.title;
        document.getElementById('modalDescription').textContent = game.desc;
        document.getElementById('modalLink').href = game.link;
        
        gameModal.classList.remove('hidden');
    }
});
