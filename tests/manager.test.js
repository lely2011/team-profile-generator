const manager = require("../lib/manager");

test("Create an office number.", () => {
    const testOfficeNum = 2;
    const employeeSample = new manager("Sheldon", 2, "cooper@test.com", testOfficeNum);
    expect(employeeSample.officeNumber).toBe(testOfficeNum);
});

test("Test OfficeNumber to return office number.", () => {
    const testOfficeNum = 2;
    const employeeSample = new manager("Sheldon", 2, "cooper@test.com", testOfficeNum);
    expect(employeeSample.getOfficeNumber()).toBe(testOfficeNum);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeSample = new manager("Sheldon", 2, "cooper@test.com", 2);
    expect(employeeSample.getRole()).toBe(returnValue);
});