

export default async function handleGAClicks ( event_name: string, params: { [key: string]: string }) {
    (window as any).gtag('event', event_name, { params });
}