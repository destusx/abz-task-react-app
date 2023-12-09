export const request = async (
    url: string,
    method: 'GET' | 'POST' = 'GET',
    body: string | null = null,
    token?: string | null
) => {
    try {
        const headers: HeadersInit = new Headers();

        if (token) {
            headers.append('Token', token);
        }

        const res = await fetch(url, {
            method,
            body,
            headers,
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        throw error;
    }
};
