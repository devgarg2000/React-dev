

function Food(){
    const food1 = "Daal Chawal"
    const food2 = "Rajma Chawal"
    
    return (
        <ul>
            <li>Shakes</li>
            <li>Ice cream</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}
export default Food;