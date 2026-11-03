// Krijimi i kartave te klasave

function createClassCard(classItem) {
    const column = document.createElement("div");
    column.className = "col-12 col-md-6 col-lg-3";

    const card = document.createElement("article");
    card.className = "card h-100";

    const image = document.createElement("img");
    image.src = classItem.image;
    image.alt = `Klasa ${classItem.name}`;
    image.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    const title = document.createElement("h2");
    title.className = "h5 card-title";
    title.textContent = classItem.name;

    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = classItem.description;

    const category = document.createElement("p");
    category.textContent = `Kategoria: ${classItem.categoryLabel}`;

    const level = document.createElement("p");
    level.textContent = `Niveli: ${classItem.levelLabel}`;

    const duration = document.createElement("p");
    duration.textContent = `Kohezgjatja: ${classItem.duration} minuta`;

    const link = document.createElement("a");
    link.href = `class-detail.html?class=${encodeURIComponent(classItem.id)}`;
    link.className = "btn btn-outline-dark mt-auto";
    link.textContent = "Shiko detajet";

    cardBody.append(
        title,
        description,
        category,
        level,
        duration,
        link
    );

    card.append(image, cardBody);
    column.appendChild(card);

    return column;
}
// Shfaqja dinamike e klasave

function renderClasses() {
    const container = document.getElementById("classes-container");

    if (!container || typeof classesData === "undefined") {
        return;
    }

    if (!Array.isArray(classesData)) {
        return;
    }

    // Pergatit kartat e reja para se te ndryshojme HTML
    const fragment = document.createDocumentFragment();

    classesData.forEach(classItem => {
        fragment.appendChild(createClassCard(classItem));
    });

    // Zevendesojme kartat ekzistuese vetem kur kemi te dhena
    if (classesData.length > 0) {
        container.replaceChildren(fragment);
    }
}

renderClasses();
// Krijimi i kartave te trajnereve
function createTrainerCard(trainer) {
    const column = document.createElement("div");
    column.className = "col-12 col-md-6 col-lg-3";

    const card = document.createElement("article");
    card.className = "card h-100";

    const image = document.createElement("img");
    image.src = trainer.image;
    image.alt = trainer.name;
    image.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    const name = document.createElement("h3");
    name.className = "h5";
    name.textContent = trainer.name;

    const specialization = document.createElement("p");
    specialization.textContent = trainer.specialization;

    const description = document.createElement("p");
    description.textContent = trainer.description;

    const link = document.createElement("a");
    link.href = `#${trainer.id}`;
    link.className = "btn btn-outline-primary mt-auto";
    link.textContent = "Shiko profilin";

    cardBody.append(name, specialization, description, link);
    card.append(image, cardBody);
    column.appendChild(card);

    return column;
}
// Shfaqja dinamike e trajnereve
function renderTrainers() {
    const container = document.getElementById("trainers-container");

    if (!container || typeof trainersData === "undefined") {
        return;
    }

    if (!Array.isArray(trainersData)) {
        return;
    }

    const fragment = document.createDocumentFragment();

    trainersData.forEach(trainer => {
        fragment.appendChild(createTrainerCard(trainer));
    });

    if (trainersData.length > 0) {
        container.replaceChildren(fragment);
    }
}

renderTrainers();
// Krijimi i profilit te nje trajneri
function createTrainerProfile(trainer) {
    const article = document.createElement("article");
    article.id = trainer.id;
    article.className = "card mb-4";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-4";

    const name = document.createElement("h3");
    name.textContent = trainer.name;

    const specialization = document.createElement("p");
    specialization.className = "fw-semibold";
    specialization.textContent = trainer.specialization;

    const bio = document.createElement("p");
    bio.textContent = trainer.bio;

    const heading = document.createElement("h4");
    heading.className = "h6";
    heading.textContent = "Klasat qe drejton:";

    const classesContainer = document.createElement("div");
    classesContainer.className = "d-flex flex-wrap gap-2 mb-3";

    // Gjejme klasat qe drejton trajneri
    trainer.classIds.forEach(classId => {
        const classItem = classesData.find(item => item.id === classId);

        if (classItem) {
            const link = document.createElement("a");
            link.href = `class-detail.html?class=${encodeURIComponent(classItem.id)}`;
            link.className = "btn btn-sm btn-outline-secondary";
            link.textContent = classItem.name;

            classesContainer.appendChild(link);
        }
    });

    const scheduleLink = document.createElement("a");
    scheduleLink.href = "schedule.html";
    scheduleLink.className = "btn btn-outline-dark";
    scheduleLink.textContent = "Shiko orarin";

    cardBody.append(
        name,
        specialization,
        bio,
        heading,
        classesContainer,
        scheduleLink
    );

    article.appendChild(cardBody);

    return article;
}
// Shfaqja dinamike e profileve te trajnereve
function renderTrainerProfiles() {
    const container = document.getElementById("trainer-profiles-container");

    if (
        !container ||
        typeof trainersData === "undefined" ||
        typeof classesData === "undefined"
    ) {
        return;
    }

    if (!Array.isArray(trainersData) || !Array.isArray(classesData)) {
        return;
    }

    if (trainersData.length === 0) {
        return;
    }

    const fragment = document.createDocumentFragment();

    trainersData.forEach(trainer => {
        fragment.appendChild(createTrainerProfile(trainer));
    });

    container.replaceChildren(fragment);
}

renderTrainerProfiles();
// Krijimi i nje qelize te orarit
function createScheduleCell(session) {
    const cell = document.createElement("td");

    if (!session) {
        return cell;
    }

    const classItem = classesData.find(item => item.id === session.classId);
    const trainer = trainersData.find(item => item.id === session.trainerId);

    if (!classItem || !trainer) {
        return cell;
    }

    const link = document.createElement("a");
    link.href = `class-detail.html?class=${encodeURIComponent(classItem.id)}`;
    link.className = "text-decoration-none text-dark";

    const title = document.createElement("strong");
    title.textContent = classItem.name;
    link.appendChild(title);

    const trainerName = document.createElement("p");
    trainerName.className = "mb-0";
    trainerName.textContent = trainer.name;

    const duration = document.createElement("small");
    duration.textContent = `${classItem.duration} minuta`;

    cell.append(link, trainerName, duration);

    return cell;
}

// Shfaqja dinamike e orarit javor
function renderSchedule() {
    const container = document.getElementById("schedule-body");

    if (
        !container ||
        typeof scheduleData === "undefined" ||
        typeof classesData === "undefined" ||
        typeof trainersData === "undefined"
    ) {
        return;
    }

    if (
        !Array.isArray(scheduleData) ||
        !Array.isArray(classesData) ||
        !Array.isArray(trainersData) ||
        scheduleData.length === 0
    ) {
        return;
    }

    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];

    const times = ["07:00", "09:00", "11:00", "17:00", "18:00"];
    const fragment = document.createDocumentFragment();

    times.forEach(time => {
        const row = document.createElement("tr");

        const timeCell = document.createElement("th");
        timeCell.scope = "row";
        timeCell.textContent = time;
        row.appendChild(timeCell);

        days.forEach(day => {
            const session = scheduleData.find(
                item => item.day === day && item.time === time
            );

            row.appendChild(createScheduleCell(session));
        });

        fragment.appendChild(row);
    });

    container.replaceChildren(fragment);
}

renderSchedule();
// Krijimi i kartave te anetaresimit
function createMembershipCard(plan) {
    const column = document.createElement("div");
    column.className = "col-md-4";

    const card = document.createElement("article");
    card.className = "card h-100";

    if (plan.popular) {
        const badge = document.createElement("div");
        badge.className = "badge-popular text-center py-2";
        badge.textContent = "ME E PELQYERA";
        card.appendChild(badge);
    }

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    const title = document.createElement("h3");
    title.textContent = plan.name;

    const description = document.createElement("p");
    description.textContent = plan.description;

    const priceContainer = document.createElement("p");

    const price = document.createElement("strong");
    price.className = "fs-2";
    price.id = `${plan.id}-price`;
    price.dataset.monthly = plan.monthlyPrice;
    price.dataset.yearly = plan.yearlyPrice;
    price.textContent = `${plan.monthlyPrice}€`;

    const period = document.createElement("span");
    period.id = `${plan.id}-period`;
    period.textContent = "/ muaj";

    priceContainer.append(price, " ", period);

    const featuresList = document.createElement("ul");
    featuresList.className = "list-unstyled";

    plan.features.forEach(feature => {
        const item = document.createElement("li");
        item.textContent = `✓ ${feature}`;
        featuresList.appendChild(item);
    });

    const button = document.createElement("a");
    button.href = "#regjistrimi";
    button.className = plan.popular
        ? "btn btn-dark mt-auto"
        : "btn btn-outline-dark mt-auto";

    button.dataset.plan = plan.id;
    button.textContent = `Zgjidh ${plan.name}`;

    cardBody.append(
        title,
        description,
        priceContainer,
        featuresList,
        button
    );

    card.appendChild(cardBody);
    column.appendChild(card);

    return column;
}

// Shfaqja dinamike e paketave
function renderMemberships() {
    const container = document.getElementById("memberships-container");

    if (!container || typeof membershipsData === "undefined") {
        return;
    }

    if (!Array.isArray(membershipsData) || membershipsData.length === 0) {
        return;
    }

    const fragment = document.createDocumentFragment();

    membershipsData.forEach(plan => {
        fragment.appendChild(createMembershipCard(plan));
    });

    container.replaceChildren(fragment);
}

renderMemberships();
// Ndryshimi i cmimeve mujore dhe vjetore
function setupMembershipPrices() {
    const monthlyBtn = document.getElementById("monthly-btn");
    const yearlyBtn = document.getElementById("yearly-btn");

    if (!monthlyBtn || !yearlyBtn) {
        return;
    }

    function updatePrices(period) {
        membershipsData.forEach(plan => {
            const price = document.getElementById(`${plan.id}-price`);
            const periodText = document.getElementById(`${plan.id}-period`);

            if (!price || !periodText) {
                return;
            }

            if (period === "yearly") {
                price.textContent = `${plan.yearlyPrice}€`;
                periodText.textContent = "/ vit";
            } else {
                price.textContent = `${plan.monthlyPrice}€`;
                periodText.textContent = "/ muaj";
            }
        });

        const isMonthly = period === "monthly";

        monthlyBtn.className = isMonthly
            ? "btn btn-dark"
            : "btn btn-outline-dark";

        yearlyBtn.className = isMonthly
            ? "btn btn-outline-dark"
            : "btn btn-dark";

        monthlyBtn.setAttribute("aria-pressed", String(isMonthly));
        yearlyBtn.setAttribute("aria-pressed", String(!isMonthly));

        const periodSelect = document.getElementById("member-period");

        if (periodSelect) {
            periodSelect.value = period;
        }
    }

    monthlyBtn.addEventListener("click", () => {
        updatePrices("monthly");
    });

    yearlyBtn.addEventListener("click", () => {
        updatePrices("yearly");
    });
}

setupMembershipPrices();
// Zgjedhja automatike e paketes ne formular
function setupMembershipSelection() {
    const container = document.getElementById("memberships-container");
    const planSelect = document.getElementById("member-plan");

    if (!container || !planSelect) {
        return;
    }

    container.addEventListener("click", function(event) {
        const button = event.target.closest("[data-plan]");

        if (!button || !container.contains(button)) {
            return;
        }

        const selectedPlan = button.dataset.plan;

        const planExists = Array.from(planSelect.options).some(
            option => option.value === selectedPlan
        );

        if (planExists) {
            planSelect.value = selectedPlan;
        }
    });
}

setupMembershipSelection();