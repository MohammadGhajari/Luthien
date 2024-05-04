function checkFilters(filters) {
    let status = true;

    const filtersKeys = Object.keys(filters);
    filtersKeys.forEach((key) => {
        if (key !== "hotelName" && filters[key]) status = false;
    });

    return status;
}

export function filter(raw, filters) {
    let filtered = [];
    if (checkFilters(filters)) {
        filtered = raw;
    } else {
        raw.forEach((hotel) => {
            if (filters.threeStar && hotel.stars <= 3) {
                filtered.push(hotel);
            }
            if (filters.fourStar && hotel.stars === 4) {
                filtered.push(hotel);
            }
            if (filters.fiveStar && hotel.stars === 5) {
                filtered.push(hotel);
            }
            if (
                filters.swimmingPool &&
                hotel.facilities.includes("swimming pool")
            )
                filtered.push(hotel);
            if (filters.teaMaker && hotel.facilities.includes("tea maker"))
                filtered.push(hotel);
            if (filters.prayerRoom && hotel.facilities.includes("prayer room"))
                filtered.push(hotel);
            if (
                filters.askInsideRoom &&
                hotel.facilities.includes("ask inside room")
            )
                filtered.push(hotel);
            if (filters.freeWifi && hotel.facilities.includes("free wifi"))
                filtered.push(hotel);
            if (filters.gym && hotel.facilities.includes("gym"))
                filtered.push(hotel);
            if (filters.pet && hotel.facilities.includes("pet"))
                filtered.push(hotel);
            if (filters.game && hotel.facilities.includes("game"))
                filtered.push(hotel);
            if (filters.shopping && hotel.facilities.includes("shopping"))
                filtered.push(hotel);
            if (filters.parking && hotel.facilities.includes("parking"))
                filtered.push(hotel);
            if (filters.elevator && hotel.facilities.includes("elevator"))
                filtered.push(hotel);
            if (filters.breakfast && hotel.facilities.includes("breakfast"))
                filtered.push(hotel);
            if (filters.restaurant && hotel.facilities.includes("restaurant"))
                filtered.push(hotel);
            if (
                filters.allHoursServices &&
                hotel.facilities.includes("all hours services")
            )
                filtered.push(hotel);
            if (
                filters.fireExtinguishing &&
                hotel.facilities.includes("fire extinguishing")
            )
                filtered.push(hotel);
            if (filters.wallCloset && hotel.facilities.includes("wall closet"))
                filtered.push(hotel);
            if (filters.helpBox && hotel.facilities.includes("help box"))
                filtered.push(hotel);
            if (
                filters.partyServices &&
                hotel.facilities.includes("party services")
            )
                filtered.push(hotel);
            if (filters.taxi && hotel.facilities.includes("taxi"))
                filtered.push(hotel);
            if (filters.ATM && hotel.facilities.includes("ATM"))
                filtered.push(hotel);
            if (filters.library && hotel.facilities.includes("library"))
                filtered.push(hotel);
        });
    }

    return filtered;
}
