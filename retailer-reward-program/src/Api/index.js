import { logger } from "../Utils/logger";

const apiService = {
    // get all customers
    getCustomers() {
        return fetch("http://localhost:5000/customers")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok in getCustomers");
                }
                return response.json();
            })
            .catch(error => {
                logger.error(
                    "There was a problem with the fetch operation getCustomers:",
                    error
                );
                throw new Error("Network response was not ok in getCustomers");
            });
    },
    // get transactions by startdate and enddate
    getTransactionsByMonth(startDate, endDate) {
        return fetch(
            `http://localhost:5000/transactions?purchase_date_gte=${startDate}&purchase_date_lt=${endDate}`
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok in getTransactionsByMonth");
                }
                return response.json();
            })
            .catch(error => {
                logger.error(
                    "There was a problem with the fetch operation in getTransactionsByMonth:",
                    error
                );
                throw new Error("Network response was not ok in getTransactionsByMonth");
            });
    },
    // get all transactions
    getTransactions() {
        return fetch(`http://localhost:5000/transactions`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok in getTransactions");
                }
                return response.json();
            })
            .catch(error => {
                logger.error(
                    "There was a problem with the fetch operation in getTransactions:",
                    error
                );
                throw new Error("Network response was not ok in getTransactions");
            });
    },
};

export default apiService;