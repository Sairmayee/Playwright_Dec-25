// Create two functions : launchBrowser, runTests where,
// a) launchBrowser need to take input as browserName (string) and do not return any
// - use if-else (chrome or otherwise)
// - Print the value
// b) runTests need to take input as testType (string) and do not return any
// - use switch case (smoke, sanity, regression, default (smoke))
// - Print the values
// Call that function from the javascript

function launchBrowser(bname){
    if (bname == "Chrome"){
        console.log("The given browser is Chrome")
    }
    else if (bname == "Edge"){
        console.log("The given browser is Edge")
    }
    else if (bname == "Safari"){
        console.log("The given browser is Safari")
    }
    else {
        console.log("Browser not supported")
    }
}

function runTests(testType){
    switch (testType){
        case "Smoke":
        console.log("Smoke Test in progress"); 
        break;
        case "Regression":
            console.log("Regression Testing in progress");
            break;
        case "Sanity":
            console.log("Sanity Test in progress");
            break;
        default:
            console.log("Smoke Test in progress");
            break;
        }
}

runTests("Sanity");
runTests("Smoke");
launchBrowser("Chrome");
launchBrowser("Edge");
launchBrowser("Safari");
runTests();
runTests("Sanity");
runTests("Regression");