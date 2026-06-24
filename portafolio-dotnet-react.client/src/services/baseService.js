export async function apiFetch(url, retries = 5, delay = 1000) {
    try {
        const response = await fetch(url);

        //not used : only if i want to use autorization in the API controller.
        // fetch(url, {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // });



        // ERROR SERVER → retry
        if (response.status >= 500) {
            throw new Error("Server error");
        }

        // ERROR CLIENT → NO retry
        if (!response.ok) {
            console.error("Client error:", response.status);
            return {
                error: true,
                status: response.status
            };
        }


        return await response.json();

    } catch (error) {
        if (retries === 0) {
            console.error("API failed:", error);
            throw error;
        }

        await new Promise(res => setTimeout(res, delay));
        return apiFetch(url, retries - 1, delay);
    }
}