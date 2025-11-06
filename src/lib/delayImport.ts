import type React from "react";

export default function delayImport(
    importFn: Function,
    delay: number = 2000
): Promise<{
    default: React.ComponentType<any>
}> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(importFn()), delay);
    })
}