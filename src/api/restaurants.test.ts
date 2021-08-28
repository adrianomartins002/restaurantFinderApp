import * as restaurants from "./restaurants"
// @ponicode
describe("restaurants.getRestaurants", () => {
    test("0", () => {
        let callFunction: any = () => {
            restaurants.getRestaurants({ page: -29.45, limit: 5, search: "UNLOCK TABLES;" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            restaurants.getRestaurants({ page: 0.5, limit: 16, search: "DROP TABLE tmp;" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            restaurants.getRestaurants({ page: -1.0, limit: 6, search: "UPDATE Projects SET pname = %s WHERE pid = %s" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            restaurants.getRestaurants({ page: -1.0, limit: 0, search: "UNLOCK TABLES;" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            restaurants.getRestaurants({ page: -0.5, limit: 30, search: "DROP TABLE tmp;" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            restaurants.getRestaurants({ page: NaN, limit: NaN, search: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
