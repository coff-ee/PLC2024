sgn x = if x < 0 then -1 else if x == 0 then 0 else 1

sgn1 x  | x < 0 = -1
        | x == 0 = 0
        | x > 0 = 1

main = do
    putStrLn "Please enter a number"
    input <- getLine 
    let x = (read input :: Int)
    putStrLn( show (sgn1 (x)) )