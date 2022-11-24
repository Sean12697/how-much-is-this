window.addEventListener('load', function() {
    // 
    this.document.getElementById("submit").addEventListener("click", () => {
            let currancySymbol = "£";
            let value = this.document.getElementById("value").value;
            let output = this.document.getElementById("output");

        if (this.document.getElementById("country").value == "US") {
            let item = prices[Math.floor(Math.random() * prices.length)];
            let _quantity = value / item.unit, quantity = _quantity;
            let isExact = _quantity % 1 == 0;
            let preceedingText = "";

            if (!isExact) {
                let higher = Math.round(Math.random());
                quantity = higher ? Math.ceil(_quantity) : Math.floor(_quantity);
                preceedingText = `A little ${ higher ? "less" : "more" } than `;
            }

            output.innerText = `${preceedingText}${ quantity.toLocaleString( undefined, {}) } ${ item.name }${ quantity > 1 ? "'s" : "" }*`;
            this.document.getElementById("source").innerHTML = `*Based on the price of ${currancySymbol}${item.unit.toLocaleString(undefined, { minimumFractionDigits: 2 })} per ${ item.name }, based on information manually collected from <a href="${ item.source.link }" target="_blank">${ item.source.name }</a> on ${ item.source.lastVisited }.`;
        } else {
            output.innerText = `${currancySymbol}${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
        }
    })
});

const prices = [{
    unit: 0.25,
    name: "Freddo",
    source: {
        name: "Sainsbury's",
        link: "https://www.sainsburys.co.uk/gol-ui/product/single-bar-chocolate/cadbury-freddo-18g",
        lastVisited: "24-11-2022"
    }
}];