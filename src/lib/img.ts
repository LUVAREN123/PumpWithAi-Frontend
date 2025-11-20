export default function asset(path: string): string {
    return new URL(path, import.meta.url).href
}