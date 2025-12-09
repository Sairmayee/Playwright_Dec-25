const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion == "Chrome") {
        
        let browserVersion = "Local Chrome Version";
        console.log("Inside if block:", browserVersion);
    }

    //var browserVersion = "Outside Chrome Version"
    console.log("Outside if block:", browserVersion);
}

getBrowserVersion();