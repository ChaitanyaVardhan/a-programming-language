function skipSpace(string) {
    let first = string.search(/\S/)
    if (first == -1) return ""
    return string.slice(first)
}

console.log(skipSpace('     Skip the leading spaces'))