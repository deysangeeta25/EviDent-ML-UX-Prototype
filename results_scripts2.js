document.addEventListener("DOMContentLoaded", function () {
    const scaleBar = document.getElementById("scaleBar");
    const labelContainer = document.getElementById("labelContainer");
    const markerContainer = document.getElementById("markerContainer");

    // Define the range of the scale
    const minValue = 0;
    const maxValue = 1;

    //Define the variables for belief and plausibility
    
    let reqType2="Collection Requirement";
    var belief=0.55;
	var plausibility=0.75;
	var disbelief=(1-plausibility);
	var uncertainty=(plausibility-belief).toFixed(2);
	
    document.getElementById('belief').textContent=belief;
    document.getElementById('plausibility').textContent=plausibility;
    document.getElementById('disbelief').textContent=disbelief;
    document.getElementById('uncertainty').textContent=uncertainty;
  
  
  	/*document.getElementById('belief2').textContent=belief;
    document.getElementById('plausibility2').textContent=plausibility;
    document.getElementById('disbelief2').textContent=disbelief;
    document.getElementById('uncertainty2').textContent=uncertainty;*/
         


    // Define dynamic segment ranges with labels
    const segments = [
        { start: 0, end: belief, color: "green", label: "Belief" },
        { start: belief, end: plausibility, color: "yellow", label: "Uncertain" },
        { start: plausibility, end: 1, color: "red", label: "Disbelief" }
    ];

    // Define markers including range numbers
    const markers = [minValue, belief, plausibility, maxValue];

    // Generate segments dynamically
    segments.forEach(segment => {
        let segmentDiv = document.createElement("div");
        let segmentWidth = ((segment.end - segment.start) / (maxValue - minValue)) * 100;

        // Create color segment
        segmentDiv.style.width = segmentWidth + "%";
        segmentDiv.style.height = "100%";
        segmentDiv.style.backgroundColor = segment.color;
        
        scaleBar.appendChild(segmentDiv);

        // Create label above the segment
        let labelDiv = document.createElement("div");
        labelDiv.classList.add("label");
        labelDiv.style.width = segmentWidth + "%";
        labelDiv.textContent = segment.label;

        labelContainer.appendChild(labelDiv);
    });

    // Generate marker values dynamically (including scale range)
    markers.forEach(value => {
        let valueDiv = document.createElement("div");
        valueDiv.classList.add("value");
        valueDiv.textContent = value;

        // Calculate the position of the value
        let position = ((value - minValue) / (maxValue - minValue)) * 100;
        valueDiv.style.left = position + "%";

        markerContainer.appendChild(valueDiv);
    });
});
