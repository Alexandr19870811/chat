// This function generate random numbers between min and max values.

export function randomNumberGenerator(min: number, max: number): number {
    return Math.round(min + Math.random() * (max - min))
}
