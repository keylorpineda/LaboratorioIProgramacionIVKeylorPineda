const certifications = [
    {
        title: "AWS Solutions Architect Professional",
        issuer: "Amazon Web Services",
        date: "2024",
        level: "Professional",
        color: "purple",
        verified: true,
        logo: "https://img.icons8.com/color/96/amazon-web-services.png"
    },
    {
        title: "AWS DevOps Engineer Professional",
        issuer: "Amazon Web Services",
        date: "2024",
        level: "Professional",
        color: "purple",
        verified: true,
        logo: "https://img.icons8.com/color/96/amazon-web-services.png"
    },
    {
        title: "Google Cloud Professional Cloud Architect",
        issuer: "Google Cloud",
        date: "2023",
        level: "Professional",
        color: "cyan",
        verified: true,
        logo: "https://img.icons8.com/color/96/google-cloud.png"
    },
    {
        title: "Certified Kubernetes Administrator (CKA)",
        issuer: "Cloud Native Computing Foundation",
        date: "2023",
        level: "Professional",
        color: "blue",
        verified: true,
        logo: "https://img.icons8.com/color/96/kubernetes.png"
    },
    {
        title: "MongoDB Certified Developer Associate",
        issuer: "MongoDB University",
        date: "2023",
        level: "Associate",
        color: "violet",
        verified: true,
        logo: "https://img.icons8.com/color/96/mongodb.png"
    },
    {
        title: "HashiCorp Certified: Terraform Associate",
        issuer: "HashiCorp",
        date: "2024",
        level: "Associate",
        color: "indigo",
        verified: true,
        logo: "https://img.icons8.com/color/96/terraform.png"
    },
    {
        title: "Microsoft Azure Solutions Architect Expert",
        issuer: "Microsoft",
        date: "2023",
        level: "Expert",
        color: "cyan",
        verified: true,
        logo: "https://img.icons8.com/fluency/96/azure-1.png"
    },
    {
        title: "Red Hat Certified Engineer (RHCE)",
        issuer: "Red Hat",
        date: "2022",
        level: "Professional",
        color: "blue",
        verified: true,
        logo: "https://img.icons8.com/color/96/red-hat.png"
    },
    {
        title: "Meta Front-End Developer Professional",
        issuer: "Meta (Facebook)",
        date: "2023",
        level: "Professional",
        color: "purple",
        verified: true,
        logo: "https://img.icons8.com/color/96/meta.png"
    }
];

const projects = [
    {
        title: "CloudScale Platform",
        description: "Multi-cloud orchestration platform managing +100K daily containers with intelligent auto-scaling and real-time monitoring.",
        tags: ["Kubernetes", "Go", "React", "Terraform", "AWS"],
        impact: "99.99% uptime",
        color: "cyan",
        featured: true,
        image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjYwODk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "FinTech Analytics Engine",
        description: "Real-time financial analytics engine processing 50M+ daily transactions with ML for fraud detection and trend prediction.",
        tags: ["Python", "Apache Kafka", "PostgreSQL", "Redis", "TensorFlow"],
        impact: "90% fraud detection",
        color: "purple",
        featured: true,
        image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MjY0OTM0MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "E-Commerce Microservices Suite",
        description: "Scalable microservices architecture for e-commerce platform with 5M+ active monthly users and global payment processing.",
        tags: ["Node.js", "Next.js", "GraphQL", "MongoDB", "Stripe"],
        impact: "$50M+ processed",
        color: "blue",
        featured: true,
        image: "https://images.unsplash.com/photo-1758522484646-c8694d1784fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NzI1NjQyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "Real-Time Collaboration SaaS",
        description: "Real-time collaborative platform with WebRTC and WebSockets, supporting 10K+ concurrent users with instant synchronization.",
        tags: ["TypeScript", "WebRTC", "Socket.io"],
        impact: "10K concurrent users",
        color: "violet",
        featured: false,
        image: "https://images.unsplash.com/photo-1766074903112-79661da9ab45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHZpZGVvJTIwY2FsbHxlbnwxfHx8fDE3NzI2NzMxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "Healthcare Data Platform",
        description: "HIPAA-compliant system for medical data management with end-to-end encryption and predictive analytics for assisted diagnosis.",
        tags: ["Rust", "Vue.js", "PostgreSQL"],
        impact: "HIPAA certified",
        color: "indigo",
        featured: false,
        image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNjI2MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "IoT Monitoring Dashboard",
        description: "Monitoring dashboard for 50K+ IoT devices network with real-time visualization and predictive ML alerts.",
        tags: ["Python", "React", "InfluxDB"],
        impact: "50K+ devices",
        color: "cyan",
        featured: false,
        image: "https://images.unsplash.com/photo-1718866033984-c3ddab9af2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2VzJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNjczMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

const education = [
    {
        degree: "Master's in Cybersecurity",
        institution: "Costa Rica Institute of Technology (TEC)",
        location: "Cartago, Costa Rica",
        year: "2027 - 2028",
        description: "Advanced specialization in computer security, cryptography, vulnerability analysis, and cyber attack defense.",
        highlights: [
            "Focus on distributed systems and cloud security",
            "Research in threat detection with Machine Learning"
        ],
        color: "cyan"
    },
    {
        degree: "Bachelor's in Systems Engineering",
        institution: "National University of Costa Rica (UNA)",
        location: "San José, Costa Rica",
        year: "2024 - 2027",
        description: "Comprehensive education in software development, algorithms, data structures, and computational systems fundamentals.",
        highlights: ["Focus on modern architectures and full stack development",
            "Participation in research projects"
        ],
        color: "purple"
    }
];

const additionalLearning = [
    {
        title: "Advanced Kubernetes Patterns",
        provider: "Cloud Native Computing Foundation",
        year: "2026",
        icon: "☸️"
    },
    {
        title: "AWS Advanced Networking",
        provider: "AWS Training",
        year: "2027",
        icon: "☁️"
    },
    {
        title: "Security Architecture Design",
        provider: "SANS Institute",
        year: "2026",
        icon: "🔒"
    },
    {
        title: "Advanced React Patterns",
        provider: "Frontend Masters",
        year: "2026",
        icon: "⚛️"
    },
    {
        title: "Microservices Architecture",
        provider: "Google Cloud",
        year: "2027",
        icon: "🏛️"
    },
    {
        title: "Machine Learning Operations",
        provider: "MLOps Community",
        year: "2026",
        icon: "🤖"
    }
];
