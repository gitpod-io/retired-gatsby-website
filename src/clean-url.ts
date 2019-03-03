
export function clean(url:string) : string {
    let cleaned = url.replace('http://localhost:8000', '');
    cleaned = url.replace('http://127.0.0.1:8000', '');
    cleaned = url.replace('http://0.0.0.0:8000', '');
    return cleaned;
}
