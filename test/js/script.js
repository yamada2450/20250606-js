function calculateShipping(amount) {
    if (amount >= 3000) {
        console.log("送料は無料です");
    } else {
        console.log("送料は500円です");
    }
}

calculateShipping(4000);
calculateShipping(2000);
calculateShipping(3000);
