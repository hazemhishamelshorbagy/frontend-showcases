export type ButtonAsLink = {
    href: string | URL
    asChild?: true
}

export type ButtonAsButton = {
    href?: undefined
    asChild?: false
}