const portfolioData = {
    basics: {
        name: "Suraj N S",
        title: "Aspiring Security Analyst",
        roles: [
            "Aspiring Security Analyst",
            "SOC Enthusiast",
            "Threat Detection and Incident Response",
            "IT Support and Security Operations"
        ],
        summary:
            "Detail-oriented cybersecurity professional with hands-on experience in IT support, security monitoring, vulnerability assessment, penetration testing, and incident response. Skilled in SIEM concepts, OWASP Top 10, network security, OSINT, threat intelligence, and Windows/Linux administration.",
        email: "surajvaikom@gmail.com",
        phone: "+91 8129331770",
        location: "Vaikom, Kottayam, Kerala",
        linkedin: "https://www.linkedin.com/in/surajvaikom/",
        github: "https://github.com/surajvaikom",
        tryhackme: "https://tryhackme.com/p/surajvaikom"
    },
    focusAreas: [
        {
            label: "Security Operations",
            title: "SOC-track mindset",
            text: "Focused on log review, alert interpretation, triage thinking, and practical detection skills."
        },
        {
            label: "Vulnerability Work",
            title: "Assessment to reporting",
            text: "Comfortable moving from recon and testing into clear findings and remediation-oriented notes."
        },
        {
            label: "Infrastructure",
            title: "Systems and users",
            text: "Experience supporting hardware, software, ERP workflows, and day-to-day operational continuity."
        },
        {
            label: "Continuous Learning",
            title: "Hands-on labs",
            text: "TryHackMe, PortSwigger labs, and practical security exercises keep my skills improving."
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
                "Owned infrastructure support, ERP assistance, and reliable technical operations across school systems.",
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
            meta: "Internship",
            brand: "cyber",
            summary:
                "Worked across vulnerability assessment, web testing, reconnaissance, and digital forensics exposure.",
            bullets: [
                "Conducted vulnerability assessments and penetration testing using Burp Suite, Nmap, Nessus, OpenVAS, and Metasploit.",
                "Identified and analyzed OWASP Top 10 issues to improve application security posture.",
                "Performed reconnaissance, scanning, and enumeration to identify attack surfaces and likely risks.",
                "Assisted with digital forensics investigation tasks, log analysis, and incident response documentation."
            ]
        },
        {
            title: "Cyber Security Analyst Intern",
            company: "TCS iON",
            date: "Apr 2023 - May 2023",
            meta: "Internship",
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
            meta: "Operations and secure identity workflows",
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
            meta: "On-site technical support",
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
            kicker: "Recon / Web Security",
            text:
                "Performed reconnaissance, manual testing, and vulnerability documentation for web application targets with attention to attack surface visibility and clear reporting.",
            tags: ["Nmap", "Burp Suite", "Recon", "Reporting"]
        },
        {
            title: "PortSwigger Labs",
            kicker: "OWASP Top 10 Practice",
            text:
                "Solved practical labs involving authentication flaws, access control, XSS, SQL injection, SSRF, XXE, CSRF, and other common web vulnerabilities.",
            tags: ["OWASP Top 10", "XSS", "SQLi", "Web Exploitation"]
        },
        {
            title: "Kioptrix Exploitation and Reporting",
            kicker: "Lab Exploitation",
            text:
                "Worked through an end-to-end exploitation and reporting flow, combining analysis, execution, and structured technical write-up for findings.",
            tags: ["Linux", "Privilege Escalation", "VAPT", "Documentation"]
        }
    ],
    skillGroups: [
        {
            title: "Security Operations",
            description: "Detection, triage, monitoring, and security visibility foundations.",
            items: [
                "SIEM concepts",
                "Security monitoring",
                "Log analysis",
                "Threat detection",
                "Incident response",
                "IOC identification"
            ]
        },
        {
            title: "Testing and Assessment",
            description: "Hands-on web and infrastructure security evaluation.",
            items: [
                "Vulnerability assessment",
                "Penetration testing",
                "OWASP Top 10",
                "Web application testing",
                "Risk analysis",
                "Security reporting"
            ]
        },
        {
            title: "Tools and Platforms",
            description: "Practical tooling across security and operational support.",
            items: [
                "Burp Suite",
                "Nmap",
                "Wireshark",
                "Nessus",
                "OpenVAS",
                "Metasploit"
            ]
        },
        {
            title: "Systems and Networks",
            description: "Operational support across infrastructure, users, and endpoints.",
            items: [
                "Windows",
                "Linux / Ubuntu / Kali",
                "TCP/IP, DNS, DHCP",
                "Firewalls, IDS/IPS, VPNs",
                "ERP support",
                "Technical troubleshooting"
            ]
        }
    ],
    certifications: [
        { name: "Google Cybersecurity", issuer: "Google", tag: "Certificate" },
        { name: "Certified Cyber Security Analyst", issuer: "ICT Academy of Kerala", tag: "Certificate" },
        { name: "Practical Ethical Hacking", issuer: "TCM Security", tag: "Certificate" },
        { name: "Introduction to OSINT", issuer: "Security Blue Team", tag: "Certificate" },
        { name: "Jr Penetration Tester", issuer: "TryHackMe", tag: "Certificate" },
        { name: "Foundation Level Threat Intelligence Analyst", issuer: "arcX", tag: "Certificate" },
        { name: "Open Source Intelligence Fundamentals", issuer: "TCM Security", tag: "Certificate" },
        { name: "Community Advancement Network - Kerala", issuer: "IBM", tag: "Certificate" }
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
            link: "mailto:surajvaikom@gmail.com"
        },
        {
            label: "Phone",
            value: "+91 8129331770"
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/surajvaikom",
            link: "https://www.linkedin.com/in/surajvaikom/"
        },
        {
            label: "GitHub",
            value: "github.com/surajvaikom",
            link: "https://github.com/surajvaikom"
        },
        {
            label: "TryHackMe",
            value: "tryhackme.com/p/surajvaikom",
            link: "https://tryhackme.com/p/surajvaikom"
        }
    ]
};

function renderFocusAreas() {
    const container = document.getElementById("focus-row");
    container.innerHTML = portfolioData.focusAreas
        .map(
            (item) => `
                <article class="focus-chip" data-reveal>
                    <span>${item.label}</span>
                    <strong>${item.title}</strong>
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
                <article class="timeline-item ${role.featured ? "is-featured" : ""}" data-reveal>
                    <div class="timeline-card">
                        <div class="timeline-brand">
                            ${renderCompanyLogo(role)}
                            <div>
                                <div class="timeline-date">${role.date}</div>
                                <div class="company-meta">
                                    <strong>${role.company}</strong>
                                    <span>${role.meta || ""}</span>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h3>${role.title}</h3>
                            <p>${role.summary}</p>
                        </div>
                        <ul class="timeline-points">
                            ${role.bullets.map((point) => `<li>${point}</li>`).join("")}
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
            <div class="company-logo company-logo--jaipuria" aria-label="Seth M. R. Jaipuria Schools brand mark">
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
        <div class="company-logo company-logo--standard" aria-hidden="true">
            <svg viewBox="0 0 56 56">
                <rect class="crest-fill" x="10" y="10" width="36" height="36" rx="12"></rect>
                <text class="crest-letter" x="28" y="33" text-anchor="middle">${letters}</text>
            </svg>
        </div>
    `;
}

function renderProjects() {
    const container = document.getElementById("projects-list");
    container.innerHTML = portfolioData.projects
        .map(
            (project) => `
                <article class="project-card" data-reveal>
                    <span class="project-kicker">${project.kicker}</span>
                    <h3>${project.title}</h3>
                    <p>${project.text}</p>
                    <div class="project-tags">
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
                <article class="cluster-card" data-reveal>
                    <div class="cluster-head">
                        <h3>${group.title}</h3>
                        <p>${group.description}</p>
                    </div>
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
                <article class="certification-item">
                    <span>${item.tag}</span>
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
            const valueMarkup = item.link
                ? `<a href="${item.link}" target="${item.link.startsWith("http") ? "_blank" : "_self"}" rel="${item.link.startsWith("http") ? "noreferrer" : ""}">${item.value}</a>`
                : item.value;

            return `
                <article class="contact-card">
                    <span>${item.label}</span>
                    <strong>${valueMarkup}</strong>
                    <p>${item.label === "GitHub" ? "Code repositories, portfolio work, and technical practice." : item.label === "TryHackMe" ? "Hands-on labs, practical security learning, and challenge history." : "Available for recruiter and hiring conversations."}</p>
                </article>
            `;
        })
        .join("");
}

function setupMenu() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    const navLinks = nav.querySelectorAll("a");

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function setupReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.16 }
    );

    items.forEach((item) => observer.observe(item));
}

function setupActiveNav() {
    const links = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const activate = (id) => {
        links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible) {
                activate(visible.target.id);
            }
        },
        {
            rootMargin: "-30% 0px -50% 0px",
            threshold: [0.2, 0.4, 0.6]
        }
    );

    sections.forEach((section) => observer.observe(section));
}

function setupHeroRole() {
    const roleElement = document.getElementById("hero-role");
    let index = 0;

    roleElement.textContent = portfolioData.basics.roles[0];

    setInterval(() => {
        index = (index + 1) % portfolioData.basics.roles.length;
        roleElement.textContent = portfolioData.basics.roles[index];
    }, 2600);
}

function setupStatusLine() {
    const line = document.getElementById("status-line");
    let dots = 0;

    setInterval(() => {
        dots = (dots + 1) % 4;
        line.textContent = `Recruiter-ready profile syncing${".".repeat(dots)}`;
    }, 550);
}

function setupCanvas() {
    const canvas = document.getElementById("network-canvas");
    const context = canvas.getContext("2d");
    const points = [];
    const pointCount = window.innerWidth < 900 ? 32 : 52;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createPoints() {
        points.length = 0;
        for (let index = 0; index < pointCount; index += 1) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.8 + 0.6
            });
        }
    }

    function updatePoint(point) {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= canvas.width) {
            point.vx *= -1;
        }

        if (point.y <= 0 || point.y >= canvas.height) {
            point.vy *= -1;
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (const point of points) {
            updatePoint(point);
            context.beginPath();
            context.fillStyle = "rgba(111, 222, 255, 0.52)";
            context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            context.fill();
        }

        for (let i = 0; i < points.length; i += 1) {
            for (let j = i + 1; j < points.length; j += 1) {
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 140) {
                    const alpha = (1 - distance / 140) * 0.18;
                    context.beginPath();
                    context.strokeStyle = `rgba(76, 213, 255, ${alpha})`;
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
    createPoints();
    draw();

    window.addEventListener("resize", () => {
        resize();
        createPoints();
    });
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
    let line = "";

    words.forEach((word) => {
        const proposal = line ? `${line} ${word}` : word;
        if (proposal.length <= maxChars) {
            line = proposal;
        } else {
            if (line) {
                lines.push(line);
            }
            line = word;
        }
    });

    if (line) {
        lines.push(line);
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
        const {
            font = "F1",
            size = 11,
            x = marginX,
            lineHeight = size * 1.45
        } = options;

        ensureSpace(lines.length * lineHeight + 4);
        lines.forEach((line) => {
            pushText(line, x, cursorY, font, size);
            cursorY += lineHeight;
        });
    }

    function addParagraph(text, options = {}) {
        const size = options.size || 11;
        const x = options.x || marginX;
        const maxWidth = options.maxWidth || contentWidth;
        addLines(wrapText(text, size, maxWidth), { ...options, x, size });
    }

    function addHeading(text) {
        ensureSpace(28);
        pushText(text.toUpperCase(), marginX, cursorY, "F2", 14);
        cursorY += 20;
    }

    function addSpacer(amount) {
        cursorY += amount;
    }

    addLines([portfolioData.basics.name], { font: "F2", size: 24, lineHeight: 28 });
    addLines(
        ["Aspiring Security Analyst | SOC Enthusiast | Threat Detection and Incident Response"],
        { font: "F2", size: 12, lineHeight: 18 }
    );
    addLines(
        [
            `${portfolioData.basics.location} | ${portfolioData.basics.phone} | ${portfolioData.basics.email}`,
            `LinkedIn: linkedin.com/in/surajvaikom | GitHub: github.com/surajvaikom | TryHackMe: tryhackme.com/p/surajvaikom`
        ],
        { size: 10, lineHeight: 16 }
    );
    addSpacer(10);

    addHeading("Professional Summary");
    addParagraph(portfolioData.basics.summary);
    addSpacer(10);

    addHeading("Technical Skills");
    portfolioData.skillGroups.forEach((group) => {
        addLines([`${group.title}: ${group.items.join(", ")}`], { size: 10, lineHeight: 16 });
    });
    addSpacer(10);

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
        addParagraph(project.text, { size: 10 });
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

function setupResumeDownload() {
    const button = document.getElementById("download-resume");
    button.addEventListener("click", () => {
        const blob = buildResumePdf();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Suraj_N_S_ATS_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    });
}

function init() {
    renderFocusAreas();
    renderExperience();
    renderProjects();
    renderSkills();
    renderCertifications();
    renderEducation();
    renderContact();
    setupMenu();
    setupReveal();
    setupActiveNav();
    setupHeroRole();
    setupStatusLine();
    setupCanvas();
    setupResumeDownload();
    document.getElementById("year").textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", init);
