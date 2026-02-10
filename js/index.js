const gameData = [
    {
        id: 1,
        title: "欢欢游戏",
        category: "休闲",
        rating: 4.7,
        size: "1 html",
        image: "https://picsum.photos/id/237/400/200",
        description: "欢欢游戏可以点击欢欢的词条，获得各种各样的反馈，有趣至极。",
        features: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        id: 2,
        title: "艾尔登法环",
        category: "动作,冒险",
        rating: 4.9,
        size: "60GB",
        image: "https://picsum.photos/id/238/400/200",
        description: "《艾尔登法环》是由FromSoftware开发、万代南梦宫发行的一款黑暗幻想风格的动作角色扮演游戏。游戏由宫崎英高与乔治·R·R·马丁合作打造，拥有广阔的开放世界和极具挑战性的战斗系统。玩家将在名为“交界地”的世界中探索，挑战强大的敌人和首领，收集战利品，最终成为艾尔登之王。",
        features: [
            "广阔的开放世界无缝地图",
            "极具深度的魂系战斗系统",
            "丰富的武器、魔法和装备系统",
            "引人入胜的黑暗幻想世界观"
        ]
    },
    {
        id: 3,
        title: "星露谷物语",
        category: "休闲,模拟",
        rating: 4.8,
        size: "1.2GB",
        image: "https://picsum.photos/id/239/400/200",
        description: "《星露谷物语》是一款由ConcernedApe开发的农场模拟经营游戏。玩家继承了爷爷在星露谷留下的老旧农场，需要通过种植作物、饲养动物、钓鱼、采矿等方式来重建农场。游戏还包含社交系统，可以与镇上的居民互动、结婚，体验宁静而充实的乡村生活。",
        features: [
            "自由的农场经营方式",
            "丰富的社交和结婚系统",
            "季节性的作物和事件",
            "支持多人联机游玩"
        ]
    },
    {
        id: 4,
        title: "文明6",
        category: "策略,模拟",
        rating: 4.6,
        size: "12GB",
        image: "https://picsum.photos/id/240/400/200",
        description: "《文明6》是由Firaxis Games开发的回合制策略游戏，是《文明》系列的第六部正统续作。玩家将领导一个文明从石器时代发展到太空时代，通过外交、战争、科技、文化等多种方式来赢得胜利。游戏拥有丰富的文明选择、领袖特性和游戏模式，每一局都能带来不同的游戏体验。",
        features: [
            "多种胜利方式和游戏策略",
            "动态的城市建设和扩张",
            "深度的科技和文化发展树",
            "丰富的外交和战争系统"
        ]
    },
    {
        id: 5,
        title: "英雄联盟",
        category: "竞技,MOBA",
        rating: 4.5,
        size: "15GB",
        image: "https://picsum.photos/id/241/400/200",
        description: "《英雄联盟》是由Riot Games开发的多人在线战术竞技游戏。玩家将选择不同的英雄，组成5v5的团队，通过摧毁对方基地来获得胜利。游戏拥有超过150个独特的英雄，每个英雄都有自己的技能和定位，需要团队配合和策略规划才能取得胜利。",
        features: [
            "多样化的英雄选择和玩法",
            "公平的竞技对战环境",
            "丰富的游戏模式和地图",
            "持续更新的英雄和平衡调整"
        ]
    },
    {
        id: 6,
        title: "我的世界",
        category: "休闲,沙盒",
        rating: 4.9,
        size: "3GB",
        image: "https://picsum.photos/id/242/400/200",
        description: "《我的世界》是由Mojang Studios开发的沙盒游戏。玩家可以在一个由方块组成的三维世界中进行建造和探索，游戏分为生存模式和创造模式。在生存模式中，玩家需要收集资源、制作工具、对抗怪物；在创造模式中，玩家拥有无限的资源，可以自由建造任何想象中的建筑。",
        features: [
            "无限的创造性和自由度",
            "生存和创造两种游戏模式",
            "支持多人联机和服务器",
            "丰富的模组和扩展内容"
        ]
    },
    {
        id: 7,
        title: "赛博朋克：边缘行者",
        category: "冒险,剧情",
        rating: 4.8,
        size: "5GB",
        image: "https://picsum.photos/id/243/400/200",
        description: "《赛博朋克：边缘行者》改编游戏版，基于热门动画剧集打造。游戏延续了动画的世界观和剧情，玩家将扮演一名街头小子，在夜之城的底层挣扎求生。游戏拥有沉浸式的剧情体验和快节奏的战斗系统，完美还原了动画中的视觉风格和氛围。",
        features: [
            "忠实还原动画的世界观",
            "沉浸式的剧情体验",
            "快节奏的枪战和近战战斗",
            "精美的赛博朋克视觉风格"
        ]
    },
    {
        id: 8,
        title: "动物森友会",
        category: "休闲,模拟",
        rating: 4.9,
        size: "6GB",
        image: "https://picsum.photos/id/244/400/200",
        description: "《集合啦！动物森友会》是任天堂开发的生活模拟游戏。玩家将移居到一个无人岛，从零开始建设自己的家园，与可爱的动物邻居互动，体验悠闲的海岛生活。游戏拥有真实的时间系统，不同的季节和节日会有不同的事件和活动。",
        features: [
            "悠闲的海岛生活体验",
            "真实的时间和季节系统",
            "丰富的装饰和定制选项",
            "与动物邻居的趣味互动"
        ]
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
            game.title.toLowerCase().includes(searchTerm) || 
            game.category.toLowerCase().includes(searchTerm)
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
            gameCard.className = 'bg-github-card border border-github-border rounded-md overflow-hidden game-card-hover';
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-bold text-white mb-1">${game.title}</h3>
                    <div class="flex items-center text-sm text-gray-400 mb-2">
                        <span class="mr-3"><i class="fas fa-tag mr-1"></i>${game.category}</span>
                        <span><i class="fas fa-star mr-1 text-yellow-500"></i>${game.rating}</span>
                    </div>
                    <p class="text-gray-300 text-sm line-clamp-2 mb-4">${game.description.substring(0, 80)}...</p>
                    <button class="view-details w-full bg-github-border hover:bg-github-primary transition-colors text-white py-1 rounded-md text-sm" data-id="${game.id}">
                        查看详情
                    </button>
                </div>
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
        document.getElementById('modalImage').src = game.image;
        document.getElementById('modalImage').alt = game.title;
        document.getElementById('modalCategory').textContent = game.category;
        document.getElementById('modalRating').textContent = game.rating;
        document.getElementById('modalSize').textContent = game.size;
        document.getElementById('modalDescription').textContent = game.description;
        
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        game.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        gameModal.classList.remove('hidden');
    }
});
