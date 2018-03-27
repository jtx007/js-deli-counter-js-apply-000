function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, $(name). You are number ${katzDeliLine[name]} in line.`
}
