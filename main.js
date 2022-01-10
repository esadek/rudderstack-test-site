function identify() {
    rudderanalytics.identify(
        "1234",
        {
            email: "steve@smith.com",
            name: "Steve Smith"
        }
    );
}

function page() {
    rudderanalytics.page();
}

function track() {
    rudderanalytics.track(
        "Product Reviewed",
        {
            review_id: "1234",
            product_id: "5678",
            rating: 3.0,
            review_body: "Average product, expected much more."
        }
    );
}

function alias() {
    rudderanalytics.alias("1234", "5678");
}

function group() {
    rudderanalytics.group(
        "1234",
        {
            name: "My Group",
            industry: "IT",
            employees: 450,
            plan: "basic"
        }
    )
}

function reset() {
    rudderanalytics.reset();
}