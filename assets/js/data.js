// Te dhenat demonstrative te klasave PulseFit

const classesData = [
    {
        id: "strength",
        name: "Strength Training",
        description: "Stervitje e fokusuar ne zhvillimin e forces, permiresimin e teknikes dhe forcimin e grupeve te ndryshme muskulore.",
        category: "strength",
        categoryLabel: "Force",
        levels: ["beginner", "intermediate", "advanced"],
        levelLabel: "Te gjitha nivelet",
        duration: 60,
        image: "assets/images/strength.png"
    },
    {
        id: "yoga",
        name: "Yoga",
        description: "Klase e fokusuar ne fleksibilitet, ekuiliber dhe relaksim. Permes ushtrimeve dhe teknikave te frymemarrjes, ndihmon ne permiresimin e mireqenies fizike dhe mendore.",
        category: "recovery",
        categoryLabel: "Rikuperim",
        levels: ["beginner", "intermediate", "advanced"],
        levelLabel: "Te gjitha nivelet",
        duration: 60,
        image: "assets/images/Yoga.png"
    },
    {
        id: "pilates",
        name: "Pilates",
        description: "Stervitje e fokusuar ne forcimin e muskujve, permiresimin e postures dhe fleksibilitetit. Ushtrimet ndihmojne ne zhvillimin e ekuilibrit dhe kontrollit te trupit.",
        category: "core",
        categoryLabel: "Core",
        levels: ["beginner", "intermediate"],
        levelLabel: "Fillestar - Mesatar",
        duration: 45,
        image: "assets/images/Pilates.png"
    },
    {
        id: "hiit",
        name: "HIIT",
        description: "Stervitje me intensitet te larte qe kombinon ushtrime intensive me intervale te shkurtra pushimi. Ndihmon ne permiresimin e rezistences fizike, forces dhe kondicionit.",
        category: "cardio",
        categoryLabel: "Kardio",
        levels: ["intermediate", "advanced"],
        levelLabel: "Mesatar - Avancuar",
        duration: 30,
        image: "assets/images/HIIT.png"
    },
    {
        id: "boxing",
        name: "Boxing",
        description: "Stervitje dinamike qe kombinon teknikat e boksit me ushtrime per permiresimin e forces, shpejtesise dhe rezistences fizike.",
        category: "cardio",
        categoryLabel: "Kardio",
        levels: ["beginner", "intermediate"],
        levelLabel: "Fillestar - Mesatar",
        duration: 45,
        image: "assets/images/Boxing.png"
    }
];
// Te dhenat demonstrative te trajnereve PulseFit
const trainersData = [
    {
        id: "alexander-hayes",
        name: "Alexander Hayes",
        specialization: "Personal Trainer",
        description: "Fokusohet ne stervitjen individuale, zhvillimin e forces dhe programe te pershtatura sipas objektivave.",
        bio: "Alexander fokusohet ne stervitjen individuale dhe zhvillimin e forces. Ai ndihmon anetaret te ndjekin programe stervitjeje te pershtatura me objektivat e tyre.",
        image: "assets/images/Trainer1.png",
        classIds: ["strength"]
    },
    {
        id: "sofia-bennett",
        name: "Sofia Bennett",
        specialization: "Pilates & Yoga",
        description: "Fokusohet ne fleksibilitet, ekuiliber dhe mireqenie permes klasave Pilates dhe Yoga.",
        bio: "Sofia fokusohet ne permiresimin e fleksibilitetit, ekuilibrit dhe mireqenies fizike permes levizjeve te kontrolluara dhe ushtrimeve te frymemarrjes.",
        image: "assets/images/Trainer2.png",
        classIds: ["pilates", "yoga"]
    },
    {
        id: "isabella-morgan",
        name: "Isabella Morgan",
        specialization: "Strength Training",
        description: "Ndihmon ne zhvillimin e forces, teknikes dhe rezistences permes stervitjeve te strukturuara.",
        bio: "Isabella fokusohet ne zhvillimin e forces, teknikes dhe rezistences fizike. Stervitjet e saj perfshijne ushtrime te strukturuara per grupe te ndryshme muskulore.",
        image: "assets/images/Trainer3.png",
        classIds: ["strength"]
    },
    {
        id: "nathan-brooks",
        name: "Nathan Brooks",
        specialization: "Boxing & HIIT",
        description: "Drejton stervitje dinamike qe kombinojne teknikat e boksit me ushtrime intensive HIIT.",
        bio: "Nathan drejton stervitje dinamike qe kombinojne teknikat baze te boksit me ushtrime me intensitet te larte, duke u fokusuar ne force dhe qendrueshmeri.",
        image: "assets/images/Trainer4.png",
        classIds: ["boxing", "hiit"]
    }
];
// Te dhenat demonstrative te orarit javor
const scheduleData = [
    {
        id: "session-1",
        day: "monday",
        time: "18:00",
        classId: "strength",
        trainerId: "alexander-hayes"
    },
    {
        id: "session-2",
        day: "tuesday",
        time: "09:00",
        classId: "yoga",
        trainerId: "sofia-bennett"
    },
    {
        id: "session-3",
        day: "tuesday",
        time: "18:00",
        classId: "boxing",
        trainerId: "nathan-brooks"
    },
    {
        id: "session-4",
        day: "wednesday",
        time: "07:00",
        classId: "strength",
        trainerId: "isabella-morgan"
    },
    {
        id: "session-5",
        day: "wednesday",
        time: "17:00",
        classId: "pilates",
        trainerId: "sofia-bennett"
    },
    {
        id: "session-6",
        day: "thursday",
        time: "18:00",
        classId: "hiit",
        trainerId: "nathan-brooks"
    },
    {
        id: "session-7",
        day: "friday",
        time: "09:00",
        classId: "yoga",
        trainerId: "sofia-bennett"
    },
    {
        id: "session-8",
        day: "friday",
        time: "18:00",
        classId: "boxing",
        trainerId: "nathan-brooks"
    },
    {
        id: "session-9",
        day: "saturday",
        time: "09:00",
        classId: "strength",
        trainerId: "alexander-hayes"
    },
    {
        id: "session-10",
        day: "saturday",
        time: "11:00",
        classId: "pilates",
        trainerId: "sofia-bennett"
    }
];
// Te dhenat demonstrative te paketave te anetaresimit
const membershipsData = [
    {
        id: "basic",
        name: "Basic",
        description: "Ideale per fillestaret",
        monthlyPrice: 39,
        yearlyPrice: 374,
        popular: false,
        features: [
            "Akses ne palester",
            "Klasa te perzgjedhura",
            "Akses ne dhomat e zhveshjes",
            "Evente komunitare"
        ]
    },
    {
        id: "premium",
        name: "Premium",
        description: "Paketa jone me fleksibel",
        monthlyPrice: 59,
        yearlyPrice: 566,
        popular: true,
        features: [
            "Akses ne te gjitha klasat",
            "Palester dhe zone funksionale",
            "Dhomat e zhveshjes dhe dushet",
            "1 seance personale ne muaj",
            "Rezervim me perparesi",
            "Evente komunitare"
        ]
    },
    {
        id: "vip",
        name: "VIP",
        description: "Eksperienca e plote PulseFit",
        monthlyPrice: 89,
        yearlyPrice: 854,
        popular: false,
        features: [
            "Akses pa limit ne te gjitha klasat",
            "Palester, zone funksionale dhe wellness",
            "Dhomat e zhveshjes dhe dushet",
            "2 seanca personale ne muaj",
            "Keshillim ushqimor",
            "Rezervim me perparesi",
            "Evente dhe workshop-e ekskluzive"
        ]
    }
];
