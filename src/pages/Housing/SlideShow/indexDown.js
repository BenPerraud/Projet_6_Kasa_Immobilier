function IndexDown (x, z) {
    const indexLength = z.pictures.length
    if (x === 0) {
        return indexLength-1
    } else {
        return x-1
    }
}

export default IndexDown