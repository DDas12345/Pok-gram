const posts = [
    {
        id: 1,
        username: "ash_k",
        userPic: "https://i.pinimg.com/736x/8f/58/01/8f5801ee824c2598877bc89d54124976.jpg",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        likes: 12543,
        caption: "Finally reached the Indigo Plateau! Pikachu is pumped. #PokemonLeague #Pikachu",
        time: "1 HOUR AGO",
        comments: 45
    },
    {
        id: 2,
        username: "misty_water",
        userPic: "https://i.pinimg.com/736x/43/60/d1/4360d1b1f1f0f0f0f0f0f0f0f0f0f0f0.jpg",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
        likes: 8432,
        caption: "Psyduck being... well, Psyduck. 🦆 #WaterType #CeruleanGym",
        time: "3 HOURS AGO",
        comments: 21
    },
    {
        id: 3,
        username: "charizard_king",
        userPic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        likes: 25001,
        caption: "Feeling the heat today. 🔥💪",
        time: "5 HOURS AGO",
        comments: 112
    },
    {
        id: 4,
        username: "cynthia_champ",
        userPic: "https://i.pinimg.com/736x/5a/8f/94/5a8f94f9f9f9f9f9f9f9f9f9f9f9f9f9.jpg",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
        likes: 54120,
        caption: "Garchomp is ready for any challenger. Who's next? #Sinnoh #Champion",
        time: "6 HOURS AGO",
        comments: 890
    }
];

const suggestions = [
    {
        username: "brock_rock",
        fullName: "Brock",
        userPic: "https://i.pinimg.com/736x/2c/8f/54/2c8f54f9f9f9f9f9f9f9f9f9f9f9f9f9.jpg",
        relation: "Followed by ash_k + 2 more"
    },
    {
        username: "gary_oak",
        fullName: "Gary Oak",
        userPic: "https://i.pinimg.com/736x/1a/5a/94/1a5a94f9f9f9f9f9f9f9f9f9f9f9f9f9.jpg",
        relation: "New to Pokégram"
    },
    {
        username: "oak_lab",
        fullName: "Professor Oak",
        userPic: "https://i.pinimg.com/736x/0a/4a/94/0a4a94f9f9f9f9f9f9f9f9f9f9f9f9f9.jpg",
        relation: "Follows you"
    }
];

function createPostHTML(post) {
    return `
        <article class="post">
            <div class="post-header">
                <div class="post-user">
                    <div class="post-user-pic">
                        <img src="${post.userPic}" alt="${post.username}">
                    </div>
                    <span class="post-username">${post.username}</span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <img src="${post.img}" alt="Post Image" class="post-img">
            <div class="post-actions">
                <div class="actions-left">
                    <i class="far fa-heart" onclick="toggleLike(this)"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <i class="far fa-bookmark"></i>
            </div>
            <div class="post-likes">${post.likes.toLocaleString()} likes</div>
            <div class="post-caption">
                <span class="username">${post.username}</span> ${post.caption}
            </div>
            <div class="post-comments-count">View all ${post.comments} comments</div>
            <div class="post-time">${post.time}</div>
            <div class="post-add-comment">
                <i class="far fa-smile"></i>
                <input type="text" placeholder="Add a comment...">
                <button>Post</button>
            </div>
        </article>
    `;
}

function createSuggestionHTML(sug) {
    return `
        <div class="suggestion-item">
            <div class="suggestion-pic">
                <img src="${sug.userPic}" alt="${sug.username}">
            </div>
            <div class="suggestion-info">
                <span class="username">${sug.username}</span>
                <span class="relation">${sug.relation}</span>
            </div>
            <button class="follow-btn">Follow</button>
        </div>
    `;
}

function toggleLike(element) {
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('feed');
    const suggestionList = document.querySelector('.suggestion-list');

    posts.forEach(post => {
        feed.innerHTML += createPostHTML(post);
    });

    suggestions.forEach(sug => {
        suggestionList.innerHTML += createSuggestionHTML(sug);
    });

    // Profile Placeholders
    const profilePics = document.querySelectorAll('.profile-pic-small img, .profile-pic-medium img, .profile-pic-tiny img');
    profilePics.forEach(img => {
        img.src = "https://i.pinimg.com/736x/8f/58/01/8f5801ee824c2598877bc89d54124976.jpg"; // Default to Ash
    });

    const storyPics = document.querySelectorAll('.story-img-wrapper img');
    const storyUrls = [
        "https://i.pinimg.com/736x/8f/58/01/8f5801ee824c2598877bc89d54124976.jpg", // Ash
        "https://static.wikia.nocookie.net/pokemon/images/c/c6/Misty_Journeys.png", // Misty
        "https://static.wikia.nocookie.net/pokemon/images/c/c2/Brock_Journeys.png", // Brock
        "https://static.wikia.nocookie.net/pokemon/images/1/1a/Gary_Oak_Journeys.png", // Gary
        "https://static.wikia.nocookie.net/pokemon/images/5/5a/Cynthia_Journeys.png" // Cynthia
    ];
    storyPics.forEach((img, index) => {
        if (storyUrls[index]) img.src = storyUrls[index];
    });

    // Add event listener for all 'Post' buttons
    document.querySelectorAll('.post-add-comment button').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.previousElementSibling;
            if (input.value.trim()) {
                alert('Comment posted: ' + input.value);
                input.value = '';
            }
        });
    });

    // Home Icon functionality: Scroll to top and "Refresh" feel
    document.querySelectorAll('.home-link').forEach(link => {
        link.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const feed = document.getElementById('feed');
            feed.style.opacity = '0.5';
            setTimeout(() => {
                feed.style.opacity = '1';
                console.log("Feed refreshed at Pokémon Center!");
            }, 500);
        });
    });

    // Message Icon functionality: Pidgey Post
    document.querySelectorAll('.message-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('🕊️ Pidgey Post is arriving! Checking for new messages from fellow trainers...');
        });
    });

    // Create Icon functionality: Catch a Pokémon
    document.querySelectorAll('.create-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('✨ A wild post appeared!\n\nThrow a Pokéball to capture the moment? (Creating new post...)');
        });
    });

    // Explore Icon functionality: Town Map
    document.querySelectorAll('.explore-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('🗺️ Opening the Town Map...\n\nExploring new routes for rare Pokémon and legendary trainers!');
        });
    });

    // Friendship Icon functionality: Heart/Activity
    document.querySelectorAll('.friendship-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('💖 Your Pokémon friendship is growing!\n\nViewing new activity from your Poké-pals...');
        });
    });

    // Profile Icon functionality: Trainer Card
    document.querySelectorAll('.trainer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('🪪 Pulling up your Trainer Card...\n\nLevel: 100\nBadges: 8\nRegion: Kanto\n\nReady for a battle?');
        });
    });
});
