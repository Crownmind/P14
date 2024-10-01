const questions = [
    {
        question: "নিউটনের প্রথম গতিবিধির আইন কি?",
        options: [
            "একটি বস্তুর গতির অবস্থান পরিবর্তিত হবে না যতক্ষণ না কোন বাহ্যিক বল প্রয়োগ করা হয়।",
            "বল হল ভর গুণিতক ত্বরণ।",
            "প্রত্যেক ক্রিয়ার জন্য একটি সমান ও বিপরীত প্রতিক্রিয়া আছে।",
            "শক্তি সৃষ্টি বা ধ্বংস করা যায় না।"
        ]
    },
    {
        question: "ত্বরণের একক কি?",
        options: [
            "m/s",
            "m/s²",
            "kg",
            "N"
        ]
    },
    {
        question: "কিনেটিক এনার্জি (KE) এর সূত্র কি?",
        options: [
            "KE = mv²",
            "KE = 0.5mv²",
            "KE = mgh",
            "KE = Fd"
        ]
    },
    {
        question: "নিচের কোনটি ভর বর্ণনা করে?",
        options: [
            "একটি বস্তুর উপর গ্রাভিটির বলের মাপ।",
            "একটি বস্তুর মধ্যে পদার্থের পরিমাণ।",
            "বেগের পরিবর্তনের হার।",
            "গতির জন্য একটি বস্তুর দ্বারা ধারণ করা শক্তি।"
        ]
    },
    {
        question: "শক্তির সংরক্ষণ আইন কি বলে?",
        options: [
            "শক্তি সৃষ্টি ও ধ্বংস করা যায়।",
            "শক্তি একটি রূপ থেকে অন্য রূপে রূপান্তরিত হতে পারে কিন্তু সৃষ্টি বা ধ্বংস করা যায় না।",
            "রসায়নিক প্রতিক্রিয়াতে শক্তি সবসময় সংরক্ষিত হয়।",
            "শক্তি ঠান্ডা থেকে গরমে প্রবাহিত হয়।"
        ]
    },
    {
        question: "নিচের কোনটি তরঙ্গের একটি বৈশিষ্ট্য?",
        options: [
            "তরঙ্গদৈর্ঘ্য",
            "ফ্রিকোয়েন্সি",
            "অ্যালামপিটুড",
            "উপরের সবকিছু"
        ]
    },
    {
        question: "গতি এবং বেগের মধ্যে কি পার্থক্য?",
        options: [
            "বেগ হল গতি এবং সময়ের অনুপাত।",
            "বেগ হল স্থান পরিবর্তনের হার।",
            "গতি হল স্থির অবস্থান।",
            "উভয়ের মধ্যে কোন পার্থক্য নেই।"
        ]
    },
    {
        question: "মাধ্যাকর্ষণ শক্তি (Gravitational Potential Energy) এর সূত্র কি?",
        options: [
            "PE = mv²",
            "PE = mgh",
            "PE = 0.5mv²",
            "PE = Fd"
        ]
    },
    {
        question: "মোমেন্টামের সংরক্ষণ আইন কি বলে?",
        options: [
            "মোমেন্টাম সৃষ্টি ও ধ্বংস করা যায়।",
            "মোমেন্টাম সব সময় সংরক্ষিত থাকে।",
            "দুটি বস্তু সংঘর্ষ করলে তাদের মোট মোমেন্টাম অপরিবর্তিত থাকে।",
            "মোমেন্টাম একটি ভৌত রাশি নয়।"
        ]
    },
    {
        question: "বৈদ্যুতিক প্রবাহ কি?",
        options: [
            "শক্তির গতি",
            "চার্জের প্রবাহ",
            "ভরের গতিবিধি",
            "তাপের স্থানান্তর"
        ]
    }
];

let currentQuestion = 0;
let timerDuration = 7 * 60; // 7 minutes in seconds
let timerInterval;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const skipButton = document.getElementById("skip-button");
const nextButton = document.getElementById("next-button");
const endMessage = document.getElementById("end-message");
const timerElement = document.getElementById("timer");

function startTimer() {
    timerInterval = setInterval(() => {
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            endMessage.classList.remove("hidden");
            skipButton.classList.add("hidden");
            nextButton.classList.add("hidden");
            optionsElement.classList.add("hidden");
        } else {
            const minutes = Math.floor(timerDuration / 60);
            const seconds = timerDuration % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerDuration--;
        }
    }, 1000); // Update every second
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        optionsElement.innerHTML = ""; // Clear previous options
        
        // Display options
        questions[currentQuestion].options.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.textContent = option;
            optionElement.classList.add("option");
            optionsElement.appendChild(optionElement);
        });

        questionElement.classList.remove("hidden");
        optionsElement.classList.remove("hidden");
        skipButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
    } else {
        clearInterval(timerInterval); // Clear timer when quiz is finished
        endMessage.classList.remove("hidden");
        skipButton.classList.add("hidden");
        nextButton.classList.add("hidden");
        optionsElement.classList.add("hidden");
    }
}

skipButton.addEventListener("click", () => {
    currentQuestion++;
    showQuestion();
});

nextButton.addEventListener
