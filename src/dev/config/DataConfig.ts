/// <reference path= '../enum/SlotEnum.ts'/>
/// <reference path= '../enum/DataEnum.ts'/>
namespace Dev.Config {

    export class DataConfig {

        static PayoutData : Array<Interface.IPayout> = [
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:125,cents:125},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol2}
                ],
                payout:{coins:125,cents:125},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol3}
                ],
                payout:{coins:125,cents:125},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol4}
                ],
                payout:{coins:125,cents:175},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol5}
                ],
                payout:{coins:150,cents:175},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Wild}
                ],
                payout:{coins:150,cents:175},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:10,cents:10},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol3}
                ],
                payout:{coins:50,cents:50},
                lineIndex:0
            },
            {
                combination:[
                    {count:1,symbol:Enum.SlotSymbol.Wild},
                    {count:1,symbol:Enum.SlotSymbol.Symbol4}
                ],
                payout:{coins:75,cents:75},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol2}
                ],
                payout:{coins:20,cents:20},
                lineIndex:0
            },
            {
                combination:[
                    {count:1,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:5,cents:5},
                lineIndex:0
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol4}
                ],
                payout:{coins:1000,cents:1000},
                lineIndex:1
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Wild}
                ],
                payout:{coins:150,cents:150},
                lineIndex:1
            },    {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol3}
                ],
                payout:{coins:50,cents:50},
                lineIndex:1
            },{
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol2}
                ],
                payout:{coins:20,cents:20},
                lineIndex:1
            }, {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:10,cents:10},
                lineIndex:1
            },
            {
                combination:[
                    {count:1,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:5,cents:5},
                lineIndex:1
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol4}
                ],
                payout:{coins:4000,cents:4000},
                lineIndex:2
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Wild}
                ],
                payout:{coins:150,cents:150},
                lineIndex:2
            },
            {
                combination:[
                    {count:1,symbol:Enum.SlotSymbol.Symbol4},
                    {count:1,symbol:Enum.SlotSymbol.Wild}
                ],
                payout:{coins:75,cents:75},
                lineIndex:2
            },
            {
                combination:[
                    {count:1,symbol:Enum.SlotSymbol.Symbol4},
                    {count:1,symbol:Enum.SlotSymbol.Wild}
                ],
                payout:{coins:75,cents:75},
                lineIndex:2
            },
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol3}
                ],
                payout:{coins:50,cents:50},
                lineIndex:2
            },
            
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol2}
                ],
                payout:{coins:20,cents:20},
                lineIndex:2
            },
           
            {
                combination:[
                    {count:3,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:10,cents:10},
                lineIndex:2
            },
            {
                combination:[
                    {count:1,symbol:Enum.SlotSymbol.Symbol1}
                ],
                payout:{coins:5,cents:5},
                lineIndex:2
            }
        ]
    }
}