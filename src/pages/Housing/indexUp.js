function IndexUp (x, z) {
    let indexLength = z.pictures.length
    if (x === indexLength-1) {
        return 0
    } else {
        return x+1
    }
}

export default IndexUp