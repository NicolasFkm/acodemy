// Not pure
var PI_VALUE = 3.14;

const SharedContext = () => {
    function CalculateArea(radius)
    {
        // Depending on a shared context
        return Math.pow(radius, 2)*PI_VALUE;
    }
    
    function CalculateAreaPure(radius, pi)
    {
        // Will return the same result when executed with the same arguments
        return Math.pow(radius, 2)*pi;
    }
    
    console.log(CalculateArea(3));
    PI_VALUE = 5;
    console.log(CalculateArea(3));
    
    console.log(CalculateAreaPure(3, 3.14));
    console.log(CalculateAreaPure(3, 3.14));
    console.log(CalculateAreaPure(3, 5));
    console.log(CalculateAreaPure(3, 5));
}

SharedContext();