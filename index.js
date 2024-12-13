document.getElementById("user-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Collect user input
    const data = {
        ash_mg: document.getElementById("ash_mg").value,
        cal_mg: document.getElementById("cal_mg").value,
        coq_mg: document.getElementById("coq_mg").value,
        col_mg: document.getElementById("col_mg").value,
        cur_mg: document.getElementById("cur_mg").value,
        eld_mg: document.getElementById("eld_mg").value,
        fish_mg: document.getElementById("fish_mg").value,
        gink_mg: document.getElementById("gink_mg").value,
        gin_mg: document.getElementById("gin_mg").value,
        iron_mg: document.getElementById("iron_mg").value,
        mag_mg: document.getElementById("mag_mg").value,
        mela_mg: document.getElementById("mela_mg").value,
        min_mg: document.getElementById("min_mg").value,
        mul_mg: document.getElementById("mul_mg").value,
        pro_mg: document.getElementById("pro_mg").value,
        vita_mg: document.getElementById("vita_mg").value,
        vitb1_mg: document.getElementById("vitb1_mg").value,
        vitb2_mg: document.getElementById("vitb2_mg").value,
        vitb3_mg: document.getElementById("vitb3_mg").value,
        vitb5_mg: document.getElementById("vitb5_mg").value,
        vitb6_mg: document.getElementById("vitb6_mg").value,
        vitb7_mg: document.getElementById("vitb7_mg").value,
        vitb9_mg: document.getElementById("vitb9_mg").value,
        vitb12_mg: document.getElementById("vitb12_mg").value,
        vitc_mg: document.getElementById("vitc_mg").value,
        vitd_mg: document.getElementById("vitd_mg").value,
        vite_mg: document.getElementById("vite_mg").value,
        vitk_mg: document.getElementById("vitk_mg").value,
        zinc_mg: document.getElementById("zinc_mg").value,
    };


    // Send data to the server
    fetch("/save-data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        alert("Data saved successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
    });
});