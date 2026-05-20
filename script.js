const posts = [
    {
        id: 1,
        username: "ash_k",
        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",

        img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

        likes: 12543,

        caption:
            "Finally reached the Indigo Plateau! Pikachu is pumped ⚡",

        time: "1 HOUR AGO",

        comments: 45
    },

    {
        id: 2,
        username: "misty_water",

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",

        img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",

        likes: 8432,

        caption:
            "Psyduck is confused again 🦆💧",

        time: "3 HOURS AGO",

        comments: 21
    },

    {
        id: 3,
        username: "charizard_king",

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",

        img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",

        likes: 25001,

        caption:
            "Feeling the heat today 🔥",

        time: "5 HOURS AGO",

        comments: 112
    },

    {
        id: 4,
        username: "cynthia_champ",

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",

        img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",

        likes: 54120,

        caption:
            "Garchomp is battle ready ⚔️",

        time: "7 HOURS AGO",

        comments: 341
    }
];

const suggestions = [
    {
        username: "brock_rock",

        fullName: "Brock",

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",

        relation: "Followed by ash_k + 2 more"
    },

    {
        username: "gary_oak",

        fullName: "Gary Oak",

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",

        relation: "New to Pokégram"
    },

    {
        username: "oak_lab",

        fullName: "Professor Oak",

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

        relation: "Follows you"
    }
];

/* ================= CREATE POST ================= */

function createPostHTML(post) {

    return `
    
    <article class="post">

        <div class="post-header">

            <div class="post-user">

                <div class="post-user-pic">
                    <img src="${post.userPic}" alt="${post.username}">
                </div>

                <span class="post-username">
                    ${post.username}
                </span>

            </div>

            <i class="fas fa-ellipsis-h"></i>

        </div>

        <img 
            src="${post.img}" 
            alt="Post" 
            class="post-img"
        >

        <div class="post-actions">

            <div class="actions-left">

                <i class="far fa-heart like-btn"></i>

                <i class="far fa-comment"></i>

                <i class="far fa-paper-plane"></i>

            </div>

            <i class="far fa-bookmark"></i>

        </div>

        <div class="post-likes">
            <span class="likes-count">
                ${post.likes.toLocaleString()}
            </span> likes
        </div>

        <div class="post-caption">

            <span class="username">
                ${post.username}
            </span>

            ${post.caption}

        </div>

        <div class="post-comments-count">
            View all ${post.comments} comments
        </div>

        <div class="post-time">
            ${post.time}
        </div>

        <div class="post-add-comment">

            <i class="far fa-smile"></i>

            <input 
                type="text" 
                placeholder="Add a comment..."
            >

            <button>
                Post
            </button>

        </div>

    </article>
    
    `;
}

/* ================= CREATE SUGGESTIONS ================= */

function createSuggestionHTML(user) {

    return `
    
    <div class="suggestion-item">

        <div class="suggestion-pic">

            <img 
                src="${user.userPic}" 
                alt="${user.username}"
            >

        </div>

        <div class="suggestion-info">

            <span class="username">
                ${user.username}
            </span>

            <span class="relation">
                ${user.relation}
            </span>

        </div>

        <button class="follow-btn">
            Follow
        </button>

    </div>
    
    `;
}

/* ================= LOAD POSTS ================= */

function loadPosts() {

    const feed = document.getElementById("feed");

    feed.innerHTML = "";

    posts.forEach((post) => {

        feed.innerHTML += createPostHTML(post);

    });

    setupLikeButtons();

    setupCommentButtons();
}

/* ================= LOAD SUGGESTIONS ================= */

function loadSuggestions() {

    const suggestionList =
        document.querySelector(".suggestion-list");

    suggestionList.innerHTML = "";

    suggestions.forEach((user) => {

        suggestionList.innerHTML +=
            createSuggestionHTML(user);

    });
}

/* ================= LIKE SYSTEM ================= */

function setupLikeButtons() {

    const likeButtons =
        document.querySelectorAll(".like-btn");

    likeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.classList.toggle("far");

            button.classList.toggle("fas");

            button.classList.toggle("active");

            const likesElement =
                button
                    .closest(".post")
                    .querySelector(".likes-count");

            let currentLikes =
                parseInt(
                    likesElement.innerText.replace(/,/g, "")
                );

            if (button.classList.contains("active")) {

                currentLikes++;

            } else {

                currentLikes--;

            }

            likesElement.innerText =
                currentLikes.toLocaleString();

        });

    });
}

/* ================= COMMENT SYSTEM ================= */

function setupCommentButtons() {

    const buttons =
        document.querySelectorAll(
            ".post-add-comment button"
        );

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const input =
                button.parentElement.querySelector("input");

            if (input.value.trim() === "") {

                alert("Please write a comment first!");

                return;
            }

            alert(
                `💬 Comment Posted:\n\n${input.value}`
            );

            input.value = "";

        });

    });
}

/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.innerHTML =
            `<i class="fas fa-sun"></i>`;

    } else {

        themeToggle.innerHTML =
            `<i class="fas fa-moon"></i>`;

    }
});

/* ================= SEARCH SYSTEM ================= */

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value =
        searchInput.value.toLowerCase();

    const allPosts =
        document.querySelectorAll(".post");

    allPosts.forEach((post) => {

        const username =
            post
                .querySelector(".post-username")
                .innerText
                .toLowerCase();

        const caption =
            post
                .querySelector(".post-caption")
                .innerText
                .toLowerCase();

        if (
            username.includes(value) ||
            caption.includes(value)
        ) {

            post.style.display = "block";

        } else {

            post.style.display = "none";

        }

    });

});

/* ================= CREATE POST MODAL ================= */

const createButtons =
    document.querySelectorAll(".create-link");

const modal =
    document.getElementById("createModal");

const closeModal =
    document.getElementById("closeModal");

createButtons.forEach((button) => {

    button.addEventListener("click", () => {

        modal.classList.add("active");

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

/* ================= ADD NEW POST ================= */

const addPostBtn =
    document.getElementById("addPostBtn");

addPostBtn.addEventListener("click", () => {

    const username =
        document.getElementById("usernameInput").value;

    const image =
        document.getElementById("imageInput").value;

    const caption =
        document.getElementById("captionInput").value;

    if (
        username.trim() === "" ||
        image.trim() === "" ||
        caption.trim() === ""
    ) {

        alert("Please fill all fields!");

        return;
    }

    const newPost = {

        id: Date.now(),

        username: username,

        userPic:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",

        img: image,

        likes: 0,

        caption: caption,

        time: "JUST NOW",

        comments: 0
    };

    posts.unshift(newPost);

    loadPosts();

    modal.classList.remove("active");

    document.getElementById("usernameInput").value = "";

    document.getElementById("imageInput").value = "";

    document.getElementById("captionInput").value = "";

});

/* ================= NAVIGATION ALERTS ================= */

document
    .querySelectorAll(".message-link")
    .forEach((button) => {

        button.addEventListener("click", () => {

            alert(
                "📨 Opening Poké Messages..."
            );

        });

    });

document
    .querySelectorAll(".explore-link")
    .forEach((button) => {

        button.addEventListener("click", () => {

            alert(
                "🗺️ Exploring Pokémon World..."
            );

        });

    });

document
    .querySelectorAll(".friendship-link")
    .forEach((button) => {

        button.addEventListener("click", () => {

            alert(
                "❤️ Checking Notifications..."
            );

        });

    });

document
    .querySelectorAll(".trainer-link")
    .forEach((button) => {

        button.addEventListener("click", () => {

            alert(
                "🎮 Opening Trainer Profile..."
            );

        });

    });

/* ================= HOME BUTTON ================= */

document
    .querySelectorAll(".home-link")
    .forEach((button) => {

        button.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });

/* ================= FOLLOW BUTTONS ================= */

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("follow-btn")) {

        if (e.target.innerText === "Follow") {

            e.target.innerText = "Following";

            e.target.style.color = "#4caf50";

        } else {

            e.target.innerText = "Follow";

            e.target.style.color = "";

        }

    }

});

/* ================= STORY CLICK ================= */

document.addEventListener("click", (e) => {

    if (
        e.target.closest(".story")
    ) {

        const storyName =
            e.target
                .closest(".story")
                .querySelector("span")
                .innerText;

        alert(
            `📸 Viewing ${storyName}'s story`
        );

    }

});

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {

    loadPosts();

    loadSuggestions();

});