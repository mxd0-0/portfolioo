import {
    c,
    python,
    java,

    cpp,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    edunet,
    nanoConsulting,
    algerieTelecom,
    weatherpedia,
    termpw,
    payloadmaster,
    threejs,
    mhft,
    sketcher,
    mathwork,
    CompileVortex,
    eduskill,
    kotlin,
    jetpackCompose,
    android,
    mongodb, figma, firebase, ktor
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services = [
    {title: "Kotlin", icon: kotlin},
    {title: "Android", icon: android},
    {title: "Java", icon: java},
    {title: "Python", icon: python},
    {title: "Java Script", icon: javascript},
    {title: "C", icon: c},
];

export const technologies = [
    {name: "JetPack Compose", icon: jetpackCompose},
    {name: "MongoDB", icon: mongodb},
    {name: "Firebase", icon: firebase},
    {name: "Ktor", icon: ktor},
    {name: "git", icon: git},
    {name: "Rect JS", icon: reactjs},
    {name: "Tailwind CSS", icon: tailwind},
    {name: "Figma", icon: figma},
    {name: "CSS 3", icon: css},
];

export const experiences = [
    {
        title: "Network Engineering Intern",
        company_name: "Algérie Télécom",
        icon: algerieTelecom,
        iconBg: "#ffffff",
        date: "June 2025 – Present",
        points: [
            "Gaining practical experience with large-scale network infrastructure, including configuration, routing, and system monitoring.",
            "Working hands-on with enterprise-grade networking tools while deepening my knowledge in cybersecurity fundamentals.",
            "Contributing to troubleshooting and network optimization tasks, enhancing both stability and performance.",
        ],
    },
    {
        title: "Mobile App Development Intern",
        company_name: "Nano Consulting",
        icon: nanoConsulting, 
        iconBg: "#161329",
        date: "Jan 2021 – Dec 2022",
        points: [
            "Collaborated with a team of university developers to build two e-commerce applications: one for clients and one for administrators.",
            "Implemented core features such as product browsing, cart systems, and cash-on-delivery workflows using Kotlin and Firebase.",
            "Followed clean architecture practices and applied UI/UX principles to deliver a user-friendly and maintainable experience.",
        ],
    },
];


export const projects = [
    {
        name: "CoinSync",
        description:
            "Cryptocurrency tracking application that fetches data from CoinCap API using Ktor client, displaying it in a user-friendly interface with MVI architecture and Koin dependency injection.",
        tags: [
            {name: "Kotlin", color: "blue-text-gradient"},
            {name: "Jetpack Compose", color: "green-text-gradient"},
            {name: "Ktor", color: "pink-text-gradient"},
            {name: "MVI Architecture", color: "yellow-text-gradient"},
            {name: "Koin", color: "orange-text-gradient"},
        ],
        image: "https://github.com/user-attachments/assets/bc446c0a-25ae-41e3-b0e5-237119a7472e", // Make sure to import/create this image reference
        source_code_link: "https://github.com/mxd0-0/CoinSync",
    },
    {
        name: "MYBMI",
        description:
            "Android BMI Calculator built with Jetpack Compose that calculates Body Mass Index based on user inputs (weight, height, age) and displays results with category classification.",
        tags: [
            {name: "Kotlin", color: "blue-text-gradient"},
            {name: "Jetpack Compose", color: "green-text-gradient"},
            {name: "Clean Architecture", color: "pink-text-gradient"},
            {name: "Unit Testing", color: "yellow-text-gradient"},
        ],
        image: "https://github.com/user-attachments/assets/49df6ceb-dd66-4b33-96e9-c5d6617e8088", // Make sure to import/create this image reference
        source_code_link: "https://github.com/mxd0-0/MYBMI",
    }
];
