
// Initial freelancer data
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
];

// Possible names & occupations for new freelancers
const names = ["Kourtney", "Ari", "Shannon", "Jess", "Daryl", "Andre", "Claudia", "Layla"]
const occupations = ["Programmer", "Designer", "Developer", "Marketer", "Photographer", "Chef"]

// Function to initialize the page dynamically
function init() {
    const root = document.querySelector("#freelancer-container")
    root.innerHTML = "" // Clear the existing content when restarting

    // Create H1: Freelancer Forum
    const title = document.createElement("h1")
    title.textContent = "Freelancer Forum"
    root.append(title)

    // Create H2: Average Starting Price
    const avgPriceText = document.createElement("h2")
    avgPriceText.innerHTML = `The average starting price is <span id="average-price">$${calculateAveragePrice()}</span>.`
    root.append(avgPriceText)

    // Create H3: Available Freelancers
    const subtitle = document.createElement("h3")
    subtitle.textContent = "Available Freelancers"
    root.append(subtitle)

    // Create Table for Freelancers
    const table = document.createElement("table")
    table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Starting Price</th>
            </tr>
        </thead>
        <tbody id="freelancer-list"></tbody>
    `
    root.appendChild(table)

    renderFreelancers() // Call initial render
}

// Function to calculate the average starting price
function calculateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0)
    return (total / freelancers.length).toFixed(0)
}

// Function to render freelancers dynamically in a table format
function renderFreelancers() {
    const tableBody = document.querySelector("#freelancer-list")
    tableBody.innerHTML = "" // Clear previous content

    freelancers.forEach((freelancer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        `
        tableBody.appendChild(row)
    })

    // Update average price dynamically
    document.querySelector("#average-price").textContent = `$${calculateAveragePrice()}`
}

// Function to add a new freelancer dynamically
function addFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    const randomPrice = Math.floor(Math.random() * 100) + 30 // Random price between 30-130

    const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice }
    freelancers.push(newFreelancer)
    renderFreelancers()
}

// Function to start adding freelancers at intervals
function startFreelancerLoop() {
    // Reset freelancers array (clear previous data)
    freelancers.length = 0
    freelancers.push({ name: "Alice", occupation: "Writer", price: 30 })
    freelancers.push({ name: "Bob", occupation: "Teacher", price: 50 })

    renderFreelancers() // Render fresh list

    // Start adding new freelancers every 2 seconds
    const intervalId = setInterval(addFreelancer, 2000)

    // Stop adding after 30 seconds
    setTimeout(() => {
        clearInterval(intervalId) // Stop adding freelancers

        // Restart the whole process after another 1 second
        setTimeout(() => {
            startFreelancerLoop()
        }, 1000)
    }, 30000)
}

// Initialize and start the loop
init();
startFreelancerLoop();








 











