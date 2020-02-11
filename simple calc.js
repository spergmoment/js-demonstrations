prompt("Please enter an equation. Note: do ** for powers and exponents.")
    .then(async p => {
        try {
            let e = await eval(p);
            alert(e);
        } catch {
            alert("This appears to be invalid. Please try again");
        }
    });
