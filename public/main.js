document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    alert(data.message);
    
    document.getElementById("userForm").reset()
});

document.getElementById("getUsers").addEventListener("click", async () => {
    const response = await fetch("/users");
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
});
