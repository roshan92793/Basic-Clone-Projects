let users = [
    {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world v | not for everyone",
},
{
    name: "kavya sharma",
    pic: "https://plus.unsplash.com/premium_photo-1687832254785-97c947542e47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    bio: "dream big, stay real | chaos but cute",
},
{
    name: "riya verma",
    pic: "https://images.unsplash.com/photo-1775836214307-1a2b1194a769?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    bio: "lost in thoughts | vibing with my own energy",
},
{
    name: "ananya singh",
    pic: "https://images.unsplash.com/photo-1775808949430-c211703bc3d8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    bio: "classy, sassy & a bit smart-assy",
},
{
    name: "ishita kapoor",
    pic: "https://images.unsplash.com/photo-1775831726736-3369f057988a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    bio: "making memories everywhere i go ✨",
},
{
    name: "mehak jain",
    pic: "https://images.unsplash.com/photo-1775813240772-0a53f34b1c4c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    bio: "coffee, confidence & a little attitude ☕",
}
];
const cardsContainer = document.querySelector(".cards");
const search = document.querySelector(".search");

function showUsers(arr) {
    cardsContainer.innerHTML = arr.map(user => `
        <div class="card">
            <img src="${user.pic}" class="bg-img" />
            <div class="blurrred-layer" style="background-image: url(${user.pic})"></div>
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        </div>
    `).join("");
}
showUsers(users);

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().startsWith(value)
    );

    showUsers(filteredUsers);
});