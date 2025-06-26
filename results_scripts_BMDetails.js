document.addEventListener("DOMContentLoaded", function () {
    const scaleBar = document.getElementById("scaleBar");
    const labelContainer = document.getElementById("labelContainer");
    const markerContainer = document.getElementById("markerContainer");

    // Define the range of the scale
    const minValue = 0;
    const maxValue = 1;

    //Define the variables for belief and plausibility
    
    let reqType2="Collection Requirement";
    var beliefML=0.67;
	var plausibilityML=0.84;
	var disbeliefML=(1-plausibilityML).toFixed(2);
	var uncertaintyML=(plausibilityML-beliefML).toFixed(2);
	
	var beliefSys=0.22;
	var plausibilitySys=0.5;
	var disbeliefSys=(1-plausibilitySys).toFixed(2);
	var uncertaintySys=(plausibilitySys-beliefSys).toFixed(2);
	
	var beliefComb=0.37;
	var plausibilityComb=0.78;
	var disbeliefComb=(1-plausibilityComb).toFixed(2);
	var uncertaintyComb=(plausibilityComb-beliefComb).toFixed(2);
	
    document.getElementById('beliefML').textContent=beliefML;
    document.getElementById('disbeliefML').textContent=disbeliefML;
    document.getElementById('uncertaintyML').textContent=uncertaintyML;
  
  
   document.getElementById('beliefSys').textContent=beliefSys;
    document.getElementById('disbeliefSys').textContent=disbeliefSys;
    document.getElementById('uncertaintySys').textContent=uncertaintySys;
    
     document.getElementById('belief').textContent=beliefComb;
    document.getElementById('plausibility').textContent=plausibilityComb;
    document.getElementById('disbelief').textContent=disbeliefComb;
    document.getElementById('uncertainty').textContent=uncertaintyComb;
  
  	/*document.getElementById('belief2').textContent=belief;
    document.getElementById('plausibility2').textContent=plausibility;
    document.getElementById('disbelief2').textContent=disbelief;
    document.getElementById('uncertainty2').textContent=uncertainty;*/
         


    // Define dynamic segment ranges with labels
    const segments = [
        { start: 0, end: beliefComb, color: "green", label: "Belief" },
        { start: beliefComb, end: plausibilityComb, color: "yellow", label: "Uncertain" },
        { start: plausibilityComb, end: 1, color: "red", label: "Disbelief" }
    ];

    // Define markers including range numbers
    const markers = [minValue, beliefComb, plausibilityComb, maxValue];

    // Clear existing content
    scaleBar.innerHTML = '';
    labelContainer.innerHTML = '';
    markerContainer.innerHTML = '';

    // Generate segments dynamically
    segments.forEach(segment => {
        let segmentDiv = document.createElement("div");
        let segmentWidth = ((segment.end - segment.start) / (maxValue - minValue)) * 100;

        // Create color segment
        segmentDiv.style.width = segmentWidth + "%";
        segmentDiv.style.height = "100%";
        segmentDiv.style.backgroundColor = segment.color;
        segmentDiv.style.display = "inline-block";
        
        scaleBar.appendChild(segmentDiv);

        // Create label above the segment
        let labelDiv = document.createElement("div");
        labelDiv.classList.add("label");
        labelDiv.style.width = segmentWidth + "%";
        labelDiv.style.display = "inline-block";
        labelDiv.textContent = segment.label;

        labelContainer.appendChild(labelDiv);
    });

    // Generate marker values dynamically (including scale range)
    markers.forEach(value => {
        let valueDiv = document.createElement("div");
        valueDiv.classList.add("value");
        valueDiv.textContent = value.toFixed(2);

        // Calculate the position of the value
        let position = ((value - minValue) / (maxValue - minValue)) * 100;
        valueDiv.style.left = position + "%";

        markerContainer.appendChild(valueDiv);
    });
});
