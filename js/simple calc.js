prompt("Please enter an equation. Note: do ** for powers and exponents.")
    .then(async p => {
        try {
            let e = await eval(p);
            alert(e);
        } catch {
            alert("This appears to be invalid. Please try again");
        }
    });
/* Don't use eval in any public level of code, 
especially on servers, 
as people can use it maliciously, 
since eval can execute any js code in there. */
