export declare function osm(x: number, y: number, z: number): string;
export declare function stamenToner(x: number, y: number, z: number, dpr?: number): string;
export declare function stamenTerrain(x: number, y: number, z: number, dpr?: number): string;
export declare const maptiler: (apiKey: string, map?: string) => (x: number, y: number, z: number, dpr?: number) => string;
