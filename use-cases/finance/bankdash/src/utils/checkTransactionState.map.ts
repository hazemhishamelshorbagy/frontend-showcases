import { TransactionState, validStatuses } from "@/interfaces/Transaction";

export function checkTransactionState(status: validStatuses): TransactionState {

    switch (status.toLowerCase()) {
        case "pending":
            return {
                stateColor: "orange-500",
                text: "Pending",
            }
        case "completed":
            return {
                stateColor: "green-500",
                text: "Completed",
            }
        case "failed":
            return {
                stateColor: "red-500",
                text: "Failed",
            }
        default:
            return {
                stateColor: "gray-500",
                text: "Unknown",
            }
    }
}

// validStatuses.includes(status);
