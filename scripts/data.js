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
        description: "Plataforma de orquestación multi-cloud que gestiona +100K contenedores diarios con auto-scaling inteligente y monitoreo en tiempo real.",
        tags: ["Kubernetes", "Go", "React", "Terraform", "AWS"],
        impact: "99.99% uptime",
        color: "cyan",
        featured: true,
        image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjYwODk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "FinTech Analytics Engine",
        description: "Motor de análisis financiero en tiempo real procesando 50M+ transacciones diarias con ML para detección de fraude y predicción de tendencias.",
        tags: ["Python", "Apache Kafka", "PostgreSQL", "Redis", "TensorFlow"],
        impact: "90% fraud detection",
        color: "purple",
        featured: true,
        image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MjY0OTM0MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "E-Commerce Microservices Suite",
        description: "Arquitectura de microservicios escalable para plataforma e-commerce con 5M+ usuarios activos mensuales y procesamiento de pagos global.",
        tags: ["Node.js", "Next.js", "GraphQL", "MongoDB", "Stripe"],
        impact: "$50M+ processed",
        color: "blue",
        featured: true,
        image: "https://images.unsplash.com/photo-1758522484646-c8694d1784fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NzI1NjQyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "Real-Time Collaboration SaaS",
        description: "Plataforma colaborativa en tiempo real con WebRTC y WebSockets, soportando 10K+ usuarios concurrentes con sincronización instantánea.",
        tags: ["TypeScript", "WebRTC", "Socket.io"],
        impact: "10K concurrent users",
        color: "violet",
        featured: false,
        image: "https://images.unsplash.com/photo-1766074903112-79661da9ab45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHZpZGVvJTIwY2FsbHxlbnwxfHx8fDE3NzI2NzMxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "Healthcare Data Platform",
        description: "Sistema HIPAA-compliant para gestión de datos médicos con encriptación end-to-end y análisis predictivo para diagnóstico asistido.",
        tags: ["Rust", "Vue.js", "PostgreSQL"],
        impact: "HIPAA certified",
        color: "indigo",
        featured: false,
        image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNjI2MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        title: "IoT Monitoring Dashboard",
        description: "Dashboard de monitoreo para red de 50K+ dispositivos IoT con visualización en tiempo real y alertas predictivas usando ML.",
        tags: ["Python", "React", "InfluxDB"],
        impact: "50K+ devices",
        color: "cyan",
        featured: false,
        image: "https://images.unsplash.com/photo-1718866033984-c3ddab9af2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2VzJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNjczMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

const education = [
    {
        degree: "Maestría en Ciberseguridad",
        institution: "Tecnológico de Costa Rica (TEC)",
        location: "Cartago, Costa Rica",
        year: "2027 - 2028",
        description: "Especialización avanzada en seguridad informática, criptografía, análisis de vulnerabilidades y defensa contra ciberataques.",
        highlights: [
            "Enfoque en seguridad de sistemas distribuidos y cloud",
            "Investigación en detección de amenazas con Machine Learning"
        ],
        color: "cyan"
    },
    {
        degree: "Bachillerato en Ingeniería en Sistemas",
        institution: "Universidad Nacional de Costa Rica (UNA)",
        location: "San José, Costa Rica",
        year: "2024 - 2027",
        description: "Formación integral en desarrollo de software, algoritmos, estructuras de datos y fundamentos de sistemas computacionales.",
        highlights: ["Enfoque en arquitecturas modernas y desarrollo full stack",
            "Participación en proyectos de investigación"
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
