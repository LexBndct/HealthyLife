document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. DATABASE SUPER LENGKAP + EXTRA MENU LANSIA 👴👵
    // =========================================================
    const database = {
        turun: { 
            meals: [
                { name: "Oatmeal & Beri", cal: 280, prot: 11, sugar: 8, gram: 250 },
                { name: "Putih Telur Rebus (3 btr) & Pisang", cal: 160, prot: 15, sugar: 14, gram: 200 },
                { name: "Salad Ayam Grilled (No Dressing)", cal: 320, prot: 35, sugar: 3, gram: 300 },
                { name: "Smoothie Bayam & Nanas", cal: 180, prot: 4, sugar: 18, gram: 350 },
                { name: "Ikan Pepes & Nasi Merah (1/2)", cal: 350, prot: 28, sugar: 1, gram: 300 },
                { name: "Sup Tahu Ayam Bening", cal: 220, prot: 18, sugar: 2, gram: 400 },
                { name: "Tumis Brokoli & Dada Ayam", cal: 290, prot: 32, sugar: 3, gram: 300 },
                { name: "Shirataki Goreng Jawa", cal: 250, prot: 10, sugar: 4, gram: 250 },
                { name: "Gado-gado (Bumbu Pisah)", cal: 380, prot: 14, sugar: 12, gram: 350 },
                { name: "Soto Ayam (Tanpa Santan/Nasi)", cal: 280, prot: 22, sugar: 2, gram: 400 },
                { name: "Ubi Rebus & Kopi Hitam", cal: 190, prot: 3, sugar: 8, gram: 200 },
                { name: "Yoghurt Greek & Chia Seed", cal: 150, prot: 12, sugar: 6, gram: 180 },
                { name: "Sandwich Roti Gandum Tuna", cal: 310, prot: 24, sugar: 5, gram: 220 },
                { name: "Capcay Kuah Seafood", cal: 240, prot: 18, sugar: 3, gram: 350 },
                { name: "Ayam Pop (Tanpa Kulit/Santan)", cal: 260, prot: 25, sugar: 0, gram: 200 }
            ],
            workouts: [
                { name: "Jalan Cepat 45 Menit", tags: ["low_impact", 0, 99, 99, "all"] },
                { name: "Renang Gaya Dada", tags: ["low_impact", 0, 80, 99, "all"] },
                { name: "HIIT Fat Burn (Intens)", tags: ["high_intensity", 15, 45, 30, "all"] }, 
                { name: "Lompat Tali / Skipping", tags: ["high_impact", 10, 45, 29, "all"] }, 
                { name: "Zumba Dance", tags: ["cardio", 0, 60, 35, "perempuan"] },
                { name: "Pilates Core Burn", tags: ["toning", 12, 60, 99, "perempuan"] },
                { name: "Muay Thai Cardio", tags: ["high_intensity", 15, 40, 30, "laki"] },
                { name: "Bodyweight Circuit", tags: ["strength", 12, 50, 35, "all"] },
                { name: "Senam Jantung Sehat", tags: ["senior", 40, 99, 99, "all"] }, 
                { name: "Jalan Pagi Santai", tags: ["senior", 0, 99, 99, "all"] }
            ],
            tips: "🔥 Tips: Minum 500ml air sebelum makan & kurangi gorengan!"
        },
        naik: { 
            meals: [
                { name: "Nasi Putih & Rendang Daging", cal: 650, prot: 35, sugar: 8, gram: 400 },
                { name: "Steak Sapi & Mashed Potato", cal: 700, prot: 45, sugar: 4, gram: 450 },
                { name: "Pasta Carbonara Creamy", cal: 680, prot: 25, sugar: 6, gram: 350 },
                { name: "Nasi Padang (Ayam Bakar)", cal: 750, prot: 30, sugar: 5, gram: 500 },
                { name: "Roti Bakar Selai Kacang", cal: 450, prot: 15, sugar: 18, gram: 200 },
                { name: "Alpukat Kocok Susu Coklat", cal: 420, prot: 6, sugar: 35, gram: 300 },
                { name: "Burger Homemade (Double)", cal: 800, prot: 45, sugar: 12, gram: 400 },
                { name: "Sate Ayam Bumbu Kacang (10tsk)", cal: 600, prot: 40, sugar: 15, gram: 350 },
                { name: "Bubur Ayam Komplit (+Telur)", cal: 550, prot: 22, sugar: 4, gram: 450 },
                { name: "Mie Goreng Seafood + Telur", cal: 620, prot: 20, sugar: 8, gram: 350 },
                { name: "Protein Shake & 2 Pisang", cal: 480, prot: 35, sugar: 28, gram: 400 },
                { name: "Dada Ayam Crispy & Nasi", cal: 720, prot: 38, sugar: 2, gram: 400 },
                { name: "Martabak Telur (Malam)", cal: 650, prot: 20, sugar: 4, gram: 300 },
                { name: "Nasi Goreng Kambing", cal: 780, prot: 32, sugar: 6, gram: 400 }
            ],
            workouts: [
                { name: "Push Up & Diamond Push Up", tags: ["calisthenics", 12, 55, 99, "laki"] },
                { name: "Pull Up & Chin Up", tags: ["calisthenics", 14, 50, 99, "laki"] },
                { name: "Squat Berat (Barbell)", tags: ["gym", 17, 50, 99, "all"] },
                { name: "Deadlift (Teknik Proper)", tags: ["gym", 18, 45, 99, "laki"] },
                { name: "Bench Press (Chest Day)", tags: ["gym", 17, 55, 99, "laki"] },
                { name: "Glute Bridges Weighted", tags: ["gym", 17, 55, 99, "perempuan"] },
                { name: "Latihan Dumbbell Ringan", tags: ["senior", 50, 99, 99, "all"] },
                { name: "Squat dengan Kursi", tags: ["senior", 50, 99, 99, "all"] }
            ],
            tips: "💪 Tips: Makan lebih sering (4-5x) & angkat beban berat!"
        },
        sehat: { 
            meals: [
                { name: "Nasi Merah & Ayam Rica", cal: 450, prot: 28, sugar: 4, gram: 350 },
                { name: "Pecel Sayur + Tempe", cal: 400, prot: 15, sugar: 18, gram: 350 },
                { name: "Sop Buntut (Jarang-jarang)", cal: 550, prot: 30, sugar: 2, gram: 400 },
                { name: "Sushi Roll (Salmon)", cal: 420, prot: 18, sugar: 5, gram: 250 },
                { name: "Bibimbap Korea", cal: 580, prot: 22, sugar: 9, gram: 400 },
                { name: "Ikan Gurame Asam Manis", cal: 500, prot: 25, sugar: 15, gram: 350 },
                { name: "Sayur Asem & Ikan Asin", cal: 350, prot: 20, sugar: 3, gram: 400 },
                { name: "Tumis Kangkung Belacan", cal: 250, prot: 8, sugar: 2, gram: 250 },
                { name: "Mangga & Yoghurt", cal: 280, prot: 6, sugar: 25, gram: 300 },
                { name: "Bubur Kacang Hijau", cal: 320, prot: 10, sugar: 22, gram: 300 },
                { name: "Rawon Daging (Tanpa Lemak)", cal: 520, prot: 32, sugar: 2, gram: 400 },
                { name: "Roti Gandum Telur Dadar", cal: 380, prot: 18, sugar: 4, gram: 220 }
            ],
            workouts: [
                { name: "Yoga Vinyasa Flow", tags: ["flexibility", 0, 55, 99, "perempuan"] },
                { name: "Jogging Santai Sore", tags: ["cardio", 0, 50, 35, "all"] },
                { name: "Sepeda Keliling Kota", tags: ["cardio", 0, 65, 99, "all"] },
                { name: "Badminton Ganda", tags: ["sport", 10, 55, 35, "all"] },
                { name: "Berenang Santai", tags: ["cardio", 0, 80, 99, "all"] },
                { name: "Plank & Abs Routine", tags: ["core", 10, 60, 99, "all"] },
                { name: "Senam Aerobik", tags: ["cardio", 0, 60, 99, "perempuan"] },
                { name: "Futsal / Mini Soccer", tags: ["sport", 12, 40, 35, "laki"] },
                { name: "Tai Chi / Yoga Lansia", tags: ["senior", 50, 99, 99, "all"] }, 
                { name: "Stretching Full Body", tags: ["flexibility", 0, 99, 99, "all"] }
            ],
            tips: "✨ Tips: Perbanyak serat, tidur 7-8 jam, & kelola stres."
        }
    };

    // =========================================================
    // 2. DOM ELEMENTS & SETUP
    // =========================================================
    const startBtn = document.getElementById('startBtn');
    const logoutBtn = document.getElementById('logoutBtn'); // Selector baru
    const themeSwitcher = document.getElementById('themeSwitcher');
    const formPage = document.getElementById('formPage');
    const dashboardPage = document.getElementById('dashboardPage');
    const modal = document.getElementById('workoutModal');
    const closeBtn = document.querySelector('.closeModal');

    if (!startBtn || !formPage || !dashboardPage) return;

    // Load Theme
    const savedTheme = localStorage.getItem('healthyLife_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitcher.checked = true;
        document.getElementById('themeLabel').innerText = "Dark Mode";
    }

    themeSwitcher.addEventListener('change', () => {
        if (themeSwitcher.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('healthyLife_theme', 'dark');
            document.getElementById('themeLabel').innerText = "Dark Mode";
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('healthyLife_theme', 'light');
            document.getElementById('themeLabel').innerText = "Light Mode";
        }
    });

    // Check Login State
    checkLocalStorage();

    function checkLocalStorage() {
        const savedUser = JSON.parse(localStorage.getItem('healthyLife_user'));
        const savedPlan = JSON.parse(localStorage.getItem('healthyLife_plan'));

        if (savedUser && savedPlan) {
            renderDashboard(savedUser, savedPlan);
        } else {
            formPage.classList.add('active');
            dashboardPage.classList.remove('active');
        }
    }

    // =========================================================
    // 3. LOGIC START & LOGOUT
    // =========================================================
    startBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value || "User";
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const goal = document.getElementById('goal').value;
        const mealFreq = document.getElementById('mealFreq') ? document.getElementById('mealFreq').value : '3';

        if (!weight || !height || !age) {
            alert("⚠️ Mohon isi Berat, Tinggi, dan Umur kamu!");
            return;
        }

        const userData = { username, weight, height, age, gender, goal, mealFreq };
        const weeklyPlanData = createWeeklyPlanData(goal, mealFreq, age, gender, weight, height);

        localStorage.setItem('healthyLife_user', JSON.stringify(userData));
        localStorage.setItem('healthyLife_plan', JSON.stringify(weeklyPlanData));
        
        renderDashboard(userData, weeklyPlanData);
    });

    // --- FITUR LOGOUT (Baru) ---
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm("Keluar dan reset data?")) {
                localStorage.removeItem('healthyLife_user');
                localStorage.removeItem('healthyLife_plan');
                location.reload(); // Refresh halaman kembali ke form
            }
        });
    }

    // =========================================================
    // 4. GENERATOR LOGIC
    // =========================================================
    function renderDashboard(user, planData) {
        const heightM = user.height / 100;
        const bmi = (user.weight / (heightM * heightM)).toFixed(1);
        let status = "";
        
        if (bmi < 18.5) status = "Underweight";
        else if (bmi < 24.9) status = "Ideal ✨";
        else if (bmi < 29.9) status = "Overweight";
        else status = "Obesity ⚠️";

        document.getElementById('welcomeText').innerText = `Halo, ${user.username}!`;
        document.getElementById('bmiValue').innerText = `BMI: ${bmi}`;
        document.getElementById('bmiStatus').innerText = `Status: ${status}`;
        document.getElementById('bmiRekom').innerText = `Saran AI: ${database[user.goal].tips}`;

        generateBadges(user.goal, bmi, user.age);
        renderWeeklyPlanFromData(planData, user.age);
        
        formPage.classList.remove('active');
        dashboardPage.classList.add('active');
    }

    function getSmartWorkouts(goal, age, gender, bmi) {
        const rawList = database[goal].workouts;
        
        let filtered = rawList.filter(item => {
            const [type, minAge, maxAge, maxBmi, reqGender] = item.tags;
            if (age < minAge) return false;
            if (age > maxAge) return false;
            if (bmi > maxBmi) return false;
            if (reqGender !== 'all' && reqGender !== gender) return false;
            return true;
        });

        if (filtered.length === 0) {
            if (age > 60) {
                filtered = [
                    { name: "Jalan Pagi Santai", tags: [] },
                    { name: "Senam Lansia Ringan", tags: [] }
                ];
            } else {
                filtered = [{ name: "Jalan Kaki 30 Menit", tags: [] }];
            }
        }
        return filtered;
    }

    function createWeeklyPlanData(goal, freq, age, gender, weight, height) {
        const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
        const mealList = database[goal].meals;
        const heightM = height / 100;
        const bmi = weight / (heightM * heightM);
        const safeWorkouts = getSmartWorkouts(goal, age, gender, bmi);

        let mealLabels = [];
        if (freq == '2') mealLabels = ["Brunch", "Dinner"];
        else if (freq == '4') mealLabels = ["Sarapan", "Siang", "Sore", "Malam"];
        else mealLabels = ["Sarapan", "Siang", "Malam"];

        const planData = [];
        days.forEach(day => {
            const randomWorkoutObj = safeWorkouts[Math.floor(Math.random() * safeWorkouts.length)];
            let dailyMeals = [];
            for (let i = 0; i < mealLabels.length; i++) {
                let pick = mealList[Math.floor(Math.random() * mealList.length)];
                let attempts = 0;
                while(dailyMeals.includes(pick) && attempts < 5) {
                     pick = mealList[Math.floor(Math.random() * mealList.length)];
                     attempts++;
                }
                dailyMeals.push(pick);
            }
            planData.push({ day, meals: dailyMeals, workout: randomWorkoutObj, labels: mealLabels });
        });
        return planData;
    }

    function renderWeeklyPlanFromData(planData, age) {
        const container = document.getElementById('weeklyPlan');
        container.innerHTML = ""; 
        planData.forEach(item => {
            let mealsHTML = "";
            item.meals.forEach((meal, index) => {
                mealsHTML += `<div style="margin-bottom:6px; font-size:0.85rem; border-bottom:1px solid #eee; padding-bottom:4px;">
                                <span style="color:var(--primary-dark); font-weight:600;">${item.labels[index]}:</span> ${meal.name}
                              </div>`;
            });
            const card = document.createElement('div');
            card.className = 'day-card';
            card.innerHTML = `
                <h4 style="margin-bottom:15px; border-bottom:2px solid var(--primary); display:inline-block;">📅 ${item.day}</h4>
                <div style="margin: 10px 0;">${mealsHTML}</div>
                <div style="background: var(--bg); padding:10px; border-radius:10px; margin-top:10px;">
                    <p style="margin:0; font-size:0.8rem; color:var(--text-muted);">Aktivitas:</p>
                    <p style="margin:0; font-weight:bold; color:var(--accent);">🏃 ${item.workout.name}</p>
                </div>
                <div style="margin-top:10px; text-align:center; font-size:0.8rem; color:var(--primary-dark); font-weight:bold;">
                    👆 Klik untuk Detail Nutrisi
                </div>
            `;
            card.addEventListener('click', () => openDetailModal(item.day, item.meals, item.workout, item.labels, age));
            container.appendChild(card);
        });
    }

    function generateBadges(goal, bmi, age) {
        const container = document.getElementById('badgeContainer');
        container.innerHTML = ""; 
        const badges = ["🌱 Starter"];
        if (age > 55) badges.push("👴 Senior Active"); 
        if (goal === 'naik') badges.push("🦍 Bulking");
        if (goal === 'turun') badges.push("🔥 Fat Loss");
        if (goal === 'sehat') badges.push("❤️ Healthy");
        if (bmi >= 18.5 && bmi <= 24.9) badges.push("⭐ Ideal");
        if (bmi > 30) badges.push("⚠️ Caution");
        badges.forEach(badge => {
            const span = document.createElement('span');
            span.className = 'badge';
            span.innerText = badge;
            container.appendChild(span);
        });
    }

    function openDetailModal(day, meals, workout, labels, age) {
        if (!modal) return;
        document.getElementById('modalTitle').innerText = `Detail Rencana: ${day}`;
        document.getElementById('modalImage').style.display = 'none';

        let totalCal = 0, totalProt = 0, totalSugar = 0;
        let tableHTML = `
        <div style="overflow-x:auto; margin-bottom:15px;">
            <table style="width:100%; text-align:left; border-collapse: collapse; font-size:0.85rem;">
                <thead>
                    <tr style="border-bottom:2px solid #ddd; background:#f9f9f9;">
                        <th style="padding:8px;">Waktu</th>
                        <th style="padding:8px;">Menu</th>
                        <th style="padding:8px;">Cal</th>
                        <th style="padding:8px;">Prot</th>
                        <th style="padding:8px;">Sug</th>
                    </tr>
                </thead>
                <tbody>`;
        meals.forEach((meal, index) => {
            totalCal += meal.cal;
            totalProt += meal.prot;
            totalSugar += meal.sugar;
            tableHTML += `
                <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:8px; font-weight:bold; color:var(--primary-dark);">${labels[index]}</td>
                    <td style="padding:8px;">${meal.name}</td>
                    <td style="padding:8px;">${meal.cal}</td>
                    <td style="padding:8px;">${meal.prot}g</td>
                    <td style="padding:8px;">${meal.sugar}g</td>
                </tr>`;
        });
        tableHTML += `</tbody></table></div>`;

        let workoutWarning = "Lakukan dengan fokus & hati-hati!";
        if (age > 60) workoutWarning = "⚠️ MODE SENIOR: Lakukan perlahan, jangan memaksakan sendi.";

        const contentHTML = `
            ${tableHTML}
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px; margin-bottom:20px;">
                <div style="background:#e0f2fe; padding:10px; border-radius:10px; text-align:center;">
                    <small>Kalori</small><br><b style="color:#0284c7; font-size:1.1rem;">${totalCal}</b>
                </div>
                <div style="background:#dcfce7; padding:10px; border-radius:10px; text-align:center;">
                    <small>Protein</small><br><b style="color:#16a34a; font-size:1.1rem;">${totalProt}</b>
                </div>
                <div style="background:#fee2e2; padding:10px; border-radius:10px; text-align:center;">
                    <small>Gula</small><br><b style="color:#dc2626; font-size:1.1rem;">${totalSugar}</b>
                </div>
            </div>
            <div style="background:var(--bg); padding:15px; border-radius:15px; border:1px dashed var(--primary);">
                <h4 style="margin-bottom:5px;">🏋️ Target: ${workout.name}</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">${workoutWarning}</p>
            </div>`;

        document.getElementById('modalDesc').innerHTML = contentHTML;
        document.getElementById('modalDuration').style.display = 'none';
        modal.style.display = "flex";
    }

    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (modal && e.target == modal) modal.style.display = "none"; }
});