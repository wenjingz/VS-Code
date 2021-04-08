/**
 * we declare here that the only strategies we can have are MAV and BOLLINGER 
 *
 **/
type IdStrategy = "MAV" | "BOLLINGER" | 42 | number
/**
 * we impose that a Strategy object is a Javascript object that has a key 'id'
 * , whose value can only be an id of strategy (MAV or BOOLINGER here)
 * */
interface Strategy {
    id: IdStrategy,
    params?: number | [number, number],
}

type IdStrategyMul = Array<IdStrategy> // return value of parseStrategy down here

var parseStrategy =
        (s: Strategy): IdStrategy => s.id 

var parseMultipleStrategies =
    (strategies: Array<Strategy>): IdStrategyMul => strategies.map(parseStrategy)


// our first strategy
var strat: Strategy = { "id": "MAV" } 

// with multiple strategies
console.log(parseMultipleStrategies([
    { "id": "BOLLINGER" },
    { "id": "MAV", "params": [20, 30] },
    { "id": 1, "params": 1 }, // we also authorised numbers as ids
    { "id": 42 }
]))
