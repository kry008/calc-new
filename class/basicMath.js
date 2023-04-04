class BasicMath
{
    addition(a, b)
    {
        return {a: a, b: b, result: a + b};
    }
    addition(a, b, c)
    {
        return {a: a, b: b, c: c, result: a + b + c};
    }
    addition(a)
    {
        var sum = 0;
        for (var i = 0; i < a.length; i++)
        {
            sum += a[i];
        }
        return {a: a, result: sum};
    }
    subtraction(a, b)
    {
        return {a: a, b: b, result: a - b};
    }
    subtraction(a, b, c)
    {
        return {a: a, b: b, c: c, result: a - b - c};
    }
    subtraction(a)
    {
        var sum = 0;
        for (var i = 0; i < a.length; i++)
        {
            sum -= a[i];
        }
        return {a: a, result: sum};
    }
    multiplication(a, b)
    {
        return {a: a, b: b, result: a * b};
    }
    multiplication(a, b, c)
    {
        return {a: a, b: b, c: c, result: a * b * c};
    }
    multiplication(a)
    {
        var sum = 1;
        for (var i = 0; i < a.length; i++)
        {
            sum *= a[i];
        }
        return {a: a, result: sum};
    }
    division(a, b)
    {
        if (b == 0)
        {
            return {a: a, b: b, result: "Cannot divide by zero"};
        }
        return {a: a, b: b, result: a / b};
    }
    division(a, b, c)
    {
        if (b == 0 || c == 0)
        {
            return {a: a, b: b, c: c, result: "Cannot divide by zero"};
        }
        return {a: a, b: b, c: c, result: a / b / c};
    }
    division(a)
    {
        var sum = 1;
        for (var i = 0; i < a.length; i++)
        {
            //check for divide by zero
            if (a[i] == 0)
            {
                return {a: a, result: "Cannot divide by zero"};
            }
            sum /= a[i];
        }
        return {a: a, result: sum};
    }
    modulo(a, b)
    {
        return {a: a, b: b, result: a % b};
    }
    power(a, b)
    {
        if(b == 0)
        {
            return {a: a, b: b, result: 1};
        }
        if(b < 0)
        {
            // Example: 5^3 = 1 ÷ 5 ÷ 5 ÷ 5 = 0,008
            let sum = 1;
            for (var i = 0; i < b; i++)
            {
                sum /= a;
            }
            return {a: a, b: b, result: sum};
        }
        if(b > 0)
        {
            let sum = 1;
            for (var i = 0; i < b; i++)
            {
                sum *= a;
            }
            return {a: a, b: b, result: sum};
        }
    }
    absolute(a)
    {
        if(a < 0)
        {
            return {a: a, result: a * -1};
        }
        return {a: a, result: a};
    }
    squareRoot(a)
    {
        return {a: a, result: a*a}
    }
    logarithm(a, b)
    {
        if(a == 0)
        {
            return {a: a, b: b, result: "Cannot divide by zero"};
        }
        if(b == 0)
        {
            return {a: a, b: b, result: "Cannot divide by zero"};
        }
        if(a == 1)
        {
            return {a: a, b: b, result: "Cannot divide by zero"};
        }
        if(a == -1)
        {
            return {a: a, b: b, result: "Cannot divide by zero"};
        }
        if(a == b)
        {
            return {a: a, b: b, result: 1};
        }
        if(a == -b)
        {
            return {a: a, b: b, result: 1};
        }
        let sum = 1;
        for (var i = 0; i < b; i++)
        {
            sum *= a;
        }
        return {a: a, b: b, result: sum};
    }
    logarithm(a)
    {
        if(a == 0)
        {
            return {a: a, result: "Cannot divide by zero"};
        }
        if(a == 1)
        {
            return {a: a, result: "Cannot divide by zero"};
        }
        if(a == -1)
        {
            return {a: a, result: "Cannot divide by zero"};
        }
        return {a: a, result: Math.log(a)};
    }
    factorial(a)
    {
        if(a == 0)
        {
            return {a: a, result: 1};
        }
        let sum = 1;
        for (var i = 1; i <= a; i++)
        {
            sum *= i;
        }
        return {a: a, result: sum};
    }
    mathRoot(base, root = 2)
    {
        if(base == 0)
        {
            return {base: base, root: root, result: 0};
        }
        if(root < 0)
        {
            return {base: base, root: root, result: "Cannot divide by zero"};
        }
        if(root == 0)
        {
            return {base: base, root: root, result: "Cannot divide by zero"};
        }
        if(base < 0)
        {
            return {base: base, root: root, result: "Cannot divide by zero"};
        }
        return {base: base, root: root, result: Math.pow(base, 1/root)};
    }
    sinDegrees(a)
    {
        if(a == 0)
        {
            return {a: a, result: 0};
        }
        return {a: a, result: Math.sin(a * Math.PI / 180)};
    }
    cosDegrees(a)
    {
        if(a == 0)
        {
            return {a: a, result: 1};
        }
        return {a: a, result: Math.cos(a * Math.PI / 180)};
    }
    tanDegrees(a)
    {
        if(a == 0)
        {
            return {a: a, result: 0};
        }
        return {a: a, result: Math.tan(a * Math.PI / 180)};
    }
    sinRadians(a)
    {
        if(a == 0)
        {
            return {a: a, result: 0};
        }
        return {a: a, result: Math.sin(a)};
    }
    cosRadians(a)
    {
        if(a == 0)
        {
            return {a: a, result: 1};
        }
        return {a: a, result: Math.cos(a)};
    }
    tanRadians(a)
    {
        if(a == 0)
        {
            return {a: a, result: 0};
        }
        return {a: a, result: Math.tan(a)};
    }
    round(a, precision = 0)
    {
        if(precision == 0)
        {
            return {a: a, precision: precision, result: Math.round(a)};
        }
        if(precision < 0)
        {
            a = a * Math.pow(10, precision);
            a = Math.round(a);
            a = a / Math.pow(10, precision);
            return {a: a, precision: precision, result: a};
        }
        if(precision > 0)
        {
            a = a * Math.pow(10, precision);
            a = Math.round(a);
            a = a / Math.pow(10, precision);
            return {a: a, precision: precision, result: a};
        }
        
    }
    
}

module.exports = BasicMath;