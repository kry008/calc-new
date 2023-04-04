class FiguresMath
{
    squareArea(side)
    {
        return {side: side, area: side * side}
    }
    squarePerimeter(side)
    {
        return {side: side, perimeter: side * 4}
    }
    squareDiagonal(side)
    {
        return {side: side, diagonal: Math.sqrt(2 * side * side)}
    }

}

module.exports = FiguresMath;