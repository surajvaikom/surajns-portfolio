const portfolioData = {
    basics: {
        name: "Suraj N S",
        email: "surajvaikom@gmail.com",
        phone: "+91 8129331770",
        location: "Vaikom, Kottayam, Kerala",
        linkedin: "https://www.linkedin.com/in/surajvaikom/",
        github: "https://github.com/surajvaikom",
        tryhackme: "https://tryhackme.com/p/surajvaikom",
        roles: [
            "Aspiring Security Analyst",
            "IT Support Professional",
            "Cybersecurity Practitioner",
            "Security Operations Candidate"
        ],
        summary:
            "Detail-oriented IT support and cybersecurity professional with hands-on experience in endpoint support, security monitoring fundamentals, vulnerability assessment, penetration testing, incident documentation, and secure system administration. Skilled in SIEM concepts, OWASP Top 10, network security, OSINT, and Windows/Linux environments with a strong focus on ATS-ready presentation."
    },
    stats: [
        { label: "Operations Experience", value: 5, suffix: "+", detail: "Years across support and secure workflows" },
        { label: "Certifications", value: 8, suffix: "", detail: "Security-focused learning milestones" },
        { label: "Project Tracks", value: 4, suffix: "+", detail: "Security practice, labs, and support delivery" },
        { label: "Learning Mindset", value: 24, suffix: "/7", detail: "Continuous upskilling and practice" }
    ],
    focusAreas: [
        {
            code: "A1",
            title: "IT Support",
            text: "Reliable day-to-day support across hardware, software, Windows, Linux, networking, and ERP workflows."
        },
        {
            code: "A2",
            title: "Cybersecurity",
            text: "Practical exposure to vulnerability assessment, web testing, reconnaissance, incident documentation, and OWASP-focused thinking."
        },
        {
            code: "A3",
            title: "Security Operations",
            text: "Foundational exposure to monitoring concepts, log review, incident triage, IOC awareness, and defensive analysis."
        },
        {
            code: "A4",
            title: "System Administration",
            text: "Windows and Linux administration, endpoint setup, access support, patch-minded maintenance, and stable user environments."
        }
    ],
    experience: [
        {
            featured: true,
            title: "ERP and IT Executive",
            company: "Seth M. R. Jaipuria Schools",
            date: "Apr 2024 - Jan 2026",
            meta: "Full-time | Deoria",
            brand: "jaipuria",
            summary:
                "Owned infrastructure support, ERP assistance, user enablement, and dependable technical operations across school systems.",
            bullets: [
                "Managed and maintained IT infrastructure, end-user devices, and operational systems across departments.",
                "Provided hardware, software, ERP, and network support to reduce downtime and improve daily workflow reliability.",
                "Installed and maintained Windows and Linux systems for staff and administrative operations.",
                "Supported ERP implementation and staff training to improve adoption and streamline processes."
            ]
        },
        {
            title: "Cyber Security and Digital Forensics Intern",
            company: "Cyber Secured India",
            date: "Aug 2023 - Nov 2023",
            meta: "Internship | Security Practice",
            brand: "cyber",
            summary:
                "Worked across vulnerability assessment, web testing, reconnaissance, and digital forensics exposure.",
            bullets: [
                "Conducted vulnerability assessments and penetration testing using Burp Suite, Nmap, Nessus, OpenVAS, and Metasploit.",
                "Identified and analyzed OWASP Top 10 issues to improve application security posture.",
                "Performed reconnaissance, scanning, and enumeration to identify attack surfaces and likely risks.",
                "Assisted with digital forensics tasks, log analysis, and incident response documentation."
            ]
        },
        {
            title: "Cyber Security Analyst Intern",
            company: "TCS iON",
            date: "Apr 2023 - May 2023",
            meta: "Internship | CAPTCHA Security",
            brand: "tcs",
            summary:
                "Focused on CAPTCHA-based security controls, web risk analysis, and application protection basics.",
            bullets: [
                "Completed a 125-hour internship centered on CAPTCHA security mechanisms and web application protection.",
                "Built and tested CAPTCHA-based controls to strengthen authentication processes.",
                "Performed risk analysis on web-based systems and identified security gaps.",
                "Implemented security countermeasures against automated attacks and bot-based abuse."
            ]
        },
        {
            title: "Aadhaar Enrolment Supervisor",
            company: "SNR E DATA'S PVT LTD HYDERABAD",
            date: "Oct 2018 - Apr 2023",
            meta: "Secure Operations | Compliance Workflows",
            brand: "aadhaar",
            summary:
                "Handled secure enrollment operations with strong attention to confidentiality, reporting, and service quality.",
            bullets: [
                "Managed secure Aadhaar enrollment operations with focus on data accuracy, compliance, and confidentiality.",
                "Handled 15 to 20 customer interactions per day while maintaining service quality and efficient processing.",
                "Prepared and submitted daily operational reports to the head office for compliance and performance tracking.",
                "Trained operators on process compliance, documentation, and quality standards."
            ]
        },
        {
            title: "Computer Hardware Engineer",
            company: "Freelancer, Kottayam",
            date: "Oct 2012 - Oct 2013",
            meta: "On-site Technical Support",
            brand: "hardware",
            summary:
                "Delivered on-site hardware support, diagnostics, installations, and preventive maintenance for clients.",
            bullets: [
                "Installed and troubleshot desktops, laptops, drivers, peripherals, and software based on client requirements.",
                "Diagnosed system failures and resolved hardware issues to reduce downtime.",
                "Assisted with hardware upgrades, networking setup, and preventive maintenance.",
                "Provided practical client-facing technical service and issue resolution."
            ]
        }
    ],
    projects: [
        {
            title: "Website Enumeration and Penetration Testing",
            category: "cybersecurity",
            kicker: "Recon / Web Security",
            description:
                "Performed reconnaissance, manual testing, and vulnerability documentation for web application targets with attention to attack surface visibility and clear reporting.",
            tags: ["Nmap", "Burp Suite", "Recon", "Reporting"]
        },
        {
            title: "PortSwigger Labs",
            category: "labs",
            kicker: "OWASP Top 10 Practice",
            description:
                "Solved hands-on labs involving authentication flaws, access control, XSS, SQL injection, SSRF, XXE, CSRF, and related web vulnerabilities.",
            tags: ["OWASP Top 10", "XSS", "SQLi", "Web Exploitation"]
        },
        {
            title: "Kioptrix Exploitation and Reporting",
            category: "cybersecurity",
            kicker: "Lab Exploitation",
            description:
                "Worked through an end-to-end exploitation and reporting flow, combining analysis, execution, and structured technical write-up for findings.",
            tags: ["Linux", "Privilege Escalation", "VAPT", "Documentation"]
        },
        {
            title: "TryHackMe Defensive Learning Path",
            category: "labs",
            kicker: "Blue Team Practice",
            description:
                "Worked through practical rooms covering SOC fundamentals, Windows and Linux basics, reconnaissance, privilege awareness, and defensive learning workflows.",
            tags: ["TryHackMe", "SOC Basics", "Windows", "Linux"]
        }
    ],
    projectFilters: [
        { label: "All", value: "all" },
        { label: "Cybersecurity", value: "cybersecurity" },
        { label: "Labs", value: "labs" }
    ],
    skillGroups: [
        {
            title: "Security Operations",
            description: "Detection, triage, monitoring, and security visibility foundations.",
            items: ["SIEM concepts", "Security monitoring", "Log analysis", "Threat detection", "Incident response", "IOC identification"]
        },
        {
            title: "Testing and Assessment",
            description: "Hands-on web and infrastructure security evaluation with documentation.",
            items: ["Vulnerability assessment", "Penetration testing", "OWASP Top 10", "Web application testing", "Risk analysis", "Security reporting"]
        },
        {
            title: "IT Support and Systems",
            description: "Operational support across infrastructure, users, endpoints, and configuration.",
            items: ["Windows", "Linux / Ubuntu / Kali", "TCP/IP, DNS, DHCP", "Firewalls, IDS/IPS, VPNs", "ERP support", "Technical troubleshooting"]
        },
        {
            title: "Security Tooling",
            description: "Common security and troubleshooting tools used in hands-on labs and assessments.",
            items: ["Nmap", "Burp Suite", "Nessus", "OpenVAS", "Metasploit", "OSINT workflows"]
        }
    ],
    certifications: [
        { name: "Google Cybersecurity", issuer: "Google" },
        { name: "Certified Cyber Security Analyst", issuer: "ICT Academy of Kerala" },
        { name: "Practical Ethical Hacking", issuer: "TCM Security" },
        { name: "Introduction to OSINT", issuer: "Security Blue Team" },
        { name: "Jr Penetration Tester", issuer: "TryHackMe" },
        { name: "Foundation Level Threat Intelligence Analyst", issuer: "arcX" },
        { name: "Open Source Intelligence Fundamentals", issuer: "TCM Security" },
        { name: "Community Advancement Network - Kerala", issuer: "IBM" }
    ],
    education: [
        {
            degree: "Bachelor of Library and Information Science (BLIS)",
            school: "IGNOU, Kochi",
            years: "2024 - 2025",
            note: "Awaiting results"
        },
        {
            degree: "Master of Computer Applications (MCA)",
            school: "Rajiv Gandhi Institute of Technology, Kottayam",
            years: "2014 - 2017",
            note: "Score: 64.07%"
        },
        {
            degree: "B.Sc Electronics with Computer Hardware",
            school: "School of Technology and Applied Sciences, Ernakulam",
            years: "2009 - 2012",
            note: "Score: 56%"
        }
    ],
    contact: [
        {
            label: "Email",
            value: "surajvaikom@gmail.com",
            link: "mailto:surajvaikom@gmail.com",
            note: "Available for recruiter and hiring conversations."
        },
        {
            label: "Phone",
            value: "+91 8129331770",
            note: "Open to calls regarding roles and interviews."
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/surajvaikom",
            link: "https://www.linkedin.com/in/surajvaikom/",
            note: "Professional profile and role history."
        },
        {
            label: "GitHub",
            value: "github.com/surajvaikom",
            link: "https://github.com/surajvaikom",
            note: "Labs, portfolio source, and technical practice."
        },
        {
            label: "TryHackMe",
            value: "tryhackme.com/p/surajvaikom",
            link: "https://tryhackme.com/p/surajvaikom",
            note: "Hands-on labs, practical security learning, and challenge history."
        }
    ]
};

const cyberLabData = {
    decoder: {
        label: "Log Decoder",
        kicker: "Blue Team Warmup",
        title: "Trace the noisiest suspicious IP",
        description:
            "Review the mini log stream and identify the address generating repeated failed SSH logins before a success event appears.",
        badges: ["Logs", "SSH", "Detection"],
        logs: [
            "02:14:11 auth.warn sshd[2218]: Failed password for admin from 185.220.101.4 port 51231 ssh2",
            "02:14:16 auth.warn sshd[2222]: Failed password for root from 185.220.101.4 port 51284 ssh2",
            "02:14:31 auth.notice sudo: suraj : TTY=pts/1 ; COMMAND=/usr/bin/systemctl restart nginx",
            "02:14:38 auth.warn sshd[2230]: Failed password for test from 103.77.241.9 port 41326 ssh2",
            "02:14:49 auth.warn sshd[2237]: Failed password for guest from 185.220.101.4 port 51402 ssh2",
            "02:15:03 auth.info sshd[2240]: Accepted password for deploy from 10.0.0.12 port 55217 ssh2"
        ],
        question: "Which IP should you investigate first for brute-force behavior?",
        choices: ["10.0.0.12", "103.77.241.9", "185.220.101.4", "192.168.1.6"],
        answer: "185.220.101.4",
        success: "Correct. The same external IP triggered multiple failed SSH attempts and stands out as the most suspicious source.",
        failure: "Not quite. Look for repeated failed password events from the same external IP rather than a successful internal login."
    },
    ports: {
        label: "Port Match",
        kicker: "Service Recognition",
        title: "Map the port to the right service",
        description: "Move through common ports that show up in support, hardening, and security triage.",
        badges: ["Ports", "Services", "Triage"],
        rounds: [
            { port: "443", answer: "HTTPS", choices: ["SSH", "HTTPS", "DNS", "SMTP"] },
            { port: "3389", answer: "RDP", choices: ["RDP", "MySQL", "FTP", "Telnet"] },
            { port: "53", answer: "DNS", choices: ["DNS", "SNMP", "LDAP", "HTTPS"] }
        ],
        success: "Nice. Quick port recognition helps during both troubleshooting and reconnaissance.",
        failure: "That one is off. Think about the common service usually exposed on that port."
    },
    phishing: {
        label: "Phishing Check",
        kicker: "Mail Inspection",
        title: "Classify the inbox alert",
        description: "Look for sender mismatch, urgency, and link behavior before trusting the message.",
        badges: ["Email", "Awareness", "Analysis"],
        rounds: [
            {
                sender: "security-team@micr0soft-verification.net",
                subject: "Urgent: Office 365 password expires in 12 minutes",
                body: "We detected an unusual login attempt. Verify your account immediately to avoid permanent suspension.",
                clues: [
                    "The sender domain imitates a trusted brand but is not the real domain.",
                    "The message creates panic with a very short deadline.",
                    "It pushes you to verify an account through an untrusted link."
                ],
                answer: "Suspicious"
            },
            {
                sender: "it-support@jaipuria.example",
                subject: "Planned VPN maintenance tonight at 11:30 PM",
                body: "VPN access may be unavailable for 20 minutes during scheduled maintenance. No password action is required.",
                clues: [
                    "The message explains a planned maintenance window instead of demanding credentials.",
                    "There is no urgency around clicking a link or confirming a password.",
                    "The tone is informational and consistent with internal service notices."
                ],
                answer: "Likely Safe"
            }
        ],
        success: "Good call. You checked the sender and the behavior instead of reacting only to the wording.",
        failure: "Take another look at the sender, urgency, and whether the message is pressuring you into account action."
    }
};

let currentProjectFilter = "all";
let subtitleIndex = 0;
let subtitleIntervalId = null;
const cyberLabState = {
    activeGame: "decoder",
    score: 0,
    solved: 0,
    streak: 0,
    clearedGames: new Set(),
    decoderAnswered: false,
    decoderLastChoice: "",
    portRound: 0,
    portLocked: false,
    portLastChoice: "",
    phishingRound: 0,
    phishingLocked: false,
    phishingLastChoice: ""
};

function sanitizeText(input) {
    return String(input).replace(/[<>]/g, "").trim();
}

function renderStats() {
    const container = document.getElementById("stats-grid");
    container.innerHTML = portfolioData.stats
        .map(
            (stat) => `
                <article class="stats-card reveal">
                    <span>${stat.label}</span>
                    <strong data-counter="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</strong>
                    <p>${stat.detail}</p>
                </article>
            `
        )
        .join("");
}

function renderFocusAreas() {
    const container = document.getElementById("focus-areas");
    container.innerHTML = portfolioData.focusAreas
        .map(
            (item) => `
                <article class="focus-card reveal">
                    <span class="badge">${item.code}</span>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </article>
            `
        )
        .join("");
}

function renderExperience() {
    const container = document.getElementById("experience-list");
    container.innerHTML = portfolioData.experience
        .map(
            (role) => `
                <article class="timeline-item ${role.featured ? "is-featured" : ""} reveal">
                    <div class="timeline-card ${role.featured ? "is-featured" : ""}">
                        <div class="timeline-brand">
                            ${renderCompanyLogo(role)}
                            <div class="company-meta">
                                <div class="timeline-date">${role.date}</div>
                                <strong>${role.company}</strong>
                                <span>${role.meta}</span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h3>${role.title}</h3>
                            <p>${role.summary}</p>
                        </div>
                        <ul class="timeline-points">
                            ${role.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                        </ul>
                    </div>
                </article>
            `
        )
        .join("");
}

function renderCompanyLogo(role) {
    if (role.brand === "jaipuria") {
        return `
            <div class="company-logo" aria-label="${role.company} logo treatment">
                <span class="brand-orbit" aria-hidden="true"></span>
                <svg viewBox="0 0 56 56" aria-hidden="true">
                    <path class="crest-fill" d="M28 6L16 11V25C16 33 21 40 28 44C35 40 40 33 40 25V11L28 6Z"></path>
                    <path class="crest-line" d="M21 20H35"></path>
                    <path class="crest-line" d="M21 26H35"></path>
                    <path class="crest-line" d="M28 14V34"></path>
                    <text class="crest-letter" x="28" y="38" text-anchor="middle">J</text>
                </svg>
            </div>
        `;
    }

    const shortMap = {
        cyber: "CSI",
        tcs: "TCS",
        aadhaar: "UID",
        hardware: "HW"
    };

    const letters = shortMap[role.brand] || role.company.slice(0, 2).toUpperCase();

    return `
        <div class="company-logo" aria-hidden="true">
            <svg viewBox="0 0 56 56">
                <rect class="crest-fill" x="10" y="10" width="36" height="36" rx="11"></rect>
                <text class="crest-letter" x="28" y="33" text-anchor="middle">${letters}</text>
            </svg>
        </div>
    `;
}

function renderProjectFilters() {
    const container = document.getElementById("project-filters");
    container.innerHTML = portfolioData.projectFilters
        .map(
            (filter) => `
                <button
                    class="filter-chip ${filter.value === currentProjectFilter ? "is-active" : ""}"
                    type="button"
                    data-filter="${filter.value}"
                    role="tab"
                    aria-selected="${filter.value === currentProjectFilter ? "true" : "false"}"
                >
                    ${filter.label}
                </button>
            `
        )
        .join("");
}

function renderProjects() {
    const container = document.getElementById("projects-list");
    const projects = portfolioData.projects.filter((project) => {
        return currentProjectFilter === "all" ? true : project.category === currentProjectFilter;
    });

    container.innerHTML = projects
        .map(
            (project) => `
                <article class="project-card reveal">
                    <div>
                        <span class="project-kicker">${project.kicker}</span>
                        <h3>${project.title}</h3>
                    </div>
                    <p>${project.description}</p>
                    <div class="project-meta">
                        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                    </div>
                </article>
            `
        )
        .join("");
}

function renderSkills() {
    const container = document.getElementById("skills-list");
    container.innerHTML = portfolioData.skillGroups
        .map(
            (group) => `
                <article class="skill-card reveal">
                    <h3>${group.title}</h3>
                    <p>${group.description}</p>
                    <div class="skill-list">
                        ${group.items.map((item) => `<span>${item}</span>`).join("")}
                    </div>
                </article>
            `
        )
        .join("");
}

function renderCertifications() {
    const container = document.getElementById("certifications-list");
    container.innerHTML = portfolioData.certifications
        .map(
            (item) => `
                <article class="credential-item">
                    <span class="credential-tag">Certificate</span>
                    <strong>${item.name}</strong>
                    <p>${item.issuer}</p>
                </article>
            `
        )
        .join("");
}

function renderEducation() {
    const container = document.getElementById("education-list");
    container.innerHTML = portfolioData.education
        .map(
            (item) => `
                <article class="education-item">
                    <small>${item.years}</small>
                    <strong>${item.degree}</strong>
                    <p>${item.school}</p>
                    <p>${item.note}</p>
                </article>
            `
        )
        .join("");
}

function renderContact() {
    const container = document.getElementById("contact-list");
    container.innerHTML = portfolioData.contact
        .map((item) => {
            const value = item.link
                ? `<a href="${item.link}" ${item.link.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${item.value}</a>`
                : item.value;

            return `
                <article class="contact-card reveal">
                    <span>${item.label}</span>
                    <strong>${value}</strong>
                    <p>${item.note}</p>
                </article>
            `;
        })
        .join("");
}

function renderCyberLabTabs() {
    const container = document.getElementById("lab-game-tabs");

    if (!container) {
        return;
    }

    container.innerHTML = Object.entries(cyberLabData)
        .map(
            ([key, game]) => `
                <button
                    class="lab-tab ${cyberLabState.activeGame === key ? "is-active" : ""}"
                    type="button"
                    role="tab"
                    aria-selected="${cyberLabState.activeGame === key ? "true" : "false"}"
                    data-lab-tab="${key}"
                >
                    ${game.label}
                </button>
            `
        )
        .join("");
}

function renderCyberLabMetrics() {
    const score = document.getElementById("lab-score");
    const solved = document.getElementById("lab-solved");
    const streak = document.getElementById("lab-streak");
    const cleared = document.getElementById("lab-cleared");

    if (!score || !solved || !streak || !cleared) {
        return;
    }

    score.textContent = String(cyberLabState.score);
    solved.textContent = String(cyberLabState.solved);
    streak.textContent = String(cyberLabState.streak);
    cleared.textContent = String(cyberLabState.clearedGames.size);
}

function renderCyberLabGame() {
    const container = document.getElementById("lab-game-stage");

    if (!container) {
        return;
    }

    if (cyberLabState.activeGame === "decoder") {
        container.innerHTML = renderDecoderGame();
    } else if (cyberLabState.activeGame === "ports") {
        container.innerHTML = renderPortGame();
    } else {
        container.innerHTML = renderPhishingGame();
    }
}

function renderDecoderGame() {
    const game = cyberLabData.decoder;
    const isAnswered = cyberLabState.decoderAnswered;

    return `
        <section class="lab-panel">
            <div class="lab-header">
                <span class="lab-kicker">${game.kicker}</span>
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="lab-badge-row">
                    ${game.badges.map((badge) => `<span class="lab-badge">${badge}</span>`).join("")}
                </div>
            </div>
            <div class="lab-stream">
                <code>${game.logs.join("\n")}</code>
            </div>
            <div class="lab-question-card">
                <h4>${game.question}</h4>
                <div class="lab-answer-grid">
                    ${game.choices
                        .map((choice) => {
                            let stateClass = "";
                            if (isAnswered && choice === game.answer) {
                                stateClass = "is-correct";
                            } else if (isAnswered && choice === cyberLabState.decoderLastChoice && choice !== game.answer) {
                                stateClass = "is-wrong";
                            }
                            return `
                                <button class="lab-answer ${stateClass}" type="button" data-lab-action="decoder-answer" data-choice="${choice}">
                                    ${choice}
                                </button>
                            `;
                        })
                        .join("")}
                </div>
            </div>
            <div class="lab-terminal-note">
                ${isAnswered ? (cyberLabState.decoderLastChoice === game.answer ? game.success : game.failure) : "Tip: repeated failed authentication from the same external address is usually your first clue."}
            </div>
        </section>
    `;
}

function renderPortGame() {
    const game = cyberLabData.ports;
    const round = game.rounds[cyberLabState.portRound];
    const isComplete = cyberLabState.portRound >= game.rounds.length;

    if (isComplete) {
        return `
            <section class="lab-panel">
                <div class="lab-header">
                    <span class="lab-kicker">${game.kicker}</span>
                    <h3>${game.title}</h3>
                    <p>${game.success}</p>
                </div>
                <div class="lab-terminal-note">All port rounds cleared. Switch tabs or reset the lab session to play again.</div>
            </section>
        `;
    }

    return `
        <section class="lab-panel">
            <div class="lab-header">
                <span class="lab-kicker">${game.kicker}</span>
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="lab-badge-row">
                    ${game.badges.map((badge) => `<span class="lab-badge">${badge}</span>`).join("")}
                    <span class="lab-badge">Round ${cyberLabState.portRound + 1}/${game.rounds.length}</span>
                </div>
            </div>
            <div class="lab-question-card">
                <h4>Port ${round.port}</h4>
                <p>Choose the service most commonly associated with this port.</p>
                <div class="lab-port-grid">
                    ${round.choices
                        .map((choice) => {
                            let stateClass = "";
                            if (cyberLabState.portLocked && choice === round.answer) {
                                stateClass = "is-correct";
                            } else if (cyberLabState.portLocked && choice === cyberLabState.portLastChoice && choice !== round.answer) {
                                stateClass = "is-wrong";
                            }
                            return `
                                <button class="lab-answer ${stateClass}" type="button" data-lab-action="port-answer" data-choice="${choice}">
                                    ${choice}
                                </button>
                            `;
                        })
                        .join("")}
                </div>
            </div>
            <div class="lab-terminal-note">
                ${
                    cyberLabState.portLocked
                        ? cyberLabState.portLastChoice === round.answer
                            ? `${game.success} Use Next Round to continue.`
                            : `${game.failure} Use Next Round and keep going.`
                        : "Tip: fast service recognition is useful during enumeration and IT troubleshooting."
                }
            </div>
            <button class="button button-secondary" type="button" data-lab-action="next-port" ${cyberLabState.portLocked ? "" : "disabled"}>
                Next Round
            </button>
        </section>
    `;
}

function renderPhishingGame() {
    const game = cyberLabData.phishing;
    const round = game.rounds[cyberLabState.phishingRound];
    const isComplete = cyberLabState.phishingRound >= game.rounds.length;

    if (isComplete) {
        return `
            <section class="lab-panel">
                <div class="lab-header">
                    <span class="lab-kicker">${game.kicker}</span>
                    <h3>${game.title}</h3>
                    <p>${game.success}</p>
                </div>
                <div class="lab-terminal-note">Inbox analysis complete. Reset the lab session if you want a fresh attempt.</div>
            </section>
        `;
    }

    return `
        <section class="lab-panel">
            <div class="lab-header">
                <span class="lab-kicker">${game.kicker}</span>
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="lab-badge-row">
                    ${game.badges.map((badge) => `<span class="lab-badge">${badge}</span>`).join("")}
                    <span class="lab-badge">Mail ${cyberLabState.phishingRound + 1}/${game.rounds.length}</span>
                </div>
            </div>
            <div class="mail-preview">
                <strong>From: ${round.sender}</strong>
                <p><strong>Subject:</strong> ${round.subject}</p>
                <p>${round.body}</p>
                <ul>
                    ${round.clues.map((clue) => `<li>${clue}</li>`).join("")}
                </ul>
            </div>
            <div class="lab-answer-grid">
                ${["Likely Safe", "Suspicious"]
                    .map((choice) => {
                        let stateClass = "";
                        if (cyberLabState.phishingLocked && choice === round.answer) {
                            stateClass = "is-correct";
                        } else if (cyberLabState.phishingLocked && choice === cyberLabState.phishingLastChoice && choice !== round.answer) {
                            stateClass = "is-wrong";
                        }
                        return `
                            <button class="lab-answer ${stateClass}" type="button" data-lab-action="phishing-answer" data-choice="${choice}">
                                ${choice}
                            </button>
                        `;
                    })
                    .join("")}
            </div>
            <div class="lab-terminal-note">
                ${
                    cyberLabState.phishingLocked
                        ? cyberLabState.phishingLastChoice === round.answer
                            ? `${game.success} Use Next Mail to continue.`
                            : `${game.failure} Use Next Mail and keep checking the clues.`
                        : "Tip: sender trust and requested action matter more than a polished visual style."
                }
            </div>
            <button class="button button-secondary" type="button" data-lab-action="next-phishing" ${cyberLabState.phishingLocked ? "" : "disabled"}>
                Next Mail
            </button>
        </section>
    `;
}

function setLabFeedback(message) {
    const feedback = document.getElementById("lab-feedback");
    if (feedback) {
        feedback.textContent = message;
    }
}

function awardLabProgress(points, gameKey, wasCorrect) {
    if (wasCorrect) {
        cyberLabState.score += points;
        cyberLabState.solved += 1;
        cyberLabState.streak += 1;
    } else {
        cyberLabState.streak = 0;
    }

    if (!cyberLabState.clearedGames.has(gameKey) && didClearGame(gameKey)) {
        cyberLabState.clearedGames.add(gameKey);
        cyberLabState.score += 15;
    }

    renderCyberLabMetrics();
}

function didClearGame(gameKey) {
    if (gameKey === "decoder") {
        return cyberLabState.decoderAnswered && cyberLabState.decoderLastChoice === cyberLabData.decoder.answer;
    }
    if (gameKey === "ports") {
        return cyberLabState.portRound >= cyberLabData.ports.rounds.length;
    }
    return cyberLabState.phishingRound >= cyberLabData.phishing.rounds.length;
}

function resetCyberLab() {
    cyberLabState.activeGame = "decoder";
    cyberLabState.score = 0;
    cyberLabState.solved = 0;
    cyberLabState.streak = 0;
    cyberLabState.clearedGames = new Set();
    cyberLabState.decoderAnswered = false;
    cyberLabState.decoderLastChoice = "";
    cyberLabState.portRound = 0;
    cyberLabState.portLocked = false;
    cyberLabState.portLastChoice = "";
    cyberLabState.phishingRound = 0;
    cyberLabState.phishingLocked = false;
    cyberLabState.phishingLastChoice = "";
    setLabFeedback("Cyber Lab reset. Ready for another run.");
    renderCyberLabTabs();
    renderCyberLabGame();
    renderCyberLabMetrics();
}

function setupCyberLab() {
    const tabs = document.getElementById("lab-game-tabs");
    const stage = document.getElementById("lab-game-stage");
    const resetButton = document.getElementById("lab-reset");

    if (!tabs || !stage || !resetButton) {
        return;
    }

    renderCyberLabTabs();
    renderCyberLabGame();
    renderCyberLabMetrics();
    setLabFeedback("Live mini-games enabled. Start with Log Decoder.");

    tabs.addEventListener("click", (event) => {
        const button = event.target.closest("[data-lab-tab]");
        if (!button) {
            return;
        }

        cyberLabState.activeGame = button.getAttribute("data-lab-tab") || "decoder";
        renderCyberLabTabs();
        renderCyberLabGame();
    });

    stage.addEventListener("click", (event) => {
        const button = event.target.closest("[data-lab-action]");
        if (!button) {
            return;
        }

        const action = button.getAttribute("data-lab-action");
        const choice = button.getAttribute("data-choice") || "";

        if (action === "decoder-answer" && !cyberLabState.decoderAnswered) {
            cyberLabState.decoderAnswered = true;
            cyberLabState.decoderLastChoice = choice;
            const wasCorrect = choice === cyberLabData.decoder.answer;
            awardLabProgress(10, "decoder", wasCorrect);
            setLabFeedback(wasCorrect ? "Log Decoder cleared. Suspicious source identified." : "Decoder attempt logged. Review the repeated failures and try the next challenge.");
            renderCyberLabGame();
            return;
        }

        if (action === "port-answer" && !cyberLabState.portLocked) {
            const round = cyberLabData.ports.rounds[cyberLabState.portRound];
            cyberLabState.portLocked = true;
            cyberLabState.portLastChoice = choice;
            const wasCorrect = choice === round.answer;
            awardLabProgress(8, "ports", wasCorrect);
            setLabFeedback(wasCorrect ? `Correct. Port ${round.port} maps to ${round.answer}.` : `Port ${round.port} does not usually map to ${choice}.`);
            renderCyberLabGame();
            return;
        }

        if (action === "next-port" && cyberLabState.portLocked) {
            cyberLabState.portRound += 1;
            cyberLabState.portLocked = false;
            cyberLabState.portLastChoice = "";
            if (cyberLabState.portRound >= cyberLabData.ports.rounds.length) {
                awardLabProgress(0, "ports", true);
                setLabFeedback("Port Match completed. Nice service recognition.");
            }
            renderCyberLabGame();
            renderCyberLabMetrics();
            return;
        }

        if (action === "phishing-answer" && !cyberLabState.phishingLocked) {
            const round = cyberLabData.phishing.rounds[cyberLabState.phishingRound];
            cyberLabState.phishingLocked = true;
            cyberLabState.phishingLastChoice = choice;
            const wasCorrect = choice === round.answer;
            awardLabProgress(8, "phishing", wasCorrect);
            setLabFeedback(wasCorrect ? `Correct. This mail is ${round.answer.toLowerCase()}.` : "Classification mismatch. Re-check the sender and requested action.");
            renderCyberLabGame();
            return;
        }

        if (action === "next-phishing" && cyberLabState.phishingLocked) {
            cyberLabState.phishingRound += 1;
            cyberLabState.phishingLocked = false;
            cyberLabState.phishingLastChoice = "";
            if (cyberLabState.phishingRound >= cyberLabData.phishing.rounds.length) {
                awardLabProgress(0, "phishing", true);
                setLabFeedback("Phishing Check completed. Good analytical reading.");
            }
            renderCyberLabGame();
            renderCyberLabMetrics();
        }
    });

    resetButton.addEventListener("click", resetCyberLab);
}

function setupRevealAnimations() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14 }
    );

    items.forEach((item) => observer.observe(item));
}

function setupActiveNav() {
    const links = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visibleEntry) {
                return;
            }

            links.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
            });
        },
        {
            rootMargin: "-25% 0px -55% 0px",
            threshold: [0.2, 0.35, 0.6]
        }
    );

    sections.forEach((section) => observer.observe(section));
}

function setupMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("suraj-theme");

    if (savedTheme === "light") {
        document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-light");
    }

    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("theme-light");
        document.body.classList.toggle("theme-dark", !isLight);
        localStorage.setItem("suraj-theme", isLight ? "light" : "dark");
    });
}

function setupProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const scrollTopButton = document.getElementById("scroll-top");

    function updateProgress() {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = `${percent}%`;
        scrollTopButton.classList.toggle("is-visible", scrollTop > 420);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function setupTypingSubtitle() {
    const subtitle = document.getElementById("hero-subtitle");
    const roles = portfolioData.basics.roles;

    subtitle.textContent = roles[0];
    subtitleIntervalId = window.setInterval(() => {
        subtitleIndex = (subtitleIndex + 1) % roles.length;
        subtitle.textContent = roles[subtitleIndex];
    }, 2400);
}

function setupStatusLine() {
    const line = document.getElementById("status-line");
    let dots = 0;

    window.setInterval(() => {
        dots = (dots + 1) % 4;
        line.textContent = `$ establishing secure connection${".".repeat(dots)}`;
    }, 520);
}

function setupCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    window.setTimeout(() => {
        counters.forEach((counter) => {
            const target = Number(counter.getAttribute("data-counter") || "0");
            const suffix = counter.getAttribute("data-suffix") || "";
            let current = 0;
            const duration = 1200;
            const stepTime = Math.max(20, Math.floor(duration / Math.max(target, 1)));
            const timer = window.setInterval(() => {
                current += 1;
                counter.textContent = `${current}${suffix}`;
                if (current >= target) {
                    window.clearInterval(timer);
                }
            }, stepTime);
        });
    }, 450);
}

function setupProjectFilters() {
    const filterContainer = document.getElementById("project-filters");

    filterContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) {
            return;
        }

        currentProjectFilter = button.getAttribute("data-filter") || "all";
        renderProjectFilters();
        renderProjects();
        setupRevealAnimations();
    });
}

function setupTerminal() {
    const output = document.getElementById("terminal-output");
    const form = document.getElementById("terminal-form");
    const input = document.getElementById("terminal-input");
    const promptLabel = "suraj@secure-shell:~$";

    const lines = [
        "Suraj Security Console v1.0",
        "Enter whoami to inspect the active profile."
    ];

    const commands = {
        whoami: [
            "Suraj N S | IT Support and Cybersecurity Professional",
            "Target roles: Security Operations, IT Support, VAPT, junior SOC."
        ],
        help: [
            "Available commands:",
            "whoami",
            "about",
            "skills",
            "projects",
            "lab",
            "resume",
            "contact",
            "clear",
            "sudo hire suraj"
        ],
        about: [
            "Hands-on experience across secure IT support, vulnerability assessment, lab practice, and practical documentation.",
            "Strengths include Windows/Linux support, OWASP-focused testing, and recruiter-ready reporting."
        ],
        skills: [
            "Core skills:",
            "IT Support, Windows, Linux, Networking, SIEM concepts, OWASP Top 10, Vulnerability Assessment, Penetration Testing, Nmap, Burp Suite"
        ],
        projects: portfolioData.projects.map((project) => `- ${project.title}`),
        lab: ["Open the Cyber Lab section for mini-games: Log Decoder, Port Match, and Phishing Check."],
        resume: ["Use the Download Resume or Preview Resume buttons above for the ATS-friendly resume."],
        contact: [
            `Email: ${portfolioData.basics.email}`,
            `LinkedIn: ${portfolioData.basics.linkedin}`,
            `GitHub: ${portfolioData.basics.github}`,
            `TryHackMe: ${portfolioData.basics.tryhackme}`
        ],
        "sudo hire suraj": [
            "Access granted.",
            "Recommendation: Strong fit for support-focused cybersecurity and junior security operations roles."
        ]
    };

    function renderTerminalLines() {
        output.textContent = lines.join("\n");
        output.scrollTop = output.scrollHeight;
    }

    renderTerminalLines();

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const rawInput = sanitizeText(input.value.toLowerCase());

        if (!rawInput) {
            return;
        }

        lines.push(`${promptLabel} ${rawInput}`);

        if (rawInput === "clear") {
            lines.length = 0;
            lines.push("Terminal cleared. Enter whoami, resume, skills, projects, or contact.");
        } else if (commands[rawInput]) {
            commands[rawInput].forEach((line) => lines.push(line));
        } else {
            lines.push(`Command not recognized: ${rawInput}`);
            lines.push("Try whoami, skills, projects, resume, or contact.");
        }

        renderTerminalLines();
        input.value = "";
    });
}

function setupResumeModal() {
    const previewButton = document.getElementById("preview-resume");
    const downloadButton = document.getElementById("download-resume");
    const modalDownload = document.getElementById("modal-download");
    const modal = document.getElementById("resume-modal");
    const closeButton = document.getElementById("resume-close");
    const previewContent = document.getElementById("resume-preview-content");

    function createResumeBlob() {
        return buildResumePdf();
    }

    function renderResumePreview() {
        previewContent.innerHTML = `
            <section class="resume-preview-header">
                <h3>${portfolioData.basics.name}</h3>
                <p>IT Support | Cybersecurity | Security Operations</p>
                <div class="resume-preview-links">
                    <span>${portfolioData.basics.location}</span>
                    <span>${portfolioData.basics.phone}</span>
                    <span>${portfolioData.basics.email}</span>
                    <span>linkedin.com/in/surajvaikom</span>
                    <span>github.com/surajvaikom</span>
                </div>
            </section>
            <section class="resume-preview-section">
                <h4>Professional Summary</h4>
                <p>${portfolioData.basics.summary}</p>
            </section>
            <section class="resume-preview-section">
                <h4>Core Skills</h4>
                <div class="resume-preview-skill-grid">
                    ${portfolioData.skillGroups
                        .map(
                            (group) => `
                                <div class="resume-preview-role">
                                    <strong>${group.title}</strong>
                                    <p>${group.items.join(", ")}</p>
                                </div>
                            `
                        )
                        .join("")}
                </div>
            </section>
            <section class="resume-preview-section">
                <h4>Experience</h4>
                ${portfolioData.experience
                    .map(
                        (role) => `
                            <article class="resume-preview-role">
                                <strong>${role.title}</strong>
                                <span>${role.company} | ${role.date}</span>
                                <p>${role.summary}</p>
                                <ul>
                                    ${role.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                                </ul>
                            </article>
                        `
                    )
                    .join("")}
            </section>
            <section class="resume-preview-section">
                <h4>Projects</h4>
                <ul class="resume-preview-list">
                    ${portfolioData.projects.map((project) => `<li><strong>${project.title}</strong> - ${project.description}</li>`).join("")}
                </ul>
            </section>
            <section class="resume-preview-section">
                <h4>Education</h4>
                <div class="resume-preview-edu-grid">
                    ${portfolioData.education
                        .map(
                            (item) => `
                                <article class="resume-preview-role">
                                    <strong>${item.degree}</strong>
                                    <span>${item.school} | ${item.years}</span>
                                    <p>${item.note}</p>
                                </article>
                            `
                        )
                        .join("")}
                </div>
            </section>
            <section class="resume-preview-section">
                <h4>Certifications</h4>
                <ul class="resume-preview-list">
                    ${portfolioData.certifications.map((item) => `<li>${item.name} - ${item.issuer}</li>`).join("")}
                </ul>
            </section>
        `;
    }

    function triggerDownload() {
        const blob = createResumeBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Suraj_N_S_ATS_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    function openPreview() {
        renderResumePreview();
        if (typeof modal.showModal === "function") {
            modal.showModal();
        }
    }

    function closePreview() {
        modal.close();
    }

    previewButton.addEventListener("click", openPreview);
    downloadButton.addEventListener("click", triggerDownload);
    modalDownload.addEventListener("click", triggerDownload);
    closeButton.addEventListener("click", closePreview);
    modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();
        const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (clickedOutside) {
            closePreview();
        }
    });
}

function setupEasterEgg() {
    const button = document.getElementById("contact-easter-egg");
    const result = document.getElementById("ping-result");
    let clickCount = 0;

    button.addEventListener("click", () => {
        clickCount += 1;

        if (clickCount === 1) {
            result.textContent = "PING secure-profile: response received. Recruiter channel stable.";
        } else if (clickCount === 2) {
            result.textContent = "Second handshake confirmed. Security posture: focused, practical, and improving.";
        } else {
            result.textContent = "Easter egg unlocked: sudo hire suraj";
        }
    });
}

function setupPreloader() {
    const preloader = document.getElementById("preloader");
    const fill = document.getElementById("preloader-fill");
    const text = document.getElementById("preloader-text");
    const messages = [
        "Establishing secure connection...",
        "Loading recruiter-ready sections...",
        "Checking ATS resume pipeline...",
        "Portfolio loaded."
    ];
    let progress = 0;

    const timer = window.setInterval(() => {
        progress += 4;
        fill.style.width = `${Math.min(progress, 100)}%`;
        text.textContent = messages[Math.min(messages.length - 1, Math.floor(progress / 30))];

        if (progress >= 100) {
            window.clearInterval(timer);
            preloader.classList.add("is-hidden");
        }
    }, 34);
}

function setupMatrixBackground() {
    const canvas = document.getElementById("matrix-canvas");
    const context = canvas.getContext("2d");
    const glyphs = "01<>[]{}#$%&*+=";
    let fontSize = 16;
    let columns = 0;
    let drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.ceil(canvas.width / fontSize);
        drops = new Array(columns).fill(1);
    }

    function draw() {
        context.fillStyle = "rgba(7, 17, 27, 0.08)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#62ff81";
        context.font = `${fontSize}px ${getComputedStyle(document.body).getPropertyValue("--mono")}`;

        drops.forEach((drop, index) => {
            const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
            context.fillText(glyph, index * fontSize, drop * fontSize);
            if (drop * fontSize > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            }
            drops[index] += 0.48;
        });
    }

    resize();
    window.setInterval(draw, 76);
    window.addEventListener("resize", resize);
}

function setupParticles() {
    const canvas = document.getElementById("particle-canvas");
    const context = canvas.getContext("2d");
    const points = [];
    let pointCount = 54;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        pointCount = window.innerWidth < 900 ? 28 : 54;
        points.length = 0;
        for (let index = 0; index < pointCount; index += 1) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.34,
                vy: (Math.random() - 0.5) * 0.34,
                size: Math.random() * 1.8 + 0.7
            });
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#62ff81";

        points.forEach((point) => {
            point.x += point.vx;
            point.y += point.vy;
            if (point.x < 0 || point.x > canvas.width) {
                point.vx *= -1;
            }
            if (point.y < 0 || point.y > canvas.height) {
                point.vy *= -1;
            }

            context.beginPath();
            context.fillStyle = `${accent}77`;
            context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            context.fill();
        });

        for (let i = 0; i < points.length; i += 1) {
            for (let j = i + 1; j < points.length; j += 1) {
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 130) {
                    const alpha = (1 - distance / 130) * 0.18;
                    context.beginPath();
                    context.strokeStyle = `${accent}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`;
                    context.lineWidth = 1;
                    context.moveTo(points[i].x, points[i].y);
                    context.lineTo(points[j].x, points[j].y);
                    context.stroke();
                }
            }
        }

        window.requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
}

function escapePdfText(text) {
    return text
        .replace(/\\/g, "\\\\")
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")
        .replace(/\r/g, "")
        .replace(/\n/g, " ");
}

function wrapText(text, fontSize, maxWidth) {
    const approxCharWidth = fontSize * 0.54;
    const maxChars = Math.max(18, Math.floor(maxWidth / approxCharWidth));
    const words = text.split(/\s+/);
    const lines = [];
    let current = "";

    words.forEach((word) => {
        const next = current ? `${current} ${word}` : word;
        if (next.length <= maxChars) {
            current = next;
        } else {
            if (current) {
                lines.push(current);
            }
            current = word;
        }
    });

    if (current) {
        lines.push(current);
    }

    return lines;
}

function buildResumePdf() {
    const pageWidth = 595;
    const pageHeight = 842;
    const marginX = 48;
    const marginTop = 54;
    const bottomSafe = 54;
    const contentWidth = pageWidth - marginX * 2;
    const pages = [[]];
    let currentPage = 0;
    let cursorY = marginTop;

    function ensureSpace(heightNeeded) {
        if (cursorY + heightNeeded > pageHeight - bottomSafe) {
            pages.push([]);
            currentPage += 1;
            cursorY = marginTop;
        }
    }

    function pushText(text, x, yTop, font, size) {
        const yPdf = pageHeight - yTop;
        pages[currentPage].push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${yPdf} Tm (${escapePdfText(text)}) Tj ET`);
    }

    function addLines(lines, options = {}) {
        const font = options.font || "F1";
        const size = options.size || 11;
        const x = options.x || marginX;
        const lineHeight = options.lineHeight || size * 1.42;
        ensureSpace(lines.length * lineHeight + 4);
        lines.forEach((line) => {
            pushText(line, x, cursorY, font, size);
            cursorY += lineHeight;
        });
    }

    function addParagraph(text, options = {}) {
        const size = options.size || 10.5;
        const x = options.x || marginX;
        const maxWidth = options.maxWidth || contentWidth;
        addLines(wrapText(text, size, maxWidth), { ...options, x, size });
    }

    function addHeading(text) {
        ensureSpace(26);
        pushText(text.toUpperCase(), marginX, cursorY, "F2", 14);
        cursorY += 20;
    }

    function addSpacer(amount) {
        cursorY += amount;
    }

    addLines([portfolioData.basics.name], { font: "F2", size: 24, lineHeight: 28 });
    addLines(["IT Support | Cybersecurity | Security Operations"], { font: "F2", size: 12, lineHeight: 18 });
    addLines(
        [
            `${portfolioData.basics.location} | ${portfolioData.basics.phone} | ${portfolioData.basics.email}`,
            `LinkedIn: linkedin.com/in/surajvaikom | GitHub: github.com/surajvaikom | TryHackMe: tryhackme.com/p/surajvaikom`
        ],
        { size: 10, lineHeight: 16 }
    );
    addSpacer(8);

    addHeading("Professional Summary");
    addParagraph(portfolioData.basics.summary);
    addSpacer(8);

    addHeading("Technical Skills");
    portfolioData.skillGroups.forEach((group) => {
        addParagraph(`${group.title}: ${group.items.join(", ")}`, { size: 10 });
    });
    addSpacer(8);

    addHeading("Professional Experience");
    portfolioData.experience.forEach((role) => {
        addLines([`${role.title} | ${role.company} | ${role.date}`], { font: "F2", size: 11, lineHeight: 17 });
        addParagraph(role.summary, { size: 10 });
        role.bullets.forEach((bullet) => {
            addParagraph(`- ${bullet}`, { x: marginX + 10, size: 10, maxWidth: contentWidth - 10 });
        });
        addSpacer(8);
    });

    addHeading("Projects");
    portfolioData.projects.forEach((project) => {
        addLines([`${project.title} | ${project.kicker}`], { font: "F2", size: 11, lineHeight: 17 });
        addParagraph(project.description, { size: 10 });
        addParagraph(`Tools: ${project.tags.join(", ")}`, { size: 10 });
        addSpacer(8);
    });

    addHeading("Education");
    portfolioData.education.forEach((item) => {
        addLines([`${item.degree} | ${item.school} | ${item.years}`], { font: "F2", size: 11, lineHeight: 17 });
        addParagraph(item.note, { size: 10 });
        addSpacer(6);
    });

    addHeading("Certifications");
    portfolioData.certifications.forEach((item) => {
        addParagraph(`- ${item.name} - ${item.issuer}`, { size: 10 });
    });

    const objects = [];
    objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
    objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
    objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

    let nextObjectId = 5;
    const pageIds = [];

    pages.forEach((contentLines) => {
        const stream = contentLines.join("\n");
        const contentId = nextObjectId;
        nextObjectId += 1;
        objects[contentId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;

        const pageId = nextObjectId;
        nextObjectId += 1;
        objects[pageId] =
            `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] ` +
            `/Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
        pageIds.push(pageId);
    });

    objects[2] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] >>`;

    let pdf = "%PDF-1.4\n";
    const offsets = [0];

    for (let index = 1; index < objects.length; index += 1) {
        if (!objects[index]) {
            continue;
        }
        offsets[index] = pdf.length;
        pdf += `${index} 0 obj\n${objects[index]}\nendobj\n`;
    }

    const xrefStart = pdf.length;
    pdf += `xref\n0 ${objects.length}\n`;
    pdf += "0000000000 65535 f \n";

    for (let index = 1; index < objects.length; index += 1) {
        const offset = offsets[index] || 0;
        pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
    }

    pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
    return new Blob([pdf], { type: "application/pdf" });
}

function init() {
    renderStats();
    renderFocusAreas();
    renderExperience();
    renderProjectFilters();
    renderProjects();
    renderSkills();
    renderCertifications();
    renderEducation();
    renderContact();
    setupRevealAnimations();
    setupActiveNav();
    setupMenu();
    setupThemeToggle();
    setupProgressBar();
    setupTypingSubtitle();
    setupStatusLine();
    setupCounters();
    setupProjectFilters();
    setupCyberLab();
    setupTerminal();
    setupResumeModal();
    setupEasterEgg();
    setupPreloader();
    setupMatrixBackground();
    setupParticles();
    document.getElementById("year").textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", init);
