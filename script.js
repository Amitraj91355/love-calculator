document.getElementById("calculateBtn").addEventListener("click", function () {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();
    
    if (name1 === "" || name2 === "") {
      document.getElementById("result").textContent = "Please enter both names.";
    } else {
      const lovePercentage = calculateLovePercentage(name1, name2);
      document.getElementById("result").textContent = `Love Percentage: ${lovePercentage}%`;
    }
  });
  
  function calculateLovePercentage(name1, name2) {
    const combinedNames = (name1 + name2).toLowerCase();
    let loveScore = 0;
    
    for (let i = 0; i < combinedNames.length; i++) {
      loveScore += combinedNames.charCodeAt(i);
    }
    
    return loveScore % 101; // Return a percentage value between 0 and 100
  }
  