// handle form submission for saving user inputs from html page 2
document.getElementById("vitamin-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    //take in all the user inputs and checked boxes
    const data = {
        ashwaganda: document.getElementById("ashwaganda").value || "", 
        ashwaganda_checked: document.getElementById("ashwaganda_checked").checked, 
        calcium: document.getElementById("calcium").value || "",
        calcium_checked: document.getElementById("calcium_checked").checked, 
        coq10: document.getElementById("coq10").value || "",
        coq10_checked: document.getElementById("coq10_checked").checked, 
        collagen: document.getElementById("collagen").value || "",
        collagen_checked: document.getElementById("collagen_checked").checked, 
        curcumin: document.getElementById("curcumin").value || "",
        curcumin_checked: document.getElementById("curcumin_checked").checked, 
        elderberry: document.getElementById("elderberry").value || "",
        elderberry_checked: document.getElementById("elderberry_checked").checked, 
        fish_oil: document.getElementById("fish_oil").value || "",
        fish_oil_checked: document.getElementById("fish_oil_checked").checked, 
        ginkgo: document.getElementById("ginkgo").value || "",
        ginkgo_checked: document.getElementById("ginkgo_checked").checked, 
        ginseng: document.getElementById("ginseng").value || "",
        ginseng_checked: document.getElementById("ginseng_checked").checked, 
        iron: document.getElementById("iron").value || "",
        iron_checked: document.getElementById("iron_checked").checked, 
        magnesium: document.getElementById("magnesium").value || "",
        magnesium_checked: document.getElementById("magnesium_checked").checked, 
        melatonin: document.getElementById("melatonin").value || "",
        melatonin_checked: document.getElementById("melatonin_checked").checked, 
        minerals: document.getElementById("minerals").value || "",
        minerals_checked: document.getElementById("minerals_checked").checked, 
        multivitamins: document.getElementById("multivitamins").value || "",
        multivitamins_checked: document.getElementById("multivitamins_checked").checked, 
        probiotics: document.getElementById("probiotics").value || "",
        probiotics_checked: document.getElementById("probiotics_checked").checked, 
        vitamin_a: document.getElementById("vitamin_a").value || "",
        vitamin_a_checked: document.getElementById("vitamin_a_checked").checked, 
        vitamin_b1: document.getElementById("vitamin_b1").value || "",
        vitamin_b1_checked: document.getElementById("vitamin_b1_checked").checked, 
        vitamin_b2: document.getElementById("vitamin_b2").value || "",
        vitamin_b2_checked: document.getElementById("vitamin_b2_checked").checked, 
        vitamin_b3: document.getElementById("vitamin_b3").value || "",
        vitamin_b3_checked: document.getElementById("vitamin_b3_checked").checked, 
        vitamin_b5: document.getElementById("vitamin_b5").value || "",
        vitamin_b5_checked: document.getElementById("vitamin_b5_checked").checked, 
        vitamin_b6: document.getElementById("vitamin_b6").value || "",
        vitamin_b6_checked: document.getElementById("vitamin_b6_checked").checked, 
        vitamin_b7: document.getElementById("vitamin_b7").value || "",
        vitamin_b7_checked: document.getElementById("vitamin_b7_checked").checked, 
        vitamin_b9: document.getElementById("vitamin_b9").value || "",
        vitamin_b9_checked: document.getElementById("vitamin_b9_checked").checked, 
        vitamin_b12: document.getElementById("vitamin_b12").value || "",
        vitamin_b12_checked: document.getElementById("vitamin_b12_checked").checked, 
        vitamin_c: document.getElementById("vitamin_c").value || "",
        vitamin_c_checked: document.getElementById("vitamin_c_checked").checked, 
        vitamin_d: document.getElementById("vitamin_d").value || "",
        vitamin_d_checked: document.getElementById("vitamin_d_checked").checked, 
        vitamin_e: document.getElementById("vitamin_e").value || "",
        vitamin_e_checked: document.getElementById("vitamin_e_checked").checked, 
        vitamin_k: document.getElementById("vitamin_k").value || "",
        vitamin_k_checked: document.getElementById("vitamin_k_checked").checked, 
        zinc: document.getElementById("zinc").value || "",
        zinc_checked: document.getElementById("zinc_checked").checked, 
    };

    const checkedSupplements = [];

    // find all checkboxes, then extract the names of the checked ones and put in list
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        checkedSupplements.push(checkbox.id.replace("_checked", ""));
      }
    }
    
    //send data to the server (using FormData)
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    
    // add checked supplements to FormData
    formData.append("checked_supplements", JSON.stringify(checkedSupplements)); 

    // send data to the server
    fetch("/submit", {
        method: "POST",
        body: formData
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert("Data saved successfully!");
        } else {
            alert("Failed to save data. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

