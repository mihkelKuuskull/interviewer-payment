import { Request } from 'express';
import fetch from 'node-fetch';

export async function handler(request: Request) {
    const { url } = request.body;
    setTimeout(async () => {
        await fetch(url, { method: 'post', body: { status: 'success' }});
    }, 5000);
    return {
        url: 'https://www.gigachadpayments.com/AE231-123',
    }
}
