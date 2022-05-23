const {enter, leave, occupancy, reset, total, resetTotal} = require('../src/soft-play.js')

describe("Soft Play", () => {  
  
  it("Initial state is empty", function() {
    reset()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child enter", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })
  
  it("Single adult with 2 children cannot enter", function() {
    reset()
    expect(enter(1,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("2 adults with 1 child can enter", function() {
    reset()
    expect(enter(2,1)).toBeTrue()
    expect(occupancy()).toEqual({adults: 2, children: 1})
  })

  it("Adult can leave when adults 2 and children 1", function() {
    reset()
    enter(2,1)
    expect(leave(1,0)).toBeTrue()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave when adults 1 and children 1", function() {
    reset()
    enter(1,1)
    expect(leave(1,0)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave when adults 2 and children 2", function() {
    reset()
    enter(2,2)
    expect(leave(1,0)).toBeFalse()
    expect(occupancy()).toEqual({adults: 2, children: 2})
  })

  it("More children cannot leave than are in the soft play center", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(leave(1,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("More adults cannot leave than are in the soft play center", function() {
    reset()
    expect(enter(1,1)).toBeTrue()
    expect(leave(2,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Child cannot enter on own", function() {
    reset()
    expect(enter(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Child cannot leave on own", function() {
    reset()
    enter(1,1)
    expect(leave(0,1)).toBeFalse()
    expect(occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave with multiple children", function() {
    reset()
    enter(2,2)
    expect(leave(1,2)).toBeFalse()
    expect(occupancy()).toEqual({adults: 2, children:2})
  })

  it("Multiple adults can leave with multiple children", function() {
    reset()
    enter(2,2)
    expect(leave(2,2)).toBeTrue()
    expect(occupancy()).toEqual({adults: 0, children:0})
  })

  it("2 adults and 2 children enter total equals 2 and 2, another 2 of each enter total equals 4 and 4", function() {
    reset()
    resetTotal()
    expect(enter(2,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 2, totalChildren: 2})
    expect(enter(2,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 4, totalChildren: 4})
  })

  it("4 adults and 2 children enter total equals 4 and 2, another 2 of each enter total equals 6 and 4", function() {
    reset()
    resetTotal()
    expect(enter(4,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 4, totalChildren: 2})
    expect(enter(2,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 6, totalChildren: 4})
  })

  it("2 adults and 2 children enter total equals 2 and 2, Single adult with 2 children cannot enter total doesn't change", function() {
    reset()
    resetTotal()
    expect(enter(2,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 2, totalChildren: 2})
    expect(enter(1,2)).toBeFalse()
    expect(total()).toEqual({totalAdults: 2, totalChildren: 2})
  })

  it("4 adults and 2 children enter total equals 4 and 2, another 2 of each enter total equals 6 and 4, another 10 adults and 8 children enter total equals 16 and 12", function() {
    reset()
    resetTotal()
    expect(enter(4,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 4, totalChildren: 2})
    expect(enter(2,2)).toBeTrue()
    expect(total()).toEqual({totalAdults: 6, totalChildren: 4})
    expect(enter(10,8)).toBeTrue()
    expect(total()).toEqual({totalAdults: 16, totalChildren: 12})
  })
})