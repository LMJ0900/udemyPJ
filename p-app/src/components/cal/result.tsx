import {calculateInvestmentResults, formatter} from '@/app/cal/util/investment.js'

export default function Results({input}:any) {
    console.log(input)
    const resultData = calculateInvestmentResults(input)
    const initalInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest-
    resultData[0].annualInvestment
    console.log(resultData)
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-
                initalInvestment
                const totalAmountInvested = yearData.valueEndOfYear -totalInterest
                return(
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            )
            })}
        </tbody>
    </table>
}